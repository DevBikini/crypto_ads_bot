/*CMD
  command: 📊 My channel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var channel = Bot.getProperty("ad_channel")
if (!channel) {
  Bot.sendMessage("You don't have any channel yet.")
  return
}
var num = 0
for (var index in channel.list) {
  if (channel.list[index].owner == user.telegramid) {
    var have = true
    var num = num + 1
    Api.sendMessage({
      text:
        "<b>Campaign #" +
        num +
        "</b> - Advertise Channel ❇️\n\nChannel : " +
        channel.list[index].channel +
        "\nPrice per post: <b>" +
        channel.list[index].price +
        " USD</b>\nEarnings : <b>" +
        channel.list[index].earnings +
        " USD</b>",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🗑️ Delete",
              callback_data: "/delete del " + channel.list[index].channel
            }
          ]
        ]
      },
      parse_mode: "html"
    })
  }
}
if (!have) {
  Bot.sendMessage("You don't have any channel yet.")
}

