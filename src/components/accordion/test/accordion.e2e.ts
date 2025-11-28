import { newE2EPage } from '@stencil/core/testing';

describe('bds-accordion e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-accordion>
          <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associados.</bds-typo>
          </bds-accordion-body>
        </bds-accordion>
      `,
    });
  });

  describe('Events', () => {
    it('should emit bdsToggle event when toggle method is called', async () => {
      const accordion = await page.find('bds-accordion');
      const bdsToggleEvent = await accordion.spyOnEvent('bdsToggle');

      await accordion.callMethod('toggle');
      await page.waitForChanges();

      expect(bdsToggleEvent).toHaveReceivedEvent();
    });

    it('should emit bdsAccordionOpen event when open method is called', async () => {
      const accordion = await page.find('bds-accordion');
      const bdsAccordionOpenEvent = await accordion.spyOnEvent('bdsAccordionOpen');

      await accordion.callMethod('open');
      await page.waitForChanges();

      expect(bdsAccordionOpenEvent).toHaveReceivedEvent();
    });

    it('should emit bdsAccordionClose event when close method is called', async () => {
      const accordion = await page.find('bds-accordion');
      const bdsAccordionCloseEvent = await accordion.spyOnEvent('bdsAccordionClose');

      // First open the accordion
      await accordion.callMethod('open');
      await page.waitForChanges();

      // Then close it
      await accordion.callMethod('close');
      await page.waitForChanges();

      expect(bdsAccordionCloseEvent).toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should toggle accordion state when toggle method is called', async () => {
      const accordion = await page.find('bds-accordion');

      await accordion.callMethod('toggle');
      await page.waitForChanges();
      
      // Wait for animation to complete (500ms timeout in component)
      await page.waitForTimeout(600);

      const accordionBody = await page.find('bds-accordion-body >>> .accordion_body');
      expect(accordionBody).toHaveClass('accordion_body_isOpen');
    });

    it('should open accordion when open method is called', async () => {
      const accordion = await page.find('bds-accordion');

      await accordion.callMethod('open');
      await page.waitForChanges();
      
      // Wait for animation to complete
      await page.waitForTimeout(600);

      const accordionBody = await page.find('bds-accordion-body >>> .accordion_body');
      expect(accordionBody).toHaveClass('accordion_body_isOpen');
    });

    it('should close accordion when close method is called', async () => {
      const accordion = await page.find('bds-accordion');

      // First open the accordion
      await accordion.callMethod('open');
      await page.waitForChanges();
      await page.waitForTimeout(600);

      // Then close it
      await accordion.callMethod('close');
      await page.waitForChanges();

      const accordionBody = await page.find('bds-accordion-body >>> .accordion_body');
      expect(accordionBody).not.toHaveClass('accordion_body_isOpen');
    });
  });

  describe('Properties', () => {
    it('should start open when startOpen property is true', async () => {
      page = await newE2EPage({
        html: `
          <bds-accordion start-open="true">
            <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Content</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        `,
      });

      const accordion = await page.find('bds-accordion');
      const startOpen = await accordion.getProperty('startOpen');

      expect(startOpen).toBe(true);
    });

    it('should have divisor by default', async () => {
      const accordion = await page.find('bds-accordion');
      const divisor = await accordion.getProperty('divisor');

      expect(divisor).toBe(true);
    });

    it('should not have divisor when divisor property is false', async () => {
      page = await newE2EPage({
        html: `
          <bds-accordion divisor="false">
            <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Content</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        `,
      });

      const accordion = await page.find('bds-accordion');
      const divisor = await accordion.getProperty('divisor');

      expect(divisor).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should be focusable via header element', async () => {
      // The focusable element is now the accordion_header div
      const headerElement = await page.find('bds-accordion-header >>> .accordion_header');
      
      await headerElement.focus();
      await page.waitForChanges();
      
      // Check if the header element has tabIndex 0 for keyboard navigation
      const tabIndex = await headerElement.getAttribute('tabindex');
      expect(tabIndex).toBe('0');
    });

    it('should have aria-expanded attribute', async () => {
      const headerElement = await page.find('bds-accordion-header >>> .accordion_header');
      
      // Initially closed
      const ariaExpanded = await headerElement.getAttribute('aria-expanded');
      expect(ariaExpanded).toBe('false');
    });

    it('should have role button', async () => {
      const headerElement = await page.find('bds-accordion-header >>> .accordion_header');
      
      const role = await headerElement.getAttribute('role');
      expect(role).toBe('button');
    });

    it('should toggle on Enter key press from header', async () => {
      const accordion = await page.find('bds-accordion');
      const bdsAccordionOpenEvent = await accordion.spyOnEvent('bdsAccordionOpen');

      // Focus the header element and press Enter
      const headerElement = await page.find('bds-accordion-header >>> .accordion_header');
      
      await headerElement.focus();
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      // The component should open when Enter is pressed (since it starts closed)
      expect(bdsAccordionOpenEvent).toHaveReceivedEvent();
    });

    it('should update aria-expanded when opened', async () => {
      const accordion = await page.find('bds-accordion');
      const headerElement = await page.find('bds-accordion-header >>> .accordion_header');

      // Open the accordion
      await accordion.callMethod('open');
      await page.waitForChanges();

      const ariaExpanded = await headerElement.getAttribute('aria-expanded');
      expect(ariaExpanded).toBe('true');
    });
  });
});