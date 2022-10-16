/*CMD
  command: ❇️ Advertise Channel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: ↩️ back
CMD*/

var channel = Bot.getProperty("ad_channel", { list: {} })
if (!channel) {
  Bot.sendKeyboard(
    "❇️ Advertise Channel\n➕ Add Channel,➕ Add Text Post\n📊 My channel,📊 My Text Post\n🏠 Menu",
    "🔔 *Advertise your ad in a channel*\n\n*Not found*!"
  )
  return
}
var number = 0
var channel_list = ""
for (var index in channel.list) {
var number = number +1
  var channel_list =
    channel_list +
    "• Channel : " +
    channel.list[index].channel +
    "\n• Price : <b>" +
    channel.list[index].price +
    " USD</b>\n• Post limit : <b>24 hours</b>\n• Post now : /post_" +
    channel.list[index].channel +
    "\n• Report : /report_" +
    channel.list[index].channel +
    "\n\n"
  var all = ""
  for (var ind = 0; ind < 10; ind++) {
    var add = channel_list.split("\n\n")[ind]
    if (add) {
      var all = all + add + "\n\n"
    }
  }
}
if (number < 11) {
  var button = []
} else {
  var button = [[{ text: "Next", callback_data: "/nextt 11 20" }]]
}
Bot.sendKeyboard(
  "❇️ Advertise Channel\n➕ Add Channel,➕ Add Text Post\n📊 My channel,📊 My Text Post\n🏠 Menu",
  "*🔔 Advertise your ad in a channel*"
)
Api.sendMessage({
  text: "• List of channel\n\n" + [all],
  parse_mode: "html",
  reply_markup: { inline_keyboard: button }
})
