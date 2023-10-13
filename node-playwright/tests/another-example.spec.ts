import { test, expect } from '@playwright/test';

test('Another example of has title', async ({ page }) => {
  await page.goto('https://chat.openai.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ChatGPT/);
});
