/*CMD
  command: /go_withdrawProgress_BTT
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

var balance = Libs.ResourcesLib.userRes("payout")
var amount = options.amount
balance.add(-options.amo)
Bot.run({
  command: "/GoProgress",
  run_after: 1,
  options: { amount: amount, address: message, currency: "BTT" }
})

