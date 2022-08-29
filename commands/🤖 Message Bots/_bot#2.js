/*CMD
  command: /bot#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bot_name = options.name
if (message.includes("https://t.me/")) {
  BotRunMe()
} else {
  Bot.sendMessage(
    "❌ Your bot url has to start like this: *https://t.me/" +
      bot_name +
      "?start=yourref*"
  )
  Bot.run({ command: "/bot#2", options: { name: bot_name } })
}
//function
function BotRunMe() {
  if (!message.split("?")[1]) {
    return
    Bot.sendMessage(
      "❌ Your bot url has to start like this: *https://t.me/" +
        bot_name +
        "?start=yourref*"
    )
    Bot.run({ command: "/bot#2", options: { name: bot_name } })
  }
  if (message.split("?")[0].slice(13) == bot_name) {
    return
    Bot.sendInlineKeyboard(
      [{ title: "Click Here", url: message }],
      "⬇️ Your ref. link ⬇️"
    )
    Bot.sendMessage("*Enter a title for your ad*:")
    Bot.run({ command: "/bot#3", options: { name: bot_name, url: message } })
  }
  return
  Bot.sendMessage(
    "❌ Your bot url has to start like this: *https://t.me/" +
      bot_name +
      "?start=yourref*"
  )
  Bot.run({ command: "/bot#2", options: { name: bot_name } })
}
