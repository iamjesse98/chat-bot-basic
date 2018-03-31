const RiveScript = require('rivescript')

const bot = new RiveScript()

const chat = userMessage => {
    return new Promise((resolve, reject) => {
        bot.loadFile(`brain.rive`, _ => {
            // console.log('brain ready')
            bot.sortReplies()
            resolve(bot.reply(`local-user`, userMessage))
        }, error => reject(error))
    })
}

chat('Temperature please?')
    .then(reply => console.log(reply))
    .catch(err => console.log(err))

chat('I am feeling hot here')
    .then(reply => console.log(reply))
    .catch(err => console.log(err))