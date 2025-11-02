// playwright.config.ts
import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from 'dotenv';
dotenv.config();
const testDir = defineBddConfig({
//   features: "features/**/*.feature",
//   steps: ["steps/**/*.ts"],
  features: './tests/**/*.feature',
  steps: './tests/steps/**/*.ts',
  featuresRoot: './tests'
});

export default defineConfig({
  testDir,
  reporter: [["html", { open: "never" }]],
  use: {
    headless: true, // 👀 show browser GUI
    baseURL: process.env.BASE_URL,
  },
});