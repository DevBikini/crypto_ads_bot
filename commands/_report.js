/*CMD
  command: /report
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var id = params.split("&")[0]
var promotion = params.split("&")[1]
var nwh = params.split("&")[2]
var include = id ||promotion ||nwh
if (!include) {
  return
}
Bot.sendKeyboard(
  "🚫 Not Working,🔞 Porn/NSFW\n⚠️ Illegal/Scam,🦠 Virus/Malware\n❌ Cancel",
  "Please tell us why you are reporting this advertisement."
)
Bot.run({
  command: "/kind_report",
  options: { id: id, promotion: promotion, nwh: nwh }
})
