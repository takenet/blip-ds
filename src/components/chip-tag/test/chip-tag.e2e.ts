import { newE2EPage } from '@stencil/core/testing';

describe('bds-chip-tag e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-chip-tag color="info" icon="edit">
          ChipTag
        </bds-chip-tag>
      `,
    });
  });

  describe('Properties', () => {
    it('should render chip-tag with correct color', async () => {
      const chipTag = await page.find('bds-chip-tag');
      const color = await chipTag.getProperty('color');
      expect(color).toBe('info');
    });

    it('should render chip-tag with correct icon', async () => {
      const chipTag = await page.find('bds-chip-tag');
      const icon = await chipTag.getProperty('icon');
      expect(icon).toBe('edit');
    });
  });
});