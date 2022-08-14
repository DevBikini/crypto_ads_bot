/*CMD
  command: /On_chk_joinUser
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var cur = Bot.getProperty("admin_currency")
var status = options.result.status
if (
  (status == "member") |
  (status == "administrator") |
  (status == "creator")
) {
  return
}
var balance = Libs.ResourcesLib.userRes("payout")
//referral
var referrer = Libs.ReferralLib.getAttractedBy()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "payout",
    referrer.telegramid
  )
  var amount = json.cpc * 0.1 // it is 10%
  referrerRes.add(-amount)
}
balance.add(-json.cpc)
Bot.sendMessage(
  "❌ *Left Chat!*\nYou lost: *" +
    json.cpc +
    " " +
    cur +
    "* because you left this chat."
)
//user remove balance and also her referral balance
//owner add balance from user leave a channel
