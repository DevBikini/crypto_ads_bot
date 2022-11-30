/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CryptoAdGateWayBot.setup()
Bot.setProperty("broadcast#no1", "", "string")
var payout = Libs.ResourcesLib.userRes("payout")
payout.add(10)
