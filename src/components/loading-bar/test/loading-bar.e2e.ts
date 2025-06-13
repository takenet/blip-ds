import { newE2EPage } from '@stencil/core/testing';

describe('bds-loading-bar', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar></bds-loading-bar>');
    await page.waitForChanges();

    const element = await page.find('bds-loading-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with default percent of 0', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar></bds-loading-bar>');
    await page.waitForChanges();

    const element = await page.find('bds-loading-bar');
    
    expect(element).toBeTruthy();
    
    // Check the style property directly
    const widthStyle = await page.evaluate(() => {
      const loadingBar = document.querySelector('bds-loading-bar');
      const shadowRoot = loadingBar.shadowRoot;
      const loadingDiv = shadowRoot.querySelector('.loading') as HTMLElement;
      return loadingDiv.style.width;
    });
    
    expect(widthStyle).toBe('0%');
  });

  it('should render with percent attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar percent="50"></bds-loading-bar>');
    await page.waitForChanges();

    const element = await page.find('bds-loading-bar');
    
    expect(element).toEqualAttribute('percent', '50');
    
    const widthStyle = await page.evaluate(() => {
      const loadingBar = document.querySelector('bds-loading-bar');
      const shadowRoot = loadingBar.shadowRoot;
      const loadingDiv = shadowRoot.querySelector('.loading') as HTMLElement;
      return loadingDiv.style.width;
    });
    
    expect(widthStyle).toBe('50%');
  });

  it('should cap percent at 100%', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar percent="150"></bds-loading-bar>');
    await page.waitForChanges();

    const widthStyle = await page.evaluate(() => {
      const loadingBar = document.querySelector('bds-loading-bar');
      const shadowRoot = loadingBar.shadowRoot;
      const loadingDiv = shadowRoot.querySelector('.loading') as HTMLElement;
      return loadingDiv.style.width;
    });
    
    expect(widthStyle).toBe('100%');
  });

  it('should render with size attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar size="small"></bds-loading-bar>');
    await page.waitForChanges();

    const element = await page.find('bds-loading-bar');
    const loadingBarDiv = await page.find('bds-loading-bar >>> .loading_bar');
    
    expect(element).toEqualAttribute('size', 'small');
    expect(loadingBarDiv).toHaveClass('size_small');
  });

  it('should render with default size', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar></bds-loading-bar>');
    await page.waitForChanges();

    const loadingBarDiv = await page.find('bds-loading-bar >>> .loading_bar');
    expect(loadingBarDiv).toHaveClass('size_default');
  });

  it('should render with text attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar text="Loading..."></bds-loading-bar>');
    await page.waitForChanges();

    const element = await page.find('bds-loading-bar');
    expect(element).toEqualAttribute('text', 'Loading...');
  });

  it('should render with data-test attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar data-test="loading-bar-test"></bds-loading-bar>');
    await page.waitForChanges();

    const element = await page.find('bds-loading-bar');
    const loadingBarDiv = await page.find('bds-loading-bar >>> .loading_bar');
    
    expect(element).toEqualAttribute('data-test', 'loading-bar-test');
    expect(loadingBarDiv).toEqualAttribute('data-test', 'loading-bar-test');
  });

  it('should have correct structure', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar percent="75"></bds-loading-bar>');
    await page.waitForChanges();

    const loadingBarDiv = await page.find('bds-loading-bar >>> .loading_bar');
    const barBehindDiv = await page.find('bds-loading-bar >>> .bar_behind');
    const loadingDiv = await page.find('bds-loading-bar >>> .loading');
    const loaderDiv = await page.find('bds-loading-bar >>> .loader');
    
    expect(loadingBarDiv).toBeTruthy();
    expect(barBehindDiv).toBeTruthy();
    expect(loadingDiv).toBeTruthy();
    expect(loaderDiv).toBeTruthy();
  });

  it('should update width when percent changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-loading-bar percent="25"></bds-loading-bar>');
    await page.waitForChanges();

    // Check initial width
    let widthStyle = await page.evaluate(() => {
      const loadingBar = document.querySelector('bds-loading-bar');
      const shadowRoot = loadingBar.shadowRoot;
      const loadingDiv = shadowRoot.querySelector('.loading') as HTMLElement;
      return loadingDiv.style.width;
    });
    
    expect(widthStyle).toBe('25%');

    // Update the percent
    const element = await page.find('bds-loading-bar');
    element.setProperty('percent', 75);
    await page.waitForChanges();

    // Check updated width
    widthStyle = await page.evaluate(() => {
      const loadingBar = document.querySelector('bds-loading-bar');
      const shadowRoot = loadingBar.shadowRoot;
      const loadingDiv = shadowRoot.querySelector('.loading') as HTMLElement;
      return loadingDiv.style.width;
    });
    
    expect(widthStyle).toBe('75%');
  });
});
