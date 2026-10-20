import { newE2EPage } from '@stencil/core/testing';

describe('bds-illustration', () => {
  it('should render', async () => {
    const page = await newE2EPage({
      html: '<bds-illustration name="accessibility-1"></bds-illustration>',
    });

    const element = await page.find('bds-illustration');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with name attribute', async () => {
    const page = await newE2EPage({
      html: '<bds-illustration name="accessibility-1"></bds-illustration>',
    });

    const element = await page.find('bds-illustration');
    expect(element).toEqualAttribute('name', 'accessibility-1');
  });

  it('should render with type attribute', async () => {
    const page = await newE2EPage({
      html: '<bds-illustration name="accessibility-1" type="default"></bds-illustration>',
    });

    const element = await page.find('bds-illustration');
    expect(element).toEqualAttribute('type', 'default');
  });

  it('should render image when illustration content is loaded', async () => {
    const page = await newE2EPage({
      html: '<bds-illustration name="accessibility-1"></bds-illustration>',
    });
    await page.waitForFunction(() => {
      const image = document.querySelector('bds-illustration')?.shadowRoot?.querySelector('img');
      return image?.complete && image.naturalWidth > 0;
    });

    const img = await page.find('bds-illustration >>> img');
    expect(img).toBeTruthy();
    expect(img).toEqualAttribute('draggable', 'false');
    expect(await img.getAttribute('src')).toMatch(/^https:\/\/cdn\.blip\.ai\/blip-tokens\/[^/]+\/illustrations\/default\/accessibility-1\.svg$/);
  });
});
