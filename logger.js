const winston = require('winston');
const logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(),
        winston.format.simple())
});

// dev mode logger
logger.add(new winston.transports.Console({
    level: 'silly'
}));

//file
//logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }))
//logger.add(new winston.transports.File({ filename: 'combined.log' }))

module.exports = logger