import { test, expect } from '@playwright/test';

test('Test Google page', async ({ page }) => {
  await page.goto('http://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});
