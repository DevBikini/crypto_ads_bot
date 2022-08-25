/*CMD
  command: ➕ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /deposit
CMD*/

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
        }
      ],
      [
        {
          text: "DGB",
          callback_data: "/deposit DGB"
        },
        {
          text: "TRX",
          callback_data: "/deposit TRX"
        }
      ]
    ]
  }
})

