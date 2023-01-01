bot.on('chat', (username, message, prefix) => {
    if  (message.startsWith( config.prefix + 'hi')) {
      bot.chat("/tp mikegamingfun")
    }
    return;
  })
    