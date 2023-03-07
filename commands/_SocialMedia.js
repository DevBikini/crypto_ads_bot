/*CMD
  command: /SocialMedia
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params == "name") {
  Api.sendMessage({
    text: "*➡️ Enter the Username or URL of the Instagram*",
    parse_mode: "Markdown"
  })
  Bot.run({
    command: "/SM_set",
    options: { name: "instagram", id: request.message.message_id }
  })
  return
}
if (params == "url") {
  Api.sendMessage({
    text: "*➡️ Enter the Username or URL of the Twitter*",
    parse_mode: "Markdown"
  })
  Bot.run({
    command: "/SM_set",
    options: { name: "twitter", id: request.message.message_id }
  })
  return
}
Api.sendMessage({
  text:
    "Social Media\n\n*Instagram Handle*: " +
    GetRod("instagram") +
    "\n*Twitter Handle*: " +
    GetRod("twitter"),
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "Edit IG Username Handle", callback_data: "/SocialMedia name" }],
      [{ text: "Edit Twitter Handle", callback_data: "/SocialMedia url" }]
    ]
  }
})
function GetRod(name) {
  var GNH = User.getProperty(name)
  if (GNH) {
    return GNH
  }
  return "not set"
}

