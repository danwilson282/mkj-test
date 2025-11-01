import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on the home page', async ({page}) => {
  // Step: Given I am on the home page
  await page.goto("http://localhost:3000");
  // From: tests/features/about.feature:4:5
});

When('I click the about quicklink', async ({page}) => {
  // Step: When I click the about quicklink
  await page.getByRole('link', { name: 'About' }).click();
  // From: tests/features/about.feature:5:5
});

Then('I should see the text test link', async ({page}) => {
  // Step: Then I should see the text test link
  const link = page.locator('a[href="/dash/settings"]');
  await expect(link).toHaveText('test link');
  // From: tests/features/about.feature:6:5
});