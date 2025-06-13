import { newE2EPage } from '@stencil/core/testing';

describe('bds-illustration', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    
    // Mock fetch globally before setting content
    await page.evaluateOnNewDocument(() => {
      const mockSvg = btoa('<svg><circle cx="50" cy="50" r="40"></circle></svg>');
      Object.defineProperty(window, 'fetch', {
        value: () => Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            'asset-default-blip-login-svg': mockSvg
          })
        }),
        writable: true,
        configurable: true
      });
    });
    
    await page.setContent('<bds-illustration name="blip-login"></bds-illustration>');
    await page.waitForChanges();

    const element = await page.find('bds-illustration');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with name attribute', async () => {
    const page = await newE2EPage();
    
    await page.evaluateOnNewDocument(() => {
      const mockSvg = btoa('<svg><circle cx="50" cy="50" r="40"></circle></svg>');
      Object.defineProperty(window, 'fetch', {
        value: () => Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            'asset-default-blip-login-svg': mockSvg
          })
        }),
        writable: true,
        configurable: true
      });
    });
    
    await page.setContent('<bds-illustration name="blip-login"></bds-illustration>');
    await page.waitForChanges();

    const element = await page.find('bds-illustration');
    expect(element).toEqualAttribute('name', 'blip-login');
  });

  it('should render with type attribute', async () => {
    const page = await newE2EPage();
    
    await page.evaluateOnNewDocument(() => {
      const mockSvg = btoa('<svg><circle cx="50" cy="50" r="40"></circle></svg>');
      Object.defineProperty(window, 'fetch', {
        value: () => Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            'asset-default-blip-login-svg': mockSvg
          })
        }),
        writable: true,
        configurable: true
      });
    });
    
    await page.setContent('<bds-illustration name="blip-login" type="default"></bds-illustration>');
    await page.waitForChanges();

    const element = await page.find('bds-illustration');
    expect(element).toEqualAttribute('type', 'default');
  });

  it('should render image when illustration content is loaded', async () => {
    const page = await newE2EPage();
    
    await page.evaluateOnNewDocument(() => {
      const mockSvg = btoa('<svg><circle cx="50" cy="50" r="40"></circle></svg>');
      Object.defineProperty(window, 'fetch', {
        value: () => Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            'asset-default-blip-login-svg': mockSvg
          })
        }),
        writable: true,
        configurable: true
      });
    });
    
    await page.setContent('<bds-illustration name="blip-login"></bds-illustration>');
    await page.waitForChanges();
    
    // Wait a bit for the async fetch to complete
    await page.waitForTimeout(100);

    const img = await page.find('bds-illustration >>> img');
    expect(img).toBeTruthy();
    expect(img).toEqualAttribute('draggable', 'false');
  });
});
