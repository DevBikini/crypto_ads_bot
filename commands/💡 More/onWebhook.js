/*CMD
  command: onWebhook
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var ff = Bot.getProperty("user", { list: {} })
var json = ff.list[user.telegramid]
if (!json) {
  var result = JSON.parse(content)
  var ip = result.results.ip
  HTTP.get({
    url: "http://ip-api.com/json/" + ip,
    success: "/Webhook " + result.results.vpn
  })
  return
}
Bot.runCommand("/menu")

