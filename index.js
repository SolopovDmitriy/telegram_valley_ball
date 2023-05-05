const { Telegraf, Markup } = require("telegraf")
const debug = require('./helpers')
// require("dotenv").config()
//const bot = new Telegraf('5870489932:AAEDyyKsm5pM2alxx9Vg9SFkpFAWS3TwuNM')
//const bot = new Telegraf('process.env.BOT_TOKEN')
console.log('Bot has been started ...')
// const bot = new Telegraf('process.env.BOT_TOKEN', {
//     // polling: true
//     polling: {
//         interval: 300,
//         autoStart: true,
//         params: {
//             timeout: 10
//         }
//     }
// })
// bot.on(/\/start/, msg => {
//     const { id } = msg.chat
//     bot.sendMessage(id, debug(msg))
// })
// const bot = new Telegraf('5870489932:AAEDyyKsm5pM2alxx9Vg9SFkpFAWS3TwuNM')

//     return ctx.reply(console.log(ctx.message));
// });
const bot = new Telegraf('5870489932:AAEDyyKsm5pM2alxx9Vg9SFkpFAWS3TwuNM')
// bot.command("/start", ctx => {
//     return console.log(ctx.message);
// });
bot.on('message', ctx => {
   return  console.log(ctx.message)
})
//bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('Like'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('Like'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))