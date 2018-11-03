var webdriverio = require('webdriverio');


var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
}

browser = webdriverio
    .remote(options)
    .init()


browser.url('http://localhost:8080')
    .getTitle().then( (title) => {
    console.log("titre : " + title)
})
    .click("a[href='commentaires']")
    .getTitle().then( (title) => {
    console.log("titre : " + title)
})
    .click("a*=Da")
    .getTitle().then( (title) => {
    console.log("titre : " + title)
})
    .catch(function(err) {
        console.log(err);
    })
    .end()