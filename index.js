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

const handleIsThursday = (msg) => {
  if (isThursday()) {
    bot.sendMessage(msg.chat.id, "Giammi è chiuso il giovedì. 😢");

    return true;
  }

  return false;
};

regexMap.forEach((value, key) => {
  bot.onText(key, (msg, _) => {
    if (handleIsThursday(msg)) return;

    bot.sendMessage(msg.chat.id, value, {
      reply_to_message_id: msg.message_id,
    });
  });
});

bot.onText(/.*SIUM.*/i, (msg, _) => {
  if (handleIsThursday(msg)) return;

  const image =
    "https://tenor.com/view/eleven-elevensports-forthefans-goal-happy-gif-19850600";

  bot.sendAnimation(msg.chat.id, image, {
    reply_to_message_id: msg.message_id,
  });
});

bot.onText(/.*Barusso.*/i, (msg, _) => {
  if (handleIsThursday(msg)) return;

  const image =
    "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2022/02/15/1644933321-usare-questo.jpg?_=1644933321";

  bot.sendPhoto(msg.chat.id, image, { reply_to_message_id: msg.message_id });
});

bot.onText(/.*MUIS*/i, (msg, _) => {
  if (handleIsThursday(msg)) return;

  const image =
    "https://media.gqitalia.it/photos/5c0667d1263bb2e4e4285e38/3:2/w_1600%2Cc_limit/photo0.jpg";

  bot.sendPhoto(msg.chat.id, image, { reply_to_message_id: msg.message_id });
});
