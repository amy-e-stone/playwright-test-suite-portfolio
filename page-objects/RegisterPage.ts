import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://hidden-basin-58850.herokuapp.com/');
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async register(username: string, email: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Register' }).click();
  }
}