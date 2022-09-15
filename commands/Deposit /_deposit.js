/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit 
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
          /*{
            text: "LTC",
            callback_data: "/deposit LTC"
          },
          {
            text: "BCH",
            callback_data: "/deposit BCH"
          }
        ],
        [
          {
            text: "DGB",
            callback_data: "/deposit DGB"
          },*/
          {
            text: "TRX",
            callback_data: "/deposit TRX"
          }
        ]
      ]
    }
  })

  return
}
var currency = params
var deposit = User.getProperty("wallets-" + currency)
if (!deposit) {
  Libs.CryptoAdGateWayBot.Deposit({
    currency: currency,
    user: user.id,
    success: "/notifyDeposit " + currency
  })
} else {
  var deposits = User.getProperty("wallets-" + currency)
  Bot.sendInlineKeyboard(
    [[{ title: "🚀 Buy " + currency + " 🚀", url: "t.me/Dev_Bikini" }]],
    "*This is your personal deposit address*. \n\n*" +
      currency +
      " address*:\n`" +
      deposits +
      "`\n\n🕝 Transaction will be credited after 10 network confirmations."
  )
}
