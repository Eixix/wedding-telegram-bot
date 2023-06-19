const TelegramBot = require('node-telegram-bot-api');
const schedule = require("node-schedule");


const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
    schedule.scheduleJob('0 0 * * 2', () => {
        bot.sendMessage(msg.chat.id, "Noch 4 Tage bis zur Hochzeit!");
    });
    schedule.scheduleJob('0 0 * * 3', () => {
        bot.sendMessage(msg.chat.id, "Noch 3 Tage bis zur Hochzeit!");
    });
    schedule.scheduleJob('0 0 * * 4', () => {
        bot.sendMessage(msg.chat.id, "Noch 2 Tage bis zur Hochzeit!");
    });
    schedule.scheduleJob('0 12 * * 4', () => {
        bot.sendMessage(msg.chat.id, "Noch 1.5 Tage bis zur Hochzeit!");
    });
    schedule.scheduleJob('0 0 * * 5', () => {
        bot.sendMessage(msg.chat.id, "Morgen ist die Hochzeit!");
    });
    schedule.scheduleJob('0 9 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Aufwachen Leute heute ist eure Hochzeit!!!");
    });
    schedule.scheduleJob('0 12 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Die Trauung ist ja schon in 3 Stunden, der Wahnsinn!");
    });
    schedule.scheduleJob('30 14 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Noch eine halbe Stunde bis zu Trauung, ist da schon jemand nervös?!");
    });
    schedule.scheduleJob('45 14 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Noch 15 Minuten und ja es es kommt noch was...");
    });
    schedule.scheduleJob('50 14 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Noch 10 Minuten...");
    });
    schedule.scheduleJob('55 14 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Noch 5 Minuten...");
    });
    schedule.scheduleJob('59 14 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Noch 1 Minute...");
    });
    schedule.scheduleJob('50-59 59 15 * * 6', () => {
        bot.sendMessage(msg.chat.id, "Gleich gehts los!");
    });

    bot.sendMessage(chatId, "Bot gestartet!");
});