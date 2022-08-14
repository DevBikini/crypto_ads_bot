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
  for (var ind = 0; ind < list + 1; ind++) {
    var add = history.split("\n\n")[ind]
    if (add) {
      var all = all + add + "\n\n"
    }
  }
}
Bot.sendMessage("*Here are your latest transactions*:\n\n" + all,{disable_web_page_preview:true})

//User.setProperty("history", "hello1\n\nhi1\n\nhello2\n\nhi2\n\nhello3\n\nhi3\n\nhello4\n\nhi4\n\nhello5\n\nhi5", "string")
//User.setProperty("history","","string")
