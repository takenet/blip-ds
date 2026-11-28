import { newSpecPage } from '@stencil/core/testing';
import { UaiSkeleton } from '../uai-skeleton';

describe('uai-skeleton', () => {
  it('keeps the bds-skeleton defaults: square, 100% wide and 50 pixels tall', async () => {
    const page = await newSpecPage({ components: [UaiSkeleton], html: '<uai-skeleton></uai-skeleton>' });
    const skeleton = page.rootInstance as UaiSkeleton;
    expect(skeleton.shape).toBe('square');
    expect(skeleton.width).toBe('100%');
    expect(skeleton.height).toBe('50px');
    expect(page.root.style.width).toBe('100%');
    expect(page.root.style.height).toBe('50px');
    expect(page.root.classList.contains('uai-skeleton--square')).toBe(true);
  });

  it('applies free CSS width and height inline', async () => {
    const page = await newSpecPage({
      components: [UaiSkeleton],
      html: '<uai-skeleton width="12rem" height="calc(100% - 4px)"></uai-skeleton>',
    });
    expect(page.root.style.width).toBe('12rem');
    expect(page.root.style.height).toBe('calc(100% - 4px)');
  });

  it('renders the circle shape', async () => {
    const page = await newSpecPage({
      components: [UaiSkeleton],
      html: '<uai-skeleton shape="circle" width="40px" height="40px"></uai-skeleton>',
    });
    expect(page.root.classList.contains('uai-skeleton--circle')).toBe(true);
  });

  it('renders unknown shapes as square, like bds-skeleton', async () => {
    const page = await newSpecPage({ components: [UaiSkeleton], html: '<uai-skeleton shape="oval"></uai-skeleton>' });
    expect(page.root.classList.contains('uai-skeleton--square')).toBe(true);
  });

  it('puts data-test on the placeholder surface and renders the shine band', async () => {
    const page = await newSpecPage({ components: [UaiSkeleton], html: '<uai-skeleton data-test="loading"></uai-skeleton>' });
    const surface = page.root.shadowRoot.querySelector('.skeleton');
    expect(surface.getAttribute('data-test')).toBe('loading');
    expect(surface.querySelector('.skeleton__shine')).not.toBeNull();
  });

  it('is hidden from assistive technology (SOLFAC-117 a)', async () => {
    const page = await newSpecPage({ components: [UaiSkeleton], html: '<uai-skeleton></uai-skeleton>' });
    expect(page.root.getAttribute('aria-hidden')).toBe('true');
  });
});
