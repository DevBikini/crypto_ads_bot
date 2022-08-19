/*CMD
  command: /setB
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name = params.split(" ")[0]
var center = params.split(" ")[1]
if (name == "set" && center == "currency") {
  Bot.sendMessage("Enter your currency")
  Bot.run({ command: "/setA", options: { name: "currency" } })
  return
}
//bot
if (name == "bot" && center == "cpc") {
  Bot.sendMessage("Enter your minimum cpc per click")
  Bot.run({ command: "/setA", options: { name: "bot cpc" } })
  return
}
if (name == "bot" && center == "budget") {
  Bot.sendMessage("Enter your minimum budget")
  Bot.run({ command: "/setA", options: { name: "bot budget" } })
  return
}
//visit
if (name == "visit" && center == "cpc") {
  Bot.sendMessage("Enter your minimum cpc per click")
  Bot.run({ command: "/setA", options: { name: "visit cpc" } })
  return
}
if (name == "visit" && center == "budget") {
  Bot.sendMessage("Enter your minimum budget")
  Bot.run({ command: "/setA", options: { name: "visit budget" } })
  return
}
//join
if (name == "join" && center == "cpc") {
  Bot.sendMessage("Enter your minimum cpc per click")
  Bot.run({ command: "/setA", options: { name: "join cpc" } })
  return
}
if (name == "join" && center == "budget") {
  Bot.sendMessage("Enter your minimum budget")
  Bot.run({ command: "/setA", options: { name: "join budget" } })
  return
}
//view
if (name == "view" && center == "cpc") {
  Bot.sendMessage("Enter your minimum cpc per click")
  Bot.run({ command: "/setA", options: { name: "view cpc" } })
  return
}
if (name == "view" && center == "budget") {
  Bot.sendMessage("Enter your minimum budget")
  Bot.run({ command: "/setA", options: { name: "view budget" } })
  return
}
