/*CMD
  command: /watch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👁 Watch Ads
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params | !request.data) {
  Bot.sendMessage(
    "That is not a recognized command.\n\nUse the /help command to see all my commands."
  )
  return
}
if (!canRun()) {
  return
}
User.setProperty("last_run_at" + params, Date.now(), "integer")
Api.deleteMessage({ message_id: request.message.message_id })
Bot.sendMessage("*✋🏻 Hold on..... processing your task*...")
Bot.run({
  command: "/watched",
  options: { ad: params }
})
//function
function canRun() {
  var last_run_at = User.getProperty("last_run_at" + params)
  if (!last_run_at) {
    return true
  }
  var minutes = (Date.now() - last_run_at) / 100 / 10
  var minutes_in_day = 3 * 3
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 3)
  next -= wait_hours * 3
 //var wait_minutes = Math.floor(next)
  //var seconds = Math.floor((next - wait_minutes) * 3)
  if (minutes < minutes_in_day) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "Wait 10 seconds",
      show_alert: true
    })
    return
  }
  return true
}

