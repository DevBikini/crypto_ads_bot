/*CMD
  command: /go_withdrawProgress_DGB
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
var balance = Libs.ResourcesLib.userRes("payout")
var amount = options.amount
balance.add(-options.amo)
Bot.run({
  command: "/GoProgress",
  run_after: 1,
  options: { amount: amount, address: message, currency: "DGB" }
})
