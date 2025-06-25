import { newE2EPage } from '@stencil/core/testing';

describe('bds-pagination responsive behavior', () => {
  describe('Debug Test', () => {
    it('should display pagination with items per page section - debug info', async () => {
      const page = await newE2EPage({
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

      await page.setViewport({ width: 1200, height: 800 });
      await page.waitForChanges();

      // Debug: Let's see what elements exist
      const paginationElement = await page.find('bds-pagination');
      console.log('Pagination element found:', !!paginationElement);

      // Check the props
      const pageCounter = await paginationElement.getProperty('pageCounter');
      const itemsPage = await paginationElement.getProperty('itemsPage');
      const itemsPerPage = await paginationElement.getProperty('itemsPerPage');
      const itemValue = await paginationElement.getProperty('itemValue');
      
      console.log('Props:', { pageCounter, itemsPage, itemsPerPage, itemValue });

      // Try to find elements with different selectors
      try {
        const itemsPerPageWithShadow = await page.find('bds-pagination >>> .items_per_page');
        console.log('Found .items_per_page with >>>', !!itemsPerPageWithShadow);

        // Try alternative approach to find shadow elements
        const allGrids = await page.findAll('bds-pagination >>> bds-grid');
        console.log('Found bds-grid elements:', allGrids.length);

        // Try to get innerHTML from the pagination element
        const paginationInnerHTML = await page.evaluate(() => {
          const pagination = document.querySelector('bds-pagination');
          return pagination.shadowRoot ? pagination.shadowRoot.innerHTML : 'No shadow root';
        });
        console.log('Shadow DOM content preview:', paginationInnerHTML.substring(0, 500));
        
        if (itemsPerPageWithShadow) {
          const computedStyle = await page.evaluate((element) => {
            return {
              display: window.getComputedStyle(element).display,
              visibility: window.getComputedStyle(element).visibility,
              opacity: window.getComputedStyle(element).opacity
            };
          }, itemsPerPageWithShadow);
          console.log('Computed style at 1200px:', computedStyle);
        }

        // Now test at 750px 
        await page.setViewport({ width: 750, height: 800 });
        await page.waitForChanges();

        if (itemsPerPageWithShadow) {
          const computedStyleTablet = await page.evaluate((element) => {
            return {
              display: window.getComputedStyle(element).display,
              visibility: window.getComputedStyle(element).visibility,
              opacity: window.getComputedStyle(element).opacity
            };
          }, itemsPerPageWithShadow);
          console.log('Computed style at 750px:', computedStyleTablet);
        }

      } catch (e) {
        console.log('Error finding .items_per_page:', e.message);
      }

      expect(paginationElement).toBeTruthy();
    });
  });

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

      const itemsPerPageElement = await page.find('bds-pagination >>> .items_per_page');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, itemsPerPageElement);

      expect(computedStyle).toBe('none');
    });

    it('should hide items_per_page at tablet/intermediate breakpoint (600px - 905px)', async () => {
      await page.setViewport({ width: 750, height: 800 });
      await page.waitForChanges();

      const itemsPerPageElement = await page.find('bds-pagination >>> .items_per_page');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, itemsPerPageElement);

      expect(computedStyle).toBe('none');
    });

    it('should show items_per_page at desktop breakpoint (> 905px)', async () => {
      await page.setViewport({ width: 1200, height: 800 });
      await page.waitForChanges();

      const itemsPerPageElement = await page.find('bds-pagination >>> .items_per_page');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, itemsPerPageElement);

      expect(computedStyle).not.toBe('none');
    });

    it('should hide actions--text at mobile breakpoint (< 600px)', async () => {
      await page.setViewport({ width: 500, height: 800 });
      await page.waitForChanges();

      const actionsTextElement = await page.find('bds-pagination >>> .actions--text');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, actionsTextElement);

      expect(computedStyle).toBe('none');
    });

    it('should show actions--text at tablet/intermediate breakpoint (600px - 905px)', async () => {
      await page.setViewport({ width: 750, height: 800 });
      await page.waitForChanges();

      const actionsTextElement = await page.find('bds-pagination >>> .actions--text');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, actionsTextElement);

      expect(computedStyle).not.toBe('none');
    });

    it('should show actions--text at desktop breakpoint (> 905px)', async () => {
      await page.setViewport({ width: 1200, height: 800 });
      await page.waitForChanges();

      const actionsTextElement = await page.find('bds-pagination >>> .actions--text');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, actionsTextElement);

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

      const itemsPerPageElement = await page.find('bds-pagination >>> .items_per_page');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, itemsPerPageElement);

      expect(computedStyle).toBe('none');
    });

    it('should show items_per_page at 906px', async () => {
      await page.setViewport({ width: 906, height: 800 });
      await page.waitForChanges();

      const itemsPerPageElement = await page.find('bds-pagination >>> .items_per_page');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, itemsPerPageElement);

      expect(computedStyle).not.toBe('none');
    });

    it('should hide actions--text exactly at 600px', async () => {
      await page.setViewport({ width: 600, height: 800 });
      await page.waitForChanges();

      const actionsTextElement = await page.find('bds-pagination >>> .actions--text');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, actionsTextElement);

      expect(computedStyle).toBe('none');
    });

    it('should show actions--text at 601px', async () => {
      await page.setViewport({ width: 601, height: 800 });
      await page.waitForChanges();

      const actionsTextElement = await page.find('bds-pagination >>> .actions--text');
      const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element).display;
      }, actionsTextElement);

      expect(computedStyle).not.toBe('none');
    });
  });
});