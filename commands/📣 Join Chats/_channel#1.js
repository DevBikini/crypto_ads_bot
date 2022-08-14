/*CMD
  command: /channel#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message.includes("@")) {
  var na = "https://t.me/" + message.slice(1)
} else {
  var na = message
}
if (message.includes("https://t.me/")) {
  var chan = "@" + message.split("https://t.me/")[1]
} else {
  var chan = message
}
HTTP.get({
  url:
    "https://api.telegram.org/bot" +
    bot.token +
    "/getChatMember?chat_id=" +
    chan +
    "&user_id=" +
    bot.token +
    "",
  success: "/channel_group_check " + na+" "+chan
})

