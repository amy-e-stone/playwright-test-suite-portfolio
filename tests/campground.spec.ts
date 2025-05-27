import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../page-objects/RegisterPage';
import { CampgroundPage } from '../page-objects/CampgroundPage';
import { ReviewSection } from '../page-objects/ReviewSection';

test('User can create a campground', async ({ page }) => {
    const register = new RegisterPage(page);
    const campground = new CampgroundPage(page);

    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = 'password123';

    await register.navigate();
    await register.register(username, email, password);

    await campground.navigateToNewForm();
    await campground.createCampground(
        'Test Camp',
        'Jacksonville, FL',
        '25',
        'Nice test camp.',
        'tests/assets/camp.jpg'
    );

    await expect(page).toHaveURL(/\/campgrounds\/\w+/);
    await expect(page.getByRole('heading', { name: 'Test Camp' })).toBeVisible();

    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page.getByRole('heading', { name: 'Test Camp' })).not.toBeVisible();
});

test('User can edit a campground', async ({ page }) => {
  const register = new RegisterPage(page);
  const campground = new CampgroundPage(page);

  const username = faker.internet.username();
  const email = faker.internet.email();
  const password = 'password123';

  await register.navigate();
  await register.register(username, email, password);

  await campground.navigateToNewForm();
  await campground.createCampground(
    'Original Camp',
    'Jacksonville, FL',
    '25',
    'Camp before edit.',
    'tests/assets/camp.jpg'
  );

  await campground.editCampground('Edited Camp');
  await expect(page.getByRole('heading', { name: 'Edited Camp' })).toBeVisible();

  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('heading', { name: 'Edited Camp' })).not.toBeVisible();
});

test('User can submit a review', async ({ page }) => {
  const register = new RegisterPage(page);
  const campground = new CampgroundPage(page);
  const review = new ReviewSection(page);

  const username = faker.internet.username();
  const email = faker.internet.email();
  const password = 'password123';

  await register.navigate();
  await register.register(username, email, password);

  await campground.navigateToNewForm();
  await campground.createCampground(
    'Review Test Camp',
    'Orlando, FL',
    '30',
    'Testing review flow.',
    'tests/assets/camp.jpg'
  );

  await review.submitReview('Amazing site, will come again!', 5);
  await expect(page.getByText('Amazing site, will come again!')).toBeVisible();

  await page.locator('button.btn.btn-sm.btn-danger', { hasText: 'Delete' }).click();
  await expect(page.getByText('Amazing site, will come again!')).not.toBeVisible();

  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('heading', { name: 'Review Test Camp' })).not.toBeVisible();
});


