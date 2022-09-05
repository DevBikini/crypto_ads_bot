/*CMD
  command: 📊 My Text Post
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var my_text = User.getProperty("my_text")
if (!my_text) {
  Bot.sendMessage("❌ Set Text Post")
}
HTTP.get({
  url:
    "https://api.telegram.org/bot" +
    bot.token +
    "/copyMessage?chat_id=" +
    my_text.chat_id +
    "&from_chat_id=" +
    my_text.from_chat_id +
    "&message_id=" +
    my_text.message_id
})

