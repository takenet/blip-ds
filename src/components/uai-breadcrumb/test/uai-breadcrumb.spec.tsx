import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { UaiBreadcrumb, UaiBreadcrumbItem } from '../uai-breadcrumb';
import { UaiButton } from '../../uai-button/uai-button';
import { UaiInput } from '../../uai-input/uai-input';

const items: UaiBreadcrumbItem[] = [
  { label: 'Home', href: '/home' },
  { label: 'Reports', href: '/reports' },
  { label: 'Folder' },
  { label: 'Current', href: '/current' },
];

const render = (props: Partial<UaiBreadcrumb> = {}) =>
  newSpecPage({
    components: [UaiBreadcrumb, UaiButton, UaiInput],
    template: () => <uai-breadcrumb {...props} />,
  });
const root = (page: SpecPage) => page.root.shadowRoot;
const activate = async (page: SpecPage, selector: string) => {
  root(page).querySelector(selector).dispatchEvent(new CustomEvent('uaiClick'));
  await page.waitForChanges();
};
const draft = async (page: SpecPage, value: string) => {
  root(page)
    .querySelector('uai-input')
    .dispatchEvent(new CustomEvent('uaiChange', { detail: { value } }));
  await page.waitForChanges();
};

describe('uai-breadcrumb', () => {
  let warning: jest.SpyInstance;

  beforeEach(() => {
    warning = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });
  afterEach(() => warning.mockRestore());

  it('preserves defaults and the legacy empty text', async () => {
    const page = await render();
    expect(page.rootInstance.items).toEqual([]);
    expect(page.rootInstance.wrapItems).toBe(true);
    expect(page.rootInstance.editable).toBe(false);
    expect(root(page).textContent).toContain('Sem itens para exibir no Breadcrumb.');
    expect(root(page).querySelector('nav')).toBeNull();
  });

  it.each([1, 2, 3, 4, 10])('collapses only above three items: %s', async (count) => {
    const hierarchy = Array.from({ length: count }, (_, index) => ({ label: `Page ${index}` }));
    const page = await render({ items: hierarchy });
    expect(root(page).querySelectorAll('.breadcrumb__list > li')).toHaveLength(count > 3 ? 3 : count);
    expect(root(page).querySelectorAll('.breadcrumb__hidden-items li')).toHaveLength(count > 3 ? count - 2 : 0);
    expect(root(page).querySelectorAll('.breadcrumb__list .breadcrumb__separator')).toHaveLength(
      count > 3 ? 2 : count - 1,
    );
    expect(root(page).querySelector('[aria-current="page"]').textContent).toBe(`Page ${count - 1}`);
  });

  it('accepts JSON and native boolean attributes', async () => {
    const page = await newSpecPage({
      components: [UaiBreadcrumb],
      html: `<uai-breadcrumb wrap-items="false"></uai-breadcrumb>`,
    });
    page.root.items = JSON.stringify(items);
    await page.waitForChanges();
    expect(root(page).querySelectorAll('.breadcrumb__list > li')).toHaveLength(4);
    page.root.setAttribute('wrap-items', '');
    await page.waitForChanges();
    expect(root(page).querySelectorAll('.breadcrumb__list > li')).toHaveLength(3);
  });

  it.each(['{', '{}', 'null', '[{"label":1}]', '[{"label":"Page","href":1}]'])(
    'warns for invalid items: %s',
    async (value) => {
      const page = await render({ items: value });
      expect(warning).toHaveBeenCalledWith(
        expect.stringContaining('[uai-breadcrumb]'),
        ...(value === '{' ? [expect.any(Error)] : []),
      );
      expect(root(page).querySelector('nav')).toBeNull();
    },
  );

  it('does not interpret a real ellipsis label as a control', async () => {
    const page = await render({ items: [{ label: '...' }, { label: 'Current' }] });
    expect(root(page).querySelector('.breadcrumb__toggle')).toBeNull();
    expect(root(page).textContent).toContain('...');
  });

  it('preserves links, noninteractive text, original order and a single current item', async () => {
    const page = await render({ items });
    expect(root(page).querySelectorAll('a')).toHaveLength(3);
    expect(root(page).querySelectorAll('[aria-current]')).toHaveLength(1);
    expect(root(page).querySelector('[aria-current]').getAttribute('href')).toBe('/current');
    expect(root(page).querySelector('.breadcrumb__hidden-items').textContent).toBe('ReportsFolder');
    expect(root(page).querySelector('.breadcrumb__hidden-items li:last-child a')).toBeNull();
  });

  it('emits exact click payload once without cancelling native navigation', async () => {
    const page = await render({ items });
    const listener = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemClick', listener);
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    root(page).querySelector<HTMLAnchorElement>('.breadcrumb__hidden-items a').dispatchEvent(event);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener.mock.calls[0][0].detail).toEqual(items[1]);
    expect(event.defaultPrevented).toBe(false);
    expect(listener.mock.calls[0][0].bubbles).toBe(true);
    expect(listener.mock.calls[0][0].composed).toBe(true);
  });

  it('updates items and wrapItems without leaving a stale panel', async () => {
    const page = await render({ items });
    page.root.wrapItems = false;
    await page.waitForChanges();
    expect(root(page).querySelector('.breadcrumb__panel')).toBeNull();
    expect(root(page).querySelectorAll('.breadcrumb__list > li')).toHaveLength(4);
    page.root.items = [{ label: 'Other' }];
    await page.waitForChanges();
    expect(root(page).querySelector('[aria-current]').textContent).toBe('Other');
  });

  it('edits only the last item and requests a rename with original index without mutation', async () => {
    const original = items.map((item) => Object.freeze({ ...item }));
    const page = await render({ items: original, editable: true });
    const listener = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemEdit', listener);
    expect(root(page).querySelectorAll('.breadcrumb__edit')).toHaveLength(1);
    await activate(page, '.breadcrumb__edit');
    const input = root(page).querySelector('uai-input');
    expect(input.size).toBe('short');
    expect(input.name).toBeUndefined();
    await draft(page, ' Renamed ');
    await activate(page, '.breadcrumb__confirm');
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener.mock.calls[0][0].detail).toEqual({ index: 3, oldValue: 'Current', value: ' Renamed ' });
    expect(original[3].label).toBe('Current');
    expect(root(page).querySelector('uai-input')).toBeNull();
    expect(root(page).querySelector('[aria-current]').textContent).toBe('Current');
  });

  it.each(['', '   '])('rejects empty values: %s', async (value) => {
    const page = await render({ items, editable: true });
    const listener = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemEdit', listener);
    await activate(page, '.breadcrumb__edit');
    await draft(page, value);
    await activate(page, '.breadcrumb__confirm');
    expect(root(page).querySelector('uai-input').danger).toBe(true);
    expect(listener).not.toHaveBeenCalled();
  });

  it('cancel and no-op close without requesting a rename', async () => {
    const page = await render({ items, editable: true });
    const listener = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemEdit', listener);
    await activate(page, '.breadcrumb__edit');
    await activate(page, '.breadcrumb__confirm');
    expect(root(page).querySelector('uai-input')).toBeNull();
    await activate(page, '.breadcrumb__edit');
    await draft(page, 'Draft');
    await activate(page, '.breadcrumb__cancel');
    expect(root(page).querySelector('uai-input')).toBeNull();
    expect(listener).not.toHaveBeenCalled();
  });

  it('blur preserves the draft and external items changes cancel it', async () => {
    const page = await render({ items, editable: true });
    const listener = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemEdit', listener);
    await activate(page, '.breadcrumb__edit');
    await draft(page, 'Draft');
    root(page).querySelector('uai-input').dispatchEvent(new CustomEvent('uaiOnBlur'));
    await page.waitForChanges();
    expect(root(page).querySelector('uai-input').value).toBe('Draft');
    page.root.items = [{ label: 'Other' }];
    await page.waitForChanges();
    expect(root(page).querySelector('uai-input')).toBeNull();
    expect(listener).not.toHaveBeenCalled();
  });

  it('prevents external submit and ignores IME Enter', async () => {
    const page = await render({ items, editable: true });
    const listener = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemEdit', listener);
    await activate(page, '.breadcrumb__edit');
    const enter = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true, isComposing: true });
    root(page)
      .querySelector('uai-input')
      .dispatchEvent(new CustomEvent('uaiSubmit', { detail: { event: enter, value: 'Draft' } }));
    expect(enter.defaultPrevented).toBe(true);
    expect(listener).not.toHaveBeenCalled();
    const submit = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
    root(page)
      .querySelector('uai-input')
      .dispatchEvent(new CustomEvent('uaiSubmit', { detail: { event: submit, value: 'Draft' } }));
    expect(submit.defaultPrevented).toBe(true);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('Escape cancels and disabling editable closes the editor', async () => {
    const page = await render({ items, editable: true });
    await activate(page, '.breadcrumb__edit');
    root(page)
      .querySelector('.breadcrumb__editor')
      .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();
    expect(root(page).querySelector('uai-input')).toBeNull();
    await activate(page, '.breadcrumb__edit');
    page.root.editable = false;
    await page.waitForChanges();
    expect(root(page).querySelector('uai-input')).toBeNull();
    expect(root(page).querySelector('.breadcrumb__edit')).toBeNull();
  });

  it('localizes labels and only introduces a current heading when asked', async () => {
    const page = await render({ items, editable: true, language: 'en_US', labels: { edit: 'Rename' } });
    expect(root(page).querySelector('.breadcrumb__edit').ariaLabel).toBe('Rename');
    expect(root(page).querySelector('[role="heading"]')).toBeNull();
    page.root.currentHeadingLevel = 1;
    await page.waitForChanges();
    expect(root(page).querySelectorAll('[role="heading"]')).toHaveLength(1);
    expect(root(page).querySelector('[role="heading"]').getAttribute('aria-level')).toBe('1');
  });
});
