/*CMD
  command: /notifyWithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var data = JSON.parse(content)
var error = data.result.Error
if (error) {
  Bot.inspect(content)
  return
}
var status = data.result.status
if (status) {
  Bot.sendMessage(
    "🤑* Your Withdrawal Request Submitted Successfully\n\nIt May Take Upto 24-48 Hours To Process Your Withdrawal Request*"
  )
  return
}
var amount = data.result.amount
if (amount) {
  var wallet = data.result.to
  var cur = data.result.currency
  //var transaction = data.result.transaction
  var txid = data.result.blockchair
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
      txid +
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
      txid +
      ")"
    var toal = nwh + "\n\n" + history
    User.setProperty("history", toal, "string")
  }
}
