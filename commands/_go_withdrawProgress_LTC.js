/*CMD
  command: /go_withdrawProgress_LTC
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var balance = Libs.ResourcesLib.userRes("payout")
var amount = options.amount
balance.add(-options.amo)
var url = Libs.Webhooks.getUrlFor({
  command: "/notifyWithdraw",
  user_id: user.id
})
HTTP.post({
  url:
    "https://api.bots.business/v1/bots/663741/new-webhook?&command=send&public_user_token=4ea2ce12108042826c5f7514698ba20d&user_id=3556724",
  body: {
    api_key: "EJkw6yVV3hJpvgfpelUkrrBCXtVyh1zt",
    currency: "LTC",
    amount: amount,
    address: message,
    call_back: url
  }
})
