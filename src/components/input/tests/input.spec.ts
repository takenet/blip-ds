import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';

describe('bds-input', () => {
  let page;
  let inputRootElement;

  const getInput = async () => {
    return await newSpecPage({
      components: [Input],
      html: `<bds-input></bds-input>`,
    });
  };

  beforeEach(async () => {
    page = await getInput();

    inputRootElement = page.root;
  });

  it('should build', () => {
    expect(new Input()).toBeTruthy();
  });

  it('should render the component', async () => {
    expect(page.doc.querySelector('bds-input')).toBeTruthy();
    expect(page).toMatchSnapshot();
  });

  it('should be able to set the default input props by accessing the element directly', async () => {
    inputRootElement.inputName = 'blip';
    inputRootElement.type = 'email';
    inputRootElement.placeholder = 'blip placeholder';
    inputRootElement.readonly = true;
    inputRootElement.disabled = true;
    inputRootElement.autoCapitalize = 'on';
    inputRootElement.autoComplete = 'on';
    inputRootElement.value = 'blip input';

    const input: HTMLInputElement = inputRootElement.shadowRoot.querySelector('input');

    await page.waitForChanges();

    expect(input.getAttribute('name')).toBe('blip');
    expect(input.getAttribute('type')).toBe('email');
    expect(input.getAttribute('placeholder')).toBe('blip placeholder');
    expect(input.getAttribute('readonly')).toBeDefined();
    expect(input.getAttribute('disabled')).toBeDefined();
    expect(input.getAttribute('autoCapitalize')).toBe('on');
    expect(input.getAttribute('autoComplete')).toBe('on');
    expect(input.getAttribute('value')).toBe('blip input');
  });

  it('should be able to set a value to the input', () => {
    const input: HTMLInputElement = inputRootElement.shadowRoot.querySelector('input');

    input.value = 'blip input text';

    expect(input.value).toBe('blip input text');
  });

  it('should test the input label', async () => {
    inputRootElement.label = 'blip label';

    await page.waitForChanges();

    const label = inputRootElement.shadowRoot.querySelector('.input__container__label');

    expect(label.textContent).toBe('blip label');
  });

  it('should test the input icon prop', async () => {
    inputRootElement.icon = 'info';

    await page.waitForChanges();

    const icon = inputRootElement.shadowRoot.querySelector('.input__icon');

    expect(icon.firstElementChild.getAttribute('name')).toBe('info');
  });

  it('should render a helper message', async () => {
    inputRootElement.helperMessage = 'blip helper message';

    await page.waitForChanges();

    const helperMessage = await page.doc.querySelector('bds-input').shadowRoot.querySelector('.input__message');

    expect(helperMessage.textContent).toBe('blip helper message');
  });

  it('should display the counting of remaining characters available', async () => {
    inputRootElement.maxlength = 30;
    inputRootElement.counterLength = true;

    await page.waitForChanges();

    const counterText = inputRootElement.shadowRoot.querySelector('.input').querySelector('bds-counter-text');

    expect(counterText.outerHTML).toBeTruthy();
  });

  it('should switch the input to textarea and set row and cols', async () => {
    inputRootElement.isTextarea = true;
    inputRootElement.cols = 2;
    inputRootElement.rows = 1;

    await page.waitForChanges();

    const textarea = inputRootElement.shadowRoot.querySelector('textarea');

    expect(textarea).toBeTruthy();
    expect(textarea.getAttribute('cols')).toBe('2');
    expect(textarea.getAttribute('rows')).toBe('1');
  });
});
