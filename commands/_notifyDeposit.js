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

var json = JSON.parse(content)
var amount = json.result.amount
var cur = json.result.currency
//var transaction = json.result.transaction
var txid = json.result.blockchair
var address = json.result.address
var error = json.result.Error
if (error) {
  Bot.inspect(content)
  return
}
if (address) {
  User.setProperty("wallet-" + params, address, "string")
  //3
  Bot.sendMessage(
    "*This is your personal deposit address*. \n\n*" +
      params +
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
      txid +
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
      txid +
      ")"
    var toal = nwh + "\n\n" + history
    User.setProperty("history", toal, "string")
  }
}

