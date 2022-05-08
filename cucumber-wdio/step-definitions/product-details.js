const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 0;

Given ('I am on the home page with product list',async()=>{
    await browser.url('/');
    await browser.pause(pauseTime);

});

When(/^I click on the product title "(.*)"$/, async (text) => {
    let singleProduct = await $('#i1 h3');
    await singleProduct.click();
    
  });

  Then(/^I see page with product "(.*)" details$/, async (text) => {
    
    await $('.backButton').waitForExist();
    expect(await $('#i1')).toHaveTextContaining(text);
    await browser.pause(pauseTime);
});