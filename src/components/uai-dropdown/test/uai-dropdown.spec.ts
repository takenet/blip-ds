import { newSpecPage } from '@stencil/core/testing';
import { UaiOverlay } from '../../../utils/uai-overlay';
import { UaiDropdown } from '../uai-dropdown';

const HTML = `
  <uai-dropdown>
    <button slot="activator" id="activator">Abrir</button>
    <p>Corpo</p>
  </uai-dropdown>`;

const create = (html = HTML) => newSpecPage({ components: [UaiDropdown], html });

describe('uai-dropdown', () => {
  afterEach(() => jest.restoreAllMocks());

  it('has the documented defaults', async () => {
    const page = await create();
    const dropdown = page.rootInstance;
    expect(dropdown.open).toBe(false);
    expect(dropdown.position).toBe('auto');
    expect(dropdown.activeMode).toBe('click');
    expect(dropdown.width).toBeUndefined();
    expect(dropdown.dataTest).toBe(null);
  });

  it('renders the activator, the panel and the body slot', async () => {
    const page = await create();
    const root = page.root.shadowRoot;
    expect(root.querySelector('.dropdown__activator slot[name="activator"]')).toBeTruthy();
    const panel = root.querySelector('.dropdown__panel');
    expect(panel.getAttribute('role')).toBe('dialog');
    expect(panel.getAttribute('tabindex')).toBe('-1');
    expect(panel.querySelector('.dropdown__body slot:not([name])')).toBeTruthy();
  });

  it('names the panel with label and forwards the test selector', async () => {
    const page = await create(
      `<uai-dropdown label="Filtros" data-test="panel"><button slot="activator">Abrir</button></uai-dropdown>`,
    );
    page.root.dataTest = 'panel';
    await page.waitForChanges();
    const panel = page.root.shadowRoot.querySelector('.dropdown__panel');
    expect(panel.getAttribute('aria-label')).toBe('Filtros');
    expect(panel.getAttribute('data-test')).toBe('panel');
  });

  describe('width', () => {
    const panel = (page) => page.root.shadowRoot.querySelector('.dropdown__panel') as HTMLElement;

    it('applies the width prop in rem', async () => {
      const page = await create();
      page.root.width = 24;
      await page.waitForChanges();
      expect(panel(page).style.getPropertyValue('--dropdown-width')).toBe('24rem');
    });

    it.each([0, -3, NaN])('ignores the invalid width %s', async (width) => {
      const page = await create();
      page.root.width = width as number;
      await page.waitForChanges();
      expect(panel(page).style.getPropertyValue('--dropdown-width')).toBe('');
    });
  });

  describe('header and footer', () => {
    const area = (page, name: string) => page.root.shadowRoot.querySelector(`.dropdown__${name}`);

    it('stay hidden while nothing is slotted into them', async () => {
      const page = await create();
      expect(area(page, 'header').classList.contains('dropdown__header--empty')).toBe(true);
      expect(area(page, 'footer').classList.contains('dropdown__footer--empty')).toBe(true);
      expect(area(page, 'header').querySelector('slot[name="header"]')).toBeTruthy();
      expect(area(page, 'footer').querySelector('slot[name="footer"]')).toBeTruthy();
    });

    it('show when content is slotted at load', async () => {
      const page = await create(`
        <uai-dropdown>
          <button slot="activator">Abrir</button>
          <h2 slot="header">Título</h2>
          <p>Corpo</p>
          <button slot="footer">Salvar</button>
        </uai-dropdown>`);
      expect(area(page, 'header').classList.contains('dropdown__header--empty')).toBe(false);
      expect(area(page, 'footer').classList.contains('dropdown__footer--empty')).toBe(false);
    });

    it.each(['header', 'footer'])('react to the %s slot changing after the render', async (name) => {
      const page = await create();
      const slot = page.root.shadowRoot.querySelector(`slot[name="${name}"]`) as any;
      const content = page.doc.createElement('div');
      content.setAttribute('slot', name);
      page.root.appendChild(content);
      slot.assignedElements = () => [content];
      slot.dispatchEvent(new Event('slotchange'));
      await page.waitForChanges();
      expect(area(page, name).classList.contains(`dropdown__${name}--empty`)).toBe(false);

      content.remove();
      slot.assignedElements = () => [];
      slot.dispatchEvent(new Event('slotchange'));
      await page.waitForChanges();
      expect(area(page, name).classList.contains(`dropdown__${name}--empty`)).toBe(true);
    });
  });

  describe('opening and closing', () => {
    it('toggles when the activator is clicked and emits uaiToggle', async () => {
      const page = await create();
      const spy = jest.fn();
      page.root.addEventListener('uaiToggle', spy);

      // In a browser the click on the slotted button bubbles through this wrapper; the Stencil mock DOM does not
      // follow slots, so the wrapper is clicked directly here and the e2e covers the real click.
      const wrapper = page.root.shadowRoot.querySelector('.dropdown__activator') as HTMLElement;
      wrapper.click();
      await page.waitForChanges();
      expect(page.root.open).toBe(true);

      wrapper.click();
      await page.waitForChanges();
      expect(page.root.open).toBe(false);
      expect(spy.mock.calls.map((call) => call[0].detail)).toEqual([{ value: true }, { value: false }]);
    });

    it('opens the floating panel when it starts open', async () => {
      const open = jest.spyOn(UaiOverlay.prototype, 'open');
      await create(`<uai-dropdown open><button slot="activator">Abrir</button><p>Corpo</p></uai-dropdown>`);
      expect(open).toHaveBeenCalledTimes(1);
    });

    it('creates the overlay again after being moved in the DOM', async () => {
      const destroy = jest.spyOn(UaiOverlay.prototype, 'destroy');
      const open = jest.spyOn(UaiOverlay.prototype, 'open');
      const page = await create(`${HTML}<div id="target"></div>`);
      const dropdown = page.root;

      page.body.querySelector('#target').appendChild(dropdown);
      await page.waitForChanges();
      expect(destroy).toHaveBeenCalledTimes(1);

      dropdown.open = true;
      await page.waitForChanges();
      expect(open).toHaveBeenCalledTimes(1);
      expect(dropdown.open).toBe(true);
    });

    it('opens and closes through the methods', async () => {
      const page = await create();
      await page.root.setOpen();
      expect(page.root.open).toBe(true);
      await page.root.setClose();
      expect(page.root.open).toBe(false);
      await page.root.toggle();
      expect(page.root.open).toBe(true);
    });

    it('closes when the focus moves outside the dropdown', async () => {
      const page = await create(`${HTML}<button id="outside">Fora</button>`);
      page.root.open = true;
      await page.waitForChanges();

      const stay = Object.assign(new Event('focusout'), { relatedTarget: page.body.querySelector('#activator') });
      page.root.dispatchEvent(stay);
      await page.waitForChanges();
      expect(page.root.open).toBe(true);

      const leave = Object.assign(new Event('focusout'), { relatedTarget: page.body.querySelector('#outside') });
      page.root.dispatchEvent(leave);
      await page.waitForChanges();
      expect(page.root.open).toBe(false);
    });

    it('opens the floating panel through the overlay and closes it again', async () => {
      const open = jest.spyOn(UaiOverlay.prototype, 'open');
      const close = jest.spyOn(UaiOverlay.prototype, 'close');
      const page = await create();
      page.root.open = true;
      await page.waitForChanges();
      expect(open).toHaveBeenCalled();
      page.root.open = false;
      await page.waitForChanges();
      expect(close).toHaveBeenCalledWith('api');
    });
  });

  describe('activator semantics', () => {
    it('announces the popup and its state on the slotted activator', async () => {
      const page = await create();
      const activator = page.body.querySelector('#activator');
      expect(activator.getAttribute('aria-haspopup')).toBe('dialog');
      expect(activator.getAttribute('aria-expanded')).toBe('false');
      page.root.open = true;
      await page.waitForChanges();
      expect(activator.getAttribute('aria-expanded')).toBe('true');
    });
  });

  describe('position', () => {
    it('sends the placement of each supported position to the overlay', async () => {
      const setPlacement = jest.spyOn(UaiOverlay.prototype, 'setPlacement');
      const page = await create();
      const expected = {
        'top-left': { side: 'top', align: 'start' },
        'top-right': { side: 'top', align: 'end' },
        'bottom-left': { side: 'bottom', align: 'start' },
        'bottom-right': { side: 'bottom', align: 'end' },
        'top-center': { side: 'top' },
        'bottom-center': { side: 'bottom' },
        auto: {},
      };
      for (const [position, placement] of Object.entries(expected)) {
        page.root.position = position as any;
        await page.waitForChanges();
        expect(setPlacement).toHaveBeenLastCalledWith(placement);
      }
    });

    it('falls back to auto, with a warning, for sides that are not supported', async () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
      const setPlacement = jest.spyOn(UaiOverlay.prototype, 'setPlacement');
      const page = await create();
      page.root.position = 'left-top' as any;
      await page.waitForChanges();
      expect(setPlacement).toHaveBeenLastCalledWith({});
      expect(warn.mock.calls.some((call) => String(call[0]).includes('uai-dropdown'))).toBe(true);
    });
  });
});
