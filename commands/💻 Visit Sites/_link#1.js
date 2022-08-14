/*CMD
  command: /link#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message.includes("https://")) {
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
