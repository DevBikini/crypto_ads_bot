/*CMD
  command: /bot#6
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bot_name = options.name
var bot_url = options.url
var bot_title = options.title
var bot_description = options.description
var bot_cpc = options.cpc
var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var min_budgets = Bot.getProperty("admin_budget_bot")
var include =
  message.includes("-") | !isNumeric(message) | (message < min_budgets)
if (include) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + min_budgets + " " + cur
  )
  Bot.run({
    command: "/bot#6",
    options: {
      name: bot_name,
      url: bot_url,
      title: bot_title,
      description: bot_description,
      cpc: bot_cpc
    }
  })
  return
}
if (message > Getbalance() + min_budgets) {
  Bot.sendKeyboard(
    "➕ Deposit,🏠 Menu",
    "❌ You do not own enough " +
      cur +
      " for this!\n*You own*: " +
      Getbalance().toFixed(10) +
      " " +
      cur
  )
  return
}
var ads = Generate(5)
var kol = TotalClick(min_budgets, min_budgets.length)
var number_click = kol * message
var node = number_click.toFixed(2)
var total_click = validation()
Bot.sendInlineKeyboard(
  [
    [
      { title: "✏️ Edit", command: "/edit bot " + ads },
      { title: "Disable 🚫", command: "/disabled bot " + ads }
    ]
  ],
  "*Campaign #" +
    ads +
    "* - Bot 🤖\n\n*Title*: " +
    bot_title +
    "\n*Description*: " +
    bot_description +
    "\n\n*Bot*: *@" +
    bot_name +
    "\nURL*: *" +
    bot_url +
    "\nStatus*: Enabled ✅\n\n*Daily budget*: " +
    message +
    " " +
    cur +
    "\n*CPC*: " +
    bot_cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / 0 today",
  { disable_web_page_preview: true }
)
//set ads
var add = Bot.getProperty("all_in_ads", { list: {} })
add.list[ads] = {
  ads: ads,
  name: bot_name,
  link: bot_url,
  title: bot_title,
  description: bot_description,
  cpc: bot_cpc,
  budget: message,
  clicks: 0,
  total: total_click,
  status: "Enabled ✅",
  owner: user.telegramid,
  promotion: "Bot 🤖"
}
Bot.setProperty("all_in_ads", add, "json")
var myads = Libs.ResourcesLib.userRes("myads")
myads.add(1)
Api.sendMessage({
  chat_id: "@CryptoAdAlert",
  text:
    "✅<b> New Ad Created</b>\n\nTask : 🤖 Message Bots\nCPC : <b>" +
    options.cpc +
    " " +
    cur +
    "</b>\nAvailable Submissions : <b>" +
    total_click +
    "</b>\n\nBot : @" +
    bot.name +
    "",
  parse_mode: "html"
})
//function
function Getbalance() {
  if (!balance.value()) {
    return payout.value()
  }
  if (balance.value() < min_budgets) {
    return payout.value()
  }
  return balance.value()
}
//validation.
function validation() {
  if (node.includes(".")) {
    return node.split(".")[0]
  }
  return number_click
}
