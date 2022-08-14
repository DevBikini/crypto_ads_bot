/*CMD
  command: /bot#4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bot_name = options.name
let bot_url = options.url
let bot_title = options.title
let min_cpc = Bot.getProperty("admin_cpc_bot")
var cur = Bot.getProperty("admin_currency")
Bot.sendMessage(
  "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *" +
    min_cpc +
    " " +
    cur +
    "*\n\n➡️* Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/bot#5",
  options: {
    name: bot_name,
    url: bot_url,
    title: bot_title,
    description: message
  }
})
