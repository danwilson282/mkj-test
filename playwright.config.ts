// playwright.config.ts
import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps: ["steps/**/*.ts"],
});

export default defineConfig({
  testDir,
  reporter: [["html", { open: "never" }]],
  use: {
    headless: false, // 👀 show browser GUI
    baseURL: "http://localhost:3000",
  },
});