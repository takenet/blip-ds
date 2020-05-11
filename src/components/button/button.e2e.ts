import { newE2EPage } from '@stencil/core/testing';

describe('button e2e tests', () => {
    it('should submit a form if the type is equal to submit and exists a form nearby', async () => {
        const page = await newE2EPage({
            html: `<form><bds-input></bds-input><bds-button type="submit"></bds-button></form>`
        });
        
        const form = await page.find('form');
        const formSubmit = await form.spyOnEvent('submit');
    
        const input = await page.find('bds-input');

        input.setProperty('value', 'Blip-ds');
        
        await page.waitForChanges();
        
        const inputValue = await input.getProperty('value');

        expect(inputValue).toBe('Blip-ds');

        const bdsButton = await page.find('bds-button');
        await bdsButton.click();
        
        expect(formSubmit).toHaveReceivedEvent();
    });
});