/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  Api.sendMessage({
    text:
      "💳* Top-Up your Wallet using crypto*!\n\nℹ️ All deposits will be converted to USD at current market value.\n\n *Press the buttons below to generate a unique deposit address*:",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "LTC",
            callback_data: "/deposit LTC"
          },
          {
            text: "BCH",
            callback_data: "/deposit BCH"
          },
          {
            text: "DGB",
            callback_data: "/deposit DGB"
          }
        ]
      ]
    }
  })

  return
}
var cur = params
var deposit = User.getProperty("wallet-" + cur)
if (!deposit) {
  var call_back = Libs.Webhooks.getUrlFor({
    command: "/notifyDeposit " + cur,
    user_id: user.id
  })
  HTTP.post({
    url:
      "https://api.bots.business/v1/bots/663741/new-webhook?&command=receive&public_user_token=d0920942f009dff991567c37d9a21f21&user_id=3556724",
    body: {
      api_key: "EJkw6yVV3hJpvgfpelUkrrBCXtVyh1zt",
      currency: cur,
      call_back: call_back
    }
  })
} else {
  Bot.sendMessage(
    "*This is your personal deposit address*. \n\n*" +
      cur +
      " address*:\n`" +
      deposit +
      "`\n\n🕝 Transaction will be credited after 10 network confirmations."
  )
}
