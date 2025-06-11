import { newE2EPage } from '@stencil/core/testing';

describe('bds-button-group e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <button id="activateButton">Previous button</button>
        <bds-button-group
          color="primary"
          direction="column"
          size="medium"
        >
          <bds-button icon-left="builder-publish-bot" id="bot-builder-publish"></bds-button>
          <bds-button icon-left="search" id="bot-search"></bds-button>
          <bds-button icon-left="email" id="bot-email"></bds-button>
          <bds-button icon-left="bell" id="bot-bell"></bds-button>
          <bds-button icon-left="settings-general" id="bot-settings"></bds-button>
        </bds-button-group>
      `,
    });

    // Add button group functionality
    await page.evaluate(() => {
      const activateButton = document.getElementById('activateButton');
      const buttonGroup = document.querySelector('bds-button-group');
      
      activateButton.addEventListener('click', () => {
        buttonGroup.activateButton(3);
      });
    });
  });

  describe('Properties', () => {
    it('should render button-group with correct color', async () => {
      const buttonGroup = await page.find('bds-button-group');
      const color = await buttonGroup.getAttribute('color');
      expect(color).toBe('primary');
    });

    it('should render button-group with correct size', async () => {
      const buttonGroup = await page.find('bds-button-group');
      const size = await buttonGroup.getAttribute('size');
      expect(size).toBe('medium');
    });

    it('should render button-group with correct direction', async () => {
      const buttonGroup = await page.find('bds-button-group');
      const direction = await buttonGroup.getAttribute('direction');
      expect(direction).toBe('column');
    });
  });

  describe('Events', () => {
    it('should emit buttonSelected event when button is clicked', async () => {
      const buttonGroup = await page.find('bds-button-group');
      const buttonSelectedEvent = await buttonGroup.spyOnEvent('buttonSelected');

      const searchButton = await page.find('bds-button-group bds-button[id="bot-search"] >>> button');
      await searchButton.click();
      await page.waitForChanges();

      expect(buttonSelectedEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should activate button when activateButton method is called', async () => {
      const activateButton = await page.find('#activateButton');
      await activateButton.click();
      await page.waitForChanges();

      const bellButton = await page.find('bds-button-group bds-button[id="bot-bell"] >>> button');
      const classList = await bellButton.getProperty('className');
      expect(classList).toContain('button--active');
    });
  });
});