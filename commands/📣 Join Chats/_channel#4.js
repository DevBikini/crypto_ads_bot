/*CMD
  command: /channel#4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_join")
var include = message.includes("-") | (message < cpc) | !isNumeric(message)
if (include) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + cpc + " " + cur
  )
  Bot.run({
    command: "/channel#4",
    options: {
      url: options.url,
      name: options.name,
      title: options.title,
      description: options.description
    }
  })
  return
}
Bot.sendMessage(
  "*How much do you want to spend on this campaign?*\n\nAvailable balance: *" +
    Getbalance().toFixed(10) +
    " " +
    cur +
    "\n\n➡️ Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/channel#5",
  options: {
    url: options.url,
    name: options.name,
    title: options.title,
    description: options.description,
    cpc: message
  }
})
//function
function Getbalance() {
  if (!balance.value()) {
    return payout.value()
  }
  if (cpc > balance.value()) {
    return payout.value()
  }
  return balance.value()
}

