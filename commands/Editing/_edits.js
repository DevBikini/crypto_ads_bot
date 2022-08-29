/*CMD
  command: /edits
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
var cur = Bot.getProperty("admin_currency")
var message_id = request.message.message_id
var ads = Bot.getProperty("all_in_ads")
var same = params.split(" ")[0]
var number_ads = params.split(" ")[1]
var json = ads.list[number_ads]
var see = params.split(" ")[2]
//edit budget
if (same == "budget" && see == "bot") {
  Bot.sendMessage("Enter a budget for your ad:")
  Bot.run({
    command: "/Budget",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit budget visit
if (same == "budget" && see == "visit") {
  Bot.sendMessage("Enter a budget for your ad:")
  Bot.run({
    command: "/Budget",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit budget join
if (same == "budget" && see == "join") {
  Bot.sendMessage("Enter a budget for your ad:")
  Bot.run({
    command: "/Budget",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit budget view
if (same == "budget" && see == "view") {
  Bot.sendMessage("Enter a budget for your ad:")
  Bot.run({
    command: "/Budget",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit cpc
if (same == "cpc" && see == "bot") {
  Bot.sendMessage("Enter a cpc for your ad:")
  Bot.run({
    command: "/Cpc",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit cpc visit
if (same == "cpc" && see == "visit") {
  Bot.sendMessage("Enter a cpc for your ad:")
  Bot.run({
    command: "/Cpc",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit cpc join
if (same == "cpc" && see == "join") {
  Bot.sendMessage("Enter a cpc for your ad:")
  Bot.run({
    command: "/Cpc",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit cpc view
if (same == "cpc" && see == "view") {
  Bot.sendMessage("Enter a cpc for your ad:")
  Bot.run({
    command: "/Cpc",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit url
if (same == "url" && see == "bot") {
  Bot.sendMessage("Enter a Url for your ad:")
  Bot.run({
    command: "/Url",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit url visit
if (same == "url" && see == "visit") {
  Bot.sendMessage("Enter a Url for your ad:")
  Bot.run({
    command: "/Url",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit url join
if (same == "url" && see == "join") {
  Bot.sendMessage("Enter a Url for your ad:")
  Bot.run({
    command: "/Url",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit url view
if (same == "url" && see == "view") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "you can't edit this",
    show_alert: false
  })
  return
}
//edit description
if (same == "description" && see == "bot") {
  Bot.sendMessage("Enter a description for your ad:")
  Bot.run({
    command: "/Description",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit description visit
if (same == "description" && see == "visit") {
  Bot.sendMessage("Enter a description for your ad:")
  Bot.run({
    command: "/Description",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit description join
if (same == "description" && see == "join") {
  Bot.sendMessage("Enter a description for your ad:")
  Bot.run({
    command: "/Description",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit description view
if (same == "description" && see == "view") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "you can't edit this",
    show_alert: false
  })
  return
}
//edit title
if (same == "title" && see == "bot") {
  Bot.sendMessage("Enter a title for your ad:")
  Bot.run({
    command: "/Title",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit title visit
if (same == "title" && see == "visit") {
  Bot.sendMessage("Enter a title for your ad:")
  Bot.run({
    command: "/Title",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit title join
if (same == "title" && see == "join") {
  Bot.sendMessage("Enter a title for your ad:")
  Bot.run({
    command: "/Title",
    options: { data: see, ads: json.ads, message_id: message_id }
  })
  return
}
//edit title view
if (same == "title" && see == "view") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "you can't edit this",
    show_alert: false
  })
  return
}
//back edit main
if (same == "back" && see == "bot") {
  var sts = GetStatus(json).sts
  var cdm = GetStatus(json).cdm
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit bot " + json.ads },
      { text: sts, callback_data: cdm }
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
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
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
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⬅️ Back",
    show_alert: false
  })
  return
}
//back edit main join
if (same == "back" && see == "join") {
  var sts = GetStatus(json).sts
  var cdm = GetStatus(json).cdm
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit join " + json.ads },
      { text: sts, callback_data: cdm }
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
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
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
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⬅️ Back",
    show_alert: false
  })
  return
}
//back visit main
if (same == "back" && see == "visit") {
  var sts = GetStatus(json).sts
  var cdm = GetStatus(json).cdm
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit visit " + json.ads },
      { text: sts, callback_data: cdm }
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
    "\n<b>Status</b>: " +
    json.status +
    "\n\n<b>Daily budget</b>: " +
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
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⬅️ Back",
    show_alert: false
  })
  return
}
//back view main
if (same == "back" && see == "view") {
  var sts = GetStatus(json).sts
  var cdm = GetStatus(json).cdm
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit view " + json.ads },
      { text: sts, callback_data: cdm }
    ]
  ]
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
    json.cpc +
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
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⬅️ Back",
    show_alert: false
  })
  return
}
//delete ad
if (same == "delete" && see == "bot") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Are you sure you want to *delete* this ad?\n\n*This action cannot be undone*.",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Yes", callback_data: "/delete " + number_ads },
          { text: "❌ Cancel", callback_data: "/edit bot " + number_ads }
        ]
      ]
    }
  })
  return
}
//visit
if (same == "delete" && see == "visit") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Are you sure you want to *delete* this ad?\n\n*This action cannot be undone*.",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Yes", callback_data: "/delete " + number_ads },
          { text: "❌ Cancel", callback_data: "/edit visit " + number_ads }
        ]
      ]
    }
  })
  return
}
//join
if (same == "delete" && see == "join") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Are you sure you want to *delete* this ad?\n\n*This action cannot be undone*.",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Yes", callback_data: "/delete " + number_ads },
          { text: "❌ Cancel", callback_data: "/edit join " + number_ads }
        ]
      ]
    }
  })
  return
}
//view
if (same == "delete" && see == "view") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Are you sure you want to *delete* this ad?\n\n*This action cannot be undone*.",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Yes", callback_data: "/delete " + number_ads },
          { text: "❌ Cancel", callback_data: "/edit view " + number_ads }
        ]
      ]
    }
  })
  return
}
//function
function GetStatus(json) {
  if (json.status == "Enabled ✅") {
    return { sts: "Disable 🚫", cdm: "/Disabled bot " + json.ads }
  }
  return { sts: "Enable ✅", cdm: "/Enabled bot " + json.ads }
}

