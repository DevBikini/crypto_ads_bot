/*CMD
  command: /channel#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*Enter a description for your ad:*")
Bot.run({
  command: "/channel#3",
  options: { url: options.url, name: options.name, title: message }
})

