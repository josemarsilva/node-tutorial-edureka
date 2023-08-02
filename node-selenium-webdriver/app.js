const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

async function openGoogleBr() {
  console.log("Set up the Chrome driver");
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log("Navigate to the Google Brazil website");
    await driver.get("http://google.com.br");

    // Add any additional actions you want to perform on the page
    // For example, you can search for something in Google
    const searchInput = await driver.findElement(By.name("q"));
    await searchInput.sendKeys("Hello, World!", Key.RETURN);

    // Wait for the search results to load (just for demonstration purposes)
    await driver.wait(until.titleContains("Hello, World!"), 1000);

    // Print the page title
    const pageTitle = await driver.getTitle();
    console.log("Page title:", pageTitle);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

openGoogleBr();
