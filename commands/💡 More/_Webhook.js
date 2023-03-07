/*CMD
  command: /Webhook
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var json = JSON.parse(content)
var myads = Libs.ResourcesLib.userRes("myads")
var payout = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
var add = Bot.getProperty("user", { list: {} })
for (var ind in add.list) {
  if (add.list[ind].user.Geotargeting.ip == json.query) {
    var ipp = "2nd"
  } else {
    if (params == "yes") {
      var ipp = "2nd"
    } else {
      var ipp = json.query
    }
  }
}
add.list[user.telegramid] = {
  user: {
    name: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    telegramid: user.telegramid,
    Geotargeting: {
      ip: ipp,
      countryCode: json.countryCode
    },
    info: {
      balance: balance.value() + payout.value(),
      payout_balance: payout.value(),
      ads: myads.value(),
      refcount: Libs.ReferralLib.getRefCount()
    }
  }
}
Bot.setProperty("user", add, "json")
//set user notification
var notify = Libs.ResourcesLib.anotherChatRes("notify", "global")
notify.add(+1)
User.setProperty("MynumberN", notify.value(), "integers")
var save_notify = Bot.getProperty("broadcast_notification", { list: {} })
save_notify[notify.value()] = { notification: "true", user: user.telegramid }
Bot.setProperty("broadcast_notification", save_notify, "json")
Bot.sendKeyboard(
  "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n🔗 Shork Link,🤑 Task Earn,❇️ Advertise Channel\nInstagram,Twitter\n💰 Balance,🙌🏻 Referrals,⚙️ Settings\n📊 My ads",
  "*Welcome to Crypto Ad Bot!* 🔥\n\nThis bot lets you earn Cryptocurrency by completing simple tasks.\n\nPress *🖥 Visit sites* to earn by clicking links\nPress *🤖 Message bots* to earn by talking to bots\nPress *📣 Join chats* to earn by joining chats\nPress *💡 More* for other tasks\n\nYou can also create your own ads with /newad."
)

