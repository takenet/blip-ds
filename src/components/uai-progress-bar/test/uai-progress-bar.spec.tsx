import { newSpecPage } from '@stencil/core/testing';
import { UaiProgressBar } from '../uai-progress-bar';

const render = (html: string) => newSpecPage({ components: [UaiProgressBar], html });

describe('uai-progress-bar', () => {
  it('renders progressbar role with 0% fill by default', async () => {
    const page = await render('<uai-progress-bar aria-label="Envio"></uai-progress-bar>');
    const bar = page.root.shadowRoot.querySelector('[role="progressbar"]');
    const track = page.root.shadowRoot.querySelector('.progress__track');
    const fill = page.root.shadowRoot.querySelector('.progress__fill') as HTMLElement;

    expect(bar.getAttribute('aria-valuemin')).toBe('0');
    expect(bar.getAttribute('aria-valuemax')).toBe('100');
    expect(bar.getAttribute('aria-valuenow')).toBe('0');
    expect(bar.getAttribute('aria-label')).toBe('Envio');
    expect(track.getAttribute('part')).toBe('track');
    expect(fill.getAttribute('part')).toBe('fill');
    expect(fill.style.width).toBe('0%');
    expect(page.root.shadowRoot.querySelector('.progress__text')).toBeNull();
  });

  it.each([
    [-25, '0', '0%'],
    [NaN, '0', '0%'],
    [45, '45', '45%'],
    [140, '100', '100%'],
  ])('clamps percent=%s safely to aria-valuenow=%s and width=%s', async (input, expectedNow, expectedWidth) => {
    const page = await render('<uai-progress-bar aria-label="Quota"></uai-progress-bar>');
    page.root.percent = input;
    await page.waitForChanges();

    const bar = page.root.shadowRoot.querySelector('[role="progressbar"]');
    const fill = page.root.shadowRoot.querySelector('.progress__fill') as HTMLElement;

    expect(bar.getAttribute('aria-valuenow')).toBe(expectedNow);
    expect(fill.style.width).toBe(expectedWidth);
  });

  it('links progressbar via aria-labelledby when text prop is provided without aria-label', async () => {
    const page = await render('<uai-progress-bar percent="75" text="75% concluído" data-test="pb"></uai-progress-bar>');
    const bar = page.root.shadowRoot.querySelector('[role="progressbar"]');
    const textEl = page.root.shadowRoot.querySelector('.progress__text');

    expect(textEl).not.toBeNull();
    expect(textEl.textContent).toBe('75% concluído');
    expect(bar.getAttribute('aria-labelledby')).toBe(textEl.id);
    expect(bar.getAttribute('data-test')).toBe('pb');
  });

  it('applies progress__fill--instant only when percent regresses and removes it when advancing again', async () => {
    const page = await render('<uai-progress-bar percent="30" aria-label="Progresso"></uai-progress-bar>');
    const fill = () => page.root.shadowRoot.querySelector('.progress__fill');

    expect(fill()).not.toHaveClass('progress__fill--instant');

    page.root.percent = 80;
    await page.waitForChanges();
    expect(fill()).not.toHaveClass('progress__fill--instant');

    page.root.percent = 10;
    await page.waitForChanges();
    expect(fill()).toHaveClass('progress__fill--instant');

    page.root.percent = 50;
    await page.waitForChanges();
    expect(fill()).not.toHaveClass('progress__fill--instant');
  });
});
