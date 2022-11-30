/*CMD
  command: /notifyWithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var status = options.result.status
if (status) {
  Bot.sendMessage(
    "🤑* Your Withdrawal Request Submitted Successfully\n\nIt May Take Upto 1-5 minutes To Process Your Withdrawal Request*"
  )
  return
}
var amount = options.result.amount
if (amount) {
  var wallet = options.result.to
  var cur = options.result.currency
  var txid = options.result.hash
  var txidd = "https://tx.botdev.me/" + cur + "/" + txid
  Bot.sendMessage(
    "➖ *Withdrawal Received*: " + amount + " " + cur + "\n\n*TXN_ID*: " + txid
  )
  var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
  var history = User.getProperty("history")
  if (!history) {
    var newh =
      "Type: *Withdrawal 📤* \nAmount: *" +
      amount +
      " " +
      cur +
      "*\nAddress: " +
      wallet +
      "\nDate: " +
      time +
      "\nStatus: *Sent* ✅\nTransaction: [view here](" +
      txidd +
      ")"
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "Type: *Withdrawal 📤* \nAmount: *" +
      amount +
      " " +
      cur +
      "*\nAddress: " +
      wallet +
      "\nDate: " +
      time +
      "\nStatus: *Sent* ✅\nTransaction: [view here](" +
      txidd +
      ")"
    var toal = nwh + "\n\n" + history
    User.setProperty("history", toal, "string")
  }
  return
}
Bot.inspect(options)
