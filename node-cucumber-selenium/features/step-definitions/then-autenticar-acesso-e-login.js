const {Then} = require('@cucumber/cucumber');

const { getWebdriver } = require('./steps-webdriver');

const { stepAssertPage } = require('./steps-autenticar-acesso-e-login.js');


Then('Página principal de entrada do sistema será apresentada', {timeout: 60* 1000}, () =>{
    console.log('Página principal de entrada do sistema será apresentada');
    stepAssertPage(getWebdriver()) ;

});