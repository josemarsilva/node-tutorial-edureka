const { Given, Before, After, When } = require('@cucumber/cucumber');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { By, Key, until } = require("selenium-webdriver");

const { getWebdriver } = require('./steps-webdriver');
const { stepNavigateToLogin, stepFillSubmit } = require('./steps-autenticar-acesso-e-login.js');
const { sleep } = require('./steps-util-commons.js');

let driver = null;

Before(function() {
  console.log('Before');
  driver = getWebdriver();
    
});


After(function() {
  console.log('After');
 
});


Given('Acessar o sistema pela url no ambiente desejado {string}', {timeout: 60* 1000}, async (url) =>{
  console.log('Acessar o sistema pela url no ambiente desejado', url);
  stepNavigateToLogin(driver, url) ;  

});
