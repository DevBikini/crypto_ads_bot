/*CMD
  command: /onbrrSet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var number1 = params.split(" ")[0]
var ja = parseFloat(number1) + 10
Bot.setProperty("broadcast#no1", ja, "string")
var toog = Bot.getProperty("toog")
Bot.sendMessage("Total : " + number1 + "/" + toog)

var number1 = params.split(" ")[0]
var ja = parseFloat(number1) + 10
Bot.setProperty("broadcast#no1", ja, "string")
var toog = Bot.getProperty("toog")
Bot.sendMessage("Total : " + number1 + "/" + toog)

