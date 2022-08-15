/*CMD
  command: /chooseq
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("admin_currency")
var min = 0.03
var balance = Libs.ResourcesLib.userRes("payout")
if (message == "LTC") {
  Bot.sendKeyboard(
    "🏠 Menu",
    "📤 *How many " +
      cur +
      " you want to withdraw?*\n\n " +
      "   *Minimum*: " +
      min +
      " " +
      cur +
      "\n    *Maximum*: " +
      balance.value().toFixed(10) +
      " " +
      cur +
      "\n    Maximum amount corresponds to your balance\n\n    ➡ *Send now the amount of  you want to withdraw*"
  )
  Bot.run({
    command: "/go_withdraw_LTC",
    options: { me: "ok" }
  })
  return
}
if (message == "DGB") {
  Bot.sendMessage("*Soon.. choose another method*")
  return
}
if (message == "BCH") {
  Bot.sendMessage("*Soon.. choose another method*")
  return
}

