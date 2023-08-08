const { When } = require('@cucumber/cucumber');

const {stepFillSubmit} = require('./steps-autenticar-acesso-e-login.js');
const {getWebdriver} = require('./steps-webdriver.js');
const {sleep} = require('./steps-util-commons.js');


When('Autenticar credenciais acessar o sistema {string} {string}', (login, password) =>{
    console.log('Autenticar credenciais acessar o sistema', login, password);
    // stepFillSubmit(getWebdriver(), login, password);

});
