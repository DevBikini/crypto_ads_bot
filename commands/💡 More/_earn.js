/*CMD
  command: /earn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var dudu = Libs.ResourcesLib.userRes("dudu")
var data = Bot.getProperty("user")
var json = data.list[user.telegramid]
var ip = json.user.Geotargeting.ip
if (ip == "2nd") {
  var amount = 0.00025
} else {
  var amount = 0.0005
}
var daks = User.getProperty("links" + params)
//1
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
      User.setProperty("links" + params, "", "string")
      User.setProperty("trrf", "", "string")
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
  User.setProperty("last_run_at", Date.now(), "integer")
  if (daks) {
    var balance = Libs.ResourcesLib.userRes("payout")
    balance.add(+amount)
    dudu.add(+1)
    Bot.sendMessage("You earned *" + amount + " USD* for short links!")
    User.setProperty("links" + params, "", "string")
  } else {
    Bot.sendMessage("Go to /more “🔗 Shork Link” Click URL")
    User.setProperty("last_run_at", "", "integer")
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
      User.setProperty("links" + params, "", "string")
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
  User.setProperty("last_run_at_2", Date.now(), "integer")
  if (daks) {
    var balance = Libs.ResourcesLib.userRes("payout")
    balance.add(+amount)
    dudu.add(+1)
    Bot.sendMessage("You earned *" + amount + " USD* for short links!")
    User.setProperty("links" + params, "", "string")
  } else {
    Bot.sendMessage("Go to /more “🔗 Shork Link” Click URL")
    User.setProperty("last_run_at_2", "", "integer")
  }
  return
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
      User.setProperty("links" + params, "", "string")
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
  User.setProperty("last_run_at_3", Date.now(), "integer")
  if (daks) {
    var balance = Libs.ResourcesLib.userRes("payout")
    balance.add(+amount)
    dudu.add(+1)
    Bot.sendMessage("You earned *" + amount + " USD* for short links!")
    User.setProperty("links" + params, "", "string")
  } else {
    Bot.sendMessage("Go to /more “🔗 Shork Link” Click URL")
    User.setProperty("last_run_at_3", "", "integer")
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
      User.setProperty("links" + params, "", "string")
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
  User.setProperty("last_run_at_4", Date.now(), "integer")
  if (daks) {
    var balance = Libs.ResourcesLib.userRes("payout")
    balance.add(+amount)
    dudu.add(+1)
    Bot.sendMessage("You earned *" + amount + " USD* for short links!")
    User.setProperty("links" + params, "", "string")
  } else {
    Bot.sendMessage("Go to /more “🔗 Shork Link” Click URL")
    User.setProperty("last_run_at_4", "", "integer")
  }
  return
}
