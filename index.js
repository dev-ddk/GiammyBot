const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/.*Grazie.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, grazie a te", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Thank you.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, thanks to you", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Gracias.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nono, gracias a ti", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Dankesch[o|ö]n.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Nein, nein, dank an Sie", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Merci.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Non, non, merci à vous.", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Obrigad[o|a].*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Não, não, graças à você", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Kiitos.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Yhdeksäs, kiitos sinulle", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Spasib[a|o].*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "девятый, спасибо тебе", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Aitah.*/i, (msg, _) => {
    bot.sendMessage(msg.chat.id, "Uheksas, tänu sulle", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*Barusso.*/i, (msg, _) => {
    bot.sendPhoto(msg.chat.id, "https://www.romatalkradio.it/wp-content/uploads/2020/05/barusso.jpg", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*SIUM*/i, (msg, _) => {
    bot.sendAnimation(msg.chat.id, "https://tenor.com/view/eleven-elevensports-forthefans-goal-happy-gif-19850600", {reply_to_message_id: msg.message_id});
})

bot.onText(/.*MUIS*/i, (msg, _) => {
    bot.sendPhoto(msg.chat.id, "https://media.gqitalia.it/photos/5c0667d1263bb2e4e4285e38/3:2/w_1600%2Cc_limit/photo0.jpg", {reply_to_message_id: msg.message_id});
})