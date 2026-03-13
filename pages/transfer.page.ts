import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class TransferPage extends BasePage {

  private transferMenu = 'a[href*="transfer"]';
  private amountInput = '#amount';
  private fromAccount = '#fromAccountId';
  private toAccount = '#toAccountId';
  private transferButton = 'input[value="Transfer"]';

  constructor(page: Page) {
    super(page);
  }

  async transferFunds(amount: string) {

    await this.click(this.transferMenu);

    await this.fill(this.amountInput, amount);

    await this.page.selectOption(this.fromAccount, { index: 0 });
    await this.page.selectOption(this.toAccount, { index: 1 });

    await this.click(this.transferButton);
  }
}
