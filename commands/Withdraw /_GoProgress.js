/*CMD
  command: /GoProgress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CryptoAdGateWayBot.Withdraw({
  currency: options.currency,
  amount: options.amount,
  address: options.address,
  user: user.id,
  success: "/notifyWithdraw"
})

