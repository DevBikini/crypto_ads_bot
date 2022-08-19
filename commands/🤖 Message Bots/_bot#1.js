/*CMD
  command: /bot#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request.forward_from || request.forward_from.is_bot == "false") {
  Bot.sendMessage("‼️* This is not forward from bot message*")
  Bot.runCommand("/bot#1")
  return
}
var bot_name = request.forward_from.username
Bot.sendMessage(
  "*➕ Promotion\nCreation\n\nSend now this information*: `link`\n\n*🔎 Now send the link to the bot that you want to promote*.\n(All the traffic will be sent to that link)"
)
Bot.run({ command: "/bot#2", options: { name: bot_name } })
