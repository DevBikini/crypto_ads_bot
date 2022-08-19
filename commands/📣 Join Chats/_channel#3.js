/*CMD
  command: /channel#3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cpc = Bot.getProperty("admin_cpc_join")
var cur = Bot.getProperty("admin_currency")
Bot.sendMessage(
  "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *" +
    cpc +
    " " +
    cur +
    "*\n\n➡️* Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/channel#4",
  options: {
    url: options.url,
    name: options.name,
    title: options.title,
    description: message
  }
})
