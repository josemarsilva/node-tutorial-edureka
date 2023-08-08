const { By, Key, until } = require("selenium-webdriver");

const {expect} = require('chai');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const { sleep } = require('./steps-util-commons.js');


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
async function stepNavigateToLogin(driver, url) {
  console.log('stepNavigateToLogin()');

  const loginById = "formly_2_input_username_0";


  // Navigate to Url ...
  console.log(' - Navigate to Url', url);
  try{
    await  driver.get(url.toString());  
  } catch (err) {
    console.error(err);
  }

  // Wait until Main page is available ...
  console.log(' - Wait until page element available',loginById);
  try{
    await driver.wait(until.elementLocated(By.id(loginById)), 5000);
  } catch (err) {
    console.error(err);
  }
  console.log(' - Page is available');

}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
async function stepFillSubmit(driver, login, password) {
  console.log('stepFillSubmit()');
  const loginById = "formly_2_input_username_0";
  const passwordById = "formly_2_input_password_1";
  const enterByClassName = "btn"

  await sleep(3000);

  // login
  try {
    console.log(' - Fill', loginById);
    var inputTextEmailLogin = await driver.findElement(By.id(loginById));
  } catch (err) {
    console.error(err);
  }
  inputTextEmailLogin.sendKeys(login);

  // password
  try {
    console.log(' - Fill', passwordById);
    var inputTextPassword = await driver.findElement(By.id(passwordById));
  } catch (err) {
    console.error(err);
  }
  inputTextPassword.sendKeys(password);

  // enter
  try {
    console.log(' - Submit', enterByClassName);
    var enter = await driver.findElement(By.className(enterByClassName));
  } catch (err) {
    console.error(err);
  }
  enter.click();

}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
async function stepAssertPage(driver) {
  console.log('stepAssertPage()');
  sleep(1000);
  expect(1).equals(1);
}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
module.exports = {
    stepNavigateToLogin,
    stepFillSubmit,
    stepAssertPage
};