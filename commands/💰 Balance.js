/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /balance
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
var currency = Bot.getProperty("admin_currency")
var payout = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
var all_balance = balance.value() + payout.value()
Bot.sendKeyboard(
  "➕ Deposit,➖ Withdraw\n🏠 Menu",
  "🔸️ *Balance*\n     " +
    all_balance.toFixed(10) +
    " " +
    currency +
    "!\n🔸️ *Available for payout*\n     " +
    payout.value().toFixed(5) +
    " " +
    currency +
    "\n*________________________________*\nClick《Deposit》to generate a unique wallet address.\n\n💱 *Top-up Methods*\n• Crypto currency"
)
