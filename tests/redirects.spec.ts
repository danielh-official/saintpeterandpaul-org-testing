import { test, expect } from '@playwright/test';

// Add a row per redirect: [from, to]
const redirects: [string, string][] = [
  ['/news_170308_1', '/bulletin'],
];

for (const [from, to] of redirects) {
  test(`${from} redirects to ${to}`, async ({ page, baseURL }) => {
    await page.goto(from);
    await expect(page).toHaveURL(new URL(to, baseURL).href);
  });
}
