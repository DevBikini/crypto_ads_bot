/*CMD
  command: /chk_joinUser
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
Api.getChatMember({
  chat_id: options.channel,
  user_id: options.user,
  on_result: "/On_chk_joinUser " + options.ad
})
