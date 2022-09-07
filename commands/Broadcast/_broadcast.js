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
var msg = "[Test broadcast](https://t.me/Crypto_Ad_GroupChat)!"
var no_broad = Bot.getProperty("broadcast#no")
if (no_broad) {
  var number1 = no_broad
} else {
  var number1 = 10
}
var number = 0
if (admin == user.telegramid) {
  for (var index in data.list) {
    var tgid = data.list[index].user.telegramid
    var number = number + 1
    if (number == parseFloat(number1) - 9) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 8) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 7) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 6) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 5) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 4) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 3) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 2) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == parseFloat(number1) - 1) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
    if (number == number1) {
      Bot.sendMessageToChatWithId(tgid, msg)
    }
  }
}
if (number1 < number) {
  Bot.setProperty("broadcast#no", parseFloat(number1) + 10, "string")
  Bot.sendMessage("Total : " + number1 + "/" + number)
  return
}
Bot.setProperty("broadcast#no", 10, "string")
Bot.sendMessage("Total : " + number1 + "/" + number)
