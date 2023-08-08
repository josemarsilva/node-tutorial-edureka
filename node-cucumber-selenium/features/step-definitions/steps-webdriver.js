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
function waitUntilTitleIs(driver, timeout) {
  return new Promise((resolve, reject) => {
    driver.wait(until.titleIs(''), timeout)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
function quitWebdriver(driver) {
    console.log(' - quitWebdriver()');
    return new Promise((resolve, reject) => {
      // Now use the asynchronous sleep function and resolve the outer promise after 3 seconds
      console.log(' - wait a little bit');
      sleep(3000)
        .then(() => {
          console.log(' - driver.quit()');
          driver.quit();
          console.log(' - quit() is done');
          driver = null;
          resolve(); // Resolve the outer promise when the entire operation is complete
        })
        .catch((err) => {
          reject(err); // Reject the outer promise if any error occurs during the process
        });
    });
  }


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
module.exports = {
    getWebdriver: getWebdriver,
    quitWebdriver: quitWebdriver
};