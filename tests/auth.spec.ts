import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../page-objects/LoginPage';
import { RegisterPage } from '../page-objects/RegisterPage';

test.describe('Authentication Tests', () => {

  test('User can register', async ({ page }) => {
    const register = new RegisterPage(page);
    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = 'password123';

    await register.navigate();
    await register.register(username, email, password);
    await expect(page).toHaveURL(/.*campgrounds/);
    await page.getByRole('link', { name: 'Logout' }).click();
  });

  test('User can log in', async ({ page }) => {
    const register = new RegisterPage(page);
    const login = new LoginPage(page);
    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = 'password123';

    await register.navigate();
    await register.register(username, email, password);
    await page.getByRole('link', { name: 'Logout' }).click();

    await login.navigate();
    await login.login(username, password);
    await expect(page).toHaveURL(/.*campgrounds/);
  });

  test('User can log out', async ({ page }) => {
    const register = new RegisterPage(page);
    const login = new LoginPage(page);
    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = 'password123';

    await register.navigate();
    await register.register(username, email, password);

    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  });
});