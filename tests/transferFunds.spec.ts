import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { TransferPage } from '../pages/transfer.page';

test('Transfer funds between accounts', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const transferPage = new TransferPage(page);

  await loginPage.navigate('https://parabank.parasoft.com/parabank/index.htm');

  await loginPage.login('john', 'demo');

  await transferPage.transferFunds('100');

  await expect(page.locator('text=Transfer Complete!')).toBeVisible();

});
