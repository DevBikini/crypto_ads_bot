/*CMD
  command: #CryptoAdBonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var security = User.getProperty("CryptoAdBonus")
if (!security) {
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(+1)
  Bot.sendMessage("Successfully claimed *1 USD promocode*: #CryptoAdBonus")
  User.setProperty("CryptoAdBonus", { ok: "yes" }, "json")
  return
}

