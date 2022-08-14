/*CMD
  command: /nokey
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  Bot.setProperty("notification_" + params, "", "string")
  return
}
Api.sendMessage({
  text: "Keyboard Removed",
  reply_markup: { hide_keyboard: true }
})
/*
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(+0.2)

var payout = Libs.ResourcesLib.userRes("payout")
//payout.set(0.05)
balance.set(0.1)*/
