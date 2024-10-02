module.exports = {
    'Visite the website': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .pause(3000)
            .end();
    }
}