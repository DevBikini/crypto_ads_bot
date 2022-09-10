/*CMD
  command: /nokey
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
//remove user notification 
  Bot.setProperty("notification_" + params, "", "string")
  return
}
//remove keyboard 
Api.sendMessage({
  text: "Keyboard Removed",
  reply_markup: { hide_keyboard: true }
})

