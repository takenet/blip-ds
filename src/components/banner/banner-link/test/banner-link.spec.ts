import { newSpecPage } from '@stencil/core/testing';
import { BannerLink } from '../banner-link';

describe('bds-banner-link', () => {
  describe('Component Creation', () => {
    it('should create component', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link></bds-banner-link>`,
      });
      expect(page.rootInstance).toBeTruthy();
      expect(page.rootInstance).toBeInstanceOf(BannerLink);
    });

    it('should render correctly', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link></bds-banner-link>`,
      });
      expect(page.root).toEqualHtml(`
        <bds-banner-link>
          <mock:shadow-root>
            <a class="banner__link" tabindex="0">
              <slot></slot>
            </a>
          </mock:shadow-root>
        </bds-banner-link>
      `);
    });
  });

  describe('Props', () => {
    it('should handle link prop', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com"></bds-banner-link>`,
      });
      expect(page.rootInstance.link).toBe('https://example.com');
    });

    it('should handle target prop with default value', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link></bds-banner-link>`,
      });
      expect(page.rootInstance.target).toBe('blank');
    });

    it('should handle target prop with custom value', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link target="self"></bds-banner-link>`,
      });
      expect(page.rootInstance.target).toBe('self');
    });

    it('should handle all target types', async () => {
      const targets = ['blank', 'self', 'parent', 'top', 'framename'];
      
      for (const target of targets) {
        const page = await newSpecPage({
          components: [BannerLink],
          html: `<bds-banner-link target="${target}"></bds-banner-link>`,
        });
        expect(page.rootInstance.target).toBe(target);
      }
    });

    it('should handle dataTest prop', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link data-test="banner-link-test"></bds-banner-link>`,
      });
      expect(page.rootInstance.dataTest).toBe('banner-link-test');
      
      const linkElement = page.root.shadowRoot.querySelector('a');
      expect(linkElement.getAttribute('data-test')).toBe('banner-link-test');
    });

    it('should handle dataTest prop with null default', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link></bds-banner-link>`,
      });
      expect(page.rootInstance.dataTest).toBe(null);
    });
  });

  describe('Slot Content', () => {
    it('should render slot content', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link>Click here</bds-banner-link>`,
      });
      expect(page.root).toEqualHtml(`
        <bds-banner-link>
          <mock:shadow-root>
            <a class="banner__link" tabindex="0">
              <slot></slot>
            </a>
          </mock:shadow-root>
          Click here
        </bds-banner-link>
      `);
    });

    it('should render slot with complex content', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link><strong>Bold</strong> and <em>italic</em> text</bds-banner-link>`,
      });
      expect(page.root.textContent).toContain('Bold and italic text');
    });
  });

  describe('Events', () => {
    it('should emit bdsBannerLink event on click', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com"></bds-banner-link>`,
      });

      const bdsBannerLinkSpy = jest.fn();
      page.root.addEventListener('bdsBannerLink', bdsBannerLinkSpy);

      // Mock window.open
      const originalOpen = window.open;
      window.open = jest.fn();

      const linkElement = page.root.shadowRoot.querySelector('a');
      linkElement.click();

      expect(bdsBannerLinkSpy).toHaveBeenCalledTimes(1);
      expect(bdsBannerLinkSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: page.root
        })
      );

      // Restore window.open
      window.open = originalOpen;
    });

    it('should emit bdsBannerLink event on Enter key press', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com"></bds-banner-link>`,
      });

      const bdsBannerLinkSpy = jest.fn();
      page.root.addEventListener('bdsBannerLink', bdsBannerLinkSpy);

      // Mock window.open
      const originalOpen = window.open;
      window.open = jest.fn();

      const linkElement = page.root.shadowRoot.querySelector('a');
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      linkElement.dispatchEvent(enterEvent);

      expect(bdsBannerLinkSpy).toHaveBeenCalledTimes(1);
      expect(bdsBannerLinkSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: page.root
        })
      );

      // Restore window.open
      window.open = originalOpen;
    });

    it('should not emit event on other key presses', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com"></bds-banner-link>`,
      });

      const bdsBannerLinkSpy = jest.fn();
      page.root.addEventListener('bdsBannerLink', bdsBannerLinkSpy);

      const linkElement = page.root.shadowRoot.querySelector('a');
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
      linkElement.dispatchEvent(spaceEvent);

      expect(bdsBannerLinkSpy).not.toHaveBeenCalled();
    });
  });

  describe('Window.open Integration', () => {
    it('should open link with correct target on click', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com" target="self"></bds-banner-link>`,
      });

      // Mock window.open
      const originalOpen = window.open;
      const mockOpen = jest.fn();
      window.open = mockOpen;

      const linkElement = page.root.shadowRoot.querySelector('a');
      linkElement.click();

      expect(mockOpen).toHaveBeenCalledWith('https://example.com', '_self');

      // Restore window.open
      window.open = originalOpen;
    });

    it('should open link with correct target on Enter key', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com" target="blank"></bds-banner-link>`,
      });

      // Mock window.open
      const originalOpen = window.open;
      const mockOpen = jest.fn();
      window.open = mockOpen;

      const linkElement = page.root.shadowRoot.querySelector('a');
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      linkElement.dispatchEvent(enterEvent);

      expect(mockOpen).toHaveBeenCalledWith('https://example.com', '_blank');

      // Restore window.open
      window.open = originalOpen;
    });
  });

  describe('Accessibility', () => {
    it('should have correct tabindex for keyboard navigation', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link></bds-banner-link>`,
      });

      const linkElement = page.root.shadowRoot.querySelector('a');
      expect(linkElement.getAttribute('tabindex')).toBe('0');
    });

    it('should be keyboard accessible', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link link="https://example.com"></bds-banner-link>`,
      });

      // Mock window.open
      const originalOpen = window.open;
      window.open = jest.fn();

      const linkElement = page.root.shadowRoot.querySelector('a');
      
      // Should respond to Enter key
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      linkElement.dispatchEvent(enterEvent);
      expect(window.open).toHaveBeenCalledWith('https://example.com', '_blank');

      // Restore window.open
      window.open = originalOpen;
    });
  });

  describe('CSS Classes', () => {
    it('should apply banner__link class', async () => {
      const page = await newSpecPage({
        components: [BannerLink],
        html: `<bds-banner-link></bds-banner-link>`,
      });

      const linkElement = page.root.shadowRoot.querySelector('a');
      expect(linkElement.classList.contains('banner__link')).toBe(true);
    });
  });
});
