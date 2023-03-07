/*CMD
  command: onWebhook
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
var ff = Bot.getProperty("user", { list: {} })
var json = ff.list[user.telegramid]
if (!json) {
  var result = JSON.parse(content)
  var ip = result.results.ip
  HTTP.get({
    url: "http://ip-api.com/json/" + ip,
    success: "/Webhook " + result.results.vpn
  })
  return
}
Bot.sendKeyboard(
  "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n🔗 Shork Link,🤑 Task Earn,❇️ Advertise Channel\nInstagram,Twitter\n💰 Balance,🙌🏻 Referrals,⚙️ Settings\n📊 My ads",
  "*Welcome to Crypto Ad Bot!* 🔥\n\nThis bot lets you earn Cryptocurrency by completing simple tasks.\n\nPress *🖥 Visit sites* to earn by clicking links\nPress *🤖 Message bots* to earn by talking to bots\nPress *📣 Join chats* to earn by joining chats\nPress *💡 More* for other tasks\n\nYou can also create your own ads with /newad."
)
