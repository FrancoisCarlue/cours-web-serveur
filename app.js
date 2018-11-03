var express = require('express')
var app = express()

module.exports = (logger) => {

    app.set('view engine', 'ejs')

    app.use(function(req, res, next) {
        logger.debug("url: " + req.originalUrl);
        next();
    })

    app.use("/static", express.static(__dirname + '/assets'))


    app.get('/', (request, response) => {
        response.render("home")
    })

    app.get('/commentaires', (request, response) => {
        response.render("commentaires")
    })


    // 404 aucune interception
    app.use(function (req, res, next) {
        res.status(404).render("404")
        logger.info("404 for: " + req.originalUrl)
    })

    return app
}