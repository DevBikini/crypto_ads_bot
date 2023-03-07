/*CMD
  command: /kind_report
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var buttong =
  "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n🔗 Shork Link,🤑 Task Earn,❇️ Advertise Channel\nInstagram,Twitter\n💰 Balance,🙌🏻 Referrals,⚙️ Settings\n📊 My ads"
var id = options.id
var promotion = options.promotion
if (message == "❌ Cancel") {
  Bot.sendKeyboard(buttong, "Your report has been canceled.")
  return
}
Bot.sendKeyboard(buttong, "Your report has been sent to the administration.")
var json = {
  report: { message: message, task_id: id, user: user.telegramid },
  administration: { command: "/admin_inspect " + id + "&" + promotion }
}
var admin = Bot.getProperty("admin_admin")
if (admin) {
  //Bot.inspect(json)
  var nvalid =
    '<a href="tg://user?id=' + user.telegramid + '">' + user.telegramid + "</a>"
  Api.sendMessage({
    chat_id: admin,
    text:
      "‼️New Report Ads number: <code>#" +
      json.report.task_id +
      "</code>\n\nUser: " +
      nvalid +
      "\nMessage: " +
      json.report.message,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "View Ads",
            callback_data: "/admin_inspect " + id
          }
        ],
        [
          {
            text: "Delete Ads",
            callback_data: "/delete " + id
          }
        ]
      ]
    }
  })
}

