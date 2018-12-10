let logger = require('winston');


globalLoggingSettings = () => {
    logger.remove(logger.transports.Console);
    logger.add(logger.transports.Console, {
        colorize: true
    });
    logger.level = 'debug';
};

readyLogging = (botName, botId) => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(botName + ' - (' + botId + ')');
};

module.exports = {globalLoggingSettings, readyLogging};
