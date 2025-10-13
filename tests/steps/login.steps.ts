import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given("I open the login page", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
});

When("I log in with valid credentials", async ({ page }) => {
  await page.fill("#email", "user@example.com");
  await page.fill("#password", "password123");
  await page.click("button[type='submit']");
});

Then("I should see the dashboard", async ({ page }) => {
  await expect(page.locator("h1")).toContainText("Welcome");
});