const { By, until, Key } = require("selenium-webdriver");
const { promisify } = require('util');


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
async function stepNavigateToLogin(driver, url) {
  console.log('stepNavigateToLogin()');

  const emailLoginById = "formly_2_input_username_0";

  // Navigate to Url ...
  console.log(' - Navigate to Url', url);
  try{
    await  driver.get(url.toString());  
  } catch (err) {
    console.error(err);
  }

  // Wait until Main page is available ...
  console.log(' - Wait until page element available',emailLoginById);
  try{
    await driver.wait(until.elementLocated(By.id(emailLoginById)), 1);
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
  const emailLoginById = "formly_2_input_username_0";
  const passwordById = "formly_2_input_password_1";
  const enterByClassName = "btn"

  // login
  try {
    console.log(' - Fill', emailLoginById);
    var inputTextEmailLogin = await driver.findElement(By.id(emailLoginById));
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
module.exports = {
    stepNavigateToLogin: stepNavigateToLogin,
    stepFillSubmit: stepFillSubmit
};