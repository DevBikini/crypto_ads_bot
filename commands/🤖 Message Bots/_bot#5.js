/*CMD
  command: /bot#5
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
let bot_description = options.description
var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_bot")
if (!balance.value()) {
  var balko = payout.value()
} else {
  if (cpc > balance.value()) {
    var balko = payout.value()
  } else {
    var balko = balance.value()
  }
}
if (message.includes("-") | !isNumeric(message) | (message < cpc)) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + cpc + " " + cur
  )
  Bot.run({
    command: "/bot#5",
    options: {
      name: bot_name,
      url: bot_url,
      title: bot_title,
      description: bot_description
    }
  })
  return
}
Bot.sendMessage(
  "*How much do you want to spend on this campaign?*\n\nAvailable balance: *" +
    balko.toFixed(10) +
    " " +
    cur +
    "\n\n➡️ Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/bot#6",
  options: {
    name: bot_name,
    url: bot_url,
    title: bot_title,
    description: bot_description,
    cpc: message
  }
})

