const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .usingServer('https://standalone-chrome-no5g.onrender.com/wd/hub') // 更新為實際的 Selenium Server URL
        .setChromeOptions(new chrome.Options())
        .build();

    try {
        await driver.manage().window().maximize();
        await driver.get('http://www.google.com');
        let title = await driver.getTitle();
        console.log(title);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await driver.quit();
    }
})();
