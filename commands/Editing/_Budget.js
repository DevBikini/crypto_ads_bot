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
var payout = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
if (message > Getbalance()) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + cpc + " " + cur
  )
  return
}
if (message.includes("-") || !isNumeric(message) || message < cpc) {
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
var total_click = GetClicks()

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
    "<b>Campaign #" +
    json.ads +
    "</b> - Bot 🤖\n\n<b>Title</b>: " +
    json.title +
    "\n<b>Description</b>: " +
    json.description +
    "\n\n<b>Bot</b>: @" +
    json.name +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
    message +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
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
    "<b>Campaign #" +
    json.ads +
    "</b> - Link URL 🔗\n\n<b>Title</b>: " +
    json.title +
    "\n<b>Description</b>: " +
    json.description +
    "\n\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
    message +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
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
    "<b>Campaign #" +
    json.ads +
    "</b> - Channel / Group 📣\n\n<b>Title</b>: " +
    json.title +
    "\n<b>Description</b>: " +
    json.description +
    "\n\n<b>Channel</b>: " +
    json.name +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
    message +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
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
    "<b>Campaign #" +
    json.ads +
    "</b> - Post views 📃\n\n<b>Channel</b>: " +
    json.name +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
    message +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
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
if (see == "instagram") {
  var text =
    "<b>Campaign #" +
    json.ads +
    "</b> - Instagram\n\n<b>Instagram</b>: " +
    json.ig +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
    message +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    ig: json.ig,
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
if (see == "twitter") {
  var text =
    "<b>Campaign #" +
    json.ads +
    "</b> - Post views 📃\n\n<b>Channel</b>: " +
    json.tw +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
    message +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    total_click +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    tw: json.tw,
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
//function
function GetClicks() {
  if (node.includes(".")) {
    return node.split(".")[0]
  }
  return number_click
}
function Getbalance() {
  if (!balance.value()) {
    return payout.value()
  }
  if (balance.value() < budgets) {
    return payout.value()
  }
  return balance.value()
}

