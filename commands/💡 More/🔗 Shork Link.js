/*CMD
  command: 🔗 Shork Link
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: /short
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
var cur = Bot.getProperty("admin_currency")
var data = Bot.getProperty("user")
var json = data.list[user.telegramid]
var ip = json.user.Geotargeting.ip
if (ip == "2nd") {
  Bot.sendInlineKeyboard(
    [
      [
        { title: "usalink 1", command: "/link 1" },
        { title: "try2link", command: "/link 2" }
      ],
      [
        { title: "usalink 2", command: "/link 3" },
        { title: "shrinkme", command: "/link 4" }
      ]
    ],
    "💰 *Earn " +
      0.001 * 4 +
      " USD on short links*.\n\n*Short links list*. ⬇️"
  )
  return
}
Bot.sendInlineKeyboard(
  [
    [
      { title: "usalink 1", command: "/link 1" },
      { title: "try2link", command: "/link 2" }
    ],
    [
      { title: "usalink 2", command: "/link 3" },
      { title: "shrinkme", command: "/link 4" }
    ]
  ],
  "💰 *Earn " + 0.0025 * 4 + " USD on short links*.\n\n*Short links list*. ⬇️"
)
