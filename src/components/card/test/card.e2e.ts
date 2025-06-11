import { newE2EPage } from '@stencil/core/testing';

describe('bds-card e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-card clickable="true" height="200px" width="fit-content">
          <bds-card-header>
            <bds-avatar name="Blip" size="small"></bds-avatar>
            <bds-grid direction="column">
              <bds-card-title text="@TakeBlip"></bds-card-title>
              <bds-card-subtitle text="10/10/21 11:20 | atualizado ha 10 min"></bds-card-subtitle>
            </bds-grid>
            <bds-button-icon icon="more-options-vertical" size="small" variant="secondary"></bds-button-icon>
          </bds-card-header>
          <bds-card-body>
            <bds-grid align-items="center" direction="column" gap="1" justify-content="center" xxs="12">
              <bds-icon name="blip-chat" size="brand" type="logo"></bds-icon>
            </bds-grid>
          </bds-card-body>
          <bds-card-footer align="flex-start">
            <bds-typo bold="bold">Blip Chat</bds-typo>
          </bds-card-footer>
        </bds-card>
      `,
    });
  });

  describe('Properties', () => {
    it('should render card with correct clickable', async () => {
      const card = await page.find('bds-card');
      const clickable = await card.getProperty('clickable');
      expect(clickable).toBe(true);
    });

    it('should render card with correct height', async () => {
      const card = await page.find('bds-card');
      const height = await card.getProperty('height');
      expect(height).toBe('200px');
    });

    it('should render card with correct width', async () => {
      const card = await page.find('bds-card');
      const width = await card.getProperty('width');
      expect(width).toBe('fit-content');
    });
  });

  describe('Events', () => {
    it('should emit bdsClick event when clicked', async () => {
      const card = await page.find('bds-card');
      const bdsClickEvent = await card.spyOnEvent('bdsClick');

      await card.click();
      await page.waitForChanges();

      expect(bdsClickEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-card clickable="true" height="200px" width="fit-content">
            <bds-card-header>
              <bds-avatar name="Blip" size="small"></bds-avatar>
              <bds-grid direction="column">
                <bds-card-title text="@TakeBlip"></bds-card-title>
                <bds-card-subtitle text="10/10/21 11:20 | atualizado ha 10 min"></bds-card-subtitle>
              </bds-grid>
              <bds-button-icon icon="more-options-vertical" size="small" variant="secondary"></bds-button-icon>
            </bds-card-header>
            <bds-card-body>
              <bds-grid align-items="center" direction="column" gap="1" justify-content="center" xxs="12">
                <bds-icon name="blip-chat" size="brand" type="logo"></bds-icon>
              </bds-grid>
            </bds-card-body>
            <bds-card-footer align="flex-start">
              <bds-typo bold="bold">Blip Chat</bds-typo>
            </bds-card-footer>
          </bds-card>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-CARD');
    });
  });
});