let Discord = require('discord.io');
let logger = require('winston');
let auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
let bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

// Get Emojis
const emojiList = bot.emojis.map(e=>e.toString()).join(" ");

// Listener for responding to chat messages
bot.on('message', function (user, userID, channelID, message, evt) {
    // Commands that start with "!"
    if (message.substring(0, 1) == '!') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            // !listemojis
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: emojiList
                });
            break;

            // !gamble
            case 'gamble':
                if (user == "KyloRennington") {
                    // get beaned kyle
                    bot.sendMessage({
                        to: channelID,
                        message: "you lose"
                    });
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: "you win"
                    });
                }
            break;

            // !northerngeese posts northen geese faces
            case 'northerngeese':
                bot.sendMessage({
                    to: channelID,
                    message: ":yetinate: :james: :kaleb:"
                });
            break;

            // !southerngeese posts southern geese faces
            case 'southerngeese':
            bot.sendMessage({
                to: channelID,
                message: ":coolbob: :bill: :dan: :jacob: :jake: :kelly: :kyle: :noah:"
            });
        break;
        }
     }

     // Responds to "honk" with "honk". This is the most important feature.
     if (message.toLowerCase().includes("honk") && user != "honkbot") {
         bot.sendMessage({
             to: channelID,
             message: "honk"
         });
     }

     // Also honkbot hanks now
     if (message.toLowerCase().includes("hank") && user != "honkbot") {
        bot.sendMessage({
            to: channelID,
            message: "hank"
        });
    }

    /* Fuck Strodl Bot
    Does the mocking spongebob text thing to whatever Strodl Bot says. I should extend this to include other users.
    If there is no text to mock, simply tells Strodl Bot to fuck off. */
     if (user == "Strodl Bot") {
        let mocking_message = ""
        let sufficiently_mocked = false
        for (let i = 0; i < message.length; i++) {
            letter = message.charAt(i)
            if (Math.random() <= 0.5) {
                letter = letter.toUpperCase()
                sufficiently_mocked = true
            }
            mocking_message += letter
        }
        if (mocking_message == "" || sufficiently_mocked == false) {
            mocking_message = "fuck u Strodl Bot"
        }
        bot.sendMessage({
            to: channelID,
            message: mocking_message
        });
     }
});

