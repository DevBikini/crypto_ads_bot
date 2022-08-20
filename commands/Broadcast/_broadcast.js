/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var number = Bot.getProperty("found")
var data = Bot.getProperty("user")
var ur = 0
var cvs = ""
for (var ind in data.list) {
  var ur = ur + 1
  var js = data.list[ind]
  var tgid = js.user.telegramid
  var notify = Bot.getProperty("notification_" + tgid)
  if (notify) {
    var cvs = cvs + tgid + " "
  }
  //ind
}
Bot.run({ command: "/broadc", options: { data: cvs } })
Bot.sendMessage("Total User: " + ur)
