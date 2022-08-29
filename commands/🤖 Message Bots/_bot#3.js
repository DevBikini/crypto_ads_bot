/*CMD
  command: /bot#3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bot_name = options.name
var bot_url = options.url
Bot.sendMessage("*Enter a description for your ad:*")
Bot.run({
  command: "/bot#4",
  options: { name: bot_name, url: bot_url, title: message }
})
var bot_name = options.name
var bot_url = options.url
Bot.sendMessage("*Enter a description for your ad:*")
Bot.run({
  command: "/bot#4",
  options: { name: bot_name, url: bot_url, title: message }
})
