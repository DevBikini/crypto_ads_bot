/*CMD
  command: /started
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("forward", options.data + " " + options.id, "string")
