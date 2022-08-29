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
var fee = json.cpc * 0.6
var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
var task =
  !ads.list[any] ||
  sec ||
  json.clicks > json.total ||
  json.status == "Disabled 🚫"
if (task) {
  Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
  return
}
if (json.cpc < Getbalance().value()) {
  var u_balance = Libs.ResourcesLib.userRes("payout")
  //user add balance
  u_balance.add(+fee)
  Api.deleteMessage({
    message_id: id + 1
  })
  Bot.sendMessage("✅* Task Completed*!\nYou earned: " + fee + " " + cur)

  //referral
  var referrer = Libs.ReferralLib.getAttractedBy()
  if (referrer) {
    var referrerRes = Libs.ResourcesLib.anotherUserRes(
      "payout",
      referrer.telegramid
    )
    var amount = fee * 0.15 // it is 15%
    //referral balance add
    referrerRes.add(+amount)
  }
  User.setProperty("User-" + any + "", "done", "string")
  //owner balance remove
  Getbalance().add(-json.cpc)
  var status = GetStatus()
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
//function
//status
function GetStatus() {
  if (json.clicks + 2 > json.total) {
    return "Disabled 🚫"
  }
  if (json.cpc > Getbalance().value()) {
    return "⏸ *Paused*: budget reached or out of funds."
  }
  if (json.status == "Disabled 🚫") {
    return "Disabled 🚫"
  }
  return "Enabled ✅"
}
//balance
function Getbalance() {
  if (!balance.value()) {
    return payout
  }
  if (balance.value() < json.cpc) {
    return payout
  }
  return balance
}

