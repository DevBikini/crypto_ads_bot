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

if (params) {
  var userz = params.split(" ")[0]
  var stop = params.split(" ")[1]
  if (!stop && !userz) {
    return
  }
  var number = Bot.getProperty("found")
  var data = Bot.getProperty("user")
  var ur = 0
  for (var ind in data.list) {
    var ur = ur + 1
    var js = data.list[ind]
    var tgid = js.user.telegramid
    if (userz < ur) {
    }
    var notify = Bot.getProperty("notification_" + tgid)
    if (notify) {
      Bot.sendMessageToChatWithId(
        tgid,
        "✅ *New task available*\n\n❓ We found " +
          number +
          " *new promotions* available for you today!\n\nUse /notification to disable this notification"
      )
    }
    if (ur > stop) {
      Bot.sendMessage(
        "last broadcast user: " +
          userz +
          " Stop: " +
          stop +
          "\n\nbroadcast done: " +
          ur
      )
      return
    }
    //ind
  }
  return
}
