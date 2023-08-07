const {Given} = require('@cucumber/cucumber');

// Selenium e Chrome Web Driver
const { Builder, By, Key, until, ServiceBuilder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { Select } = require('selenium-webdriver/lib/webdriver');

// Set up chromeDriverPath
const chromeDriverPath = 'C:\\GitHome\\ws-github-03\\study-node\\chromedriver\\chrome-win64';

// Set up options and ServiceBuilder
const options = new chrome.Options();
options.setChromeBinaryPath(chromeDriverPath);
options.addArguments(`--chromeDriver="${chromeDriverPath}"`);
options.addArguments('--headless');

const chromeDriverService = new ServiceBuilder()
  .loggingTo('C:\\GitHome\\ws-github-03\\study-node\\chromedriver\\chromedriver.log')
  .enableVerboseLogging()
  .build();


Given('Acessar o sistema pela url no ambiente desejado {string}', async (url) =>{
    console.log('Acessar o sistema pela url no ambiente desejado', '||', 'url=', url);
    // New Web Driver ...
    console.log('driver = new Builder()');
    const driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .setChromeService(chromeDriverService)
        .build();
    // Navigate to Login page ...
    console.log('Navigate to Login page ', url);
}
);