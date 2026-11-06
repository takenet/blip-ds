import { newSpecPage } from '@stencil/core/testing';
import { UaiChipTag } from '../uai-chip-tag';

describe('uai-chip-tag', () => {
  it('renders the system color by default', async () => {
    const page = await newSpecPage({ components: [UaiChipTag], html: '<uai-chip-tag>Texto</uai-chip-tag>' });
    const chip = page.root.shadowRoot.querySelector('.chip');
    expect(chip.classList.contains('chip--system')).toBe(true);
    expect(page.root.shadowRoot.querySelector('uai-icon')).toBeNull();
  });

  it.each(['outline', 'info', 'success', 'warning', 'danger', 'disabled'])('applies the %s color', async (color) => {
    const page = await newSpecPage({
      components: [UaiChipTag],
      html: `<uai-chip-tag color="${color}">Texto</uai-chip-tag>`,
    });
    expect(page.root.shadowRoot.querySelector('.chip').classList.contains(`chip--${color}`)).toBe(true);
  });

  it('maps the legacy default color to system', async () => {
    const page = await newSpecPage({ components: [UaiChipTag], html: '<uai-chip-tag color="default">Texto</uai-chip-tag>' });
    expect(page.root.shadowRoot.querySelector('.chip').classList.contains('chip--system')).toBe(true);
  });

  it('falls back to system for an unknown color', async () => {
    const page = await newSpecPage({ components: [UaiChipTag], html: '<uai-chip-tag color="pink">Texto</uai-chip-tag>' });
    expect(page.root.shadowRoot.querySelector('.chip').classList.contains('chip--system')).toBe(true);
  });

  it('renders the icon and data-test', async () => {
    const page = await newSpecPage({
      components: [UaiChipTag],
      html: '<uai-chip-tag icon="info" data-test="tag">Texto</uai-chip-tag>',
    });
    expect(page.root.shadowRoot.querySelector('uai-icon').getAttribute('name')).toBe('info');
    expect(page.root.shadowRoot.querySelector('.chip').getAttribute('data-test')).toBe('tag');
  });
});
