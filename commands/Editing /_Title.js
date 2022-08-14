/*CMD
  command: /Title
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
    message +
    "\n*Description*: " +
    json.description +
    "\n\n*Bot*: *@" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: " +
    json.status +
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
    title: message,
    description: json.description,
    cpc: json.cpc,
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
//visit
if (see == "visit") {
  var text =
    "*Campaign #" +
    json.ads +
    "* - Link URL 🔗\n\n*Title*: " +
    message +
    "\n*Description*: " +
    json.description +
    "\n\n*URL*: *" +
    json.link +
    "\nStatus*: " +
    json.status +
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
    title: message,
    description: json.description,
    cpc: json.cpc,
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
//join 
if (see == "join") {
  var text =
    "*Campaign #" +
    json.ads +
    "* - Channel / Group 📣\n\n*Title*: " +
    message +
    "\n*Description*: " +
    json.description +
    "\n\n*Channel*: *" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: " +
    json.status +
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
    title: message,
    description: json.description,
    cpc: json.cpc,
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
