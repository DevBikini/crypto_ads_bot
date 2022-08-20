/*CMD
  command: /broadc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var number = 1
var msg =
  "✅ *New task available*\n\n❓ We found " +
  number +
  " *new promotions* available for you today!\n\nUse /notification to disable this notification"
Bot.sendMessage(msg)

