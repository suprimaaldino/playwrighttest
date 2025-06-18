// tests/logintest.spec.js  <-- IMPORTANT: File name and location (inside 'tests' folder)
import { test } from '@playwright/test'; // Only Playwright imports
import LoginPage from '../pages/loginpage.js'; // Path to your LoginPage.js
import { users, urls } from '../config/testData.js'; // Path to your testData.js

// Use test.describe to group your tests
test.describe('Login Functionality', () => {
  // Declare your page object instance here, accessible to all tests in this describe block
  let loginPage;

  // Use test.beforeEach to set up the page object before each test
  test.beforeEach(async ({ page }) => { // Playwright injects the 'page' object here
    loginPage = new LoginPage(page);
    await loginPage.navigate(urls.login);
  });

  // Playwright test blocks
  test('Successful login with valid credentials', async () => {
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.verifyLoginSuccess(urls.inventory);
  });

  test('Failed login with invalid credentials', async () => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    await loginPage.verifyErrorMessage();
  });

  test('Locked out user login attempt', async () => {
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.verifyErrorMessage();
  });
});