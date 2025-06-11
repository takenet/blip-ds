import { newE2EPage } from '@stencil/core/testing';

describe('bds-alert e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-alert>
          <bds-alert-header variant="system" icon="info">
            Atencao!
          </bds-alert-header>
          <bds-alert-body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!
          </bds-alert-body>
          <bds-alert-actions>
            <bds-button variant="tertiary">Cancelar</bds-button>
            <bds-button variant="primary">Confirmar</bds-button>
          </bds-alert-actions>
        </bds-alert>
      `,
    });
  });

  describe('Properties', () => {
    it('should render alert-header with correct icon', async () => {
      const alertHeader = await page.find('bds-alert-header');
      const icon = await alertHeader.getProperty('icon');
      expect(icon).toBe('info');
    });
  });

  describe('Methods', () => {
    it('should toggle alert when toggle method is called', async () => {
      const alert = await page.find('bds-alert');

      await alert.callMethod('toggle');
      await page.waitForChanges();

      const isOpen = await alert.getProperty('open');
      expect(isOpen).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should toggle via external button', async () => {
      page = await newE2EPage({
        html: `
          <button onclick="document.querySelector('bds-alert').toggle()">Toggle Alert</button>
          <bds-alert id="alert">
            <bds-alert-header variant="system" icon="info">
              Atencao!
            </bds-alert-header>
            <bds-alert-body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </bds-alert-body>
            <bds-alert-actions>
              <bds-button variant="tertiary">Cancelar</bds-button>
              <bds-button variant="primary">Confirmar</bds-button>
            </bds-alert-actions>
          </bds-alert>
        `,
      });

      const button = await page.find('button');
      await button.click();
      await page.waitForChanges();

      const alert = await page.find('bds-alert');
      const isOpen = await alert.getProperty('open');
      expect(isOpen).toBe(true);
    });
  });
});