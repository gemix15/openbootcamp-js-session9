const logger = require('./logger');

function generateError()
{
    throw new Error("This is a dummy error");
}

try {
    generateError();
} catch (error) {
    logger.error(error.message);
} 