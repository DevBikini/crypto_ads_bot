/*CMD
  command: /bot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
if (request.data) {
  var message_id = request.message.message_id
}
var ads = Bot.getProperty("all_in_ads")
var data = ads.list[params]
var bot = data.name
var bot1 = data.link

Api.editMessageText({
  message_id: message_id,
  text:
    "🤖 *Bot Promotion*\nTo complete this promotion, start [" +
    bot +
    "](" +
    bot1 +
    ") and forward a message from the bot to this chat.",
  disable_web_page_preview: true,
  parse_mode: "Markdown"
})
Bot.run({ command: "/started", options: { data: params, id: message_id } })

