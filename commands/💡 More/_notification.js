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

var notification = User.getProperty("notification_int")
if (notification) {
  Bot.sendMessage(
    "🔔 Daily Notification Enabled\nYou will receive a daily message if there are any new task available for you."
  )
  Bot.setProperty("notification_" + user.telegramid, "yes", "string")
  User.setProperty("notification_int", "", "string")
  return
}
Bot.sendMessage(
  "🔕 Daily Notification Disabled\nYou will not receive any daily message for new tasks available for you."
)
Bot.setProperty("notification_" + user.telegramid, "", "string")
User.setProperty("notification_int", "yes", "string")
