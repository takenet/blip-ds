import { newSpecPage } from '@stencil/core/testing';
import { Banner } from '../banner';

describe('bds-banner', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner>Default banner content</bds-banner>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-banner class="banner">
        <mock:shadow-root>
          <div class="banner__holder banner__holder--align--center banner__holder--context--outside banner__holder--system">
            <div class="banner__content">
              <bds-icon class="icon_left" name="info" size="medium" theme="outline"></bds-icon>
              <div class="slot">
                <slot></slot>
              </div>
            </div>
            <div class="banner__action"></div>
          </div>
        </mock:shadow-root>
        Default banner content
      </bds-banner>
    `);
  });

  it('should render with warning variant', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner variant="warning">Warning banner</bds-banner>`,
    });

    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('name')).toBe('warning');
    expect(page.root.shadowRoot.querySelector('.banner__holder--warning')).toBeTruthy();
  });

  it('should render with info variant', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner variant="info">Info banner</bds-banner>`,
    });

    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('name')).toBe('message-ballon');
    expect(page.root.shadowRoot.querySelector('.banner__holder--info')).toBeTruthy();
  });

  it('should render with error variant', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner variant="error">Error banner</bds-banner>`,
    });

    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('name')).toBe('error');
    expect(page.root.shadowRoot.querySelector('.banner__holder--error')).toBeTruthy();
  });

  it('should render with success variant', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner variant="success">Success banner</bds-banner>`,
    });

    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('name')).toBe('checkball');
    expect(page.root.shadowRoot.querySelector('.banner__holder--success')).toBeTruthy();
  });

  it('should render with left alignment', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner banner-align="left">Left aligned banner</bds-banner>`,
    });

    expect(page.root.shadowRoot.querySelector('.banner__holder--align--left')).toBeTruthy();
  });

  it('should render with right alignment', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner banner-align="right">Right aligned banner</bds-banner>`,
    });

    expect(page.root.shadowRoot.querySelector('.banner__holder--align--right')).toBeTruthy();
  });

  it('should render with inside context', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner context="inside">Inside banner</bds-banner>`,
    });

    expect(page.root.shadowRoot.querySelector('.banner__holder--context--inside')).toBeTruthy();
  });

  it('should render with close button when buttonClose is true', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner button-close="true">Closable banner</bds-banner>`,
    });

    const closeButton = page.root.shadowRoot.querySelector('bds-button-icon');
    expect(closeButton).toBeTruthy();
    expect(closeButton.getAttribute('icon')).toBe('close');
    expect(closeButton.getAttribute('size')).toBe('short');
    expect(closeButton.getAttribute('variant')).toBe('secondary');
  });

  it('should not render close button when buttonClose is false', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner button-close="false">Non-closable banner</bds-banner>`,
    });

    const closeButton = page.root.shadowRoot.querySelector('bds-button-icon');
    expect(closeButton).toBeFalsy();
  });

  it('should render with custom dtButtonClose data-test attribute', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner button-close="true" dt-button-close="test-close-btn">Closable banner</bds-banner>`,
    });

    const closeButton = page.root.shadowRoot.querySelector('bds-button-icon');
    expect(closeButton.getAttribute('dataTest')).toBe('test-close-btn');
  });

  it('should toggle visibility when toggle method is called', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner>Toggle banner</bds-banner>`,
    });

    // Initially visible (banner--hide class should not be present)
    expect(page.root.classList.contains('banner--hide')).toBe(false);

    // Toggle to hide
    await page.rootInstance.toggle();
    await page.waitForChanges();
    expect(page.root.classList.contains('banner--hide')).toBe(true);

    // Toggle to show again
    await page.rootInstance.toggle();
    await page.waitForChanges();
    expect(page.root.classList.contains('banner--hide')).toBe(false);
  });

  it('should emit bdsBannerClose event when close button is clicked', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner button-close="true">Closable banner</bds-banner>`,
    });

    const eventSpy = jest.fn();
    page.root.addEventListener('bdsBannerClose', eventSpy);

    // Simulate the click by calling the private method directly
    page.rootInstance._buttonClickHandler();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('should hide banner when close button is clicked', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner button-close="true">Closable banner</bds-banner>`,
    });

    // Initially visible
    expect(page.root.classList.contains('banner--hide')).toBe(false);

    // Simulate the click by calling the private method directly
    page.rootInstance._buttonClickHandler();
    await page.waitForChanges();

    expect(page.root.classList.contains('banner--hide')).toBe(true);
  });

  it('should render slot content correctly', async () => {
    const page = await newSpecPage({
      components: [Banner],
      html: `<bds-banner><span>Custom slot content</span></bds-banner>`,
    });

    expect(page.root.innerHTML).toContain('<span>Custom slot content</span>');
  });

  it('should have default values', () => {
    const component = new Banner();
    expect(component.bannerAlign).toBe('center');
    expect(component.buttonClose).toBe('false');
    expect(component.context).toBe('outside');
    expect(component.variant).toBe('system');
    expect(component.dtButtonClose).toBe(null);
    expect(component.visible).toBe(true);
  });

  it('should accept all valid banner alignments', () => {
    const component = new Banner();
    const validAlignments = ['left', 'right', 'center'];
    
    validAlignments.forEach(alignment => {
      component.bannerAlign = alignment as any;
      expect(['left', 'right', 'center']).toContain(component.bannerAlign);
    });
  });

  it('should accept all valid variants', () => {
    const component = new Banner();
    const validVariants = ['system', 'warning', 'info', 'error', 'success'];
    
    validVariants.forEach(variant => {
      component.variant = variant as any;
      expect(['system', 'warning', 'info', 'error', 'success']).toContain(component.variant);
    });
  });

  it('should accept all valid contexts', () => {
    const component = new Banner();
    const validContexts = ['inside', 'outside'];
    
    validContexts.forEach(context => {
      component.context = context as any;
      expect(['inside', 'outside']).toContain(component.context);
    });
  });

  it('should accept all valid buttonClose values', () => {
    const component = new Banner();
    const validValues = ['true', 'false'];
    
    validValues.forEach(value => {
      component.buttonClose = value as any;
      expect(['true', 'false']).toContain(component.buttonClose);
    });
  });
});
