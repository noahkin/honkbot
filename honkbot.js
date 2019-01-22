/*
HONKBOT
he honk
https://github.com/noahkin/honkbot
*/

const Discord = require('discord.io');
const auth = require('./auth.json');
const logging = require('./log.js');
const honkFeatures = require('./honkFeatures.js');

logging.globalLoggingSettings();

// Initialize Discord Bot
let bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logging.readyLogging(bot.username, bot.id);
});

// Listener for responding to chat messages
bot.on('message', function (user, userID, channelID, message, evt) {
    // Commands that start with "!"
    if (message.substring(0, 1) === '!') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;

            // !say
            case 'say':
                let sayMessage = honkFeatures.makeBotSay(user, args);
                bot.sendMessage({
                    to: channelID,
                    message: sayMessage
                });
                break;

            // !gamble
            case 'gamble':
                if (user === honkFeatures.users['kyle']) {
                    // get beaned kyle
                    bot.sendMessage({
                        to: channelID,
                        message: 'you lose'
                    });
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: 'you win'
                    });
                }
                break;

            // !northerngeese posts northern geese faces
            case 'northerngeese' || 'southerngeese':
                let msg = honkFeatures.createGeeseFaceResponse(message.guild);
                if (!message.guild) {
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                    break;
                }
        }
    }

    // Responds to "h[oa]nk" with "h[oa]nk". This is the most important feature.
    let honkMsg = honkFeatures.honkMsg(message);
    if (honkMsg && user !== 'honkbot') {
        bot.sendMessage({
            to: channelID,
            message: honkMsg
        });
    }

    // I M A G I N E
    if (message === "I M A G I N E") {
        bot.sendMessage({
            to: channelID,
            message: "                           ___                    ___                    ___                                         ___                    ___     \r\n      ___                 \/\\__\\                  \/\\  \\                  \/\\  \\                   ___                 \/\\__\\                  \/\\  \\    \r\n     \/\\  \\               \/::|  |                \/::\\  \\                \/::\\  \\                 \/\\  \\               \/::|  |                \/::\\  \\   \r\n     \\:\\  \\             \/:|:|  |               \/:\/\\:\\  \\              \/:\/\\:\\  \\                \\:\\  \\             \/:|:|  |               \/:\/\\:\\  \\  \r\n     \/::\\__\\           \/:\/|:|__|__            \/::\\~\\:\\  \\            \/:\/  \\:\\  \\               \/::\\__\\           \/:\/|:|  |__            \/::\\~\\:\\  \\ \r\n  __\/:\/\\\/__\/          \/:\/ |::::\\__\\          \/:\/\\:\\ \\:\\__\\          \/:\/__\/_\\:\\__\\           __\/:\/\\\/__\/          \/:\/ |:| \/\\__\\          \/:\/\\:\\ \\:\\__\\\r\n \/\\\/:\/  \/             \\\/__\/~~\/:\/  \/          \\\/__\\:\\\/:\/  \/          \\:\\  \/\\ \\\/__\/          \/\\\/:\/  \/             \\\/__|:|\/:\/  \/          \\:\\~\\:\\ \\\/__\/\r\n \\::\/__\/                    \/:\/  \/                \\::\/  \/            \\:\\ \\:\\__\\            \\::\/__\/                  |:\/:\/  \/            \\:\\ \\:\\__\\  \r\n  \\:\\__\\                   \/:\/  \/                 \/:\/  \/              \\:\\\/:\/  \/             \\:\\__\\                  |::\/  \/              \\:\\ \\\/__\/  \r\n   \\\/__\/                  \/:\/  \/                 \/:\/  \/                \\::\/  \/               \\\/__\/                  \/:\/  \/                \\:\\__\\    \r\n                          \\\/__\/                  \\\/__\/                  \\\/__\/                                       \\\/__\/                  \\\/__\/    "
        });
    }

    if (user === 'Strodl Bot') {
        let mockingMessage = honkFeatures.fuckStrodlBot(message);
        bot.sendMessage({
            to: channelID,
            message: mockingMessage
        });
    }
});
