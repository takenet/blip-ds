import { newSpecPage } from '@stencil/core/testing';
import { UaiTooltip } from '../uai-tooltip';

describe('uai-tooltip', () => {
  it('preserves the legacy defaults', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip><button>Hover me</button></uai-tooltip>',
    });
    const tooltip = page.rootInstance;
    expect(tooltip.tooltipText).toBe('Tooltip');
    expect(tooltip.disabled).toBe(false);
    expect(tooltip.position).toBe('left-center');
    expect(tooltip.maxWidth).toBe(null);
    expect(tooltip.dataTest).toBe(null);
    expect(tooltip.isVisible).toBe(false);
  });

  it('renders the text with uai-typo and links it to the trigger', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip tooltip-text="Dica"><button>Hover me</button></uai-tooltip>',
    });
    const tip = page.root.shadowRoot.querySelector('.tooltip__tip');
    const trigger = page.root.shadowRoot.querySelector('.tooltip__trigger');
    expect(tip.getAttribute('role')).toBe('tooltip');
    expect(trigger.getAttribute('aria-describedby')).toBe(tip.id);
    const typo = tip.querySelector('uai-typo');
    expect(typo.getAttribute('variant')).toBe('caption');
    expect(typo.textContent).toBe('Dica');
    expect(page.root.shadowRoot.querySelector('bds-typo')).toBeNull();
  });

  it('converts <br> into line breaks and follows text changes', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip tooltip-text="a<br>b"><button>x</button></uai-tooltip>',
    });
    expect(page.rootInstance.textVerify).toBe('a\r\nb');
    page.root.setAttribute('tooltip-text', 'c<BR>d');
    await page.waitForChanges();
    expect(page.rootInstance.textVerify).toBe('c\r\nd');
  });

  it('shows on hover and focus and hides on leave, blur and Escape', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip><button>x</button></uai-tooltip>',
    });
    const trigger = page.root.shadowRoot.querySelector('.tooltip__trigger');
    const tip = () => page.root.shadowRoot.querySelector('.tooltip__tip');

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    await page.waitForChanges();
    expect(tip().classList.contains('tooltip__tip--visible')).toBe(true);
    trigger.dispatchEvent(new MouseEvent('mouseleave'));
    await page.waitForChanges();
    expect(tip().classList.contains('tooltip__tip--visible')).toBe(false);

    trigger.dispatchEvent(new FocusEvent('focusin'));
    await page.waitForChanges();
    expect(tip().classList.contains('tooltip__tip--visible')).toBe(true);
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();
    expect(tip().classList.contains('tooltip__tip--visible')).toBe(false);

    trigger.dispatchEvent(new FocusEvent('focusin'));
    trigger.dispatchEvent(new FocusEvent('focusout'));
    await page.waitForChanges();
    expect(tip().classList.contains('tooltip__tip--visible')).toBe(false);
  });

  it('does not show while disabled', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip disabled><button>x</button></uai-tooltip>',
    });
    const trigger = page.root.shadowRoot.querySelector('.tooltip__trigger');
    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.tooltip__tip--visible')).toBeNull();
  });

  it('hides when it becomes disabled while visible', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip><button>x</button></uai-tooltip>',
    });
    await page.root.visible();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.tooltip__tip--visible')).not.toBeNull();
    page.root.disabled = true;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.tooltip__tip--visible')).toBeNull();
  });

  it('toggles visibility with visible() and invisible()', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip><button>x</button></uai-tooltip>',
    });
    await page.root.visible();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.tooltip__tip--visible')).not.toBeNull();
    await page.root.invisible();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.tooltip__tip--visible')).toBeNull();
  });

  it('applies every supported position and falls back for unknown ones', async () => {
    for (const position of ['top-center', 'bottom-left', 'right-bottom', 'left-top']) {
      const page = await newSpecPage({
        components: [UaiTooltip],
        html: `<uai-tooltip position="${position}"><button>x</button></uai-tooltip>`,
      });
      expect(page.root.shadowRoot.querySelector('.tooltip__tip').classList.contains(`tooltip__tip--${position}`)).toBe(
        true,
      );
    }
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip position="nowhere"><button>x</button></uai-tooltip>',
    });
    expect(page.root.shadowRoot.querySelector('.tooltip__tip').classList.contains('tooltip__tip--left-center')).toBe(
      true,
    );
  });

  it('applies maxWidth and dataTest', async () => {
    const page = await newSpecPage({
      components: [UaiTooltip],
      html: '<uai-tooltip max-width="200px" data-test="tt"><button>x</button></uai-tooltip>',
    });
    expect((page.root.shadowRoot.querySelector('.tooltip__tip') as HTMLElement).style.maxWidth).toBe('200px');
    expect(page.root.shadowRoot.querySelector('.tooltip__trigger').getAttribute('data-test')).toBe('tt');
  });
});
