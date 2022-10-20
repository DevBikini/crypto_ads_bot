/*CMD
  command: /admin_inspect
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_admin")
if (admin == user.telegramid) {
  var id = params
  var index = Bot.getProperty("all_in_ads")
  var json = index.list[id]
  //Bot.inspect(json)
  GettingAd(json.ads, json.promotion)
  return
}
