/*CMD
  command: /onVisitReward
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var any = params.split("_")[0]
var id = parseFloat(params.split("_")[1])
var cur = Bot.getProperty("admin_currency")
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[any]
var sec = User.getProperty("User-" + any)
var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
if (!balance.value()) {
  var balko = payout.value() + 0.0005
  var green = payout.add(-json.cpc)
} else {
  if (json.cpc > balance.value() + 0.0005) {
    var balko = payout.value() + 0.0005
    var green = payout.add(-json.cpc)
  } else {
    var green = balance.add(-json.cpc)
    var balko = balance.value() + 0.0005
  }
}
if (
  !ads.list[any] ||
  sec ||
  json.clicks > json.total ||
  json.cpc > balko ||
  json.status == "Disabled 🚫"
) {
  Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
  return
}
var u_balance = Libs.ResourcesLib.userRes("payout")
//user add balance
u_balance.add(+json.cpc)
Api.deleteMessage({
  message_id: id + 1
})
Bot.sendMessage("✅* Task Completed*!\nYou earned: " + json.cpc + " " + cur)
//referral
var referrer = Libs.ReferralLib.getAttractedBy()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "payout",
    referrer.telegramid
  )
  var amount = json.cpc * 0.15 // it is 15%
  //referral balance add
  referrerRes.add(+amount)
}
User.setProperty("User-" + any + "", "done", "string")
//owner balance remove
green
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
Bot.runCommand("/visit")

if (!params) {
  return
}
var any = params.split("_")[0]
var id = parseFloat(params.split("_")[1])
var cur = Bot.getProperty("admin_currency")
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[any]
var sec = User.getProperty("User-" + any)
var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
if (!balance.value()) {
  var balko = payout.value() + 0.0005
  var green = payout.add(-json.cpc)
} else {
  if (json.cpc > balance.value() + 0.0005) {
    var balko = payout.value() + 0.0005
    var green = payout.add(-json.cpc)
  } else {
    var green = balance.add(-json.cpc)
    var balko = balance.value() + 0.0005
  }
}
if (
  !ads.list[any] ||
  sec ||
  json.clicks > json.total ||
  json.cpc > balko ||
  json.status == "Disabled 🚫"
) {
  Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
  return
}
var u_balance = Libs.ResourcesLib.userRes("payout")
//user add balance
u_balance.add(+json.cpc)
Api.deleteMessage({
  message_id: id + 1
})
Bot.sendMessage("✅* Task Completed*!\nYou earned: " + json.cpc + " " + cur)
//referral
var referrer = Libs.ReferralLib.getAttractedBy()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "payout",
    referrer.telegramid
  )
  var amount = json.cpc * 0.15 // it is 15%
  //referral balance add
  referrerRes.add(+amount)
}
User.setProperty("User-" + any + "", "done", "string")
//owner balance remove
green
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
Bot.runCommand("/visit")

