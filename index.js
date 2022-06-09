const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const regexMap = new Map();
regexMap.set(/.*Grazie.*/i, "Nono, grazie a te");
regexMap.set(/.*Thank you.*/i, "Nono, thanks to you");
regexMap.set(/.*Gracias.*/i, "Nono, gracias a ti");
regexMap.set(/.*Dankesch[o|ö]n.*/i, "Nein, nein, dank an Sie");
regexMap.set(/.*Merci.*/i, "Non, non, merci à vous.");
regexMap.set(/.*Obrigad[o|a].*/i, "Não, não, graças à você");
regexMap.set(/.*Kiitos.*/i, "Yhdeksäs, kiitos sinulle");
regexMap.set(/.*Spasib[a|o].*/i, "девятый, спасибо тебе");
regexMap.set(/.*Aitah.*/i, "Uheksas, tänu sulle");

const isThursday = () => new Date().getDay() === 4;

regexMap.forEach((value, key) => {
  bot.onText(key, (msg, _) => {
    if (isThursday()) {
      bot.sendMessage(msg.chat.id, "Giammi è chiuso il giovedì. 😢");
      return;
    }

    bot.sendMessage(msg.chat.id, value);
  });
});

bot.onText(/.*SIUM.*/i, (msg, _) => {
  if (isThursday()) {
    bot.sendMessage(msg.chat.id, "Giammi è chiuso il giovedì. 😢");
    return;
  }

  sendAnimation(bot, {
    chatId: msg.chat.id,
    value:
      "https://tenor.com/view/eleven-elevensports-forthefans-goal-happy-gif-19850600",
  });
});
