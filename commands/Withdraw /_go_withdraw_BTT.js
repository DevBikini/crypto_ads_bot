/*CMD
  command: /go_withdraw_BTT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!options) {
  return
}
var cur = Bot.getProperty("admin_currency")
var amount = message
var min = 0.33
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
var ltc = 4420000 * parseFloat(amount)
Bot.sendMessage(
  "💰 Amount to receive: *" +
    ltc.toFixed(10) +
    " BTT*\n\n➡ Send now your *BTT address to withdraw*:"
)
Bot.run({
  command: "/go_withdrawProgress_BTT",
  options: { amount: ltc.toFixed(10), amo: amount }
})
