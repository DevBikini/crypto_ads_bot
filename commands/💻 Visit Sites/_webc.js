/*CMD
  command: /webc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var df = [
  [
    {
      text: "🚀 Go to Website 🚀",
      url: content
    }
  ],
  [
    { text: "➡️ Skip", callback_data: "/skip /visit " + params },
    {
      text: "🚫 Report",
      callback_data: "/report " + params + "&Link URL 🔗"
    }
  ]
]
Api.sendMessage({
  text:
    json.title +
    "\n\n" +
    json.description +
    "\n\n------------------------------------------------\n⚠️_ You will be redirected to a third party website._",
  reply_markup: { inline_keyboard: df },
  disable_web_page_preview: true,
  parse_mode: "Markdown"
})

