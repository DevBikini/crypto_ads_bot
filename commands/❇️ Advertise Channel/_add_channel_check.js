/*CMD
  command: /add_channel_check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (options) {
  var status = options.result.status
  if (status == "creator") {
    Bot.sendMessage(
      "➡️ *Enter the Price of your Channel per Post (Minimum 0.001 USD)*"
    )
    Bot.run({ command: "/add_channel_price", options: { channel: params } })
  } else {
    Bot.sendMessage("You must the creator of the channel!")
  }
  return
}
var prms = params.split(" ")
Api.getChatMember({
  chat_id: prms[1],
  user_id: prms[2],
  on_result: "/add_channel_check " + prms[1]
})
