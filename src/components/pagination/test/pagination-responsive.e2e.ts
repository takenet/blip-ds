import { newE2EPage } from '@stencil/core/testing';

describe('bds-pagination responsive behavior', () => {
  describe('Responsive Breakpoints', () => {
    let page;
    
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
          <bds-pagination 
            pages="10"
            started-page="1"
            items-page='["10", "20", "30"]'
            number-items="100"
            page-counter="true"
          ></bds-pagination>
        `,
      });
    });

    it('should hide items_per_page at mobile breakpoint (< 600px)', async () => {
      await page.setViewport({ width: 500, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.items_per_page');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).toBe('none');
    });

    it('should hide items_per_page at tablet/intermediate breakpoint (600px - 905px)', async () => {
      await page.setViewport({ width: 750, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.items_per_page');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).toBe('none');
    });

    it('should show items_per_page at desktop breakpoint (> 905px)', async () => {
      await page.setViewport({ width: 1200, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.items_per_page');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).not.toBe('none');
    });

    it('should hide actions--text at mobile breakpoint (< 600px)', async () => {
      await page.setViewport({ width: 500, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.actions--text');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).toBe('none');
    });

    it('should show actions--text at tablet/intermediate breakpoint (600px - 905px)', async () => {
      await page.setViewport({ width: 750, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.actions--text');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).not.toBe('none');
    });

    it('should show actions--text at desktop breakpoint (> 905px)', async () => {
      await page.setViewport({ width: 1200, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.actions--text');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).not.toBe('none');
    });
  });

  describe('Boundary Testing', () => {
    let page;
    
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
          <bds-pagination 
            pages="10"
            started-page="1"
            items-page='["10", "20", "30"]'
            number-items="100"
            page-counter="true"
          ></bds-pagination>
        `,
      });
    });

    it('should hide items_per_page exactly at 905px', async () => {
      await page.setViewport({ width: 905, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.items_per_page');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).toBe('none');
    });

    it('should show items_per_page at 906px', async () => {
      await page.setViewport({ width: 906, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.items_per_page');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).not.toBe('none');
    });

    it('should hide actions--text exactly at 600px', async () => {
      await page.setViewport({ width: 600, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.actions--text');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).toBe('none');
    });

    it('should show actions--text at 601px', async () => {
      await page.setViewport({ width: 601, height: 800 });
      await page.waitForChanges();

      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-pagination').shadowRoot.querySelector('.actions--text');
        return element ? window.getComputedStyle(element).display : null;
      });

      expect(computedStyle).not.toBe('none');
    });
  });
});