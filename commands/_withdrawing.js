/*CMD
  command: /withdrawing
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var status = options.result.status
if (status == "left") {
  Bot.sendMessage(
    "⚠ You need to *join the channel* to withdraw.\n*@Crypto_Ad_GroupChat\n@Crypto_Ad_Channel*"
  )
  return
}
var cur = Bot.getProperty("admin_currency")
var min = 0.005
var balance = Libs.ResourcesLib.userRes("payout")
if (balance.value() < min) {
  Bot.sendMessage(
    "❌ You have to own at least " +
      min +
      " " +
      cur +
      " in your available *balance* for payout!"
  )
  return
}
Bot.sendKeyboard("LTC,DOGE,BCH\n🏠 Menu", "*Choose Payment Method*.")
Bot.runCommand("/chooseq")