/*CMD
  command: /info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  var users = params
  var data = Bot.getProperty("user")
  var json = data.list[users]
  Bot.inspect(json)
  return
}
var users = user.telegramid
var data = Bot.getProperty("user")
var json = data.list[users]
Bot.inspect(json)

if (params) {
  var users = params
  var data = Bot.getProperty("user")
  var json = data.list[users]
  Bot.inspect(json)
  return
}
var users = user.telegramid
var data = Bot.getProperty("user")
var json = data.list[users]
Bot.inspect(json)

