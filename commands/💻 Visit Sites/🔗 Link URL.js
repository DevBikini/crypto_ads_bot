/*CMD
  command: 🔗 Link URL
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites

  <<ANSWER
*🌐 Start a Link Promotion*

👉🏻 Enter any valid link and start promoting!

⁉ You can promote anything:* Instagram Posts, Websites, YouTube Videos, Everything!*

➕ *Link Example*: https://yourwebsite?ref=12345
  ANSWER
  keyboard: 🔙 back
  aliases: 
CMD*/

var message_include = message.includes("https://")
if (message_include) {
  Bot.sendInlineKeyboard(
    [{ title: "Click Here", url: "" + message }],
    "⬇️ Your ref. link ⬇️"
  )
  Bot.sendMessage("*Enter a title for your ad*:")
  Bot.run({ command: "/link#2", options: { url: message } })
} else {
  Bot.sendMessage("*You enter Wrong URL please enter valid URL*")
  Bot.runCommand("/link#1")
}

