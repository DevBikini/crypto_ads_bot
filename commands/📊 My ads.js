/*CMD
  command: 📊 My ads
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /myads
CMD*/

var data_user = Bot.getProperty("user")
var security = data_user.list[user.telegramid]
if (!security) {
  var url = Libs.Webhooks.getUrlFor({
    command: "onWebhook",
    user_id: user.id
  })
  var webPage =
    "https://api.jobians.top/captcha/pro?id=d6a37&webhookUrl=" +
    encodeURIComponent(url) +
    "&back=https://t.me/Crypto_Ad_RoBot"
  Bot.sendInlineKeyboard(
    [[{ title: "✅ Verify", url: webPage }]],
    "⚠️ *You have to complete the verification process to use this section*!\n\nPress ✅* Verify* button to complete the verification process",
    { disable_web_page_preview: true }
  )
  return
}
var myads = Libs.ResourcesLib.userRes("myads")
Bot.sendKeyboard(
  "➕ New Ad ➕,📊 My ads\n🏠 Menu",
  "🔬 Here you can manage all your running/expired promotions. (" +
    myads.value() +
    " / 50)"
)
var ads = Bot.getProperty("all_in_ads")
if (!ads) {
  //no ads
  return
}
for (var ind in ads.list) {
  var json = ads.list[ind]
  var owner = json.owner
  if (owner == user.telegramid) {
    EditingAd(json.ads, json.promotion)
  }
}
