require('dotenv').config();

module.exports = {
    'Fluxo Principal: Realizar login com credenciais válidas': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .setValue('#email', process.env.LOGIN_EMAIL)
            .waitForElementPresent('#login_form > div > div:nth-child(1)')
            .setValue('#passwd', process.env.LOGIN_PASSWORD)
            .waitForElementPresent('#login_form > div > div:nth-child(2)')
            .click('#SubmitLogin')
            .saveScreenshot('tests_output/screenshots/login.test/fluxo-principal.png')
            .end();
    },

    'Fluxo de Erro: Realizar login com credenciais inválidas': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .setValue('#email', 'incorrectuser@gmail.com')
            .waitForElementPresent('#login_form > div > div:nth-child(1)')
            .setValue('#passwd', 'teste123')
            .waitForElementPresent('#login_form > div > div:nth-child(2)')
            .click('#SubmitLogin')
            .waitForElementPresent('#center_column > div.alert.alert-danger')
            .assert.containsText('#center_column > div.alert.alert-danger', 'There is 1 error')
            .assert.containsText('#center_column > div.alert.alert-danger > ol > li', 'Authentication failed.')
            .saveScreenshot('tests_output/screenshots/login.test/fluxo-de-erro.png')
            .end();
    },

    'Fluxo Alternativo: Realizar login com senha esquecida': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .setValue('#email', process.env.LOGIN_EMAIL)
            .waitForElementPresent('#login_form > div > div:nth-child(1)')
            .click('#SubmitLogin')
            .waitForElementPresent('#center_column > div.alert.alert-danger')
            .assert.containsText('#center_column > div.alert.alert-danger', 'There is 1 error')
            .assert.containsText('#center_column > div.alert.alert-danger > ol > li', 'Password is required.')
            .saveScreenshot('tests_output/screenshots/login.test/fluxo-alternativo-1.png')
            .end();
    },

    'Fluxo Alternativo: Realizar login com email esquecido': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .setValue('#passwd', process.env.LOGIN_PASSWORD)
            .waitForElementPresent('#login_form > div > div:nth-child(1)')
            .click('#SubmitLogin')
            .waitForElementPresent('#center_column > div.alert.alert-danger')
            .assert.containsText('#center_column > div.alert.alert-danger', 'There is 1 error')
            .assert.containsText('#center_column > div.alert.alert-danger > ol > li', 'An email address required.')
            .saveScreenshot('tests_output/screenshots/login.test/fluxo-alternativo-2.png')
            .end();
    },

    'Fluxo de Exceção: Login com campos obrigatórios em branco': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .click('#SubmitLogin')
            .waitForElementPresent('#center_column > div.alert.alert-danger')
            .assert.containsText('#center_column > div.alert.alert-danger', 'There is 1 error')
            .assert.containsText('#center_column > div.alert.alert-danger > ol > li', 'An email address required.')
            .saveScreenshot('tests_output/screenshots/login.test/5-fluxo-de-exceção.png')
            .end();
    },

    'Fluxo de Segurança: Exibir Senha Mascarada': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .setValue('#email', process.env.LOGIN_EMAIL)
            .waitForElementPresent('#login_form > div > div:nth-child(1)')
            .setValue('#passwd', process.env.LOGIN_PASSWORD)
            .waitForElementPresent('#login_form > div > div:nth-child(2)')
            .getAttribute('#passwd', 'type', function(result) {
                this.assert.equal(result.value, 'password', 'A senha está mascarada corretamente');
            })
            .click('#SubmitLogin')
            .saveScreenshot('tests_output/screenshots/login.test/fluxo-de-segurança.png')
            .end();
    },

    'Fluxo Completo: Realizar login, navegação e logout': (browser) => {
        browser
            .url('http://www.automationpractice.pl/index.php')
            .waitForElementVisible('.login')
            .click('.login')
            .waitForElementVisible('#login_form > h3')
            .assert.containsText('#login_form > h3', 'ALREADY REGISTERED?')
            .setValue('#email', process.env.LOGIN_EMAIL)
            .waitForElementPresent('#login_form > div > div:nth-child(1)')
            .setValue('#passwd', process.env.LOGIN_PASSWORD)
            .waitForElementPresent('#login_form > div > div:nth-child(2)')
            .click('#SubmitLogin')
            .waitForElementPresent('#header > div.nav > div > div > nav > div:nth-child(2) > a.logout')
            .assert.urlContains('controller=my-account')
            .click('#header > div.nav > div > div > nav > div:nth-child(2) > a.logout')
            .assert.urlEquals('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
            .saveScreenshot('tests_output/screenshots/login.test/fluxo-completo.png')
            .end();
    }
}