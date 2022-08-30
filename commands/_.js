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

if (request) {
  if (message.split("_@")[0] == "/post") {
    var channel = Bot.getProperty("ad_channel", { list: {} })
    var chn = "@" + message.split("_@")[1]
    var min_price = channel.list[chn].price
    var balance = Libs.ResourcesLib.userRes("balance")
    var payout = Libs.ResourcesLib.userRes("payout")
    var bal = Getbalance(payout, balance, min_price)
    if (bal.value() < min_price) {
      Bot.sendMessage("You dont have balance")
      return
    }
    return
  }
  if (message.split("_@")[0] == "/report") {
    Bot.sendMessage("Report send to the administration.")
    return
  }
  var forward = User.getProperty("forward")
  //forward bot
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
    var chat = GetChatName().chat
    var message_id = GetChatName().message_id
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
    var sec = User.getProperty("User-" + json.ads)
    var fee = json.cpc * 0.6
    if (sec | (json.clicks > json.total) | (json.status == "Disabled 🚫")) {
      //security ads
      Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
      return
    }
    if (json.cpc < Getbalance(payout, balance, json.cpc).value()) {
      var botta = request.forward_from.username
      if (botta !== json.name) {
        Bot.sendMessage("‼️* This is not forward from bot message*")
        return
      }
      //complete task
      var u_balance = Libs.ResourcesLib.userRes("payout")
      u_balance.add(+fee)
      //owner remove balance
      Getbalance(payout, balance, json.cpc).add(-json.cpc)
      Api.deleteMessage({
        message_id: dol
      })
      Bot.sendMessage("✅* Task Completed*!\nYou earned: " + fee + " " + cur)
      //referral
      var referrer = Libs.ReferralLib.getAttractedBy()
      if (referrer) {
        var referrerRes = Libs.ResourcesLib.anotherUserRes(
          "payout",
          referrer.telegramid
        )
        var amount = fee * 0.15 // it is 15%
        //referral earnings
        referrerRes.add(+amount)
      }
      User.setProperty("User-" + json.ads, "done", "string")
      Bot.runCommand("/bots")
      var status = Getstatus(json)
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
      Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
    }
    return
  }
}
//function
function Getbalance(payout, balance, cpc) {
  if (!balance.value()) {
    return payout
  }
  if (balance.value() < cpc) {
    return payout
  }

  return balance
}
//chatname && message_id
function GetChatName() {
  if (!request.forward_from_chat) {
    return { chat: request.chat.username, message_id: request.message_id }
  }
  return {
    chat: request.forward_from_chat.username,
    message_id: request.forward_from_message_id
  }
}
//get status
function Getstatus(json) {
  if (json.clicks + 2 > json.total) {
    return "Disabled 🚫"
  }
  if (json.cpc > Getbalance(payout, balance, cpc).value()) {
    return "⏸ *Paused*: budget reached or out of funds."
  }
  if (json.status == "Disabled 🚫") {
    return "Disabled 🚫"

    return "Enabled ✅"
  }
}
