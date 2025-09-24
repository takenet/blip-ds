import { newSpecPage } from '@stencil/core/testing';
import { BdsModal } from '../modal';

describe('bds-modal', () => {
  describe('Component Creation', () => {
    it('should create component', () => {
      const component = new BdsModal();
      expect(component).toBeTruthy();
    });

    it('should render component with default properties', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal></bds-modal>`,
      });
      
      expect(page.root).toBeTruthy();
      const dialog = page.root.shadowRoot.querySelector('.modal__dialog');
      expect(dialog).toBeTruthy();
    });
  });

  describe('Props and State', () => {
    it('should have default values', () => {
      const component = new BdsModal();
      expect(component.open).toBe(false);
      expect(component.closeButton).toBe(true);
      expect(component.size).toBe('fixed');
      expect(component.outzoneClose).toBe(true);
      expect(component.enterClose).toBe(true);
    });

    it('should accept boolean properties', () => {
      const component = new BdsModal();
      
      component.open = true;
      expect(component.open).toBe(true);
      
      component.closeButton = false;
      expect(component.closeButton).toBe(false);
      
      component.outzoneClose = false;
      expect(component.outzoneClose).toBe(false);
      
      component.enterClose = false;
      expect(component.enterClose).toBe(false);
    });

    it('should accept different sizes', () => {
      const component = new BdsModal();
      const validSizes = ['fixed', 'dynamic'];
      
      validSizes.forEach(size => {
        component.size = size as any;
        expect(component.size).toBe(size);
      });
    });
  });

  describe('Modal Visibility', () => {
    it('should render as hidden when open is false', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="false"></bds-modal>`,
      });
      
      const dialog = page.root.shadowRoot.querySelector('.modal__dialog');
      expect(dialog.classList.contains('modal__dialog--open')).toBe(false);
    });

    it('should render as visible when open is true', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true"></bds-modal>`,
      });
      
      const dialog = page.root.shadowRoot.querySelector('.modal__dialog');
      expect(dialog.classList.contains('modal__dialog--open')).toBe(true);
    });

    it('should show close button when closeButton is true', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true" close-button="true"></bds-modal>`,
      });
      
      const closeButton = page.root.shadowRoot.querySelector('bds-icon.close-button');
      expect(closeButton).toBeTruthy();
    });

    it('should hide close button when closeButton is false', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true" close-button="false"></bds-modal>`,
      });
      
      const closeButton = page.root.shadowRoot.querySelector('bds-icon.close-button');
      expect(closeButton).toBeFalsy();
    });
  });

  describe('Modal Sizes', () => {
    it('should apply fixed size class', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal size="fixed"></bds-modal>`,
      });
      
      const dialog = page.root.shadowRoot.querySelector('.modal__dialog');
      expect(dialog.classList.contains('modal__dialog--fixed')).toBe(true);
      
      const modal = page.root.shadowRoot.querySelector('.modal');
      expect(modal.classList.contains('modal--fixed')).toBe(true);
    });

    it('should apply dynamic size class', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal size="dynamic"></bds-modal>`,
      });
      
      const dialog = page.root.shadowRoot.querySelector('.modal__dialog');
      expect(dialog.classList.contains('modal__dialog--dynamic')).toBe(true);
      
      const modal = page.root.shadowRoot.querySelector('.modal');
      expect(modal.classList.contains('modal--dynamic')).toBe(true);
    });
  });

  describe('Event Handling', () => {
    it('should emit bdsModalChanged event when modal state changes', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="false"></bds-modal>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsModalChanged', changeSpy);
      
      // Use toggle method to change open state
      await page.root.toggle();
      await page.waitForChanges();
      
      expect(changeSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { modalStatus: 'opened' }
        })
      );
    });

    it('should close modal when clicking outside if outzoneClose is true', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true" outzone-close="true"></bds-modal>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsModalChanged', changeSpy);
      
      const outzone = page.root.shadowRoot.querySelector('.outzone') as HTMLElement;
      outzone.click();
      
      await page.waitForChanges();
      expect(page.root.open).toBe(false);
    });

    it('should not close modal when clicking outside if outzoneClose is false', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true" outzone-close="false"></bds-modal>`,
      });
      
      const outzone = page.root.shadowRoot.querySelector('.outzone') as HTMLElement;
      outzone.click();
      
      await page.waitForChanges();
      expect(page.root.open).toBe(true);
    });

    it('should close modal when close button is clicked', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true" close-button="true"></bds-modal>`,
      });
      
      const closeButton = page.root.shadowRoot.querySelector('bds-icon.close-button') as HTMLElement;
      closeButton.click();
      
      await page.waitForChanges();
      expect(page.root.open).toBe(false);
    });
  });

  describe('Methods', () => {
    it('should have toggle method', () => {
      const component = new BdsModal();
      expect(typeof component.toggle).toBe('function');
    });

    it('should toggle modal state when toggle is called', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="false"></bds-modal>`,
      });
      
      await page.root.toggle();
      expect(page.root.open).toBe(true);
      
      await page.root.toggle();
      expect(page.root.open).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should render modal structure for accessibility', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true"></bds-modal>`,
      });
      
      const modal = page.root.shadowRoot.querySelector('.modal');
      expect(modal).toBeTruthy();
    });

    it('should render close button with focus support', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true"></bds-modal>`,
      });
      
      const closeButton = page.root.shadowRoot.querySelector('bds-icon.close-button');
      expect(closeButton.getAttribute('tabindex')).toBe('0');
    });
  });

  describe('Content Rendering', () => {
    it('should render slotted content', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="true"><div>Modal Content</div></bds-modal>`,
      });
      
      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid toggle operations', async () => {
      const page = await newSpecPage({
        components: [BdsModal],
        html: `<bds-modal open="false"></bds-modal>`,
      });
      
      await page.root.toggle();
      expect(page.root.open).toBe(true);
      
      await page.root.toggle();
      expect(page.root.open).toBe(false);
      
      await page.root.toggle();
      expect(page.root.open).toBe(true);
    });

    it('should render method should return JSX element', () => {
      const component = new BdsModal();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });
});
