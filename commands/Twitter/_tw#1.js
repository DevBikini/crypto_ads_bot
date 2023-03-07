/*CMD
  command: /tw#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Twitter
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_instagram")
var include = message.includes("-") | !isNumeric(message) | (message < cpc)
if (include) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + cpc + " " + cur
  )
  Bot.run({
    command: "/tw#1",
    options: {
      url: options.url,
      tw: options.tw
    }
  })
  return
}
Bot.sendMessage(
  "*How much do you want to spend on this campaign?*\n\nAvailable balance:* " +
    Getbalance() +
    " " +
    cur +
    "\n\n➡️ Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/tw#2",
  options: {
    url: options.url,
    tw: options.tw,
    cpc: message
  }
})
//function
function Getbalance() {
  if (!balance.value()) {
    return payout.value().toFixed(10)
  }
  if (cpc > balance.value()) {
    return payout.value().toFixed(10)
  }
  return balance.value().toFixed(10)
}

