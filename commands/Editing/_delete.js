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
  return
}
var name = params.split(" ")[0]
var chn = params.split(" ")[1]
if (name == "del") {
  var channel = Bot.getProperty("ad_channel", { list: {} })
  channel.list[chn] = Bot.setProperty("ad_channel", channel, "json")
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "Your channel has been deleted.",
    parse_mode: "Markdown"
  })
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
add.list[params] = Bot.setProperty("all_in_ads", add, "json")

