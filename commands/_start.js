/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🏠 menu, /menu
CMD*/

if (chat.chat_type != "private") {
  return
}
function doAtractedByUser(refUser) {
  var dede = Libs.ResourcesLib.anotherUserRes("dede", refUser.telegramid)
  dede.add(+1)
}
var trackOptions = {
  onAtractedByUser: doAtractedByUser
}
Libs.ReferralLib.currentUser.track(trackOptions)
var data_user = Bot.getProperty("user", { list: {} })
var security = data_user.list[user.telegramid]
if (!security) {
  var url = Libs.Webhooks.getUrlFor({
    command: "onWebhook",
    user_id: user.id
  })
  var webPage =
    "https://api.jobians.top/captcha/verify?webhookUrl=" +
    encodeURIComponent(url) +
    "&back=https://t.me/" +
    bot.name
  Bot.sendInlineKeyboard(
    [[{ title: "✅ Verify", url: webPage }]],
    "⚠️ *You have to complete the verification process to use this section*!\n\nPress ✅* Verify* button to complete the verification process",
    { disable_web_page_preview: true }
  )
  return
}
Bot.sendKeyboard(
  "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,💡 More\n💰 Balance,🙌🏻 Referrals,⚙️ Settings\n📊 My ads",
  "*Welcome to Crypto Ad Bot!* 🔥\n\nThis bot lets you earn Cryptocurrency by completing simple tasks.\n\nPress *🖥 Visit sites* to earn by clicking links\nPress *🤖 Message bots* to earn by talking to bots\nPress *📣 Join chats* to earn by joining chats\nPress *💡 More* for other tasks\n\nYou can also create your own ads with /newad."
)
User.setProperty("forward", "", "string")
