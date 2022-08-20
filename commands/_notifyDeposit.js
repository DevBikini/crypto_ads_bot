/*CMD
  command: /notifyDeposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amount = options.result.amount
var cur = options.result.currency
var txid = options.result.hash
var txidd = "https://tx.botdev.me/" + cur + "/" + txid
var address = options.result.address
if (address) {
  User.setProperty("wallets-" + cur, address, "string")
  Bot.sendInlineKeyboard(
    [[{ title: "🚀 Buy " + cur + " 🚀", url: "t.me/Dev_Bikini" }]],
    "*This is your personal deposit address*. \n\n*" +
      cur +
      " address*:\n`" +
      address +
      "`\n\n🕝 Transaction will be credited after 10 network confirmations."
  )
  return
}
if (amount) {
  var usd = CurrencyQuote.convert({
    amount: parseFloat(amount),
    from: cur,
    to: "USD"
  })
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(+usd)
  var orig = Bot.getProperty("admin_currency")
  Bot.sendMessage(
    "➕ *Deposit Received*: " + usd + " " + orig + "\n\n*TXN_ID*: " + txid
  )
  var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
  var history = User.getProperty("history")
  if (!history) {
    var newh =
      "Type: *Deposit 📥* \nAmount: *" +
      amount +
      " " +
      cur +
      "*\nDate: " +
      time +
      "\nStatus: *Sent* ✅\nTransaction: [view here](" +
      txidd +
      ")"
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "Type: *Deposit 📥* \nAmount: *" +
      amount +
      " " +
      cur +
      "*\nDate: " +
      time +
      "\nStatus: *Sent* ✅\nTransaction: [view here](" +
      txidd +
      ")"
    var toal = nwh + "\n\n" + history
    User.setProperty("history", toal, "string")
  }
}
