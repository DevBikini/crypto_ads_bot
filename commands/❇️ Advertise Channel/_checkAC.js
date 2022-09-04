/*CMD
  command: /checkAC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(content).result
var can_post = json.can_post_messages
var admin = json.status
var ch = params
var my_text = User.getProperty("my_text")
if (can_post == true && admin == "administrator") {
  Api.sendMessage({ chat_id: "@" + ch, text: my_text })
  Bot.sendMessage("*Successfully Broadcast* [Channel](t.me/" + ch + ")")
  return
}
Bot.sendMessage(
  "Please, report this task because the owner of this task has been no longer admininstration"
)

