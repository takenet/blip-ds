import { newSpecPage } from '@stencil/core/testing';
import { resetDeprecationWarnings } from '../../../utils/deprecation';
import { UaiIconBox } from '../uai-icon-box';

const render = (html: string) => newSpecPage({ components: [UaiIconBox], html });

describe('uai-icon-box', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders decorative md box with uai-icon by default', async () => {
    const page = await render('<uai-icon-box icon="robot-2"></uai-icon-box>');
    const box = page.root.shadowRoot.querySelector('.icon-box');
    const icon = page.root.shadowRoot.querySelector('uai-icon');

    expect(page.root.getAttribute('aria-hidden')).toBe('true');
    expect(page.root.hasAttribute('role')).toBe(false);
    expect(box.getAttribute('part')).toBe('box');
    expect(box).toHaveClasses(['icon-box', 'icon-box--size-md']);
    expect(icon.getAttribute('name')).toBe('robot-2');
    expect(icon.getAttribute('theme')).toBe('outline');
    expect(icon.getAttribute('size')).toBe('medium');
    expect(warn).not.toHaveBeenCalled();
  });

  it.each([
    ['sm', 'small'],
    ['md', 'medium'],
    ['lg', 'medium'],
  ])('renders size %s with corresponding uai-icon size %s', async (size, expectedIconSize) => {
    const page = await render(`<uai-icon-box icon="robot-2" size="${size}" icon-theme="solid"></uai-icon-box>`);
    const box = page.root.shadowRoot.querySelector('.icon-box');
    const icon = page.root.shadowRoot.querySelector('uai-icon');

    expect(box).toHaveClass(`icon-box--size-${size}`);
    expect(icon.getAttribute('size')).toBe(expectedIconSize);
    expect(icon.getAttribute('theme')).toBe('solid');
  });

  it('exposes role="img" and accessible name when aria-label is provided', async () => {
    const page = await render('<uai-icon-box icon="robot-2" aria-label="Assistente ativo" data-test="box"></uai-icon-box>');
    const box = page.root.shadowRoot.querySelector('.icon-box');

    expect(page.root.getAttribute('role')).toBe('img');
    expect(page.root.getAttribute('aria-label')).toBe('Assistente ativo');
    expect(page.root.hasAttribute('aria-hidden')).toBe(false);
    expect(box.getAttribute('data-test')).toBe('box');
  });

  it('projects default slot content when icon prop is omitted', async () => {
    const page = await render('<uai-icon-box><svg data-custom="true"></svg></uai-icon-box>');

    expect(page.root.shadowRoot.querySelector('uai-icon')).toBeNull();
    expect(page.root.shadowRoot.querySelector('slot')).not.toBeNull();
    expect(page.root.querySelector('[data-custom="true"]')).not.toBeNull();
  });

  it('falls back to md with a warning when an unsupported size is passed', async () => {
    const page = await render('<uai-icon-box icon="robot-2" size="xl"></uai-icon-box>');

    expect(page.root.shadowRoot.querySelector('.icon-box')).toHaveClass('icon-box--size-md');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith('[uai-icon-box] Unsupported size "xl". Using "md".');
  });
});
