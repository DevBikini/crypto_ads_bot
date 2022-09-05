/*CMD
  command: ➕ Add Text Post
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ❇️ Advertise Channel

  <<ANSWER
➡️ *Forward Your Message Or Enter Your Text Message*

This is use for broadcasting a channel.
  ANSWER
  keyboard: ↩️ Back
  aliases: 
CMD*/

var data = {
  chat_id: request.chat.id,
  from_chat_id: user.telegramid,
  message_id: request.message_id
}
User.setProperty("my_text", data, "json")
Bot.sendMessage("Successfully Setuped Text Post.")

