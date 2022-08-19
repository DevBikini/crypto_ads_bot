/*CMD
  command: /delete
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Editing
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
Bot.sendMessage(
  "That is not a recognized command.\n\nUse the /help command to see all my commands."
)
  return
}
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Your ad has been deleted.",
  parse_mode: "Markdown"
})
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var balance = Libs.ResourcesLib.anotherUserRes("myads", json.owner)
balance.add(-1)
var add = Bot.getProperty("all_in_ads", { list: {} })
add.list[params] =
Bot.setProperty("all_in_ads", add, "json")
