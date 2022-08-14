/*CMD
  command: /skip
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var data = params.split(" ")
var name = data[0]
var number_ads = data[1]
if (request.data) {
  var message_id = request.message.message_id
}
User.setProperty("User-" + number_ads, "skipped", "string")
Api.editMessageText({
  message_id: message_id,
  text: "Promotion skipped succesfully!",
  parse_mode: "Markdown"
})
Bot.runCommand(name)
