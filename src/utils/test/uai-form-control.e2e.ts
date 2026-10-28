import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { loadPrimitives } from './uai-primitives-harness';

// A minimal form-associated element built on UaiFormControl, the way UAI controls wire it.
const defineField = (page: E2EPage) =>
  page.evaluate(() => {
    const { UaiFormControl } = window as any;
    class TestField extends HTMLElement {
      static formAssociated = true;
      internals = this.attachInternals();
      control = new UaiFormControl({
        internals: this.internals,
        defaultValue: () => this.getAttribute('value') ?? '',
        onReset: () => this.validate(),
        onDisabledChange: (disabled: boolean) => this.toggleAttribute('data-disabled', disabled),
      });

      connectedCallback() {
        this.validate();
      }

      set value(value: string) {
        this.control.setValue(value);
        this.validate();
      }

      get value() {
        return this.control.value;
      }

      validate() {
        this.control.validateRequired(this.hasAttribute('required'), 'Preencha este campo.');
      }

      formResetCallback() {
        this.control.reset();
      }

      formDisabledCallback(disabled: boolean) {
        this.control.setDisabled(disabled);
      }
    }
    customElements.define('test-field', TestField);
  });

const setup = async (fields: string) => {
  const page = await newE2EPage({
    html: `
      <form id="form">
        ${fields}
        <button id="submit" type="submit">Enviar</button>
        <button id="reset" type="reset">Limpar</button>
      </form>`,
  });
  await loadPrimitives(page);
  await defineField(page);
  await page.evaluate(() => {
    const w = window as any;
    w.submissions = [];
    document.getElementById('form').addEventListener('submit', (event) => {
      event.preventDefault();
      w.submissions.push([...new FormData(event.target as HTMLFormElement).entries()]);
    });
  });
  return page;
};

const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);

describe('uai-form-control e2e', () => {
  it('submits the value under the control name', async () => {
    const page = await setup('<test-field name="city" value="Recife"></test-field>');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['city', 'Recife']]]);

    await page.$eval('test-field', (el: any) => (el.value = 'Olinda'));
    await page.click('#submit');
    expect((await submissions(page))[1]).toEqual([['city', 'Olinda']]);
  });

  it('leaves a control without name out of the submitted data', async () => {
    const page = await setup('<test-field value="Recife"></test-field>');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[]]);
  });

  it('restores the default value on form reset, with and without name', async () => {
    const page = await setup(`
      <test-field id="named" name="city" value="Recife"></test-field>
      <test-field id="unnamed" value="Natal"></test-field>`);
    await page.$eval('#named', (el: any) => (el.value = 'Olinda'));
    await page.$eval('#unnamed', (el: any) => (el.value = 'Caruaru'));
    await page.click('#reset');
    expect(await page.$eval('#named', (el: any) => el.value)).toBe('Recife');
    expect(await page.$eval('#unnamed', (el: any) => el.value)).toBe('Natal');

    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['city', 'Recife']]]);
  });

  it('blocks submit while a required control is empty', async () => {
    const page = await setup('<test-field name="city" required></test-field>');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([]);
    expect(await page.$eval('#form', (form: HTMLFormElement) => form.checkValidity())).toBe(false);
    expect(await page.$eval('test-field', (el: any) => el.internals.validationMessage)).toBe('Preencha este campo.');

    await page.$eval('test-field', (el: any) => (el.value = 'Recife'));
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['city', 'Recife']]]);
  });

  it('follows a disabled fieldset and is left out of the submitted data', async () => {
    const page = await setup(`
      <fieldset id="group" disabled>
        <test-field name="city" value="Recife"></test-field>
      </fieldset>`);
    expect(await page.$eval('test-field', (el) => el.hasAttribute('data-disabled'))).toBe(true);
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[]]);

    await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = false));
    expect(await page.$eval('test-field', (el) => el.hasAttribute('data-disabled'))).toBe(false);
    await page.click('#submit');
    expect((await submissions(page))[1]).toEqual([['city', 'Recife']]);
  });
});
