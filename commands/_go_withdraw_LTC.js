/*CMD
  command: /go_withdraw_LTC
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var cur = Bot.getProperty("admin_currency")
var amount = message
var min = 0.005
var balance = Libs.ResourcesLib.userRes("payout")
if (amount < min) {
  Bot.sendMessage("_❌ Minimum withdraw " + min + "_")
  return
}
if (amount > balance.value()) {
  Bot.sendMessage(
    "_❌ Maximum withdraw " + balance.value().toFixed(6) + " " + cur + "_"
  )
  return
}
var ltc = CurrencyQuote.convert({
  amount: parseFloat(amount),
  from: "USD",
  to: "LTC"
})
Bot.sendMessage(
  "💰 Amount to receive: *" +
    ltc.toFixed(10) +
    " LTC*\n\n➡ Send now your *LTC address to withdraw*:"
)
Bot.run({
  command: "/go_withdrawProgress_LTC",
  options: { amount: ltc.toFixed(10), amo: amount }
})

