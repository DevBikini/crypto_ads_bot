/*CMD
  command: 🤑 Task Earn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dudu = Libs.ResourcesLib.userRes("dudu")
var dede = Libs.ResourcesLib.userRes("dede")
Bot.sendInlineKeyboard(
  [
    [
      { title: "1. Check", command: "/checking 1" },
      { title: "2. Check", command: "/checking 2" }
    ],
    [{ title: "3. Check", command: "/checking 3" }]
  ],
  "🤑 *Task Earn* 🤑\n\n1️⃣ Earn *0.007 USD* by doing ShortLink Do 10 Task\n✅ *Complete*: " +
    dudu.value() +
    "/10\n*_______________________________*\n2️⃣ Earn *0.0014 USD* by doing Inviting friends family do task 5 referral.\n✅ *Complete*: " +
    dede.value() +
    "/5\n*_______________________________*\n3️⃣ Earn *0.0007 USD* daily\n✅ *Complete*: 1/1\n*_______________________________*"
)
//0.003
