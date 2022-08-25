/*CMD
  command: /top
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance_top = Bot.getProperty("user", { list: {} })
function doSort(a, b) {
  if (a.count > b.count) return -1
  if (a.count < b.count) return 1
}
function getTopList(top_count) {
  var sortedList = []
  for (var keys in balance_top.list) {
    var count = balance_top.list[keys].user.info.payout_balance
    sortedList.push({
      count: count,
      userKey: balance_top.list[keys].user.telegramid
    })
  }
  sortedList.sort(doSort)
  var result = []

  for (var i = 0; i < top_count; i++) {
    var item = sortedList[i]
    if (!item) {
      break
    }
    result.push(item)
  }

  return result
}
var json = getTopList(15)
var number = 0
var msg = ""
for (var index in json) {
  var number = number + 1
  var count = json[index].count
  var userKey = json[index].userKey
  var f_name = balance_top.list[userKey].user.first_name
  var link = "<a href='tg://user?id=" + userKey + "'>" + f_name + "</a>"
  var msg =
    msg +
    "<b>" +
    number +
    ".</b> <code>" +
    userKey +
    "</code>: " +
    count.toFixed(5) +
    " <b>" +
    link +
    "</b>\n\n"
}
Api.sendMessage({
  text: "💰 <b>Top 15 Balance</b>:\n\n" + msg,
  parse_mode: "html"
})
