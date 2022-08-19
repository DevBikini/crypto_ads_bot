/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var characters = "0123456789"

function Generate(length) {
  var result = ""
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}
function TotalClick(data, length) {
  var d_fol = length - 1
  var d_data = data.split(".")[0].slice(0, length - d_fol)
  if (d_data.includes("0")) {
    var l_data = data.split(".")[1]
    var ohn = ""
    for (var i = 0; i < l_data.length + 1; i++) {
      var l_gud = l_data.slice(0, i)
      if (
        l_gud.includes("1") |
        l_gud.includes("2") |
        l_gud.includes("3") |
        l_gud.includes("4") |
        l_gud.includes("5") |
        l_gud.includes("6") |
        l_gud.includes("7") |
        l_gud.includes("8") |
        l_gud.includes("9")
      ) {
        var ohn = l_gud
        //var vbb = parseFloat(l_data.slice(i - 1))
        return "10" + ohn.slice(0, i - 1)
      }
    }
    return
  }
  return "1"
}
var myads = Libs.ResourcesLib.userRes("myads")
var payout = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
var add = Bot.getProperty("user", { list: {} })
if (add.list[user.telegramid]) {
  var json = add.list[user.telegramid]
  add.list[user.telegramid] = {
    user: {
      name: json.user.username,
      first_name: json.user.first_name,
      last_name: json.user.last_name,
      telegramid: json.user.telegramid,
      Geotargeting: {
        ip: json.user.Geotargeting.ip,
        countryCode: json.user.Geotargeting.countryCode
      },
      info: {
        balance: balance.value() + payout.value(),
        payout_balance: payout.value(),
        ads: myads.value(),
        refcount: Libs.ReferralLib.getRefCount()
      }
    }
  }
  Bot.setProperty("user", add, "json")
}
function No_More_Ads() {
  return Bot.sendMessage(
    "*‼️Aw snap! There are no more ads available*.\n\nPress /newad to create a new task\n\n🌐 [News](https://t.me/Crypto_Ad_Channel) [Group](https://t.me/Crypto_Ad_GroupChat)"
  )
}
