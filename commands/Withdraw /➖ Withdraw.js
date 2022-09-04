/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw 
  answer: 
  keyboard: 
  aliases: /withdraw
CMD*/

Api.getChatMember({
  chat_id: "@Crypto_Ad_Channel",
  user_id: user.telegramid,
  on_result: "/withdrawing"
})
