/*CMD
  command: /Budget
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Editing 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var cur = Bot.getProperty("admin_currency")
var message_id = options.message_id
var see = options.data
var number_ads = options.ads
var budgets = Bot.getProperty("admin_budget_" + see)
var cpc = Bot.getProperty("admin_cpc_" + see)
if (message.includes("-") | !isNumeric(message) | (message < cpc)) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + cpc + " " + cur
  )
  return
}
var kol = TotalClick(budgets, budgets.length)
var number_click = kol * message
//kol x bot_buget = 1
//10000 x 0.0001 = 1
var node = number_click.toFixed(2)
if (node.includes(".")) {
  var total_click = node.split(".")[0]
} else {
  var total_click = number_click
}
Bot.sendMessage("Your ad has been updated.")
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[number_ads]
var button = [
  [
    {
      text: "Edit title",
      callback_data: "/edits title " + number_ads + " " + see
    },
    {
      text: "Edit description",
      callback_data: "/edits description " + number_ads + " " + see
    }
  ],
  [
    {
      text: "Edit URL",
      callback_data: "/edits url " + number_ads + " " + see
    },
    {
      text: "Edit CPC",
      callback_data: "/edits cpc " + number_ads + " " + see
    }
  ],
  [
    {
      text: "Edit budget",
      callback_data: "/edits budget " + number_ads + " " + see
    },
    {
      text: "🗑 Delete",
      callback_data: "/edits delete " + number_ads + " " + see
    }
  ],
  [
    {
      text: "⬅️ Back",
      callback_data: "/edits back " + number_ads + " " + see
    }
  ]
]
if (see == "bot") {
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
    json.status +
    "\n\n*Daily budget*: " +
    message +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
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
    budget: message,
    clicks: json.clicks,
    total: total_click,
    status: json.status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
if (see == "visit") {
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
    json.status +
    "\n\n*Daily budget*: " +
    message +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
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
    budget: message,
    clicks: json.clicks,
    total: total_click,
    status: json.status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
}
if (see == "join") {
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
    json.status +
    "\n\n*Daily budget*: " +
    message +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
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
    budget: message,
    clicks: json.clicks,
    total: total_click,
    status: json.status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
if (see == "view") {
  var text =
    "*Campaign #" +
    json.ads +
    "* - Post views 📃\n\n*Channel*: *" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: " +
    json.status +
    "\n\n*Daily budget*: " +
    message +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
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
    budget: message,
    clicks: json.clicks,
    total: total_click,
    status: json.status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
