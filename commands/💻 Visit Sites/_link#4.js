/*CMD
  command: /link#4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_visit")
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
    command: "/link#4",
    options: {
      url: options.url,
      title: options.title,
      description: options.description
    }
  })
  return
}
Bot.sendMessage(
  "*How much do you want to spend on this campaign?*\n\nAvailable balance:* " +
    balko.toFixed(10) +
    " " +
    cur +
    "\n\n➡️ Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/link#5",
  options: {
    url: options.url,
    title: options.title,
    description: options.description,
    cpc: message
  }
})
