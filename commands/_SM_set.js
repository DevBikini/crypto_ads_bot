/*CMD
  command: /SM_set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty(options.name, LinkChannel(message), "string")
//neq linrñw
Bot.sendMessage("*Updated*")
Api.editMessageText({
  message_id: options.id,
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
function LinkChannel(data_message0) {
  if (data_message0.includes("@")) {
    return "https://" + options.name + ".com/" + data_message0.slice(1)
  }
  if (data_message0.includes("https://")) {
    return data_message0
  }
  return "https://" + options.name + ".com/" + data_message0.slice(1)
}

