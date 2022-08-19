/*CMD
  command: /link#3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_visit")
Bot.sendMessage(
  "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *" +
    cpc +
    " " +
    cur +
    "*\n\n*➡️ Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/link#4",
  options: { url: options.url, title: options.title, description: message }
})
