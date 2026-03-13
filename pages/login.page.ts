import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {

  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'input[value="Log In"]';

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}
