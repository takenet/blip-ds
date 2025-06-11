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
    it('should be focusable', async () => {
      // The focusable element is the bds-icon button inside the accordion header's shadow DOM
      const iconButton = await page.find('bds-accordion-header >>> bds-icon.accButton');
      
      await iconButton.focus();
      await page.waitForChanges();
      
      // Check if the icon button is focused
      const isFocused = await iconButton.getProperty('tabIndex');
      expect(isFocused).toBe(0);
    });

    it('should toggle on Enter key press from header', async () => {
      const accordion = await page.find('bds-accordion');
      const bdsAccordionOpenEvent = await accordion.spyOnEvent('bdsAccordionOpen');

      // Focus the icon button inside the header and press Enter
      const iconButton = await page.find('bds-accordion-header >>> bds-icon.accButton');
      
      await iconButton.focus();
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      // The component should open when Enter is pressed (since it starts closed)
      expect(bdsAccordionOpenEvent).toHaveReceivedEvent();
    });
  });
});