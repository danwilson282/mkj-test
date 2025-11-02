import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import setCookieParser from 'set-cookie-parser';
const { Given } = createBdd();

Given('I am on the home page', async ({page, baseURL}) => {
  // Step: Given I am on the home page
  await page.goto(`${baseURL}`);
  // From: tests/features/about.feature:4:5
});

Given('I am logged in', async ({page, baseURL}) => {
  // Call NextAuth credentials endpoint
  const csrfResponse = await page.request.get(`${baseURL}/api/auth/csrf`);
  const { csrfToken } = await csrfResponse.json();
  const loginRes = await page.request.post(`${baseURL}/api/auth/callback/credentials`, {
    form: {
      csrfToken: csrfToken,
      email: process.env.TEST_USER || "",
      password: process.env.TEST_PASSWORD || "",
    },
    maxRedirects: 0
  });

  // Extract cookie from response
  // 3️⃣ Follow the redirect manually
  const redirectUrl = loginRes.headers()['location'];
  if (!redirectUrl) {
    throw new Error('Login did not return a redirect');
  }
  const finalRes = await page.request.get(`${baseURL}/${redirectUrl}`);

  // 4️⃣ Collect cookies from both responses
  const rawCookies = [
    ...(loginRes.headers()['set-cookie'] ? [loginRes.headers()['set-cookie']] : []),
    ...(finalRes.headers()['set-cookie'] ? [finalRes.headers()['set-cookie']] : []),
  ];

  const cookies = setCookieParser.parse(rawCookies);
  const parsedCookies = cookies.map(c => ({
      name: c.name,
      value: c.value,
      domain: c.domain || 'localhost',
        // url: baseURL,
      path: c.path || '/',
      httpOnly: c.httpOnly,
      secure: c.secure || false,
      sameSite: c.sameSite as "Lax" | "Strict" | "None",
      expires: c.expires ? Math.floor(new Date(c.expires).getTime() / 1000) : undefined,
    }))
  // 5️⃣ Set cookies in Playwright page context
  await page.context().addCookies(parsedCookies);
});

Given("I open the login page", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});