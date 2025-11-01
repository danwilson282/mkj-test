import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given("I open the login page", async ({ page }) => {
  await page.goto("http://localhost:3000");
});

When("I log in with valid credentials", async ({ page }) => {
  await page.getByRole("button", { name: "Login" }).click();
  const loginModal = page.locator('section[role="dialog"]');
  const form = loginModal.locator('form').nth(1); 
  await form.locator('input[name="email"]').fill('danwilson282@hotmail.com');
  await form.locator('input[name="password"]').fill('password');
  await form.getByRole('button', { name: /sign in with username\/password/i }).click();
});

Then("I should see the dashboard", async ({ page }) => {
  await expect(page.locator("h1")).toContainText("Welcome");
});