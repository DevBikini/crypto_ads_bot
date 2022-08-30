/*CMD
  command: /channel#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var budgets = Bot.getProperty("admin_budget_join")
var include = message.includes("-") | !isNumeric(message) | (budgets > message)
if (include) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + budgets + " " + cur
  )
  Bot.run({
    command: "/channel#5",
    options: {
      url: options.url,
      name: options.name,
      title: options.title,
      description: options.description,
      cpc: options.cpc
    }
  })
  return
}
if (message > Getbalance() + 0.001) {
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
var kol = TotalClick(budgets, budgets.length)
var number_click = kol * message
var node = number_click.toFixed(2)
var total_click = validation()
Bot.sendInlineKeyboard(
  [
    [
      { title: "✏️ Edit", command: "/edit join " + ads },
      { title: "Disable 🚫", command: "/disabled join " + ads }
    ]
  ],
  "*Campaign #" +
    ads +
    "* - Channel / Group 📣\n\n*Title*: " +
    options.title +
    "\n*Description*: " +
    options.description +
    "\n\n*Channel*: *" +
    options.name +
    "\nURL*: *" +
    options.url +
    "\nStatus*: Enabled ✅\n\n*Daily budget*: " +
    message +
    " " +
    cur +
    "\n*CPC*: " +
    options.cpc +
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
  name: options.name,
  link: options.url,
  title: options.title,
  description: options.description,
  cpc: options.cpc,
  budget: message,
  clicks: 0,
  total: total_click,
  status: "Enabled ✅",
  owner: user.telegramid,
  promotion: "Channel / Group 📣"
}
Bot.setProperty("all_in_ads", add, "json")
var myads = Libs.ResourcesLib.userRes("myads")
myads.add(1)
Api.sendMessage({
  chat_id: "@CryptoAdAlert",
  text:
    "✅<b> New Ad Created</b>\n\nTask : 📣 Join Chats\nCPC : <b>" +
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
  if (balance.value() < budgets) {
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

