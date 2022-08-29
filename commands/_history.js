/*CMD
  command: /history
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var history = User.getProperty("history")
var list = 10
if (!history) {
  Bot.sendMessage("You don't have any transactions yet.")
} else {
  var all = ""
  for (var ind = 0; ind < list; ind++) {
    var add = history.split("\n\n")[ind]
    if (add) {
      var all = all + add + "\n\n"
    }
  }

  Bot.sendMessage("*Here are your latest transactions*:\n\n" + all, {
    disable_web_page_preview: true
  })
}

