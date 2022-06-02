const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/.*grazie.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, grazie a te");
})

bot.onText(/.*thank you.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, thanks to you");
})

bot.onText(/.*Gracias.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, gracias a ti");
})

bot.onText(/.*Dankesch[o|ö]n.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nein, nein, dank an Sie");
})

bot.onText(/.*Merci.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Non, non, merci à vous.");
})

bot.onText(/.*Obrigad[o|a].*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Não, não, graças à você");
})
