import { newE2EPage } from '@stencil/core/testing';

describe('bds-loading-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-page></bds-loading-page>');

    const element = await page.find('bds-loading-page');
    expect(element).toHaveClass('hydrated');
  });

  it('should display loading container', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-page></bds-loading-page>');

    const loadingContainer = await page.find('bds-loading-page >>> .loading-container');
    expect(loadingContainer).toBeTruthy();
  });

  it('should display page loading with SVG content', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-page></bds-loading-page>');

    const pageLoading = await page.find('bds-loading-page >>> .page_loading');
    expect(pageLoading).toBeTruthy();
  });

  it('should apply data-test attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-page data-test="loading-test"></bds-loading-page>');

    const loadingContainer = await page.find('bds-loading-page >>> .loading-container');
    expect(loadingContainer).toHaveAttribute('data-test');
    expect(await loadingContainer.getAttribute('data-test')).toBe('loading-test');
  });

  it('should be accessible', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-page></bds-loading-page>');

    const results = await page.accessibility.snapshot();
    expect(results).toBeTruthy();
  });
});
