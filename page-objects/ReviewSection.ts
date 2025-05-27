import { Page } from '@playwright/test';

export class ReviewSection {
  constructor(private page: Page) {}

  async submitReview(text: string, stars: number = 5) {
    await this.page.click(`label[for="first-rate${stars}"]`);
    await this.page.fill('textarea[name="review[body]"]', text);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}