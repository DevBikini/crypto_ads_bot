/*CMD
  command: /checkerPr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ❇️ Advertise Channel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params == "hi") {
  var json = JSON.parse(content).result
  var can_post = json.can_post_messages
  var admin = json.status
  if (can_post == true && admin == "administrator") {
    Bot.sendMessage("this task can post")
    return
  }
  Bot.sendMessage("this task has been no longer admininstration")
  return
}
HTTP.get({
  url:
    "https://api.telegram.org/bot" +
    bot.token +
    "/getChatMember?chat_id=" +
    params +
    "&user_id=" +
    bot.token,
  success: "/checkerPr hi"
})

