import { newE2EPage } from '@stencil/core/testing';

describe('bds-accordion-group e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-accordion-group collapse="multiple">
          <bds-accordion>
            <bds-accordion-header accordion-title="Título do accordion 1"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associados.</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion>
            <bds-accordion-header accordion-title="Título do accordion 2"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Conteúdo do segundo accordion.</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-accordion-group>
      `,
    });
  });

  describe('Events', () => {
    it('should emit bdsAccordionOpenAll event when openAll method is called', async () => {
      const accordionGroup = await page.find('bds-accordion-group');
      const bdsAccordionOpenAllEvent = await accordionGroup.spyOnEvent('bdsAccordionOpenAll');

      await accordionGroup.callMethod('openAll');
      await page.waitForChanges();

      expect(bdsAccordionOpenAllEvent).toHaveReceivedEvent();
    });

    it('should emit bdsAccordionCloseAll event when closeAll method is called', async () => {
      const accordionGroup = await page.find('bds-accordion-group');
      const bdsAccordionCloseAllEvent = await accordionGroup.spyOnEvent('bdsAccordionCloseAll');

      // First open all accordions
      await accordionGroup.callMethod('openAll');
      await page.waitForChanges();

      // Then close all
      await accordionGroup.callMethod('closeAll');
      await page.waitForChanges();

      expect(bdsAccordionCloseAllEvent).toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should open all accordions when openAll method is called', async () => {
      const accordionGroup = await page.find('bds-accordion-group');

      await accordionGroup.callMethod('openAll');
      await page.waitForChanges();
      
      // Wait for animations to complete
      await page.waitForTimeout(600);

      const accordionBodies = await page.findAll('bds-accordion-body >>> .accordion_body');
      
      // Check that all accordion bodies have the open class
      for (const body of accordionBodies) {
        expect(body).toHaveClass('accordion_body_isOpen');
      }
    });

    it('should close all accordions when closeAll method is called', async () => {
      const accordionGroup = await page.find('bds-accordion-group');

      // First open all accordions
      await accordionGroup.callMethod('openAll');
      await page.waitForChanges();
      await page.waitForTimeout(600);

      // Then close all
      await accordionGroup.callMethod('closeAll');
      await page.waitForChanges();

      const accordionBodies = await page.findAll('bds-accordion-body >>> .accordion_body');
      
      // Check that all accordion bodies don't have the open class
      for (const body of accordionBodies) {
        expect(body).not.toHaveClass('accordion_body_isOpen');
      }
    });
  });

  describe('Properties', () => {
    it('should have collapse property set to multiple', async () => {
      const accordionGroup = await page.find('bds-accordion-group');
      const collapse = await accordionGroup.getAttribute('collapse');

      expect(collapse).toBe('multiple');
    });

    it('should work with single collapse mode', async () => {
      page = await newE2EPage({
        html: `
          <bds-accordion-group collapse="single">
            <bds-accordion>
              <bds-accordion-header accordion-title="Título do accordion 1"></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">Conteúdo 1</bds-typo>
              </bds-accordion-body>
            </bds-accordion>
            <bds-accordion>
              <bds-accordion-header accordion-title="Título do accordion 2"></bds-accordion-header>
              <bds-accordion-body>
                <bds-typo variant="fs-16">Conteúdo 2</bds-typo>
              </bds-accordion-body>
            </bds-accordion>
          </bds-accordion-group>
        `,
      });

      const accordionGroup = await page.find('bds-accordion-group');
      const collapse = await accordionGroup.getAttribute('collapse');

      expect(collapse).toBe('single');
    });
  });
});