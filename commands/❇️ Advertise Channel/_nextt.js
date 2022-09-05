/*CMD
  command: /nextt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mps = params.split(" ")
var number1 = mps[0]
var number2 = mps[1]
var add_number = number1 + 0
var channel = Bot.getProperty("ad_channel", { list: {} })
var channel_list = ""
for (var index in channel.list) {
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
  for (var ind = number1; ind < number2; ind++) {
    var add = channel_list.split("\n\n")[ind]
    if (add) {
      var all = all + add + "\n\n"
    }
  }
}
if (channel_list.split("\n\n")[number2]) {
  var button = [[{ text: "Next", callback_data: "/nextt " + add_number + " " + number2 }]]
} else {
  var button = [[{ text: "Back", callback_data: "/nextt 1 10" }]]
}
Api.sendMessage({
  text: "• List of channel\n\n" + [all],
  parse_mode: "html",
  reply_markup: { inline_keyboard: button }
})

