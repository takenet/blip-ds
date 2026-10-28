import { newSpecPage } from '@stencil/core/testing';
import { UaiInputPassword } from '../uai-input-password';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInputPassword], html });
const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input') as HTMLInputElement;

describe('uai-input-password', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => warn.mockRestore());

  it('associates the visible label with the native password field', async () => {
    const page = await render('<uai-input-password label="Senha"></uai-input-password>');
    const label = shadow(page).querySelector('label');

    expect(label.getAttribute('for')).toBe(native(page).id);
    expect(label.textContent.trim()).toBe('Senha');
    expect(native(page).type).toBe('password');
    expect(native(page).autocomplete).toBe('current-password');
    expect(native(page).getAttribute('part')).toBe('input');
    expect(shadow(page).querySelector('.password__control').getAttribute('part')).toBe('input-container');
  });

  it('uses the shared short and medium control sizes', async () => {
    const medium = await render('<uai-input-password label="Senha"></uai-input-password>');
    expect(medium.root).toHaveClass('uai-input-password--size-medium');

    const short = await render('<uai-input-password label="Senha" size="short"></uai-input-password>');
    expect(short.root).toHaveClass('uai-input-password--size-short');
  });

  it('falls back to medium and warns for an unknown size', async () => {
    const page = await render('<uai-input-password label="Senha" size="large"></uai-input-password>');

    expect(page.root).toHaveClass('uai-input-password--size-medium');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported size "large"'));
  });

  it('does not reflect the password value to the host attribute', async () => {
    const page = await render('<uai-input-password label="Senha"></uai-input-password>');
    const change = jest.fn();
    page.root.addEventListener('uaiInputPasswordChange', (event: CustomEvent) => change(event.detail));

    page.rootInstance.value = 'example-password';
    await page.waitForChanges();

    expect(native(page).value).toBe('example-password');
    expect(page.root.hasAttribute('value')).toBe(false);
    expect(change).toHaveBeenCalledWith({ value: 'example-password' });
  });

  it('toggles visibility with a native accessible button', async () => {
    const page = await render('<uai-input-password label="Senha" auto-complete="new-password"></uai-input-password>');
    const button = shadow(page).querySelector('button') as HTMLButtonElement;

    expect(button.type).toBe('button');
    expect(button.getAttribute('aria-label')).toBe('Mostrar senha');
    expect(button.getAttribute('aria-pressed')).toBe('false');

    button.click();
    await page.waitForChanges();

    expect(page.rootInstance.openEyes).toBe(true);
    expect(native(page).type).toBe('text');
    expect(native(page).autocomplete).toBe('new-password');
    expect(button.getAttribute('aria-label')).toBe('Ocultar senha');
    expect(button.getAttribute('aria-pressed')).toBe('true');
  });

  it('connects messages and the consumer-provided strength meter to the input', async () => {
    const page = await render(
      '<uai-input-password label="Senha" helper-message="Use a senha da conta." show-strength strength-level="medium"></uai-input-password>',
    );
    const ids = native(page).getAttribute('aria-describedby').split(' ');
    const meter = shadow(page).querySelector('[role="meter"]');

    expect(ids).toHaveLength(2);
    ids.forEach((id) => expect(shadow(page).getElementById(id)).not.toBeNull());
    expect(meter.getAttribute('aria-valuenow')).toBe('2');
    expect(meter.getAttribute('aria-valuetext')).toBe('Média');
    expect(shadow(page).querySelector('.password__message').textContent.trim()).toBe('Use a senha da conta.');
  });

  it('falls back to no indicated strength for an unsupported value', async () => {
    const page = await render(
      '<uai-input-password label="Senha" show-strength strength-level="extreme"></uai-input-password>',
    );

    expect(shadow(page).querySelector('[role="meter"]').getAttribute('aria-valuenow')).toBe('0');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported strengthLevel "extreme"'));
  });

  it('gives danger priority over success and disables the visibility control', async () => {
    const page = await render(
      '<uai-input-password label="Senha" danger success error-message="Revise a senha." success-message="Confirmada." disabled></uai-input-password>',
    );

    expect(page.root).toHaveClass('uai-input-password--danger');
    expect(page.root).not.toHaveClass('uai-input-password--success');
    expect(native(page).getAttribute('aria-invalid')).toBe('true');
    expect(native(page).disabled).toBe(true);
    expect(shadow(page).querySelector('button').hasAttribute('disabled')).toBe(true);
    expect(shadow(page).querySelector('.password__message').textContent.trim()).toBe('Revise a senha.');
    expect(warn).not.toHaveBeenCalled();
  });

  it('uses the supplied aria-label when no visible label is set', async () => {
    const page = await render('<uai-input-password aria-label="Senha da conta"></uai-input-password>');

    expect(native(page).getAttribute('aria-label')).toBe('Senha da conta');
    expect(warn).not.toHaveBeenCalled();
  });
});
