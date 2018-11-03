const request = require('supertest');
logger = require('./logger.js')
app = require('./app.js')(logger)

describe('routes ok', () => {
    test('It should response the GET method', (done) => {
        request(app).get("/").then((response) => {
            expect(response.statusCode).toBe(200)
            done()
        })
    });
    test('It should response the GET method', (done) => {
        request(app).get("/commentaires").then((response) => {
            expect(response.statusCode).toBe(200)
            done()
        })
    });
})

describe('routes 404', () => {
    test('It should response 404', (done) => {
        request(app).get("/troululu").then((response) => {
            expect(response.statusCode).toBe(404)
            done()
        })
    });
})