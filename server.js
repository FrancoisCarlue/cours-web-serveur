logger = require('./logger.js')
app = require('./app.js')(logger)

port = 8080
app.listen(port);

logger.info("c'est parti: http://localhost:" + port.toString())
logger.silly("mon kiki")