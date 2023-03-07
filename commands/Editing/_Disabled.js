/*CMD
  command: /Disabled
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
  text: "Disabled 🚫",
  show_alert: false
})
var ads = Bot.getProperty("all_in_ads")
var cur = Bot.getProperty("admin_currency")
var number_ads = params.split(" ")[1]
var same = params.split(" ")[0]
var json = ads.list[number_ads]
if (same == "bot") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit bot " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled bot " + json.ads }
    ]
  ]
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
    "\n<b>Status</b>: Disabled 🚫\n\n<b>Daily budget</b>: " +
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
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
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
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
      { text: "✅ Enable", callback_data: "/Enabled visit " + json.ads }
    ]
  ]
  var text =
    "<b>Campaign #" +
    json.ads +
    "</b> - Link URL 🔗\n\n<b>Title</b>: " +
    json.title +
    "\n<b>Description</b>: " +
    json.description +
    "\n\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: Disabled 🚫\n\n<b>Daily budget</b>: " +
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
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
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
//join chat
if (same == "join") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit join " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled join " + json.ads }
    ]
  ]
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
    "\n<b>Status</b>: Disabled 🚫\n\n<b>Daily budget</b>: " +
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
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
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
// view ads
if (same == "view") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit view " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled view " + json.ads }
    ]
  ]
  var text =
    "<b>Campaign #" +
    json.ads +
    "</b> - Post views 📃\n\n<b>Channel</b>: " +
    json.name +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: Disabled 🚫\n\n<b>Daily budget</b>: " +
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
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
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
// Instagram ads
if (same == "instagram") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit instagram " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled instagram " + json.ads }
    ]
  ]
  var text =
    "<b>Campaign #" +
    json.ads +
    "</b> - Instagram\n\n<b>Instagram</b>: " +
    json.ig +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: Disabled 🚫\n\n<b>Daily budget</b>: " +
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
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
    cpc: json.cpc,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
// Twitter ads
if (same == "twitter") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit twitter " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled twitter " + json.ads }
    ]
  ]
  var text =
    "<b>Campaign #" +
    json.ads +
    "</b> - Twitter\n\n<b>Twitter</b>: " +
    json.tw +
    "\n<b>URL</b>: " +
    json.link +
    "\n<b>Status</b>: Disabled 🚫\n\n<b>Daily budget</b>: " +
    json.budget +
    " " +
    cur +
    "\n<b>CPC</b>: " +
    json.cpc +
    " " +
    cur +
    "\n<b>Clicks</b>: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
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
    cpc: json.cpc,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}

