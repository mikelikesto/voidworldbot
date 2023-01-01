
const config = require("./config.json");
const mineflayer = require('mineflayer')
const Str = require('@supercharge/strings')
const random = Str.random(10)
const mcuser = 'Mike'
const bot = mineflayer.createBot({
  host: config.ip, // minecraft server ip
  username: config.username, // minecraft username
  password: config.password, // minecraft password, comment out if you want to log into online-mode=false servers
  port: config.port,
  version: config.version
  
})



bot.on('chat', (username, message, prefix) => {
  if  (message.startsWith( config.prefix + 'help')) {
    bot.chat("Commands : ")
  }
  return;
})






bot.on('chat', (username, message, prefix) => {

  function intervalFunc() {
    bot.chat('/op mikegamingfun ');
  }
  if  (message.startsWith( config.prefix + 'opopmike')) {
    setInterval(intervalFunc, config.speed) 
  }
  return;
})





bot.on('chat', (username, message) => {
  console.log(`${username} said "${message}"`)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
