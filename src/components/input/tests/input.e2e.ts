import { newE2EPage } from '@stencil/core/testing';

describe('input e2e tests', () => {
  let page;
  let inputRootElement;
  let inputNativeElement;

  const eventMock = {
    isTrusted: true,
  };

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input></bds-input>`,
    });

    inputRootElement = await page.find('bds-input');
    inputNativeElement = await page.find('bds-input >>> input');
  });

  it('should test the minlength prop', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.minlength = 3;
      elm.maxlength = 10;
      elm.minlengthErrorMessage = 'the min length should be 3';
    });

    await page.waitForChanges();

    const value = await inputNativeElement.getProperty('value');
    expect(value).toBe('');

    await inputNativeElement.press(1);
    await inputNativeElement.press('Tab');

    let errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('the min length should be 3');

    await inputNativeElement.press(2);
    await inputNativeElement.press(3);
    await inputNativeElement.press('Tab');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
  });

  it('should test the maxlength prop', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.minlength = 1;
      elm.maxlength = 3;
      elm.minlengthErrorMessage = 'the min length should be 3';
    });

    page.waitForChanges();

    await inputNativeElement.press(1);
    await inputNativeElement.press(2);
    await inputNativeElement.press(3);
    await inputNativeElement.press(4);

    const value = await inputNativeElement.getProperty('value');
    const errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
    expect(value).toBe('123');
  });

  it('should test the min prop', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.type = 'number';
      elm.min = '2';
      elm.minErrorMessage = 'the minimum value should be 2';
    });

    await page.waitForChanges();

    await inputNativeElement.press(1);
    await inputNativeElement.press('Tab');

    let errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('the minimum value should be 2');

    await inputNativeElement.press(0);
    await inputNativeElement.press('Tab');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
  });

  it('should test the max prop', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.type = 'number';
      elm.max = '3';
      elm.maxErrorMessage = 'the max value should be 3';
    });

    await page.waitForChanges();

    await inputNativeElement.press(4);
    await inputNativeElement.press('Tab');

    let errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('the max value should be 3');

    await inputNativeElement.press('Backspace');
    await inputNativeElement.press(1);
    await inputNativeElement.press('Tab');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
  });

  it('should test the required prop', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.required = true;
      elm.requiredErrorMessage = 'this field is required';
    });

    await page.waitForChanges();

    await inputNativeElement.press('Tab');

    let errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('this field is required');

    await inputNativeElement.press('a');
    await inputNativeElement.press('Tab');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
  });

  it('should test the input type email', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.type = 'email';
      elm.emailErrorMessage = 'please type a valid email';
    });

    await page.waitForChanges();

    await inputNativeElement.type('a');

    let errorMessage = await page.find('bds-input >>> .input__message');
    expect(errorMessage.textContent).toBe('please type a valid email');

    await inputNativeElement.press('Backspace');
    await inputNativeElement.type('valid@take.net');
    await inputNativeElement.press('Tab');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(await inputNativeElement.getProperty('value')).toBe('valid@take.net');
    expect(errorMessage).toBeFalsy();
  });

  it('should test thte input with two validations', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.required = true;
      elm.type = 'email';
      elm.requiredErrorMessage = 'the input is required';
      elm.emailErrorMessage = 'the input must be an email';
    });

    await page.waitForChanges();

    await inputNativeElement.click();
    await inputNativeElement.press('Tab');

    let errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('the input is required');

    await inputNativeElement.type('invalidmail');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('the input must be an email');

    await inputNativeElement.type('blip@take.net');

    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
  });

  it('should emit the bdsChange event on value change', async () => {
    const spy = await page.spyOnEvent('bdsChange');

    await inputNativeElement.type('a');

    expect(spy).toHaveReceivedEventDetail({ value: 'a' });
  });

  it('should emit the bdsInput event when the input changes', async () => {
    const spy = await page.spyOnEvent('bdsInput');

    await inputNativeElement.type('a');

    expect(spy).toHaveReceivedEventDetail(eventMock);
  });

  it('should emit the bdsOnBlur event', async () => {
    const spy = await page.spyOnEvent('bdsOnBlur');

    await inputNativeElement.type('a');
    await inputNativeElement.press('Tab');

    expect(spy).toHaveReceivedEvent();
  });

  it('should emit the bdsFocus event', async () => {
    const spy = await page.spyOnEvent('bdsFocus');

    await inputNativeElement.press('Enter');

    expect(spy).toHaveReceivedEvent();
  });

  it('should emit the bdsSubmit event', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.isSubmit = true;
    });

    const spy = await page.spyOnEvent('bdsSubmit');

    await inputNativeElement.type('blip');
    await inputNativeElement.press('Enter');

    expect(spy).toHaveReceivedEventDetail({
      event: eventMock,
      value: 'blip',
    });

    expect(await inputNativeElement.getProperty('value')).toBe('');
  });

  it('should test the danger and error-message prop', async () => {
    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.required = true;
      elm.type = 'email';
      elm.errorMessage = 'error message';
      elm.danger = true;
    });

    await page.waitForChanges();

    let danger = await inputRootElement.getProperty('danger');
    let errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage.textContent).toBe('error message');
    expect(danger).toBeTruthy();

    await page.$eval('bds-input', (elm: HTMLBdsInputElement) => {
      elm.errorMessage = 'error message';
      elm.danger = false;
    });

    danger = await inputRootElement.getProperty('danger');
    errorMessage = await page.find('bds-input >>> .input__message');

    expect(errorMessage).toBeFalsy();
    expect(danger).toBeFalsy();
  });
});
