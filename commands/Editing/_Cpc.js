/*CMD
  command: /Cpc
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
var cpc =  Bot.getProperty("admin_cpc_"+see)
if (message.includes("-") | !isNumeric(message) | (message < cpc)) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + cpc + " " + cur
  )
  return
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
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    message +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
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
    cpc: message,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
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
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    message +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
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
    cpc: message,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
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
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    message +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
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
    cpc: message,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
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
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    message +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
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
    cpc: message,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: json.status,
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
