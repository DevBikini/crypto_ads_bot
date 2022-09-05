/*CMD
  command: /checkAC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(content).result
var can_post = json.can_post_messages
var admin = json.status
var ch = params
var data = Bot.getProperty("ad_channel", { list: {} })
var gs = "@" + ch
var owner = data.list[gs].owner
var payout = Libs.ResourcesLib.anotherUserRes("payout", owner)
if (Getbalance(data).value() < data.list[gs].price) {
  Bot.sendMessage("You dont have balance to pay the amount")
  return
}
var payouts = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
var new_price = data.list[gs].price * 0.95
payout.add(+new_price)
var price = data.list[gs].price + new_price
GetBalance(data).add(-data.list[gs].price)
var my_text = User.getProperty("my_text")
if (can_post == true && admin == "administrator") {
  Api.sendMessage({ chat_id: "@" + ch, text: my_text })
  Bot.sendMessage("*Successfully Broadcast* [Channel](t.me/" + ch + ")")
  return
}
Bot.sendMessage(
  "Please, report this task because the owner of this task has been no longer admininstration"
)
//function
function Getbalance(data) {
  if (!balance.value()) {
    return payouts
  }
  if (balance.value() < data.list[gs].price) {
    return payouts
  }
  return balance
}
//set
data.list[gs] = {
  channel: gs,
  price: data.list[gs].price,
  owner: owner,
  earnings: price
}
Bot.setProperty("ad_channel", data, "json")

