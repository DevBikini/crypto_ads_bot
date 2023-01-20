/*CMD
  command: /notification
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: /off
CMD*/

var notification = Bot.getProperty("broadcast_notification", { list: {} })
var save_notify = Bot.getProperty("broadcast_notification", { list: {} })
var mnyn = User.getProperty("MynumberN")
if (!mnyn) {
  //set user notification
  var notify = Libs.ResourcesLib.anotherChatRes("notify", "global")
  notify.add(+1)
  User.setProperty("MynumberN", notify.value(), "integers")
  save_notify[notify.value()] = { notification: "true", user: user.telegramid }
  Bot.setProperty("broadcast_notification", save_notify, "json")
  Bot.sendMessage(
    "🔔 Daily Notification Enabled\nYou will receive a daily message if there are any new task available for you."
  )
  return
}
if (notification[mnyn].notification == "false") {
  Bot.sendMessage(
    "🔔 Daily Notification *Enabled*\nYou will receive a daily message if there are any new task available for you."
  )
  save_notify[mnyn] = { notification: "true", user: user.telegramid }
  Bot.setProperty("broadcast_notification", save_notify, "json")
  return
}
Bot.sendMessage(
  "🔕 Daily Notification *Disabled*\nYou will not receive any daily message for new tasks available for you."
)
save_notify[mnyn] = { notification: "false", user: user.telegramid }
Bot.setProperty("broadcast_notification", save_notify, "json")
