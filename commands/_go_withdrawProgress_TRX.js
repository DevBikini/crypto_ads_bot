/*CMD
  command: /go_withdrawProgress_TRX
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
  currency: "TRX",
  amount: amount,
  address: message,
  user: user.id,
  success: "/notifyWithdraw"
})
