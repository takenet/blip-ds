import { newSpecPage } from '@stencil/core/testing';
import { BdsTabItem } from '../tab-item';

describe('bds-tab-item', () => {
  it('should create component', () => {
    const component = new BdsTabItem();
    expect(component).toBeTruthy();
  });

  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [BdsTabItem],
      html: `<bds-tab-item></bds-tab-item>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-tab-item>
        <mock:shadow-root>
          <div class="tab_item">
            <div class="tab_item_content">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </bds-tab-item>
    `);
  });

  it('should render with content', async () => {
    const page = await newSpecPage({
      components: [BdsTabItem],
      html: `<bds-tab-item>Tab Content</bds-tab-item>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-tab-item>
        <mock:shadow-root>
          <div class="tab_item">
            <div class="tab_item_content">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
        Tab Content
      </bds-tab-item>
    `);
  });

  describe('Properties', () => {
    it('should set numberElement property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item number-element="5"></bds-tab-item>`,
      });

      expect(page.rootInstance.numberElement).toBe(5);
    });

    it('should set label property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item label="Tab Label"></bds-tab-item>`,
      });

      expect(page.rootInstance.label).toBe('Tab Label');
    });

    it('should set icon property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item icon="home"></bds-tab-item>`,
      });

      expect(page.rootInstance.icon).toBe('home');
    });

    it('should set iconPosition property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.iconPosition).toBe('left');
    });

    it('should set iconPosition property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item icon-position="right"></bds-tab-item>`,
      });

      expect(page.rootInstance.iconPosition).toBe('right');
    });

    it('should set iconTheme property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.iconTheme).toBe('outline');
    });

    it('should set iconTheme property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item icon-theme="solid"></bds-tab-item>`,
      });

      expect(page.rootInstance.iconTheme).toBe('solid');
    });

    it('should set badge property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.badge).toBe(false);
    });

    it('should set badge property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge="true"></bds-tab-item>`,
      });

      expect(page.rootInstance.badge).toBe(true);
    });

    it('should set badgeShape property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeShape).toBe('circle');
    });

    it('should set badgeShape property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge-shape="square"></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeShape).toBe('square');
    });

    it('should set badgeColor property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeColor).toBe('system');
    });

    it('should set badgeColor property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge-color="danger"></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeColor).toBe('danger');
    });

    it('should set badgeIcon property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge-icon="check"></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeIcon).toBe('check');
    });

    it('should set badgeAnimation property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeAnimation).toBe(false);
    });

    it('should set badgeAnimation property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge-animation="true"></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeAnimation).toBe(true);
    });

    it('should set badgePosition property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.badgePosition).toBe('left');
    });

    it('should set badgePosition property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge-position="right"></bds-tab-item>`,
      });

      expect(page.rootInstance.badgePosition).toBe('right');
    });

    it('should set badgeNumber property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item badge-number="5"></bds-tab-item>`,
      });

      expect(page.rootInstance.badgeNumber).toBe(5);
    });

    it('should set disable property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.disable).toBe(false);
    });

    it('should set disable property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item disable="true"></bds-tab-item>`,
      });

      expect(page.rootInstance.disable).toBe(true);
    });

    it('should set open property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.open).toBe(false);
    });

    it('should set open property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item open="true"></bds-tab-item>`,
      });

      expect(page.rootInstance.open).toBe(true);
    });

    it('should set dataTest property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item data-test="tab-test"></bds-tab-item>`,
      });

      expect(page.rootInstance.dataTest).toBe('tab-test');
    });

    it('should set error property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.error).toBe(false);
    });

    it('should set error property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item error="true"></bds-tab-item>`,
      });

      expect(page.rootInstance.error).toBe(true);
    });

    it('should set headerStyle property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.headerStyle).toBe(null);
    });

    it('should set headerStyle property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item header-style="padding: 0;"></bds-tab-item>`,
      });

      expect(page.rootInstance.headerStyle).toBe('padding: 0;');
    });

    it('should set contentStyle property with default value', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      expect(page.rootInstance.contentStyle).toBe(null);
    });

    it('should set contentStyle property', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item content-style="background: red;"></bds-tab-item>`,
      });

      expect(page.rootInstance.contentStyle).toBe('background: red;');
    });
  });

  describe('Open state behavior', () => {
    it('should render with is-open class when open is true and not disabled', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item open="true"></bds-tab-item>`,
      });

      expect(page.root).toHaveClass('is-open');
    });

    it('should not render with is-open class when disabled even if open is true', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item open="true" disable="true"></bds-tab-item>`,
      });

      expect(page.root).not.toHaveClass('is-open');
    });

    it('should render tab_item_content--open class when open is true', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item open="true"></bds-tab-item>`,
      });

      const contentDiv = page.root.shadowRoot.querySelector('.tab_item_content');
      expect(contentDiv).toHaveClass('tab_item_content--open');
    });

    it('should not render tab_item_content--open class when open is false', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      const contentDiv = page.root.shadowRoot.querySelector('.tab_item_content');
      expect(contentDiv).not.toHaveClass('tab_item_content--open');
    });
  });

  describe('Data test attribute', () => {
    it('should render with data-test attribute', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item data-test="my-tab"></bds-tab-item>`,
      });

      const tabDiv = page.root.shadowRoot.querySelector('.tab_item');
      expect(tabDiv.getAttribute('data-test')).toBe('my-tab');
    });

    it('should render with empty data-test when not provided', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      const tabDiv = page.root.shadowRoot.querySelector('.tab_item');
      expect(tabDiv.getAttribute('data-test')).toBe(null);
    });
  });

  describe('Methods', () => {
    it('should have reciveNumber method that sets numberElement', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item></bds-tab-item>`,
      });

      await page.rootInstance.reciveNumber(10);
      expect(page.rootInstance.numberElement).toBe(10);
    });
  });

  describe('Events', () => {
    it('should emit tabDisabled event when disable property changes', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item number-element="3"></bds-tab-item>`,
      });

      const tabDisabledSpy = jest.fn();
      page.root.addEventListener('tabDisabled', tabDisabledSpy);

      page.rootInstance.disable = true;
      await page.waitForChanges();

      expect(tabDisabledSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { item: 3, disable: true }
        })
      );
    });

    it('should emit tabDisabled event with false when enabling', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item number-element="5" disable="true"></bds-tab-item>`,
      });

      const tabDisabledSpy = jest.fn();
      page.root.addEventListener('tabDisabled', tabDisabledSpy);

      page.rootInstance.disable = false;
      await page.waitForChanges();

      expect(tabDisabledSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { item: 5, disable: false }
        })
      );
    });
  });

  describe('Integration scenarios', () => {
    it('should handle complex property combinations', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `
          <bds-tab-item 
            label="My Tab" 
            icon="home" 
            icon-position="right" 
            badge="true" 
            badge-number="5" 
            badge-color="danger" 
            open="true"
            data-test="complex-tab">
            Complex content
          </bds-tab-item>
        `,
      });

      expect(page.rootInstance.label).toBe('My Tab');
      expect(page.rootInstance.icon).toBe('home');
      expect(page.rootInstance.iconPosition).toBe('right');
      expect(page.rootInstance.badge).toBe(true);
      expect(page.rootInstance.badgeNumber).toBe(5);
      expect(page.rootInstance.badgeColor).toBe('danger');
      expect(page.rootInstance.open).toBe(true);
      expect(page.rootInstance.dataTest).toBe('complex-tab');
      
      expect(page.root).toHaveClass('is-open');
      
      const contentDiv = page.root.shadowRoot.querySelector('.tab_item_content');
      expect(contentDiv).toHaveClass('tab_item_content--open');
      
      const tabDiv = page.root.shadowRoot.querySelector('.tab_item');
      expect(tabDiv.getAttribute('data-test')).toBe('complex-tab');
    });

    it('should prioritize disable over open state', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `<bds-tab-item open="true" disable="true"></bds-tab-item>`,
      });

      // Should not have is-open class when disabled, even if open is true
      expect(page.root).not.toHaveClass('is-open');
      
      // But the content div should still have the open class based on the open prop
      const contentDiv = page.root.shadowRoot.querySelector('.tab_item_content');
      expect(contentDiv).toHaveClass('tab_item_content--open');
    });

    it('should handle error property in complex scenarios', async () => {
      const page = await newSpecPage({
        components: [BdsTabItem],
        html: `
          <bds-tab-item 
            label="Error Tab" 
            icon="warning" 
            error="true"
            open="true"
            data-test="error-tab">
            Error content
          </bds-tab-item>
        `,
      });

      expect(page.rootInstance.label).toBe('Error Tab');
      expect(page.rootInstance.icon).toBe('warning');
      expect(page.rootInstance.error).toBe(true);
      expect(page.rootInstance.open).toBe(true);
      expect(page.rootInstance.dataTest).toBe('error-tab');
      
      expect(page.root).toHaveClass('is-open');
      
      const contentDiv = page.root.shadowRoot.querySelector('.tab_item_content');
      expect(contentDiv).toHaveClass('tab_item_content--open');
      
      const tabDiv = page.root.shadowRoot.querySelector('.tab_item');
      expect(tabDiv.getAttribute('data-test')).toBe('error-tab');
    });
  });
});
