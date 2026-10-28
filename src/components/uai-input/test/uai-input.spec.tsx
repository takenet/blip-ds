import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { UaiInput } from '../uai-input';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInput], html });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input') as HTMLInputElement;
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();

describe('uai-input', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('anatomy', () => {
    it('renders the label above a native input associated with it', async () => {
      const page = await render(`<uai-input label="Nome" helper-message="Como aparece no perfil"></uai-input>`);
      const label = shadow(page).querySelector('label');

      expect(label.getAttribute('for')).toBe(native(page).id);
      expect(label.textContent.trim()).toBe('Nome');
      expect(native(page).getAttribute('part')).toBe('input');
      expect(shadow(page).querySelector('.input__control').getAttribute('part')).toBe('input-container');
      expect(message(page)).toBe('Como aparece no perfil');
    });

    it('describes the field with the message and the counter', async () => {
      const page = await render(
        `<uai-input label="Nome" helper-message="Ajuda" counter-length maxlength="20"></uai-input>`,
      );
      const ids = native(page).getAttribute('aria-describedby').split(' ');

      expect(ids).toHaveLength(2);
      ids.forEach((id) => expect(shadow(page).getElementById(id)).not.toBeNull());
    });

    it('renders the icon and the slots', async () => {
      const page = await render(`<uai-input label="Busca" type="search" icon="search"></uai-input>`);

      expect(shadow(page).querySelector('uai-icon.input__icon').getAttribute('name')).toBe('search');
      expect(native(page).getAttribute('type')).toBe('search');
      ['input-left', 'inside-input-left', 'input-right'].forEach((name) =>
        expect(shadow(page).querySelector(`slot[name="${name}"]`)).not.toBeNull(),
      );
    });
  });

  describe('feedback', () => {
    it('gives danger priority over success, with the error icon and message', async () => {
      const page = await render(
        `<uai-input label="E-mail" danger success error-message="E-mail inválido" success-message="Tudo certo"></uai-input>`,
      );

      expect(page.root).toHaveClass('uai-input--danger');
      expect(page.root).not.toHaveClass('uai-input--success');
      expect(shadow(page).querySelector('.input__feedback').getAttribute('name')).toBe('error');
      expect(native(page).getAttribute('aria-invalid')).toBe('true');
      expect(message(page)).toBe('E-mail inválido');
    });

    it('shows the success icon and message', async () => {
      const page = await render(`<uai-input label="E-mail" success success-message="Tudo certo"></uai-input>`);

      expect(page.root).toHaveClass('uai-input--success');
      expect(shadow(page).querySelector('.input__feedback').getAttribute('name')).toBe('checkball');
      expect(message(page)).toBe('Tudo certo');
    });

    it('marks disabled', async () => {
      const page = await render(`<uai-input label="Nome" disabled></uai-input>`);

      expect(page.root).toHaveClass('uai-input--disabled');
      expect(page.root.getAttribute('aria-disabled')).toBe('true');
      expect(native(page).disabled).toBe(true);
    });

    it('marks readonly without looking disabled', async () => {
      const page = await render(`<uai-input label="Nome" readonly></uai-input>`);

      expect(page.root).toHaveClass('uai-input--readonly');
      expect(page.root).not.toHaveClass('uai-input--disabled');
      expect(native(page).readOnly).toBe(true);
    });
  });

  describe('sizes and types', () => {
    it('uses medium by default and short when asked', async () => {
      const medium = await render(`<uai-input label="Nome"></uai-input>`);
      expect(medium.root).toHaveClass('uai-input--size-medium');
      const short = await render(`<uai-input label="Nome" size="short"></uai-input>`);
      expect(short.root).toHaveClass('uai-input--size-short');
    });

    it('falls back to medium and warns for an unknown size', async () => {
      const page = await render(`<uai-input label="Nome" size="large"></uai-input>`);

      expect(page.root).toHaveClass('uai-input--size-medium');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported size "large"'));
    });

    it.each([
      ['password', 'password', 'uai-input-password'],
      ['phonenumber', 'tel', 'uai-input-phone'],
      ['date', 'date', 'uai-input-date'],
    ])('keeps the legacy type %s working with a deprecation warning', async (type, nativeType, replacement) => {
      const page = await render(`<uai-input label="Campo" type="${type}"></uai-input>`);

      expect(native(page).getAttribute('type')).toBe(nativeType);
      expect(warn).toHaveBeenCalledWith(expect.stringContaining(replacement));
    });

    it('falls back to text for an unknown type', async () => {
      const page = await render(`<uai-input label="Campo" type="color"></uai-input>`);

      expect(native(page).getAttribute('type')).toBe('text');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported type "color"'));
    });
  });

  describe('migration from bds-input', () => {
    it.each([
      ['is-textarea', 'isTextarea', 'uai-textarea'],
      ['rows="4"', 'rows', 'uai-textarea'],
      ['chips', 'chips', 'uai-input-chips'],
      ['icon-size="medium"', 'iconSize', 'icon size follows the field'],
    ])('accepts %s as deprecated with its destination', async (attribute, prop, hint) => {
      await render(`<uai-input label="Campo" ${attribute}></uai-input>`);

      expect(warn).toHaveBeenCalledWith(expect.stringContaining(`"${prop}" is deprecated`));
      expect(warn).toHaveBeenCalledWith(expect.stringContaining(hint));
    });

    it('does not warn when no legacy prop is used', async () => {
      await render(`<uai-input label="Campo"></uai-input>`);

      expect(warn).not.toHaveBeenCalled();
    });

    it('emits uaiChange with the value, escaped when encode is set', async () => {
      const page = await render(`<uai-input label="Campo" encode></uai-input>`);
      const change = jest.fn();
      page.root.addEventListener('uaiChange', (event: CustomEvent) => change(event.detail));

      page.rootInstance.value = '<b>"oi"</b>';
      await page.waitForChanges();

      expect(change).toHaveBeenCalledWith({ value: '&lt;b&gt;&#34;oi&#34;&lt;&#47;b&gt;' });
    });

    it('clears the value with clear()', async () => {
      const page = await render(`<uai-input label="Campo" value="abc"></uai-input>`);

      await page.root.clear();
      await page.waitForChanges();

      expect(page.rootInstance.value).toBe('');
      expect(native(page).value).toBe('');
    });

    it('sets the form name on the host from name or inputName', async () => {
      expect(
        (await render(`<uai-input label="Campo" input-name="cidade"></uai-input>`)).root.getAttribute('name'),
      ).toBe('cidade');
      expect((await render(`<uai-input label="Campo" name="estado"></uai-input>`)).root.getAttribute('name')).toBe(
        'estado',
      );
    });
  });

  describe('accessibility', () => {
    it('passes aria-label to the native input when there is no visible label', async () => {
      const page = await render(`<uai-input aria-label="Buscar"></uai-input>`);

      expect(native(page).getAttribute('aria-label')).toBe('Buscar');
      expect(warn).not.toHaveBeenCalled();
    });

    it('warns when the field has no accessible name', async () => {
      await render(`<uai-input></uai-input>`);

      expect(warn).toHaveBeenCalledWith('[uai-input] Fields without a visible label require an aria-label.');
    });
  });

  describe('counter', () => {
    const rule = { warning: { max: 5, min: 2 }, delete: { max: 1, min: 0 } };

    it.each([
      ['abc', null, '3/10'],
      ['abcdef', 'warning', '6/10'],
      ['abcdefghi', 'delete', '9/10'],
    ])('shows %s as length/maxlength with state %s', async (value, state, text) => {
      const page = await newSpecPage({
        components: [UaiInput],
        template: () => (
          <uai-input label="Campo" value={value} counterLength maxlength={10} counterLengthRule={rule}></uai-input>
        ),
      });
      const counter = shadow(page).querySelector('.input__counter');

      expect(counter.textContent.trim()).toBe(text);
      expect(counter).toHaveClasses(state ? ['input__counter', `input__counter--${state}`] : ['input__counter']);
    });
  });
});
