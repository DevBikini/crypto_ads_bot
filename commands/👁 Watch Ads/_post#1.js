/*CMD
  command: /post#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👁 Watch Ads

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_view")
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
  command: "/post#2",
  options: {
    url: options.link,
    name: options.name,
    title: options.real_id,
    description: options.real_id,
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

