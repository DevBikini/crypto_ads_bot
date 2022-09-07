/*CMD
  command: ➕ Add Channel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ❇️ Advertise Channel

  <<ANSWER
➡️ *Enter the Username or URL of the public channel or group you want to advertise*:
Please, add this bot to the channel administrators first. The bot needs "Post message & Delete Message" rights.

The bot will start sending post to your channel.
  ANSWER
  keyboard: ↩️ Back
  aliases: 
CMD*/

function LinkChannel() {
  if (message.includes("@")) {
    return "https://t.me/" + message.slice(1)
  }
  return message
}
function LinkNameChannel() {
  if (message.includes("https://t.me/")) {
    return "@" + message.split("https://t.me/")[1]
  }
  return message
}
var success =
  "/add_channel_check " +
  LinkChannel() +
  " " +
  LinkNameChannel() +
  " " +
  user.telegramid
HTTP.get({
  url:
    "https://api.telegram.org/bot" +
    bot.token +
    "/getChatMember?chat_id=" +
    LinkNameChannel() +
    "&user_id=" +
    bot.token,
  success: success
})

