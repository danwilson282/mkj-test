import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Then } = createBdd();

Then('I should see the text test link', async ({page}) => {
  // Step: Then I should see the text test link
  const link = page.locator('a[href="/dash/settings"]');
  await expect(link).toHaveText('test link');
  // From: tests/features/about.feature:6:5
});

Then('I should be logged in', async ({page}) => {
    await expect(page.locator('div.flex p.text-xs.text-gray-600')).toHaveText(`${process.env.TEST_USER}`);
  // Step: Then I should be logged in
  // From: tests/features/dashboard.feature:6:5
});

Then("I should see the dashboard", async ({ page }) => {
  await expect(page.locator("h1")).toContainText("Welcome");
});