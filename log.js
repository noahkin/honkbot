let logger = require('winston');


globalLoggingSettings = () => {
    logger.remove(logger.transports.Console);
    logger.add(logger.transports.Console, {
        colorize: true
    });
    logger.level = 'debug';
};

readyLogging = () => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
};

module.exports = {globalLoggingSettings, readyLogging};
