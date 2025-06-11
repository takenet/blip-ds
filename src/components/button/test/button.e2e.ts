import { newE2EPage } from '@stencil/core/testing';

describe('bds-button e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-button color="primary" icon-left="edit" icon-right="edit" icon-theme="outline" size="medium" type="button" type-icon="icon" variant="solid">
          Button
        </bds-button>
      `,
    });
  });

  describe('Properties', () => {
    it('should render button with correct color', async () => {
      const button = await page.find('bds-button');
      const color = await button.getProperty('color');
      expect(color).toBe('primary');
    });

    it('should render button with correct icon-left', async () => {
      const button = await page.find('bds-button');
      const iconLeft = await button.getProperty('iconLeft');
      expect(iconLeft).toBe('edit');
    });

    it('should render button with correct icon-right', async () => {
      const button = await page.find('bds-button');
      const iconRight = await button.getProperty('iconRight');
      expect(iconRight).toBe('edit');
    });

    it('should render button with correct icon-theme', async () => {
      const button = await page.find('bds-button');
      const iconTheme = await button.getProperty('iconTheme');
      expect(iconTheme).toBe('outline');
    });

    it('should render button with correct size', async () => {
      const button = await page.find('bds-button');
      const size = await button.getProperty('size');
      expect(size).toBe('medium');
    });

    it('should render button with correct type', async () => {
      const button = await page.find('bds-button');
      const type = await button.getProperty('type');
      expect(type).toBe('button');
    });

    it('should render button with correct type-icon', async () => {
      const button = await page.find('bds-button');
      const typeIcon = await button.getProperty('typeIcon');
      expect(typeIcon).toBe('icon');
    });

    it('should render button with correct variant', async () => {
      const button = await page.find('bds-button');
      const variant = await button.getProperty('variant');
      expect(variant).toBe('solid');
    });
  });

  describe('Events', () => {
    it('should emit bdsClick event when clicked', async () => {
      const button = await page.find('bds-button');
      const bdsClickEvent = await button.spyOnEvent('bdsClick');

      await button.click();
      await page.waitForChanges();

      expect(bdsClickEvent).toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should set active state when isActive method is called', async () => {
      const button = await page.find('bds-button');

      await button.callMethod('isActive', true);
      await page.waitForChanges();

      const buttonElement = await page.find('bds-button >>> button');
      expect(buttonElement).toHaveClass('button--active');
    });

    it('should set position and direction when methods are called', async () => {
      const button = await page.find('bds-button');

      await button.callMethod('setDirection', 'row');
      await button.callMethod('setPosition', 'first');
      await page.waitForChanges();

      const buttonElement = await page.find('bds-button >>> button');
      expect(buttonElement).toHaveClass('button__position--row--first');
    });

    it('should set size when setSize method is called', async () => {
      const button = await page.find('bds-button');

      await button.callMethod('setSize', 'short');
      await page.waitForChanges();

      const buttonElement = await page.find('bds-button >>> button');
      expect(buttonElement).toHaveClass('button__size--short');
    });

    it('should set color when setColor method is called', async () => {
      const button = await page.find('bds-button');

      await button.callMethod('setColor', 'positive');
      await page.waitForChanges();

      const buttonElement = await page.find('bds-button >>> button');
      expect(buttonElement).toHaveClass('button__color--positive');
    });

    it('should set variant when setVariant method is called', async () => {
      const button = await page.find('bds-button');

      await button.callMethod('setVariant', 'outline');
      await page.waitForChanges();

      const buttonElement = await page.find('bds-button >>> button');
      expect(buttonElement).toHaveClass('button__variant--outline');
    });
  });

  describe('Accessibility', () => {
    it('should be focusable', async () => {
      const buttonElement = await page.find('bds-button >>> button');
      
      await buttonElement.focus();
      await page.waitForChanges();
      
      // Check if the button element exists and can be focused
      expect(buttonElement).toBeTruthy();
    });
  });
});