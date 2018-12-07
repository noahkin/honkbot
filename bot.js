var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // gamble
            case 'gamble':
                if (user == "MR. BEAN SHAPIRO") {
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
         }
     }
     if (message.toLowerCase().includes("honk") && user != "honkbot") {
         bot.sendMessage({
             to: channelID,
             message: "honk"
         });
     }
     if (user == "Strodl Bot") {
        let mocking_message = ""
        for (var i = 0; i < message.length; i++) {
            letter = message.charAt(i)
            if (Math.random() <= 0.5) {
                letter = letter.toUpperCase()
            }
            mocking_message += letter
        }
        if (mocking_message == "") {
            mocking_message = "fuck u Strodl Bot"
        }
        bot.sendMessage({
            to: channelID,
            message: mocking_message
        });
     }
});

