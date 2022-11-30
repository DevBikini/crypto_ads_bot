/*CMD
  command: /onbrr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var utgid = params
if (utgid) {
  var remove = Bot.getProperty("user")
  remove.list[utgid] = Bot.setProperty("user", remove, "json")
  //set user notification
  Bot.setProperty("notification_" + utgid, "", "string")
  return
}
