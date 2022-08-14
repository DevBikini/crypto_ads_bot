/*CMD
  command: /setA
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name = options.name
if (name == "currency") {
  Bot.setProperty("admin_currency", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "bot cpc") {
  Bot.setProperty("admin_cpc_bot", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "bot budget") {
  Bot.setProperty("admin_budget_bot", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "visit cpc") {
  Bot.setProperty("admin_cpc_visit", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "visit budget") {
  Bot.setProperty("admin_budget_visit", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "join cpc") {
  Bot.setProperty("admin_cpc_join", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "join budget") {
  Bot.setProperty("admin_budget_join", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "view cpc") {
  Bot.setProperty("admin_cpc_view", message, "string")
  Bot.sendMessage("Updated.")
  return
}
if (name == "view budget") {
  Bot.setProperty("admin_budget_view", message, "string")
  Bot.sendMessage("Updated.")
  return
}

