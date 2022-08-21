/*CMD
  command: /watched
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👁 Watch Ads
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  Bot.sendMessage(
    "That is not a recognized command.\n\nUse the /help command to see all my commands."
  )
  return
}
var any = options.ad
var cur = Bot.getProperty("admin_currency")
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[any]
var sec = User.getProperty("User-" + any)
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
if (
  !ads.list[any] ||
  sec ||
  json.clicks > json.total ||
  json.status == "Disabled 🚫"
) {
  Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
  return
}
if (json.cpc < balko) {
  var u_balance = Libs.ResourcesLib.userRes("payout")
  u_balance.add(+json.cpc)
  Bot.sendMessage("✅* Task Completed*!\nYou earned: " + json.cpc + " " + cur)
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
  User.setProperty("User-" + any, "done", "string")
  //owner remove balance
  green
  Bot.runCommand("/view")
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
  add.list[any] = {
    ads: any,
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
} else {
  Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
}
