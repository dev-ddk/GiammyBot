const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/.*Grazie.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, grazie a te");
})

bot.onText(/.*Thank you.*/i, (msg, _) => {
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

bot.onText(/.*Kiitos.*/i, (msg, _) => {
    bot.sendMessage(msg.chat_id, "Yhdeksäs, kiitos sinulle");
})

bot.onText(/.*Spasib[a|o].*/i, (msg, _) => {
    bot.sendMessage(msg.chat_id, "девятый, спасибо тебе");
})

bot.onText(/.*Aitah.*/i, (msg, _) => {
    bot.sendMessage(msg.chat_id, "Uheksas, tänu sulle");
})

bot.onText(/.*SIUM.*/i, (msg, _) => {
    bot.sendAnimation(msg.chat.id, "https://tenor.com/view/eleven-elevensports-forthefans-goal-happy-gif-19850600");
})
