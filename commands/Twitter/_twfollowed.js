/*CMD
  command: /twfollowed
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Twitter
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
if (request.data) {
  var message_id = request.message.message_id
}
var twitter = User.getProperty("twitter")
if (!twitter) {
  return Bot.sendMessage("Please set your social media /SocialMedia")
}
var admin = Bot.getProperty("admin_admin")
var cur = Bot.getProperty("admin_currency")
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var sec = User.getProperty("User-" + params)
var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
var fee = json.cpc * 0.6
if (sec || json.clicks > json.total || json.status == "Disabled 🚫") {
  //security ads
  Api.editMessageText({
    message_id: message_id,
    text: "Sorry, That Task Is No Longer Valid. 😟",
    parse_mode: "Markdown"
  })
  return
}
if (json.cpc < Getbalance(json).value()) {
  var u_balance = Libs.ResourcesLib.userRes("payout")
  u_balance.add(+fee)
  Api.editMessageText({
    message_id: message_id,
    text:
      "✅* Task Completed*!\nYou earned: " +
      fee +
      " " +
      cur +
      "\n\nIf you unfollow, you will loose what you earned!",
    parse_mode: "Markdown"
  })
  //
  var referrer = Libs.ReferralLib.getAttractedBy()
  if (referrer) {
    var tghave = referrer.telegramid
  } else {
    var tghave = ""
  }
  Api.sendMessage({
    chat_id: admin,
    text:
      "checking Twitter follower\nAds TW: " +
      json.link +
      "\nUser TW: " +
      twitter,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Accept",
            callback_data:
              "/followingTW accept " +
              user.telegramid +
              " " +
              params +
              " " +
              tghave
          },
          {
            text: "Reject",
            callback_data:
              "/followingTW reject " +
              user.telegramid +
              " " +
              params +
              " " +
              tghave
          }
        ]
      ]
    },
    parse_mode: "Markdown"
  })
  //referral
  var referrer = Libs.ReferralLib.getAttractedBy()
  if (referrer) {
    var referrerRes = Libs.ResourcesLib.anotherUserRes(
      "payout",
      referrer.telegramid
    )
    var amount = fee * 0.15 // it is 15%
    referrerRes.add(+amount)
  }
  User.setProperty("User-" + params + "", "done", "string")
  //owner remove balance
  Getbalance(json).add(-json.cpc)
  var status = Get_status(json)
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[params] = {
    ads: params,
    link: json.link,
    tw: json.tw,
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
  text: "Sorry, That Task Is No Longer Valid. 😟",
  parse_mode: "Markdown"
})
//function
function Getbalance(json) {
  if (!balance.value()) {
    return payout
  }
  if (balance.value() < json.cpc) {
    return payout
  }
  return balance
}
//status
function Get_status(json) {
  if (json.clicks + 2 > json.total) {
    return "Disabled 🚫"
  }
  if (json.cpc > Getbalance(json).value()) {
    return "⏸ *Paused*: budget reached or out of funds."
  }
  if (json.status == "Disabled 🚫") {
    return "Disabled 🚫"
  }
  return "Enabled ✅"
}

