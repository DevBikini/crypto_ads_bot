/*CMD
  command: /099
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var notify = Libs.ResourcesLib.anotherChatRes("notify", "global")
var nbb = User.getProperty("MynumberN")
var no = Libs.ResourcesLib.anotherChatRes("BGB", "global")
//no.set(0)

Bot.sendMessage(
  "Registered Total: " +
    notify.value() +
    "\nMy number: " +
    nbb +
    "\nBGB done: " +
    no.value()
)
