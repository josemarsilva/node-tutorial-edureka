const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { Select } = require('selenium-webdriver/lib/webdriver');


// Set up chromeDriverPath
const chromeDriverPath = 'C:\\GitHome\\ws-github-03\\study-node\\chromedriver\\chrome-win64';

// mainScript()
async function mainScript() {
  // Set up the Chrome driver with the correct binary path
  const options = new chrome.Options();
  options.setChromeBinaryPath(chromeDriverPath);

  // Set the path to ChromeDriver executable
  options.addArguments(`--chromeDriver="${chromeDriverPath}"`);

  console.log('driver = new Builder()');
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {

    const loopCounter = 1;
    const nameCounter = 20;
    for (let i = 0; i < loopCounter; i++) {

      // Navigate to Url ...
      const urlSite = "https://google.com.br";
      console.log('get ', urlSite);
      await driver.get(urlSite.toString());

      // Get element By attributes  ...
      const inputTextSearch = await driver.findElement(By.name("q"));
      await inputTextSearch.sendKeys("Hello, World!", Key.RETURN);

      // Wait for the search results to load (just for demonstration purposes)
      console.log('Waiting until title page ... ');
      await driver.wait(until.titleContains("Hello, World!"), 5000);

      // Sleep 
      console.log('Sleeping ... ');
      sleep(10);

    
    }


  } finally {
    console.log('finally');
    // Close the browser
    await driver.quit();
  }
}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////

mainScript();
