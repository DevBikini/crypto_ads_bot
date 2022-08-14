/*CMD
  command: /successLink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (http_status == "200") {
  var json = JSON.parse(content)
  var url = json.shortenedUrl
  var data = Bot.getProperty("user")
  var json = data.list[user.telegramid]
  var ip = json.user.Geotargeting.ip
  if (ip == "2nd") {
    var amount = 0.00025
  } else {
    var amount = 0.0005
  }
  Bot.sendInlineKeyboard(
    [[{ title: "🚀 Go to short link 🚀", url: url }]],
    "💰 *Earn " + amount + " USD on short links*"
  )
  User.setProperty("links" + params, url, "string")
} else {
  Bot.sendMessage("Temporary down")
}
