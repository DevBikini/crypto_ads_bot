/*CMD
  command: 📣 Channel / Group
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats

  <<ANSWER
*➡️ Enter the Username or URL of the public channel or group you want to promote*:
Please, add this bot to the channel administrators first. The bot needs "Invite New Members" rights.

The bot will start sending members to your channel.
  ANSWER
  keyboard: 🔙 back
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
var success = "/channel_group_check " + LinkChannel() + " " + LinkNameChannel()
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

