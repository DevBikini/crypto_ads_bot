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
var id = options.id
var promotion = options.promotion
if (message == "❌ Cancel") {
  Bot.sendKeyboard(
    "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,💡 More\n💰 Balance,🙌🏻 Referrals,⚙️ Settings\n📊 My ads",
    "Your report has been canceled."
  )
} else {
  Bot.sendKeyboard(
    "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,💡 More\n💰 Balance,🙌🏻 Referrals,⚙️ Settings\n📊 My ads",
    "Your report has been sent to the administration."
  )
  var json = {
    report: { message: message, task_id: id, user: user.telegramid },
    administration: { command: "/admin_inspect " + id + "&" + promotion }
  }
  var admin = Bot.getProperty("admin_admin")
  if (admin) {
    //Bot.inspect(json)
    var nvalid =
      '<a href="tg://user?id=' +
      user.telegramid +
      '">' +
      user.telegramid +
      "</a>"
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
              callback_data: "/admin_inspect " + id + "&" + promotion
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
}
