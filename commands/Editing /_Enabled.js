/*CMD
  command: /Enabled
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Editing 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Enabled ✅",
  show_alert: false
})
var ads = Bot.getProperty("all_in_ads")
var cur = Bot.getProperty("admin_currency")
var number_ads = params.split(" ")[1]
var same = params.split(" ")[0]
var json = ads.list[number_ads]
var budgets = Bot.getProperty("admin_budget_" + same)
var kol = TotalClick(budgets, budgets.length)
var number_click = kol * json.budget
//kol x bot_buget = 1
//10000 x 0.0001 = 1
var node = number_click.toFixed(2)
if (node.includes(".")) {
  var total_click = node.split(".")[0]
} else {
  var total_click = number_click
}
var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
if (!balance.value()) {
  var balko = payout.value() + 0.0001
} else {
  if (json.cpc > balance.value() + 0.0001) {
    var balko = payout.value() + 0.0001
  } else {
    var balko = balance.value() + 0.0001
  }
}
if (json.clicks > json.total) {
  var status = "Disabled 🚫"
} else {
  if (json.cpc > balko) {
    var status = "⏸ *Paused*: budget reached or out of funds."
  } else {
    var status = "Enabled ✅"
  }
}
if (same == "bot") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit bot " + json.ads },
      { text: "Disable 🚫", callback_data: "/Disabled bot " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Bot 🤖\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*Bot*: *@" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / 0 today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    name: json.name,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: 0,
    total: total_click,
    status: status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
//visit
if (same == "visit") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit visit " + json.ads },
      { text: "Disable 🚫", callback_data: "/Disabled visit " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Link URL 🔗\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*URL*: *" +
    json.link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / 0 today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: 0,
    total: total_click,
    status: status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
//chat join
if (same == "join") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit join " + json.ads },
      { text: "Disable 🚫", callback_data: "/Disabled join " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Channel / Group 📣\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*Channel*: *" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    json.total +
    " total / 0 today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    name: json.name,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: 0,
    total: total_click,
    status: status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
}
//view
if (same == "view") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit view " + json.ads },
      { text: "Disable 🚫", callback_data: "/Disabled view " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Post views 📃\n\n*Channel*: *" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    json.total +
    " total / 0 today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    name: json.name,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: 0,
    total: total_click,
    status: status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
}

