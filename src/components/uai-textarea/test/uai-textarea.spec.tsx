import { newSpecPage } from '@stencil/core/testing';
import { UaiTextarea } from '../uai-textarea';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiTextarea], html });
const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('textarea') as HTMLTextAreaElement;
const message = (page) => shadow(page).querySelector('.textarea__message')?.textContent.trim();

describe('uai-textarea', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => warn.mockRestore());

  it('renders the label, helper, native textarea and slots', async () => {
    const page = await render(
      '<uai-textarea label="Descrição" helper-message="Explique em poucas palavras" rows="4"></uai-textarea>',
    );
    const textarea = native(page);
    const label = shadow(page).querySelector('label');

    expect(label.getAttribute('for')).toBe(textarea.id);
    expect(textarea.getAttribute('rows')).toBe('4');
    expect(textarea.getAttribute('part')).toBe('input');
    expect(shadow(page).querySelector('.textarea__control').getAttribute('part')).toBe('input-container');
    expect(message(page)).toBe('Explique em poucas palavras');
    ['input-left', 'inside-input-left', 'input-right'].forEach((name) =>
      expect(shadow(page).querySelector(`slot[name="${name}"]`)).not.toBeNull(),
    );
  });

  it('uses the shared sizes and lets explicit rows override the size default', async () => {
    const medium = await render('<uai-textarea label="Descrição"></uai-textarea>');
    expect(medium.root).toHaveClass('uai-textarea--size-medium');
    expect(native(medium).getAttribute('rows')).toBe('3');

    const short = await render('<uai-textarea label="Descrição" size="short"></uai-textarea>');
    expect(short.root).toHaveClass('uai-textarea--size-short');
    expect(native(short).getAttribute('rows')).toBe('1');

    const rowsOverride = await render('<uai-textarea label="Descrição" size="short" rows="4"></uai-textarea>');
    expect(native(rowsOverride).getAttribute('rows')).toBe('4');
  });

  it('falls back to medium and warns for an unknown size', async () => {
    const page = await render('<uai-textarea label="Descrição" size="large"></uai-textarea>');

    expect(page.root).toHaveClass('uai-textarea--size-medium');
    expect(native(page).getAttribute('rows')).toBe('3');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported size "large"'));
  });

  it('describes the field with its helper and character counter', async () => {
    const page = await render(
      '<uai-textarea label="Descrição" helper-message="Ajuda" counter-length maxlength="100"></uai-textarea>',
    );
    const ids = native(page).getAttribute('aria-describedby').split(' ');

    expect(ids).toHaveLength(2);
    ids.forEach((id) => expect(shadow(page).getElementById(id)).not.toBeNull());
  });

  it('applies optional height limits and exposes manual resizing', async () => {
    const page = await render('<uai-textarea label="Descrição" resizable min-height="60" max-height="200"></uai-textarea>');
    page.rootInstance.autoResize = false;
    await page.waitForChanges();

    expect(page.root).toHaveClass('uai-textarea--resizable');
    expect(native(page).style.minHeight).toBe('60px');
    expect(native(page).style.maxHeight).toBe('200px');
  });

  it('synchronizes inputName until an explicit name takes precedence', async () => {
    const page = await render('<uai-textarea label="Descrição" input-name="bio"></uai-textarea>');

    expect(page.root.getAttribute('name')).toBe('bio');
    page.rootInstance.inputName = 'about';
    await page.waitForChanges();
    expect(page.root.getAttribute('name')).toBe('about');

    page.rootInstance.name = 'profile';
    await page.waitForChanges();
    page.rootInstance.inputName = 'summary';
    await page.waitForChanges();
    expect(page.root.getAttribute('name')).toBe('profile');
  });

  it('keeps an optional empty value valid and validates a non-empty pattern', async () => {
    const page = await render('<uai-textarea label="Código" pattern="[A-Z]{2}" pattern-error-message="Use duas letras."></uai-textarea>');

    expect(await page.root.isValid()).toBe(true);
    page.rootInstance.value = 'AB';
    await page.waitForChanges();
    expect(await page.root.isValid()).toBe(true);
    page.rootInstance.value = 'abc';
    await page.waitForChanges();
    expect(await page.root.isValid()).toBe(false);
  });

  it('emits escaped changes and clears through the public method', async () => {
    const page = await render('<uai-textarea label="Descrição" encode></uai-textarea>');
    const change = jest.fn();
    page.root.addEventListener('uaiChange', (event: CustomEvent) => change(event.detail));

    page.rootInstance.value = '<b>"oi"</b>';
    await page.waitForChanges();
    expect(change).toHaveBeenCalledWith({ value: '&lt;b&gt;&#34;oi&#34;&lt;&#47;b&gt;' });

    await page.root.clear();
    await page.waitForChanges();
    expect(native(page).value).toBe('');
  });
});
