/*CMD
  command: /joins
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var bot_link = json.name
Api.getChatMember({
  chat_id: bot_link,
  user_id: user.telegramid,
  on_result: "/joincheck " + params
})

