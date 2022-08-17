/*CMD
  command: /joincheck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params | !options) {
  return
}
if (request.data) {
  var message_id = request.message.message_id
}
var cur = Bot.getProperty("admin_currency")
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var sec = User.getProperty("User-" + json.ads)
var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
if (!balance.value()) {
  var balko = payout.value()
  var green = payout.add(-json.cpc)
} else {
  if (balance.value() < json.cpc) {
    var balko = payout.value()
    var green = payout.add(-json.cpc)
  } else {
    var green = balance.add(-json.cpc)
    var balko = balance.value()
  }
}
if (sec | (json.clicks > json.total) | (json.status == "Disabled 🚫")) {
  //security ads
  Api.editMessageText({
    message_id: message_id,
    text: "Sorry, That Task Is No Longer Valid. 😟",
    parse_mode: "Markdown"
  })
  return
}
if (json.cpc < balko) {
  var checking = options.result.status
  if (
    (checking == "member") |
    (checking == "administrator") |
    (checking == "creator")
  ) {
    var u_balance = Libs.ResourcesLib.userRes("payout")
    u_balance.add(+json.cpc)
    Api.editMessageText({
      message_id: message_id,
      text:
        "✅* Task Completed*!\nYou earned: " +
        json.cpc +
        " " +
        cur +
        "\n\nIf you leave the channel, you will loose what you earned!",
      parse_mode: "Markdown"
    })
    Bot.run({
      command: "/chk_joinUser",
      run_after: 1 * 60 * 60,
      options: { ad: params, channel: json.name, user: user.telegramid }
    })
    //referral
    var referrer = Libs.ReferralLib.getAttractedBy()
    if (referrer) {
      var referrerRes = Libs.ResourcesLib.anotherUserRes(
        "payout",
        referrer.telegramid
      )
      var amount = json.cpc * 0.15 // it is 15%
      referrerRes.add(+amount)
    }
    User.setProperty("User-" + params + "", "done", "string")
    //owner remove balance
    green
    Bot.runCommand("/join")
    if (json.clicks + 2 > json.total) {
      var status = "Disabled 🚫"
    } else {
      if (json.cpc > balko) {
        var status = "⏸ *Paused*: budget reached or out of funds."
      } else {
        if (json.status == "Disabled 🚫") {
          var status = "Disabled 🚫"
        } else {
          var status = "Enabled ✅"
        }
      }
    }
    var add = Bot.getProperty("all_in_ads", { list: {} })
    add.list[params] = {
      ads: params,
      name: json.name,
      link: json.link,
      title: json.title,
      description: json.description,
      cpc: json.cpc,
      clicks: json.clicks + 1,
      budget: json.budget,
      total: json.total,
      status: status,
      owner: json.owner,
      promotion: json.promotion
    }
    Bot.setProperty("all_in_ads", add, "json")

    return
  }
  Api.editMessageText({
    message_id: message_id,
    text:
      "❌ *You have to join the channel first!\n\n🎉 Channel Promotion*\n\n🧾 *Task*: Join this [channel](" +
      json.link +
      ") to earn *" +
      cur +
      "*\n\n⏳ *Available Submissions*: " +
      json.total,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Go to Channel 🚀",
            url: json.link
          }
        ],
        [
          { text: "➡️ Skip", callback_data: "/skip /join " + params + "" },
          { text: "✅ Joined", callback_data: "/joins " + params }
        ]
      ]
    }
  })
} else {
  Api.editMessageText({
    message_id: message_id,
    text: "Sorry, That Task Is No Longer Valid. 😟",
    parse_mode: "Markdown"
  })
}

