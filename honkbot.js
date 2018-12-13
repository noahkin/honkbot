/*
HONKBOT
he honk
https://github.com/noahkin/honkbot
*/

const Discord = require('discord.io');
const auth = require('./auth.json');
const logging = require('./log.js');

const users = {
    'noah': 'Noah',
    'jordan': 'jhoover',
    'kyle': 'KyloRennington',
};

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
                let sayMessage = makeBotSay(user, args);
                bot.sendMessage({
                    to: channelID,
                    message: sayMessage
                });
                break;

            // !gamble
            case 'gamble':
                if (user === users['kyle']) {
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
            case 'northerngeese':
                if (!message.guild) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'guild error honk'
                    });
                    break;
                }
                let yetinate = message.guild.emojis.find(emoji => emoji.name === "yetinate");
                let james = message.guild.emojis.find(emoji => emoji.name === "james");
                let kaleb = message.guild.emojis.find(emoji => emoji.name === "kaleb");
                bot.sendMessage({
                    to: channelID,
                    message: `${yetinate} ${james} ${kaleb}`
                });
                break;

            // !southerngeese posts southern geese faces
            case 'southerngeese':
                if (!message.guild) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'guild error honk'
                    });
                    break;
                }
                let coolbob = message.guild.emojis.find(emoji => emoji.name === 'coolbob');
                let bill = message.guild.emojis.find(emoji => emoji.name === 'bill');
                let dan = message.guild.emojis.find(emoji => emoji.name === 'dan');
                let jacob = message.guild.emojis.find(emoji => emoji.name === 'jacob');
                let jake = message.guild.emojis.find(emoji => emoji.name === 'jake');
                let kelly = message.guild.emojis.find(emoji => emoji.name === 'kelly');
                let kyle = message.guild.emojis.find(emoji => emoji.name === 'kyle');
                let noah = message.guild.emojis.find(emoji => emoji.name === 'noah');
                bot.sendMessage({
                    to: channelID,
                    message: `${coolbob} ${bill} ${dan} ${jacob} ${jake} ${kelly} ${kyle} ${noah}`
                });
                break;
        }
    }

    // Responds to "h[oa]nk" with "h[oa]nk". This is the most important feature.
    let honkMsg = honkMsg(msg);
    if (honkMsg && usr !== 'honkbot') {
        bot.sendMessage({
            to: channelID,
            message: honkMsg
        });
    }

    if (user === 'Strodl Bot') {
        let mockingMessage = fuckStrodlBot();
        bot.sendMessage({
            to: channelID,
            message: mockingMessage
        });
    }
});

const makeBotSay = (usr, wordArr) => {
    let sayMsg = '';

    if (usr !== users['noah'] && usr !== users['jordan']) {
        return 'ur not the boss of me';
    }

    for (let i = 0; i < wordArr.length; i++) {
        sayMsg += wordArr[i];
        sayMsg += ' ';
    }

    return sayMsg;
};

const honkMsg = msg => {
    const regex = /^.*(h[ao]nk).*$/;
    let match = msg.toLowerCase().match(regex);

    if (!match) {
        return '';
    }

    return match[1];
};

/*
* Fuck Strodl Bot
* Does the mocking spongebob text thing to whatever Strodl Bot says. I should extend this to include other users.
* If there is no text to mock, simply tells Strodl Bot to fuck off.
*/
const fuckStrodlBot = msg => {
    let mockingMsg = '';
    let sufficientlyMocked = false;

    for (let i = 0; i < msg.length; i++) {
        let letter = msg.charAt(i);
        if (Math.random() <= 0.5) {
            letter = letter.toUpperCase();
            sufficientlyMocked = true
        }
        mockingMsg += letter
    }
    if (mockingMsg === '' || !sufficientlyMocked) {
        mockingMsg = 'fuck u Strodl Bot';
    }

    return mockingMsg;
};

module.exports = {honkMsg, fuckStrodlBot, makeBotSay};