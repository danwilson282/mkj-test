import { createBdd } from 'playwright-bdd';

const { When } = createBdd();

When('I click the about quicklink', async ({page}) => {
  // Step: When I click the about quicklink
  await page.getByRole('link', { name: 'About' }).click();
  // From: tests/features/about.feature:5:5
});

When('I visit the dashboard page', async ({page, baseURL}) => {
  // Step: When I visit the dashboard page
  // From: tests/features/dashboard.feature:5:5
  await page.goto(`${baseURL}/dashboard`);
});

When("I log in with valid credentials", async ({ page }) => {
  await page.getByRole("button", { name: "Login" }).click();
  const loginModal = page.locator('section[role="dialog"]');
  const form = loginModal.locator('form').nth(1); 
  await form.locator('input[name="email"]').fill(`${process.env.TEST_USER}`);
  await form.locator('input[name="password"]').fill(`${process.env.TEST_EMAIL}`);
  await form.getByRole('button', { name: /sign in with username\/password/i }).click();
});