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

/*if (http_status == "200") {
  var json = JSON.parse(content)
  var url = json.shortenedUrl
  var data = Bot.getProperty("user")
  var json = data.list[user.telegramid]
  var ip = json.user.Geotargeting.ip
  var amount = GetAmount()
  Bot.sendInlineKeyboard(
    [[{ title: "🚀 Go to short link 🚀", url: url }]],
    "💰 *Earn " + amount + " USD on short links*"
  )
  User.setProperty("links" + params, url, "string")
} else {
  Bot.sendMessage("Temporary down")
}
//function
function GetAmount() {
  if (ip == "2nd") {
    return 0.001
  }
  return 0.0025
}
*/
Bot.setProperty("76",content,"string")
