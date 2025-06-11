import { newE2EPage } from '@stencil/core/testing';

describe('bds-banner e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-banner variant="system" button-close="true" context="outside" dt-button-close="should-button-close">
          Instabilidade na plataforma? Nao se preocupe, ja estamos resolvendo!
          <bds-banner-link>Acompanhe aqui</bds-banner-link>
        </bds-banner>
      `,
    });
  });

  describe('Properties', () => {
    it('should render banner with correct variant', async () => {
      const banner = await page.find('bds-banner');
      const variant = await banner.getProperty('variant');
      expect(variant).toBe('system');
    });

    it('should render banner with correct button-close', async () => {
      const banner = await page.find('bds-banner');
      const buttonClose = await banner.getProperty('buttonClose');
      expect(buttonClose).toBe('true');
    });

    it('should render banner with correct context', async () => {
      const banner = await page.find('bds-banner');
      const context = await banner.getProperty('context');
      expect(context).toBe('outside');
    });
  });

  describe('Events', () => {
    it('should emit bdsBannerClose event when close button is clicked', async () => {
      const banner = await page.find('bds-banner');
      const bdsBannerCloseEvent = await banner.spyOnEvent('bdsBannerClose');

      const closeButton = await page.find('bds-banner >>> bds-button-icon[icon="close"]');
      await closeButton.click();
      await page.waitForChanges();

      expect(bdsBannerCloseEvent).toHaveReceivedEvent();
    });

    it('should emit bdsBannerLink event when banner link is clicked', async () => {
      const bannerLink = await page.find('bds-banner-link');
      const bdsBannerLinkEvent = await bannerLink.spyOnEvent('bdsBannerLink');

      await bannerLink.click();
      await page.waitForChanges();

      expect(bdsBannerLinkEvent).toHaveReceivedEvent();
    });
  });

  describe('Methods', () => {
    it('should toggle banner visibility when toggle method is called', async () => {
      page = await newE2EPage({
        html: `
          <button onclick="document.querySelector('bds-banner').toggle()">Toggle Banner</button>
          <bds-banner variant="system" button-close="true" context="outside">
            Instabilidade na plataforma? Nao se preocupe, ja estamos resolvendo!
            <bds-banner-link>Acompanhe aqui</bds-banner-link>
          </bds-banner>
        `,
      });

      const banner = await page.find('bds-banner');
      
      // Close banner via close button
      const closeButton = await page.find('bds-banner >>> bds-button-icon[icon="close"]');
      await closeButton.click();
      await page.waitForChanges();

      // Toggle banner back via external button
      const toggleButton = await page.find('button');
      await toggleButton.click();
      await page.waitForChanges();

      // Check that banner is visible again
      const isVisible = await banner.isVisible();
      expect(isVisible).toBe(true);
    });
  });
});