/*CMD
  command: /followingIG
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Instagram
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var security = params.split(" ")[0]
var telegramID = params.split(" ")[1]
var ad = params.split(" ")[2]
var referrertelegramid = params.split(" ")[3]
var message_id = request.message.message_id
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[ad]
var cur = Bot.getProperty("admin_currency")
var balance = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.anotherUserRes("payout", telegramID)
if (security == "reject") {
  //referral
  var fee = json.cpc * 0.6
  if (referrertelegramid) {
    var referrerRes = Libs.ResourcesLib.anotherUserRes(
      "payout",
      referrertelegramid
    )
    var amount = fee * 0.15 // it is 15%
    referrerRes.add(-amount)
  }
  balance.add(-fee)
  Api.sendMessage({
    chat_id: telegramID,
    text:
      "❌ *Unfollowing!*\nYou lost: *" +
      json.cpc +
      " " +
      cur +
      "* because you unfollowed.",
    parse_mode: "Markdown"
  })
  //user remove balance and also her referral balance
  //owner add balance from user leave a channel
}
Api.editMessageText({
  message_id: message_id,
  text: "*User Task*: " + telegramID + " " + security,
  parse_mode: "Markdown"
})

