import { newE2EPage } from '@stencil/core/testing';

describe('bds-data-table e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-data-table></bds-data-table>`,
    });
  });

  describe('Basic Rendering', () => {
    it('should render data table component', async () => {
      const dataTable = await page.find('bds-data-table');
      expect(dataTable).toBeTruthy();
    });

    it('should have shadow DOM', async () => {
      const dataTable = await page.find('bds-data-table');
      expect(dataTable.shadowRoot).toBeTruthy();
    });
  });

  describe('Table Structure', () => {
    it('should render table elements', async () => {
      const table = await page.find('bds-data-table >>> table');
      expect(table).toBeTruthy();
    });

    it('should handle empty table data', async () => {
      const dataTable = await page.find('bds-data-table');
      expect(dataTable).toBeTruthy();
    });
  });

  describe('With Data', () => {
    it('should handle table with data', async () => {
      const page = await newE2EPage({
        html: `
          <bds-data-table>
            <bds-table>
              <bds-table-header>
                <bds-table-row>
                  <bds-table-header-cell>Header 1</bds-table-header-cell>
                </bds-table-row>
              </bds-table-header>
              <bds-table-body>
                <bds-table-row>
                  <bds-table-cell>Cell 1</bds-table-cell>
                </bds-table-row>
              </bds-table-body>
            </bds-table>
          </bds-data-table>
        `,
      });
      
      const dataTable = await page.find('bds-data-table');
      expect(dataTable).toBeTruthy();
      
      const table = await page.find('bds-table');
      expect(table).toBeTruthy();
    });
  });
});