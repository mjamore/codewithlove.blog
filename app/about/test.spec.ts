import { test, expect } from '@playwright/test';
import { URLS } from '../../utils/constants';
import { metadata } from './metadata';

const pageUrl = `${URLS.DOMAIN}${URLS.ROUTES.ABOUT}`;

test.describe('About page', () => {
  test('should have the expected meta title', async ({ page }) => {
    await page.goto(pageUrl);
    await expect(page).toHaveTitle(metadata.title);
  });

  test('should have the expected meta description', async ({ page }) => {
    await page.goto(pageUrl);
    const metaDescription = page.locator('head meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', metadata.description);
  });

  test('should have the expected canonical URL', async ({ page }) => {
    await page.goto(pageUrl);
    const canonicalTag = page.locator('head link[rel="canonical"]');
    await expect(canonicalTag).toHaveAttribute('href', pageUrl);
  });

  test('should have the expected favicon', async ({ page }) => {
    await page.goto(pageUrl);
    const faviconTag = page.locator('head link[rel="shortcut icon"]');
    await expect(faviconTag).toHaveAttribute('href', '/favicon.ico');
  });
});
