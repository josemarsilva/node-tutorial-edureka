import { test, expect } from '@playwright/test';

test('One example of has title', async ({ page }) => {
  await page.goto('http://www.youtube.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/YouTube/);
});
