const { When } = require('@cucumber/cucumber');

const { stepFillSubmit } = require('./steps-autenticar-acesso-e-login.js');
const { getWebdriver } = require('./steps-webdriver');

let driver = require('./given-autenticar-acesso-e-login.js');


When('Autenticar credenciais acessar o sistema {string} {string}', {timeout: 60* 1000}, async (login, password) =>{
  console.log('Autenticar credenciais acessar o sistema', login, password);
  stepFillSubmit(getWebdriver(), login, password) ;

});

