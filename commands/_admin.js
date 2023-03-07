/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_admin")
if (!admin) {
  Bot.setProperty("admin_admin", user.telegramid, "string")
  adminLogin()
}
if (admin == user.telegramid) {
  adminLogin()
  return
}
function adminLogin() {
  var currency = GetPropM("admin_currency")
  var cpc_bot = GetPropM("admin_cpc_bot")
  var budget_bot = GetPropM("admin_budget_bot")
  var cpc_visit = GetPropM("admin_cpc_visit")
  var budget_visit = GetPropM("admin_budget_visit")
  var cpc_join = GetPropM("admin_cpc_join")
  var budget_join = GetPropM("admin_budget_join")
  var cpc_view = GetPropM("admin_cpc_view")
  var budget_view = GetPropM("admin_budget_view")
  var cpc_instagram = GetPropM("admin_cpc_instagram")
  var budget_instagram = GetPropM("admin_budget_instagram")
  var cpc_twitter = GetPropM("admin_cpc_twitter")
  var budget_twitter = GetPropM("admin_budget_twitter")
  Api.sendMessage({
    text:
      "Hello admin *" +
      [user.first_name] +
      " " +
      [user.last_name] +
      "* Setup your admin panel\n\n\n⚙️ Your current Setup\n*_______________________*\n ▪️ Currency:\n*" +
      currency +
      "\n_______________________*\n🤖 Message Bots\n\n▪️ Mini. CPC per Click in Bot ad\n*" +
      cpc_bot +
      "*\n▪️ Mini. Budget in Bot ad\n*" +
      budget_bot +
      "\n_______________________*\n💻 Visit Sites\n\n▪️ Mini. CPC per Click in visit site ad\n*" +
      cpc_visit +
      "*\n▪️ Mini. Budget in visit site ad\n*" +
      budget_visit +
      "\n_______________________*\n📣 Join Chats\n\n▪️ Mini. CPC per Click in join chat ad\n*" +
      cpc_join +
      "*\n▪️ Mini. Budget in join chat ad\n*" +
      budget_join +
      "\n_______________________*\n👁 Watch Ads\n\n ▪️ Mini. CPC per Click in watch ad\n*" +
      cpc_view +
      "*\n▪️ Mini. Budget in Instagram ad\n*" +
      budget_view +
      "\n_______________________*\n🖼️ Instagram\n\n ▪️ Mini. CPC per Click in Instagram ad\n*" +
      cpc_instagram +
      "*\n▪️ Mini. Budget in Twitter ad\n*" +
      budget_instagram +
      "\n_______________________*\n💬Twitter\n\n ▪️ Mini. CPC per Click in Twitter ad\n*" +
      cpc_twitter +
      "*\n▪️ Mini. Budget in Twitter ad\n*" +
      budget_twitter +
      "*",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: button()
    }
  })
}
function button() {
  return [
    [
      { text: "Min. Bot CPC", callback_data: "/setB bot cpc" },
      { text: "Min. Bot Budget", callback_data: "/setB bot budget" }
    ],
    [
      { text: "Min. Visit CPC", callback_data: "/setB visit cpc" },
      { text: "Min. Visit Budget", callback_data: "/setB visit budget" }
    ],
    [
      { text: "Min. Join CPC", callback_data: "/setB join cpc" },
      { text: "Min. Join Budget", callback_data: "/setB join budget" }
    ],
    [
      { text: "Min. Watch CPC", callback_data: "/setB view cpc" },
      { text: "Min. Watch Budget", callback_data: "/setB view budget" }
    ],
    [
      { text: "Min. Instagram CPC", callback_data: "/setB instagram cpc" },
      { text: "Min. IG Budget", callback_data: "/setB instagram budget" }
    ],
    [
      { text: "Min. Twitter CPC", callback_data: "/setB twitter cpc" },
      { text: "Min. Tw Budget", callback_data: "/setB twitter budget" }
    ],
    [{ text: "Currency", callback_data: "/setB set currency" }]
  ]
}
//function
function GetPropM(name) {
  return Bot.getProperty(name)
}

