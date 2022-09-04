/*CMD
  command: ➕ Add Text Post
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ❇️ Advertise Channel

  <<ANSWER
➡️ *Enter Your Text Message*
[Markdown](https://t.me/Crypto_Ad_Channel/25)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty("my_text", message, "string")
Bot.sendKeyboard("🏠 Menu","Successfully Setuped Text Post.")
