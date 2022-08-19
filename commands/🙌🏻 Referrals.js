/*CMD
  command: 🙌🏻 Referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /referrals
CMD*/

Libs.ReferralLib.setLinkPrefix("ref")
var reflink = Libs.ReferralLib.getLink()
var refcount = Libs.ReferralLib.getRefCount()
Bot.sendKeyboard(
  "🏠 Menu",
  "🔎 *You have " +
    refcount +
    " referrals.\n\nTo refer people to the bot, send them this link\n" +
    reflink +
    "*\n\n💵 You will earn *15% of your friends earnings from tasks*, and *5% if your friend deposits*\n\nYou can withdraw affiliate income or spend it on ADS!"
)
