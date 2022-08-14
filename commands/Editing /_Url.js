/*CMD
  command: /Url
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
  if (!message.split("?")[1]) {
    Bot.sendMessage(
      "❌ Your bot url has to start like this: https://t.me/" +
        bot.name +
        "?start=yourref"
    )
    Bot.run({
      command: "/Url",
      options: {
        data: options.data,
        ads: options.ads,
        message_id: options.message_id
      }
    })
    return
  }
  var text =
    "*Campaign #" +
    json.ads +
    "* - Bot 🤖\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*Bot*: *@" +
    message.split("?")[0].slice(13) +
    "\nURL*: *" +
    message +
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
    name: message.split("?")[0].slice(13),
    link: message,
    title: json.title,
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
}
if (see == "visit") {
  if (!message.split("https://")[1]) {
    Bot.sendMessage(
      "❌ Your website url has to start like this: https://gainerzyz.com?ref=12345"
    )
    Bot.run({
      command: "/Url",
      options: {
        data: options.data,
        ads: options.ads,
        message_id: options.message_id
      }
    })
    return
  }
  var text =
    "* Campaign #" +
    json.ads +
    "* - Link URL 🔗\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*URL*: *" +
    message +
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
    link: message,
    title: json.title,
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
}
//join
if (see == "join") {
  if (message.includes("@") | message.includes("https://t.me/")) {
    if (message.includes("@")) {
      var na = "https://t.me/" + message.slice(1)
    } else {
      var na = message
    }
    if (message.includes("https://t.me/")) {
      var chan = "@" + message.split("https://t.me/")[1]
    } else {
      var chan = message
    }
    var text =
      "*Campaign #" +
      json.ads +
      "* - Channel / Group 📣\n\n*Title*: " +
      json.title +
      "\n*Description*: " +
      json.description +
      "\n\n*Channel*: *" +
      chan +
      "\nURL*: *" +
      na +
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
      name: chan,
      link: na,
      title: json.title,
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
  } else {
    Bot.sendMessage(
      "❌ Your channel url has to start like this: @channel or https://t.me/channel"
    )
    Bot.run({
      command: "/Url",
      options: {
        data: options.data,
        ads: options.ads,
        message_id: options.message_id
      }
    })
    return
  }
}
Bot.sendMessage("Your ad has been updated.")
