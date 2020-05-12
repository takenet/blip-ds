import { newE2EPage } from '@stencil/core/testing';

describe('toast e2e tests', () => {
    it('should open the toast', async () => {
        const page = await newE2EPage({
            html: `<bds-toast-container></bds-toast-container><bds-toast></bds-toast>`
        });
        
        const toast = await page.find('bds-toast');
        
        toast.setProperty('show', true);

        await page.waitForChanges();

        expect(toast.shadowRoot.querySelector('.toast')).toHaveClass('show');
    });

    it('should hide the toast', async () => {
        const page = await newE2EPage({
            html: `<bds-toast-container></bds-toast-container><bds-toast></bds-toast>`
        });
        
        const toast = await page.find('bds-toast');
        
        toast.setProperty('hide', true);

        await page.waitForChanges();

        expect(toast.shadowRoot.querySelector('.toast')).toHaveClass('hide');
    });
})