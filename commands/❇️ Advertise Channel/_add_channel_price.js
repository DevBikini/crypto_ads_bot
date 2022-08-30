/*CMD
  command: /add_channel_price
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var channel = options.channel
var price = message
if (price < 0.001) {
  Bot.sendMessage("*Minimum 0.001 USD*")
  Bot.run({ command: "/add_channel_price", options: { channel: channel } })
  return
}
Api.sendMessage({
  text:
    "<b>Campaign</b> - Advertise Channel ❇️\n\nChannel : " +
    channel +
    "\nPrice : <b>" +
    price +
    " USD</b>\nPost limit : <b>24 hours</b>\nEarnings : <b>0 USD</b>",
  parse_mode: "html"
})
var chn = Bot.getProperty("ad_channel", { list: {} })
chn.list[channel] = {
  channel: channel,
  price: price,
  owner: user.telegramid,
  earnings: 0
}
Bot.setProperty("ad_channel", chn, "json")

