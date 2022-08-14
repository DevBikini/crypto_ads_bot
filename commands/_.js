/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var forward = User.getProperty("forward")
if (forward == "forward-bot") {
  if (!request.forward_from || request.forward_from.is_bot == "false") {
    Bot.sendMessage("‼️* This is not forward from bot message*")
    return
  }
  var bot_name = request.forward_from.username
  Bot.sendMessage(
    "*➕ Promotion\nCreation\n\nSend now this information*: `link`\n\n*🔎 Now send the link to the bot that you want to promote*.\n(All the traffic will be sent to that link)"
  )
  User.setProperty("forward", "", "string")
  Bot.run({ command: "/bot#2", options: { name: bot_name } })
  return
}
//view post
var forward = User.getProperty("forward")
if (forward == "forward-view") {
  var cur = Bot.getProperty("admin_currency")
  var cpc = Bot.getProperty("admin_cpc_view")
  if (!request.forward_from_chat) {
    var chat = request.chat.username
    var message_id = request.message_id
  } else {
    var message_id = request.forward_from_message_id
    var chat = request.forward_from_chat.username
  }
  Api.forwardMessage({
    from_chat_id: user.telegramid,
    message_id: request.message_id
  })
  Bot.sendMessage(
    "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *" +
      cpc +
      " " +
      cur +
      "*\n\n*➡️ Enter a value in " +
      cur +
      ":*"
  )
  User.setProperty("forward", "", "string")
  Bot.run({
    command: "/post#1",
    options: {
      name: "@" + chat,
      link: "https://t.me/" + chat + "/" + message_id,
      real_id: request.message_id
    }
  })
  return
}
//second
if (forward) {
  if (!request.forward_from || request.forward_from.is_bot == "false") {
    Bot.sendMessage("‼️* This is not forward from bot message*")
    return
  }
  var forward_co = forward.split(" ")[0]
  var dol = forward.split(" ")[1]
  var ads = Bot.getProperty("all_in_ads")
  var json = ads.list[forward_co]
  var cur = Bot.getProperty("admin_currency")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", json.owner)
  var payout = Libs.ResourcesLib.anotherUserRes("payout", json.owner)
  if (!balance.value()) {
    var balko = payout.value() + 0.001
    var green = payout.add(-json.cpc)
  } else {
    if (json.cpc > balance.value() + 0.001) {
      var balko = payout.value() + 0.001
      var green = payout.add(-json.cpc)
    } else {
      var green = balance.add(-json.cpc)
      var balko = balance.value() + 0.001
    }
  }
  var sec = User.getProperty("User-" + json.ads)
  if (
    sec |
    (json.clicks > json.total) |
    (json.cpc > balko) |
    (json.status == "Disabled 🚫")
  ) {
    //security ads
    Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
    return
  }
  var botta = request.forward_from.username
  if (botta == json.name) {
    //complete task
    var u_balance = Libs.ResourcesLib.userRes("payout")
    u_balance.add(+json.cpc)
    //owner remove balance
    green
    Api.deleteMessage({
      message_id: dol
    })
    Bot.sendMessage("✅* Task Completed*!\nYou earned: " + json.cpc + " " + cur)
    //referral
    var referrer = Libs.ReferralLib.getAttractedBy()
    if (referrer) {
      var referrerRes = Libs.ResourcesLib.anotherUserRes(
        "payout",
        referrer.telegramid
      )
      var amount = json.cpc * 0.15 // it is 15%
      //referral earnings
      referrerRes.add(+amount)
    }
    User.setProperty("User-" + json.ads, "done", "string")
    Bot.runCommand("/bots")
    if (json.clicks + 2 > json.total) {
      var status = "Disabled 🚫"
    } else {
      if (json.cpc > balko) {
        var status = "⏸ *Paused*: budget reached or out of funds."
      } else {
        if (json.status == "Disabled 🚫") {
          var status = "Disabled 🚫"
        } else {
          var status = "Enabled ✅"
        }
      }
    }
    var add = Bot.getProperty("all_in_ads", { list: {} })
    add.list[forward_co] = {
      ads: forward_co,
      name: json.name,
      link: json.link,
      title: json.title,
      description: json.description,
      cpc: json.cpc,
      clicks: json.clicks + 1,
      budget: json.budget,
      total: json.total,
      status: status,
      owner: json.owner,
      promotion: json.promotion
    }
    Bot.setProperty("all_in_ads", add, "json")
    User.setProperty("forward", "", "string")
  } else {
    Bot.sendMessage("‼️* This is not forward from bot message*")
  }
  return
}
Bot.sendMessage(
  "That is not a recognized command.\n\nUse the /help command to see all my commands."
)

