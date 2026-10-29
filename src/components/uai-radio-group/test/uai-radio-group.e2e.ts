import { newE2EPage } from '@stencil/core/testing';

describe('uai-radio-group e2e', () => {
  it('submits one selected value and updates on arrow navigation', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <uai-radio-group aria-label="Forma de pagamento" name="payment" value="card">
            <div>
              <uai-radio label="Cartão" value="card"></uai-radio>
              <uai-radio label="Boleto" value="boleto" disabled></uai-radio>
              <uai-radio label="Pix" value="pix"></uai-radio>
            </div>
          </uai-radio-group>
        </form>`,
    });

    expect(await page.evaluate(() => [...new FormData(document.querySelector('form')).entries()])).toEqual([
      ['payment', 'card'],
    ]);
    await page.focus('uai-radio[value="card"] >>> input');
    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();

    expect(await page.$eval('uai-radio-group', (group: any) => group.value)).toBe('pix');
    expect(await page.evaluate(() => [...new FormData(document.querySelector('form')).entries()])).toEqual([
      ['payment', 'pix'],
    ]);
  });

  it('validates required selection and returns to the initial selection on form reset', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <uai-radio-group aria-label="Forma de pagamento" name="payment" required required-error-message="Selecione uma forma." value="card">
            <div>
              <uai-radio label="Cartão" value="card"></uai-radio>
              <uai-radio label="Pix" value="pix"></uai-radio>
            </div>
          </uai-radio-group>
          <button type="reset">Limpar</button>
        </form>`,
    });

    await page.click('uai-radio[value="pix"] >>> input');
    await page.click('button');
    await page.waitForChanges();

    expect(await page.$eval('uai-radio-group', (group: any) => group.value)).toBe('card');
    expect(await page.$eval('uai-radio-group', (group: any) => group.getAttribute('aria-invalid'))).toBe(null);
  });

  it('blocks an empty required group and follows a disabled fieldset', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <uai-radio-group id="required-group" aria-label="Forma obrigatória" name="required-payment" required>
            <div>
              <uai-radio label="Cartão" value="card"></uai-radio>
              <uai-radio label="Pix" value="pix"></uai-radio>
            </div>
          </uai-radio-group>
          <fieldset disabled>
            <uai-radio-group id="disabled-group" aria-label="Forma" name="payment" required>
              <div>
                <uai-radio label="Cartão" value="card"></uai-radio>
                <uai-radio label="Pix" value="pix"></uai-radio>
              </div>
            </uai-radio-group>
          </fieldset>
          <button type="submit">Enviar</button>
        </form>`,
    });

    await page.click('button');
    await page.waitForChanges();

    expect(
      await page.$eval('#required-group', (group: any) => group.getAttribute('aria-invalid')),
    ).toBe('true');
    expect(
      await page.$eval('#disabled-group', (group: any) => group.getAttribute('aria-invalid')),
    ).toBe(null);
    expect(await page.$eval('#disabled-group', (group: any) => group.getAttribute('aria-disabled'))).toBe('true');
    expect(await page.$eval('#disabled-group uai-radio >>> input', (input: HTMLInputElement) => input.disabled)).toBe(true);
  });
});
