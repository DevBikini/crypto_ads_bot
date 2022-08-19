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
  var id = params.split("&")[0]
  var promotion = params.split("&")[1]
  GettingAd(id, promotion)
  return
}
