import { newSpecPage } from '@stencil/core/testing';
import { InputEditable } from '../input-editable';

describe('input-editable', () => {
  let page;

  const getInputEditable = async () => {
    return await newSpecPage({
      components: [InputEditable],
      html: `<bds-input-editable
      value="Test"
    ></bds-input-editable>`,
    });
  };

  beforeEach(async () => {
    page = await getInputEditable();
  });

  it('should render the component', async () => {
    expect(page.doc.querySelector('bds-input-editable')).toBeTruthy();
  });

  it('should be able to set the default input props by accessing the element directly', async () => {
    page.root.value = 'blip input editable';
    await page.waitForChanges();
    const typo: HTMLInputElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.innerText).toBe('blip input editable');
  });
});
