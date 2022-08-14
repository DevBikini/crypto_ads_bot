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
    Bot.sendInlineKeyboard(
      [
        [{ title: "🚀 Go to Bot 🚀", url: json.link }],
        [
          { title: "➡️ Skip", command: "/skip /bots " + number_ads },
          { title: "🚫 Report", command: "/report " + number_ads + "&Bot 🤖" },
          { title: "✅ Joined", command: "/bot " + number_ads }
        ]
      ],
      json.title +
        "\n\n" +
        json.description +
        "\n\n------------------------------------------------\n⚠️_ You will be redirected to a third party telegram bot._",
      { parse_mode: "Markdown", disable_web_page_preview: true }
    )

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
    Bot.sendInlineKeyboard(
      [
        [
          {
            title: "🚀 Go to Channel 🚀",
            url: json.link
          }
        ],
        [
          { title: "➡️ Skip", command: "/skip /join " + number_ads },
          {
            title: "🚫 Report",
            command: "/report " + number_ads + "&Channel / Group 📣"
          },
          { title: "✅ Joined", command: "/joins " + number_ads }
        ]
      ],
      json.title +
        "\n\n" +
        json.description +
        "\n\n------------------------------------------------\n⚠️_You will be redirected to a third party telegram channel._",
      { disable_web_page_preview: true }
    )

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
    Bot.sendInlineKeyboard(
      [
        [
          {
            title: "➡️ Skip",
            command: "/skip /view " + number_ads
          },
          {
            title: "🚫 Report",
            command: "/report " + number_ads + "&Post views 📃"
          },
          {
            title: "✅ Wached",
            command: "/watch " + number_ads
          }
        ]
      ],
      "📄 *Post Promotion*\n\n🧾 *Task*: Read *this post* to earn *" +
        cur +
        "*\n\n⏳ *Available Submissions*: " +
        json.total
    )

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
        { title: "✏️ Edit", command: "/edit bot " + json.ads },
        { title: sts, command: cdm }
      ]
    ]
    var text =
      "*Campaign #" +
      json.ads +
      "* - Bot 🤖\n\n*Title*: " +
      json.title +
      "\n*Description*: " +
      json.description +
      "\n\n*Bot*: *@" +
      json.name +
      "\nURL*: *" +
      json.link +
      "\nStatus*: " +
      json.status +
      "\n\n*Daily budget*: " +
      json.budget +
      " " +
      cur +
      "\n*CPC*: " +
      json.cpc +
      " " +
      cur +
      "\n*Clicks*: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Bot.sendInlineKeyboard(button, text, { disable_web_page_preview: true })
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
        { title: "✏️ Edit", command: "/edit visit " + json.ads },
        { title: sts, command: cdm }
      ]
    ]
    var text1 =
      "*Campaign #" +
      json.ads +
      "* - Link URL 🔗\n\n*Title*: " +
      json.title +
      "\n*Description*: " +
      json.description +
      "\n\n*URL*: *" +
      json.link +
      "\nStatus*: " +
      json.status +
      "\n\n*Daily budget*: " +
      json.budget +
      " " +
      cur +
      "\n*CPC*: " +
      json.cpc +
      " " +
      cur +
      "\n*Clicks*: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Bot.sendInlineKeyboard(button1, text1, { disable_web_page_preview: true })
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
        { title: "✏️ Edit", command: "/edit join " + json.ads },
        { title: sts, command: cdm }
      ]
    ]
    var text2 =
      "*Campaign #" +
      json.ads +
      "* - Channel / Group 📣\n\n*Title*: " +
      json.title +
      "\n*Description*: " +
      json.description +
      "\n\n*Channel*: *" +
      json.name +
      "\nURL*: *" +
      json.link +
      "\nStatus*: " +
      json.status +
      "\n\n*Daily budget*: " +
      json.budget +
      " " +
      cur +
      "\n*CPC*: " +
      json.cpc +
      " " +
      cur +
      "\n*Clicks*: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Bot.sendInlineKeyboard(button2, text2, { disable_web_page_preview: true })
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
        { title: "✏️ Edit", command: "/edit view " + json.ads },
        { title: sts, command: cdm }
      ]
    ]
    var text3 =
      "*Campaign #" +
      json.ads +
      "* - Post views 📃\n\n*Channel*: *" +
      json.name +
      "\nURL*: *" +
      json.link +
      "\nStatus*: " +
      json.status +
      "\n\n*Daily budget*: " +
      json.budget +
      " " +
      cur +
      "\n*CPC*: " +
      json.cpc +
      " " +
      cur +
      "\n*Clicks*: " +
      json.total +
      " total / " +
      json.clicks +
      " today"
    Bot.sendInlineKeyboard(button3, text3, { disable_web_page_preview: true })
    return
  }
}

