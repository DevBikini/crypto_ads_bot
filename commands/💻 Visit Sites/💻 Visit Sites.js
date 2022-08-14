/*CMD
  command: 💻 Visit Sites
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: /visit
CMD*/

if (chat.chat_type != "private") {
  return
}
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
var ads = Bot.getProperty("all_in_ads")
if (!ads) {
  //no ads
  Bot.sendMessage(
    "*‼️Aw snap! There are no more ads available*.\n\nPress /newad to create a new task\n\n🌐 [News](https://t.me/Crypto_Ad_Channel) [Group](https://t.me/Crypto_Ad_GroupChat)"
  )
  return
}
for (var ind in ads.list) {
  //1
  //have ads
  var json = ads.list[ind]
  var number_ads = json.ads
  var status = json.status
  var cpc = json.cpc
  var sec = User.getProperty("User-" + number_ads)
  var promotion = json.promotion
  if (promotion == "Link URL 🔗") {
    //2
    var owner = json.owner
    var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
    var payout = Libs.ResourcesLib.anotherUserRes("payout", owner)
    if (!balance.value()) {
      var balko = payout.value() + 0.0005
    } else {
      if (cpc > balance.value() + 0.0005) {
        var balko = payout.value()
      } else {
        var balko = balance.value() + 0.0005
      }
    }
    if (
      (status == "Disabled 🚫") |
      (status == "⏸ Paused: budget reached or out of funds.")
    ) {
      //if status is disabled or paused
      User.setProperty("User-" + number_ads, "", "string")
    }
    if (status == "Enabled ✅") {
      //3
      //status enabled
      if (!sec) {
        //4
        if (owner == user.telegramid || cpc > balko) {
          //1. owner - owner cannot execute own task
          //2. cpc - owner dont have balance to pay the user
        } else {
          //user can go task and earn
          GettingAd(number_ads, promotion)
          return
        }
        //4
      }
      //3
    }
    //2
  }
  //1
}
//no more ads
//already done ads
No_More_Ads()
