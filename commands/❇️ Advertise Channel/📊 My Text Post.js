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
Api.sendMessage({ text: my_text, parse_mode: "markdown" })

