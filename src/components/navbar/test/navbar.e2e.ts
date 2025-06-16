import { newE2EPage } from '@stencil/core/testing';

describe('bds-navbar e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-navbar 
          orientation="vertical" 
          background-color="surface-1"
          justify-content="space-between"
          data-test="navbar-test"
        >
          <div>Navbar Content</div>
        </bds-navbar>
      `,
    });
  });

  describe('Properties', () => {
    it('should render navbar component', async () => {
      const navbar = await page.find('bds-navbar');
      expect(navbar).toBeTruthy();
    });

    it('should accept orientation property', async () => {
      const navbar = await page.find('bds-navbar');
      const orientation = await navbar.getProperty('orientation');
      expect(orientation).toBe('vertical');
    });

    it('should accept backgroundColor property', async () => {
      const navbar = await page.find('bds-navbar');
      const backgroundColor = await navbar.getProperty('backgroundColor');
      expect(backgroundColor).toBe('surface-1');
    });

    it('should accept justifyContent property', async () => {
      const navbar = await page.find('bds-navbar');
      const justifyContent = await navbar.getProperty('justifyContent');
      expect(justifyContent).toBe('space-between');
    });

    it('should accept dataTest property', async () => {
      const navbar = await page.find('bds-navbar');
      const dataTest = await navbar.getProperty('dataTest');
      expect(dataTest).toBe('navbar-test');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const navbar = await page.find('bds-navbar');
      expect(navbar.shadowRoot).toBeTruthy();
    });

    it('should render div with navbar class', async () => {
      const navbar = await page.find('bds-navbar >>> .navbar');
      expect(navbar).toBeTruthy();
    });

    it('should apply orientation class', async () => {
      const navbar = await page.find('bds-navbar >>> .navbar');
      const className = await navbar.getProperty('className');
      expect(className).toContain('navbar__orientation__vertical');
    });

    it('should apply background color class', async () => {
      const navbar = await page.find('bds-navbar >>> .navbar');
      const className = await navbar.getProperty('className');
      expect(className).toContain('navbar__background-color__surface-1');
    });

    it('should apply justify content class', async () => {
      const navbar = await page.find('bds-navbar >>> .navbar');
      const className = await navbar.getProperty('className');
      expect(className).toContain('navbar__justify-content__space-between');
    });

    it('should have slot for content', async () => {
      const slot = await page.find('bds-navbar >>> slot');
      expect(slot).toBeTruthy();
    });

    it('should apply data-test attribute', async () => {
      const navbar = await page.find('bds-navbar >>> .navbar');
      const dataTest = await navbar.getAttribute('data-test');
      expect(dataTest).toBe('navbar-test');
    });
  });

  describe('Content', () => {
    it('should display slotted content', async () => {
      const content = await page.find('bds-navbar div');
      expect(content).toBeTruthy();
      expect(await content.textContent).toBe('Navbar Content');
    });
  });

  describe('Property Changes', () => {
    it('should update orientation', async () => {
      const navbar = await page.find('bds-navbar');
      await navbar.setProperty('orientation', 'horizontal');
      await page.waitForChanges();
      
      const navbarDiv = await page.find('bds-navbar >>> .navbar');
      const className = await navbarDiv.getProperty('className');
      expect(className).toContain('navbar__orientation__horizontal');
    });

    it('should update backgroundColor', async () => {
      const navbar = await page.find('bds-navbar');
      await navbar.setProperty('backgroundColor', 'surface-2');
      await page.waitForChanges();
      
      const navbarDiv = await page.find('bds-navbar >>> .navbar');
      const className = await navbarDiv.getProperty('className');
      expect(className).toContain('navbar__background-color__surface-2');
    });

    it('should update justifyContent', async () => {
      const navbar = await page.find('bds-navbar');
      await navbar.setProperty('justifyContent', 'center');
      await page.waitForChanges();
      
      const navbarDiv = await page.find('bds-navbar >>> .navbar');
      const className = await navbarDiv.getProperty('className');
      expect(className).toContain('navbar__justify-content__center');
    });
  });

  describe('Edge Cases', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-navbar></bds-navbar>`,
      });
      
      const navbar = await page.find('bds-navbar');
      const orientation = await navbar.getProperty('orientation');
      const backgroundColor = await navbar.getProperty('backgroundColor');
      const justifyContent = await navbar.getProperty('justifyContent');
      
      expect(orientation).toBe('vertical');
      expect(backgroundColor).toBe('surface-1');
      expect(justifyContent).toBe('space-between');
    });

    it('should handle null dataTest', async () => {
      const page = await newE2EPage({
        html: `<bds-navbar></bds-navbar>`,
      });
      
      const navbar = await page.find('bds-navbar');
      const dataTest = await navbar.getProperty('dataTest');
      expect(dataTest).toBeNull();
    });
  });
});