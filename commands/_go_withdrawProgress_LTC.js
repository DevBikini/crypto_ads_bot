/*CMD
  command: /go_withdrawProgress_LTC
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
var balance = Libs.ResourcesLib.userRes("payout")
var amount = options.amount
balance.add(-options.amo)
Libs.CryptoAdGateWayBot.Withdraw({
  currency: "LTC",
  amount: amount,
  address: message,
  user: user.id,
  success: "/notifyWithdraw"
})
