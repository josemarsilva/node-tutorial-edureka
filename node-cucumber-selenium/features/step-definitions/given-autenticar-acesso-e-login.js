const {Given, Before, After, setDefaultTimeout} = require('@cucumber/cucumber');

const {getWebdriver, quitWebdriver} = require('./steps-webdriver.js');
const {stepNavigateToLogin} = require('./steps-autenticar-acesso-e-login.js');
const {sleep} = require('./steps-util-commons.js');

// setDefaultTimeout( 60 * 1000); // 60 milliseconds


Before(function() {
    console.log('Before');
    let driver = getWebdriver();
    sleep(1000);
        
});


After(function() {
    console.log('After');
    quitWebdriver(getWebdriver());

});


Given('Acessar o sistema pela url no ambiente desejado {string}', (url) =>{
    console.log('Acessar o sistema pela url no ambiente desejado', url);
    stepNavigateToLogin(driver, url);

});
