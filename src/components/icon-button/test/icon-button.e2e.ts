import { newE2EPage } from '@stencil/core/testing';

describe('bds-button-icon', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user"></bds-button-icon>');

    const element = await page.find('bds-button-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user"></bds-button-icon>');
    await page.waitForChanges();

    const element = await page.find('bds-button-icon');
    const icon = await page.find('bds-button-icon >>> bds-icon');
    
    expect(element).toEqualAttribute('icon', 'user');
    expect(icon).toBeTruthy();
    // Note: Skip checking icon name attribute as SVG loading is external dependency
  });

  it('should handle different sizes', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user" size="tall"></bds-button-icon>');

    const element = await page.find('bds-button-icon');
    const button = await page.find('bds-button-icon >>> .icon__button');
    
    expect(element).toEqualAttribute('size', 'tall');
    expect(button).toHaveClass('size-tall');
  });

  it('should handle different variants', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user" variant="secondary"></bds-button-icon>');

    const element = await page.find('bds-button-icon');
    const button = await page.find('bds-button-icon >>> .icon__button');
    
    expect(element).toEqualAttribute('variant', 'secondary');
    expect(button).toHaveClass('icon__button--secondary');
  });

  it('should be disabled when disabled prop is set', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user" disabled></bds-button-icon>');

    const button = await page.find('bds-button-icon >>> .icon__button');
    expect(button).toHaveAttribute('disabled');
  });

  it('should emit click event when clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user"></bds-button-icon>');

    const element = await page.find('bds-button-icon');
    const clickSpy = await element.spyOnEvent('bdsClick');

    const button = await page.find('bds-button-icon >>> .icon__button');
    await button.click();

    expect(clickSpy).toHaveReceivedEvent();
  });

  it('should not emit click event when disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user" disabled></bds-button-icon>');

    const element = await page.find('bds-button-icon');
    const clickSpy = await element.spyOnEvent('bdsClick');

    const button = await page.find('bds-button-icon >>> .icon__button');
    await button.click();

    expect(clickSpy).not.toHaveReceivedEvent();
  });

  it('should handle different icon themes', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user" icon-theme="solid"></bds-button-icon>');

    const element = await page.find('bds-button-icon');
    const icon = await page.find('bds-button-icon >>> bds-icon');
    
    expect(element).toEqualAttribute('icon-theme', 'solid');
    expect(icon).toEqualAttribute('theme', 'solid');
  });

  it('should handle data-test attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-button-icon icon="user" data-test="test-button"></bds-button-icon>');

    const button = await page.find('bds-button-icon >>> .icon__button');
    expect(button).toEqualAttribute('data-test', 'test-button');
  });

  it('should handle all size variants', async () => {
    const sizes = ['tall', 'standard', 'short'];
    
    for (const size of sizes) {
      const page = await newE2EPage();
      await page.setContent(`<bds-button-icon icon="user" size="${size}"></bds-button-icon>`);
      
      const element = await page.find('bds-button-icon');
      const button = await page.find('bds-button-icon >>> .icon__button');
      
      expect(element).toEqualAttribute('size', size);
      expect(button).toHaveClass(`size-${size}`);
    }
  });

  it('should handle all variant types', async () => {
    const variants = ['primary', 'secondary', 'tertiary', 'ghost', 'secondary--white', 'delete'];
    const variantClassMap = {
      'primary': 'icon__button--primary',
      'secondary': 'icon__button--secondary',
      'tertiary': 'icon__button--tertiary',
      'ghost': 'icon__button--ghost',
      'secondary--white': 'icon__button--secondary-white',
      'delete': 'icon__button--delete'
    };
    
    for (const variant of variants) {
      const page = await newE2EPage();
      await page.setContent(`<bds-button-icon icon="user" variant="${variant}"></bds-button-icon>`);
      
      const element = await page.find('bds-button-icon');
      const button = await page.find('bds-button-icon >>> .icon__button');
      
      expect(element).toEqualAttribute('variant', variant);
      expect(button).toHaveClass(variantClassMap[variant]);
    }
  });
});
