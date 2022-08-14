/*CMD
  command: /setLinks
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var data = params.split(" ")
var id = data[0]
var url = data[1]
Bot.setProperty("link_true" + id, url, "string")
Bot.sendMessage("done!")
Api.sendMessage({
  chat_id: id,
  text: "*Generate done!*",
  parse_mode: "Markdown"
})
