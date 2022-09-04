/*CMD
  command: /go_withdraw_DGB
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var cur = Bot.getProperty("admin_currency")
var amount = message
var min = 0.06
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
var ltc = 100 * parseFloat(amount)
Bot.sendMessage(
  "💰 Amount to receive: *" +
    ltc.toFixed(10) +
    " DGB*\n\n➡ Send now your *DGB address to withdraw*:"
)
Bot.run({
  command: "/go_withdrawProgress_DGB",
  options: { amount: ltc.toFixed(10), amo: amount }
})
