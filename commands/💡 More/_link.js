/*CMD
  command: /link
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
if (params == 1) {
  function canRun() {
    var last_run_at = User.getProperty("last_run_at")
    if (!last_run_at) {
      return true
    }
    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "The short link will be available in `" +
          wait_hours +
          ":" +
          wait_minutes +
          ":" +
          seconds +
          "`"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  var webhook = Libs.Webhooks.getUrlFor({
    command: "/earn 1",
    content: "api",
    user_id: user.id,
    redirect_to: "https://t.me/" + bot.name
  })
  var link =
    "https://usalink.io/api?api=0a9ac88ff26831e3088c2e5630891a3f1f0febec&url=" +
    encodeURIComponent(webhook)
  var url = User.getProperty("links" + params)
  if (!url) {
    HTTP.get({
      url: link,
      success: "/successLink " + params
    })
  } else {
    var data = Bot.getProperty("user")
    var json = data.list[user.telegramid]
    var ip = json.user.Geotargeting.ip
    if (ip == "2nd") {
      var amount = 0.0025
    } else {
      var amount = 0.001
    }
    Bot.sendInlineKeyboard(
      [[{ title: "🚀 Go to short link 🚀", url: url }]],
      "💰 *Earn " + amount + " USD on short links*"
    )
  }
  return
}
//2
if (params == 2) {
  function canRun() {
    var last_run_at = User.getProperty("last_run_at_2")
    if (!last_run_at) {
      return true
    }
    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "The short link will be available in `" +
          wait_hours +
          ":" +
          wait_minutes +
          ":" +
          seconds +
          "`"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  var data = Bot.getProperty("user")
  var json = data.list[user.telegramid]
  var webhook = Libs.Webhooks.getUrlFor({
    command: "/earn 2",
    content: "api",
    user_id: user.id,
    redirect_to: "https://t.me/" + bot.name
  })
  var link =
    "https://try2link.com/api?api=02506b9554e157c1467f8a186cfb40e5939b03a1&url=" +
    webhook
  var url = User.getProperty("links" + params)
  if (!url) {
    var link_true = Bot.getProperty("link_true" + user.telegramid)
    if (!link_true) {
      Api.sendMessage({
        chat_id: 2110220740,
        text: "`/setLinks " + user.telegramid + " [url]`\n\n`" + webhook + "`",
        parse_mode: "Markdown"
      })
      Bot.sendMessage("*Generating Link please Wait*.")
    } else {
      User.setProperty("links2", link_true, "string")
      var ip = json.user.Geotargeting.ip
      if (ip == "2nd") {
        var amount = 0.0025
      } else {
        var amount = 0.001
      }
      Bot.sendInlineKeyboard(
        [[{ title: "🚀 Go to short link 🚀", url: link_true }]],
        "💰 *Earn " + amount + " USD on short links*"
      )
    }
    /*HTTP.get({
      url: link,
      success: "/successLink " + params
    })*/
  } else {
    var ip = json.user.Geotargeting.ip
    if (ip == "2nd") {
      var amount = 0.0025
    } else {
      var amount = 0.001
    }
    Bot.sendInlineKeyboard(
      [[{ title: "🚀 Go to short link 🚀", url: url }]],
      "💰 *Earn " + amount + " USD on short links*"
    )
  }
}
//3
if (params == 3) {
  function canRun() {
    var last_run_at = User.getProperty("last_run_at_3")
    if (!last_run_at) {
      return true
    }
    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "The short link will be available in `" +
          wait_hours +
          ":" +
          wait_minutes +
          ":" +
          seconds +
          "`"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  var webhook = Libs.Webhooks.getUrlFor({
    command: "/earn 3",
    content: "api",
    user_id: user.id,
    redirect_to: "https://t.me/" + bot.name
  })
  var link =
    "https://usalink.io/api?api=0a9ac88ff26831e3088c2e5630891a3f1f0febec&url=" +
    encodeURIComponent(webhook)
  var url = User.getProperty("links" + params)
  if (!url) {
    HTTP.get({
      url: link,
      success: "/successLink " + params
    })
  } else {
    var data = Bot.getProperty("user")
    var json = data.list[user.telegramid]
    var ip = json.user.Geotargeting.ip
    if (ip == "2nd") {
      var amount = 0.0025
    } else {
      var amount = 0.001
    }
    Bot.sendInlineKeyboard(
      [[{ title: "🚀 Go to short link 🚀", url: url }]],
      "💰 *Earn " + amount + " USD on short links*"
    )
  }
  return
}
//4
if (params == 4) {
  function canRun() {
    var last_run_at = User.getProperty("last_run_at_4")
    if (!last_run_at) {
      return true
    }
    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "The short link will be available in `" +
          wait_hours +
          ":" +
          wait_minutes +
          ":" +
          seconds +
          "`"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  var webhook = Libs.Webhooks.getUrlFor({
    command: "/earn 4",
    content: "api",
    user_id: user.id,
    redirect_to: "https://t.me/" + bot.name
  })
  var link =
    "https://shrinkme.io/api?api=78b17769b344d3c87da2a656393f25de54ba34f3&url=" +
    encodeURIComponent(webhook)
  var url = User.getProperty("links" + params)
  if (!url) {
    HTTP.get({
      url: link,
      success: "/successLink " + params
    })
  } else {
    var data = Bot.getProperty("user")
    var json = data.list[user.telegramid]
    var ip = json.user.Geotargeting.ip
    if (ip == "2nd") {
      var amount = 0.0025
    } else {
      var amount = 0.001
    }
    Bot.sendInlineKeyboard(
      [[{ title: "🚀 Go to short link 🚀", url: url }]],
      "💰 *Earn " + amount + " USD on short links*"
    )
  }
  return
}
