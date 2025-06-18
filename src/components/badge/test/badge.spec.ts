import { newSpecPage } from '@stencil/core/testing';
import { Badge } from '../badge';

describe('bds-badge', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge></bds-badge>`,
    });

    // Test public properties
    expect(page.root.color).toBe('system');
    expect(page.root.shape).toBe('circle');
    expect(page.root.icon).toBe(null);
    expect(page.root.number).toBe(undefined);
    expect(page.root.animation).toBe(false);
    expect(page.root.dataTest).toBe(null);

    // Test the rendered output - should show status type
    expect(page.root.shadowRoot.querySelector('.status')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.number')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.icon')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.empty')).toBeFalsy();

    expect(page.root).toEqualHtml(`
      <bds-badge>
        <mock:shadow-root>
          <div class="chip_badge chip_badge--circle chip_badge--system chip_size">
            <div class="color--system status status--circle status--circle-false"></div>
          </div>
        </mock:shadow-root>
      </bds-badge>
    `);
  });

  it('should render with number type', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge number="5"></bds-badge>`,
    });

    await page.waitForChanges();

    // Test that it shows number type elements
    expect(page.root.shadowRoot.querySelector('.number')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.status')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('5');
  });

  it('should render with icon type', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge icon="user"></bds-badge>`,
    });

    await page.waitForChanges();

    // Test that it shows icon type elements
    expect(page.root.shadowRoot.querySelector('.icon')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.status')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('bds-icon')).toBeTruthy();
  });

  it('should render with empty type when number is 0', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge number="0"></bds-badge>`,
    });

    await page.waitForChanges();

    // Test that it shows empty type elements
    expect(page.root.shadowRoot.querySelector('.empty')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.number')).toBeFalsy();
  });

  it('should display 999+ when number exceeds 999', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge number="1000"></bds-badge>`,
    });

    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('999+');
  });

  it('should render with custom color and shape', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge color="danger" shape="square"></bds-badge>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-badge color="danger" shape="square">
        <mock:shadow-root>
          <div class="chip_badge chip_badge--danger chip_badge--square chip_size">
            <div class="color--danger status status--circle-false status--square"></div>
          </div>
        </mock:shadow-root>
      </bds-badge>
    `);
  });

  it('should render with animation enabled', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge animation="true"></bds-badge>`,
    });

    expect(page.root.shadowRoot.querySelector('.status--circle-true')).toBeTruthy();
  });

  it('should render with data-test attribute', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge data-test="my-badge"></bds-badge>`,
    });

    expect(page.root.shadowRoot.querySelector('[data-test="my-badge"]')).toBeTruthy();
  });

  it('should accept all valid colors', async () => {
    const validColors = ['system', 'danger', 'warning', 'success', 'neutral'];
    
    for (const color of validColors) {
      const page = await newSpecPage({
        components: [Badge],
        html: `<bds-badge color="${color}"></bds-badge>`,
      });

      expect(page.root.color).toBe(color);
      expect(page.root.shadowRoot.querySelector(`.chip_badge--${color}`)).toBeTruthy();
    }
  });

  it('should accept all valid shapes', async () => {
    const validShapes = ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'];
    
    for (const shape of validShapes) {
      const page = await newSpecPage({
        components: [Badge],
        html: `<bds-badge shape="${shape}"></bds-badge>`,
      });

      expect(page.root.shape).toBe(shape);
      expect(page.root.shadowRoot.querySelector(`.chip_badge--${shape}`)).toBeTruthy();
    }
  });

  it('should handle property changes after initial render', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge></bds-badge>`,
    });

    // Change to number type
    page.root.number = 42;
    await page.waitForChanges();

    // Test that it shows number type elements
    expect(page.root.shadowRoot.querySelector('.number')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.status')).toBeFalsy();

    // Change number to 0 (empty type)
    page.root.number = 0;
    await page.waitForChanges();

    // Test that it shows empty type elements
    expect(page.root.shadowRoot.querySelector('.empty')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.number')).toBeFalsy();
  });

  it('should prioritize number over icon when both are provided', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<bds-badge number="5" icon="user"></bds-badge>`,
    });

    await page.waitForChanges();

    // Test that it shows number type elements (not icon)
    expect(page.root.shadowRoot.querySelector('.number')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.icon')).toBeFalsy();
  });

  describe('type determination logic', () => {
    it('should set type to number when icon is null and number is provided', async () => {
      const page = await newSpecPage({
        components: [Badge],
        html: `<bds-badge number="5"></bds-badge>`,
      });

      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('.number')).toBeTruthy();
    });

    it('should set type to icon when number is not provided and icon is provided', async () => {
      const page = await newSpecPage({
        components: [Badge],
        html: `<bds-badge icon="user"></bds-badge>`,
      });

      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('.icon')).toBeTruthy();
    });

    it('should keep type as status by default', async () => {
      const page = await newSpecPage({
        components: [Badge],
        html: `<bds-badge></bds-badge>`,
      });

      expect(page.root.shadowRoot.querySelector('.status')).toBeTruthy();
    });
  });
});