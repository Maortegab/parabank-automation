import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Successful login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate('https://parabank.parasoft.com/parabank/index.htm');

  await loginPage.login('john', 'demo');

  await expect(page.locator('#showOverview > h1')).toBeVisible();

});
