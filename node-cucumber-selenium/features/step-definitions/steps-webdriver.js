console.log('steps-webdriver.js');

const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const sleep = require('./steps-util-commons.js');


let driver = null;


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
function getWebdriver() {
  console.log('getWebdriver()');

    // Is driver undefined
    if (driver == null) {
      // Set up chromeDriverPath
      console.log(' - Set up chromeDriverPath');
      const chromeDriverPath = 'C:\\GitHome\\ws-github-03\\study-node\\chromedriver\\chrome-win64';

      // Set up options
      console.log(' - Set up options');
      const options = new chrome.Options();
      options.setChromeBinaryPath(chromeDriverPath);
      // Set the path to ChromeDriver executable
      options.addArguments(`--chromeDriver="${chromeDriverPath}"`);

      // Set up driver
      console.log(' - Set up driver');
      driver = new webdriver.Builder()
          .forBrowser("chrome")
          .setChromeOptions(options)
          .build();
      console.log(' - Driver is ready');
  }

  return driver;

};


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
function quitWebdriver(driver) {
  console.log(' - quitWebdriver()');

  console.log(' - wait a little bit');
  console.log(' - driver.quit()');
  // driver.quit();
  // console.log(' - quit() is done');
  // driver = null;

}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
module.exports = {
    getWebdriver: getWebdriver,
    quitWebdriver: quitWebdriver
};