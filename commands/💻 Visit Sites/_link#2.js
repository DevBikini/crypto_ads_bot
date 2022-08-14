/*CMD
  command: /link#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*Enter a description for your ad:*")
Bot.run({ command: "/link#3", options: { url: options.url, title: message } })

