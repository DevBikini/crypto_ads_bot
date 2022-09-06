/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_admin")
var data = Bot.getProperty("user")
var number1 = params
var number = 0
if (admin == user.telegramid) {
  for (var index in data.list) {
    var tgid = data.list[index].user.telegramid
    var number = number + 1
    if (number == number1) {
      Broadcast(tgid)
    }
    if (number == number1 - 1) {
      Broadcast(tgid)
    }
    if (number == number1 - 2) {
      Broadcast(tgid)
    }
    if (number == number1 - 3) {
      Broadcast(tgid)
    }
    if (number == number1 - 4) {
      Broadcast(tgid)
    }
  }
}
Bot.sendMessage("Done! "+number)
//function
function Broadcast(tgid) {
  Bot.sendMessageToChatWithId(tgid, "Hello users!")
}
