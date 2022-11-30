/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_admin")
var data = Bot.getProperty("user")
var msg =
  "🔥 *New Promo Code*\n\n[Redeem Now](https://t.me/Crypto_Ad_GroupChat/784)"
var disab = false
var okay = 1
var no_broad = Bot.getProperty("broadcast#no" + okay)
var number1 = Broadcast_number(no_broad)
var number = 0
if (admin == user.telegramid) {
  for (var index in data.list) {
    var tgid = data.list[index].user.telegramid
    var number = number + 1
    var nsko9 = parseFloat(number1) - 9
    if (number == nsko9) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        //on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko8 = parseFloat(number1) - 8
    if (number == nsko8) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        //on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko7 = parseFloat(number1) - 7
    if (number == nsko7) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        // on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko6 = parseFloat(number1) - 6
    if (number == nsko6) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        // on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko5 = parseFloat(number1) - 5
    if (number == nsko5) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        //on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko4 = parseFloat(number1) - 4
    if (number == nsko4) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        // on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko3 = parseFloat(number1) - 3
    if (number == nsko3) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        //on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko2 = parseFloat(number1) - 2
    if (number == nsko2) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        // on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    var nsko1 = parseFloat(number1) - 1
    if (number == nsko1) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        //on_result: "/onbrr",
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
    if (number == number1) {
      Api.sendMessage({
        chat_id: tgid,
        text: msg,
        on_result: "/onbrrSet " + number1,
        on_error: "/onbrr " + tgid,
        disable_web_page_preview: disab,
        parse_mode: "Markdown"
      })
      //Bot.sendMessageToChatWithId(tgid, msg, disab)
    }
  }
}
Bot.setProperty("toog", number, "string")
if (!no_broad) {
  Bot.setProperty("broadcast#no" + okay, 10, "string")
  Bot.sendMessage("Total : " + number1 + "/" + number)
}
//function
function Broadcast_number(no_broad) {
  if (no_broad) {
    return no_broad
  }
  return 10
}
