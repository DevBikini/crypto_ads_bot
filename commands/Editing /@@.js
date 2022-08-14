/*CMD
  command: @@
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Editing 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//go task earn
function GettingAd(number_ads, promotion) {
  var ads = Bot.getProperty("all_in_ads")
  var json = ads.list[number_ads]
  if (promotion == "Bot 🤖") {
    Api.sendMessage({
      text:
        json.title +
        "\n\n" +
        json.description +
        "\n\n------------------------------------------------\n⚠️<i> You will be redirected to a third party telegram bot.</i>",
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🚀 Go to Bot 🚀", url: json.link }],
          [
            { text: "➡️ Skip", callback_data: "/skip /bots " + number_ads },
            {
              text: "🚫 Report",
              callback_data: "/report " + number_ads + "&Bot 🤖"
            },
            { text: "✅ Joined", callback_data: "/bot " + number_ads }
          ]
        ]
      }
    })
    return
  }
  if (promotion == "Link URL 🔗") {
    var url = Libs.Webhooks.getUrlFor({
      command: "/onVisitReward " + number_ads + "_" + request.message_id,
      user_id: user.id,
      redirect_to: json.link
    })
    HTTP.get({
      url: "http://tinyurl.com/api-create.php?url=" + url,
      success: "/webc " + number_ads
    })
    //7
    return
  }
  if (promotion == "Channel / Group 📣") {
    Api.sendMessage({
      text:
        json.title +
        "\n\n" +
        json.description +
        "\n\n------------------------------------------------\n⚠️<i>You will be redirected to a third party telegram channel.</i>",
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🚀 Go to Channel 🚀",
              url: json.link
            }
          ],
          [
            { text: "➡️ Skip", callback_data: "/skip /join " + number_ads },
            {
              text: "🚫 Report",
              callback_data: "/report " + number_ads + "&Channel / Group 📣"
            },
            { text: "✅ Joined", callback_data: "/joins " + number_ads }
          ]
        ]
      }
    })
    return
  }
  if (promotion == "Post views 📃") {
    var cur = Bot.getProperty("admin_currency")
    function canRun() {
      var last_run_at = User.getProperty("last_run_at" + number_ads)
      if (!last_run_at) {
        return true
      }

      var minutes = (Date.now() - last_run_at) / 100 / 10

      var minutes_in_day = 3 * 3
      var next = minutes_in_day - minutes
      var wait_hours = Math.floor(next / 3)
      next -= wait_hours * 3
      var wait_minutes = Math.floor(next)
      var seconds = Math.floor((next - wait_minutes) * 3)
      if (minutes < minutes_in_day) {
        return
      }
      return true
    }

    if (!canRun()) {
      return
    }
    User.setProperty("last_run_at" + number_ads, Date.now(), "integer")
    Api.sendMessage({
      text:
        "📄 <b>Post Promotion\n\n🧾 Task</b>: Read <b>this post</b> to earn <b>" +
        cur +
        "\n\n⏳ Available Submissions</b>: " +
        json.total,
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "➡️ Skip",
              callback_data: "/skip /view " + number_ads
            },
            {
              text: "🚫 Report",
              callback_data: "/report " + number_ads + "&Post views 📃"
            },
            {
              text: "✅ Wached",
              callback_data: "/watch " + number_ads
            }
          ]
        ]
      }
    })
    Api.forwardMessage({
      from_chat_id: json.owner,
      message_id: json.title
    })
    return
  }
}
//-------------------------------
//edit ads
function EditingAd(number_ads, promotion) {
  var ads = Bot.getProperty("all_in_ads")
  var json = ads.list[number_ads]
  var cur = Bot.getProperty("admin_currency")
  if (promotion == "Bot 🤖") {
    if (json.status == "Enabled ✅") {
      var sts = "Disable 🚫"
      var cdm = "/Disabled bot " + json.ads
    } else {
      var sts = "Enable ✅"
      var cdm = "/Enabled bot " + json.ads
    }
    var button = [
      [
        { text: "✏️ Edit", callback_data: "/edit bot " + json.ads },
        { text: sts, callback_data: cdm }
      ]
    ]
    var text =
      "<b>Campaign #" +
      json.ads +
      "</b> - Bot 🤖\n\n<b>Title</b>: " +
      json.title +
      "\n<b>Description</b>: " +
      json.description +
      "\n\n<b>Bot</b>: @" +
      json.name +
      "\n<b>URL</b>: " +
      json.link +
      "\n<b>Status</b>: " +
      json.status +
      "\n\n<b>Daily budget</b>: " +
      json.budget +
      " " +
      cur +
      "\n<b>CPC</b>: " +
      json.cpc +
      " " +
      cur +
      "\n<b>Clicks</b>: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Api.sendMessage({
      text: text,
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: button
      }
    })
    return
  }
  if (promotion == "Link URL 🔗") {
    if (json.status == "Enabled ✅") {
      var sts = "Disable 🚫"
      var cdm = "/Disabled visit " + json.ads
    } else {
      var sts = "Enable ✅"
      var cdm = "/Enabled visit " + json.ads
    }
    var button1 = [
      [
        { text: "✏️ Edit", callback_data: "/edit visit " + json.ads },
        { text: sts, callback_data: cdm }
      ]
    ]
    var text1 =
      "<b>Campaign #" +
      json.ads +
      "</b> - Link URL 🔗\n\n<b>Title</b>: " +
      json.title +
      "\n<b>Description</b>: " +
      json.description +
      "\n\n<b>URL</b>: " +
      json.link +
      "\n<b>Status</b>: " +
      json.status +
      "\n\n<b>Daily budget</b>: " +
      json.budget +
      " " +
      cur +
      "\n<b>CPC</b>: " +
      json.cpc +
      " " +
      cur +
      "\n<b>Clicks</b>: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Api.sendMessage({
      text: text1,
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: button1
      }
    })
    return
  }
  if (promotion == "Channel / Group 📣") {
    if (json.status == "Enabled ✅") {
      var sts = "Disable 🚫"
      var cdm = "/Disabled join " + json.ads
    } else {
      var sts = "Enable ✅"
      var cdm = "/Enabled join " + json.ads
    }
    var button2 = [
      [
        { text: "✏️ Edit", callback_data: "/edit join " + json.ads },
        { text: sts, callback_data: cdm }
      ]
    ]
    var text2 =
      "<b>Campaign #" +
      json.ads +
      "</b> - Channel / Group 📣\n\n<b>Title</b>: " +
      json.title +
      "\n<b>Description</b>: " +
      json.description +
      "\n\n<b>Channel</b>: " +
      json.name +
      "\n<b>URL</b>: " +
      json.link +
      "\n<b>Status</b>: " +
      json.status +
      "\n\n<b>Daily budget</b>: " +
      json.budget +
      " " +
      cur +
      "\n<b>CPC</b>: " +
      json.cpc +
      " " +
      cur +
      "\n<b>Clicks</b>: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Api.sendMessage({
      text: text2,
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: button2
      }
    })
    return
  }
  if (promotion == "Post views 📃") {
    if (json.status == "Enabled ✅") {
      var sts = "Disable 🚫"
      var cdm = "/Disabled view " + json.ads
    } else {
      var sts = "Enable ✅"
      var cdm = "/Enabled view " + json.ads
    }
    var button3 = [
      [
        { text: "✏️ Edit", callback_data: "/edit view " + json.ads },
        { text: sts, callback_data: cdm }
      ]
    ]
    var text3 =
      "<b>Campaign #" +
      json.ads +
      "</b> - Post views 📃\n\n<b>Channel</b>: " +
      json.name +
      "\n<b>URL</b>: " +
      json.link +
      "\n<b>Status</b>: " +
      json.status +
      "\n\n<b>Daily budget</b>: " +
      json.budget +
      " " +
      cur +
      "\n<b>CPC</b>: " +
      json.cpc +
      " " +
      cur +
      "\n<b>Clicks</b>: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Api.sendMessage({
      text: text3,
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: button3
      }
    })
    return
  }
}

