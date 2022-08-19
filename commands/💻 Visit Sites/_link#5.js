/*CMD
  command: /link#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = Bot.getProperty("admin_currency")
var budgets = Bot.getProperty("admin_budget_visit")
if (!balance.value()) {
  var balko = payout.value()
} else {
  if (balance.value() < budgets) {
    var balko = payout.value()
  } else {
    var balko = balance.value()
  }
}
if (message.includes("-") | !isNumeric(message) | (message < budgets)) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + budgets + " " + cur
  )
  Bot.run({
    command: "/link#5",
    options: {
      url: options.url,
      title: options.title,
      description: options.description,
      cpc: options.cpc
    }
  })
  return
}
if (message > balko) {
  var ads = Generate(5)
  var kol = TotalClick(budgets, budgets.length)
  var number_click = kol * message
  var node = number_click.toFixed(2)
  if (node.includes(".")) {
    var total_click = node.split(".")[0]
  } else {
    var total_click = number_click
  }
  Bot.sendInlineKeyboard(
    [
      [
        { title: "✏️ Edit", command: "/edit visit " + ads },
        { title: "Disable 🚫", command: "/disabled visit " + ads }
      ]
    ],
    "*Campaign #" +
      ads +
      "* - Link URL 🔗\n\n*Title*: " +
      options.title +
      "\n*Description*: " +
      options.description +
      "\n\n*URL*: *" +
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
    link: options.url,
    title: options.title,
    description: options.description,
    cpc: options.cpc,
    budget: message,
    clicks: 0,
    total: total_click,
    status: "Enabled ✅",
    owner: user.telegramid,
    promotion: "Link URL 🔗"
  }
  Bot.setProperty("all_in_ads", add, "json")
  //send new task in group
  var myads = Libs.ResourcesLib.userRes("myads")
  myads.add(1)
  Api.sendMessage({
    chat_id: "@CryptoAdAlert",
    text:
      "✅<b> New Ad Created</b>\n\nTask : 💻 Visit Sites\nCPC : <b>" +
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
} else {
  Bot.sendKeyboard(
    "➕ Deposit,🏠 Menu",
    "❌ You do not own enough " +
      cur +
      " for this!\n*You own*: " +
      balko.toFixed(10) +
      " " +
      cur
  )
}

