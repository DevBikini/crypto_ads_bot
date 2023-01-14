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
var my_text = User.getProperty("my_text")
var gs = "@" + ch
var owner = data.list[gs].owner
var payout = Libs.ResourcesLib.anotherUserRes("payout", owner)
var payouts = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
if (Getbalance(data).value() < data.list[gs].price) {
  Bot.sendMessage("You dont have balance to pay the amount")
  return
}
var new_price = parseFloat(data.list[gs].price) * 0.9
payout.add(+new_price)
var price = parseFloat(data.list[gs].earnings) + new_price
Getbalance(data).add(-parseFloat(data.list[gs].price))
if (can_post == true && admin == "administrator") {
  //set
  data.list[gs] = {
    channel: gs,
    price: parseFloat(data.list[gs].price),
    owner: owner,
    earnings: price
  }
  Bot.setProperty("ad_channel", data, "json")
  HTTP.get({
    url:
      "https://api.telegram.org/bot" +
      bot.token +
      "/copyMessage?chat_id=" +
      gs +
      "&from_chat_id=" +
      my_text.from_chat_id +
      "&message_id=" +
      my_text.message_id
  })
  Bot.sendMessage("*Successfully Broadcast* [Channel](t.me/" + ch + ")", {
    disable_web_page_preview: true
  })
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

