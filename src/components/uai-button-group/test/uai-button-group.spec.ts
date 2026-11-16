import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { UaiButton } from '../../uai-button/uai-button';
import { UaiButtonGroup } from '../uai-button-group';

const HTML = `
  <uai-button-group label="Visualização">
    <uai-button id="a" aria-label="Lista" icon-left="list"></uai-button>
    <uai-button id="b" aria-label="Grade" icon-left="grid"></uai-button>
    <uai-button id="c" aria-label="Quadro" icon-left="board"></uai-button>
  </uai-button-group>`;

const create = (html = HTML) => newSpecPage({ components: [UaiButtonGroup, UaiButton], html });

const button = (page: SpecPage, id: string) => page.body.querySelector(`#${id}`) as HTMLUaiButtonElement;
const inner = (page: SpecPage, id: string) => button(page, id).shadowRoot.querySelector('button');
const click = async (page: SpecPage, id: string) => {
  button(page, id).click();
  await page.waitForChanges();
};

describe('uai-button-group', () => {
  it('keeps the bds-button-group defaults', async () => {
    const page = await create();
    const group = page.rootInstance;
    expect(group.size).toBe('medium');
    expect(group.direction).toBe('row');
    expect(group.color).toBe('primary');
    expect(group.multiple).toBe(false);
  });

  it('is a named group laid out in a row', async () => {
    const page = await create();
    expect(page.root.getAttribute('role')).toBe('group');
    expect(page.root.getAttribute('aria-label')).toBe('Visualização');
    expect(page.root.shadowRoot.querySelector('.button-group').classList.contains('button-group--row')).toBe(true);
  });

  it('joins the buttons: positions, direction, size, color and outline variant', async () => {
    const page = await create();
    await page.waitForChanges();
    expect(inner(page, 'a').classList.contains('button--position-row-first')).toBe(true);
    expect(inner(page, 'b').classList.contains('button--position-row-middle')).toBe(true);
    expect(inner(page, 'c').classList.contains('button--position-row-last')).toBe(true);
    for (const id of ['a', 'b', 'c']) {
      expect(button(page, id).variant).toBe('outline');
      expect(button(page, id).size).toBe('medium');
      expect(button(page, id).color).toBe('primary');
    }
  });

  it('applies new size, color and direction to every button', async () => {
    const page = await create();
    page.root.size = 'large';
    page.root.color = 'content';
    page.root.direction = 'column';
    await page.waitForChanges();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.button-group').classList.contains('button-group--column')).toBe(true);
    expect(inner(page, 'a').classList.contains('button--position-column-first')).toBe(true);
    for (const id of ['a', 'b', 'c']) {
      expect(button(page, id).size).toBe('large');
      expect(button(page, id).color).toBe('content');
    }
  });

  describe('single selection', () => {
    it('selects the clicked button, makes it solid and pressed, and emits uaiButtonSelected', async () => {
      const page = await create();
      const spy = jest.fn();
      page.root.addEventListener('uaiButtonSelected', spy);

      await click(page, 'b');
      await page.waitForChanges();
      expect(button(page, 'b').variant).toBe('solid');
      expect(button(page, 'b').classList.contains('active')).toBe(true);
      expect(inner(page, 'b').getAttribute('aria-pressed')).toBe('true');
      expect(inner(page, 'a').getAttribute('aria-pressed')).toBe('false');
      expect(spy.mock.calls[0][0].detail).toEqual({ id: 'b', index: 1, active: true, selected: [1] });
    });

    it('moves the selection to another button and unselects on a second click', async () => {
      const page = await create();
      await click(page, 'a');
      await click(page, 'c');
      await page.waitForChanges();
      expect(button(page, 'a').variant).toBe('outline');
      expect(button(page, 'c').variant).toBe('solid');

      const spy = jest.fn();
      page.root.addEventListener('uaiButtonSelected', spy);
      await click(page, 'c');
      await page.waitForChanges();
      expect(button(page, 'c').variant).toBe('outline');
      expect(spy.mock.calls[0][0].detail).toEqual({ id: 'c', index: 2, active: false, selected: [] });
    });

    it('handles each click once, even after the props change', async () => {
      const page = await create();
      page.root.size = 'large';
      page.root.color = 'content';
      await page.waitForChanges();
      const spy = jest.fn();
      page.root.addEventListener('uaiButtonSelected', spy);
      await click(page, 'a');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(button(page, 'a').variant).toBe('solid');
    });
  });

  describe('multiple selection', () => {
    it('keeps several buttons selected and reports them in order', async () => {
      const page = await create();
      page.root.multiple = true;
      await page.waitForChanges();
      const spy = jest.fn();
      page.root.addEventListener('uaiButtonSelected', spy);

      await click(page, 'c');
      await click(page, 'a');
      await page.waitForChanges();
      expect(button(page, 'a').variant).toBe('solid');
      expect(button(page, 'c').variant).toBe('solid');
      expect(spy.mock.calls[1][0].detail.selected).toEqual([0, 2]);

      await click(page, 'c');
      expect(spy.mock.calls[2][0].detail).toEqual({ id: 'c', index: 2, active: false, selected: [0] });
    });

    it('keeps only the first selected button when going back to single selection', async () => {
      const page = await create();
      page.root.multiple = true;
      await page.root.activateButton(0);
      await page.root.activateButton(2);
      page.root.multiple = false;
      await page.waitForChanges();
      await page.waitForChanges();
      expect(button(page, 'a').variant).toBe('solid');
      expect(button(page, 'c').variant).toBe('outline');
    });
  });

  describe('activateButton', () => {
    it('selects by index and ignores indexes outside the group', async () => {
      const page = await create();
      const spy = jest.fn();
      page.root.addEventListener('uaiButtonSelected', spy);
      await page.root.activateButton(1);
      await page.root.activateButton(7);
      await page.root.activateButton(-1);
      await page.waitForChanges();
      expect(button(page, 'b').variant).toBe('solid');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  it('sets up buttons added after the render', async () => {
    const page = await create();
    const added = page.doc.createElement('uai-button');
    added.id = 'd';
    added.setAttribute('aria-label', 'Calendário');
    page.root.appendChild(added);
    await page.waitForChanges();
    page.root.shadowRoot.querySelector('slot').dispatchEvent(new Event('slotchange'));
    await page.waitForChanges();
    await page.waitForChanges();
    expect(inner(page, 'c').classList.contains('button--position-row-middle')).toBe(true);
    expect(inner(page, 'd').classList.contains('button--position-row-last')).toBe(true);
    await click(page, 'd');
    await page.waitForChanges();
    expect(button(page, 'd').variant).toBe('solid');
  });

  it('falls back to a row, with a warning, for an unknown direction', async () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    const page = await create();
    page.root.direction = 'diagonal' as any;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.button-group').classList.contains('button-group--row')).toBe(true);
    expect(warn.mock.calls.some((call) => String(call[0]).includes('uai-button-group'))).toBe(true);
    warn.mockRestore();
  });
});
