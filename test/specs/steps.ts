// @ts-nocheck
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I login with valid credentials', async () => {
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
});

Then('I should see the secure area', async () => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
});
