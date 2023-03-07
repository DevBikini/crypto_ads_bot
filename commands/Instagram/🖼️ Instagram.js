/*CMD
  command: 🖼️ Instagram
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Instagram
  answer: *➡️ Enter the Username or URL of the Instagram you want to promote*
  keyboard: 🔙 back
  aliases: 
CMD*/

var cur = Bot.getProperty("admin_currency")
var cpc = Bot.getProperty("admin_cpc_instagram")
Bot.sendInlineKeyboard(
  [{ title: "Click Here", url: LinkChannel() }],
  "⬇️ Your Instagram. link ⬇️"
)
Bot.sendMessage(
  "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *" +
    cpc +
    " " +
    cur +
    "*\n\n*➡️ Enter a value in " +
    cur +
    "*:"
)
Bot.run({
  command: "/ig#1",
  options: { url: LinkChannel(), ig: LinkNameChannel() }
})

function LinkChannel() {
  if (message.includes("@")) {
    return "https://instagram.com/" + message.slice(1)
  }
  return message
}
function LinkNameChannel() {
  if (message.includes("https://instagram.com/")) {
    return "@" + message.split("https://instagram.com/")[1]
  }
  return message
}

