/*CMD
  command: /channel_group_check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params | !content) {
  return
}
var url = params.split(" ")[0]
var name = params.split(" ")[1]
var json = JSON.parse(content)
if (json.ok == false) {
  Bot.sendMessage(
    "❌ Make the bot *ADMIN* of your channel, with the rights to add people!"
  )
  Bot.runCommand("/channel#1")

  return
}
if (json.result.status == "administrator") {
  Bot.sendInlineKeyboard(
    [{ title: "Click Here", url: url }],
    "⬇️ Your channel. link ⬇️"
  )
  Bot.sendMessage("*Enter a title for your ad:*")
  Bot.run({
    command: "/channel#2",
    options: {
      url: url,
      name: name
    }
  })
} else {
  Bot.sendMessage(
    "❌ Make the bot *ADMIN* of your channel, with the rights to add people!"
  )
  Bot.runCommand("/channel#1")
}
