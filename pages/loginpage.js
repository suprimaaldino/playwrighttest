// pages/loginpage.js  <-- RENAMED TO .js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async verifyErrorMessage() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}

module.exports = LoginPage;