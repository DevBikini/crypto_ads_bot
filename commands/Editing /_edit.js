/*CMD
  command: /edit
  help: 
  need_reply: false
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
var number_ads = params.split(" ")[1]
var json = ads.list[number_ads]
var name = json.name
var link = json.link
var title = json.title
var description = json.description
var cpc = json.cpc
var budget = json.budget
var clicks = json.clicks
var total = json.total
var status = json.status
var know = params.split(" ")[0]
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✏️ Edit",
  show_alert: false
})
if (know == "bot") {
  var button = [
    [
      {
        text: "Edit title",
        callback_data: "/edits title " + number_ads + " bot"
      },
      {
        text: "Edit description",
        callback_data: "/edits description " + number_ads + " bot"
      }
    ],
    [
      {
        text: "Edit URL",
        callback_data: "/edits url " + number_ads + " bot"
      },
      {
        text: "Edit CPC",
        callback_data: "/edits cpc " + number_ads + " bot"
      }
    ],
    [
      {
        text: "Edit budget",
        callback_data: "/edits budget " + number_ads + " bot"
      },
      {
        text: "🗑 Delete",
        callback_data: "/edits delete " + number_ads + " bot"
      }
    ],
    [
      {
        text: "⬅️ Back",
        callback_data: "/edits back " + number_ads + " bot"
      }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Bot 🤖\n\n*Title*: " +
    title +
    "\n*Description*: " +
    description +
    "\n\n*Bot*: *@" +
    name +
    "\nURL*: *" +
    link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    budget +
    " " +
    cur +
    "\n*CPC*: " +
    cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total +
    " total / " +
    clicks +
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
  return
}
//visit
if (know == "visit") {
  var button = [
    [
      {
        text: "Edit title",
        callback_data: "/edits title " + number_ads + " visit"
      },
      {
        text: "Edit description",
        callback_data: "/edits description " + number_ads + " visit"
      }
    ],
    [
      {
        text: "Edit URL",
        callback_data: "/edits url " + number_ads + " visit"
      },
      {
        text: "Edit CPC",
        callback_data: "/edits cpc " + number_ads + " visit"
      }
    ],
    [
      {
        text: "Edit budget",
        callback_data: "/edits budget " + number_ads + " visit"
      },
      {
        text: "🗑 Delete",
        callback_data: "/edits delete " + number_ads + " visit"
      }
    ],
    [
      {
        text: "⬅️ Back",
        callback_data: "/edits back " + number_ads + " visit"
      }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Link URL 🔗\n\n*Title*: " +
    title +
    "\n*Description*: " +
    description +
    "\n\n*URL*: *" +
    link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    budget +
    " " +
    cur +
    "\n*CPC*: " +
    cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total +
    " total / " +
    clicks +
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
  return
}
//join
if (know == "join") {
  var button = [
    [
      {
        text: "Edit title",
        callback_data: "/edits title " + number_ads + " join"
      },
      {
        text: "Edit description",
        callback_data: "/edits description " + number_ads + " join"
      }
    ],
    [
      {
        text: "Edit URL",
        callback_data: "/edits url " + number_ads + " join"
      },
      {
        text: "Edit CPC",
        callback_data: "/edits cpc " + number_ads + " join"
      }
    ],
    [
      {
        text: "Edit budget",
        callback_data: "/edits budget " + number_ads + " join"
      },
      {
        text: "🗑 Delete",
        callback_data: "/edits delete " + number_ads + " join"
      }
    ],
    [
      {
        text: "⬅️ Back",
        callback_data: "/edits back " + number_ads + " join"
      }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Channel / Group 📣\n\n*Title*: " +
    title +
    "\n*Description*: " +
    description +
    "\n\n*Channel*: *" +
    name +
    "\nURL*: *" +
    link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    budget +
    " " +
    cur +
    "\n*CPC*: " +
    cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total +
    " total / " +
    clicks +
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
  return
}
//view
if (know == "view") {
  var button = [
    [
      {
        text: "Edit title",
        callback_data: "/edits title " + number_ads + " view"
      },
      {
        text: "Edit description",
        callback_data: "/edits description " + number_ads + " view"
      }
    ],
    [
      {
        text: "Edit URL",
        callback_data: "/edits url " + number_ads + " view"
      },
      {
        text: "Edit CPC",
        callback_data: "/edits cpc " + number_ads + " view"
      }
    ],
    [
      {
        text: "Edit budget",
        callback_data: "/edits budget " + number_ads + " view"
      },
      {
        text: "🗑 Delete",
        callback_data: "/edits delete " + number_ads + " view"
      }
    ],
    [
      {
        text: "⬅️ Back",
        callback_data: "/edits back " + number_ads + " view"
      }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Post views 📃\n\n*Title*: " +
    title +
    "\n*Channel*: *" +
    name +
    "\nURL*: *" +
    link +
    "\nStatus*: " +
    status +
    "\n\n*Daily budget*: " +
    budget +
    " " +
    cur +
    "\n*CPC*: " +
    cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    total +
    " total / " +
    clicks +
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
  return
}

