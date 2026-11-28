import { newE2EPage } from '@stencil/core/testing';

const shine = (page) =>
  page.$eval('uai-skeleton >>> .skeleton__shine', (element: HTMLElement) => {
    const style = getComputedStyle(element);
    return {
      display: style.display,
      name: style.animationName,
      duration: style.animationDuration,
      timing: style.animationTimingFunction,
      iterations: style.animationIterationCount,
    };
  });

describe('uai-skeleton e2e', () => {
  it('keeps the bds-skeleton shine: 2.5 s ease-out, infinite', async () => {
    const page = await newE2EPage({ html: '<uai-skeleton></uai-skeleton>' });
    expect(await shine(page)).toEqual({
      display: 'block',
      name: 'uai-skeleton-shine',
      duration: '2.5s',
      timing: 'ease-out',
      iterations: 'infinite',
    });
  });

  it('removes the shine with prefers-reduced-motion: reduce', async () => {
    const page = await newE2EPage();
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.setContent('<uai-skeleton></uai-skeleton>');
    await page.waitForChanges();
    const result = await shine(page);
    expect(result.display).toBe('none');
    expect(result.name).toBe('none');
  });

  it('rounds the square with radius/md and the circle fully', async () => {
    const page = await newE2EPage({
      html: '<uai-skeleton id="square"></uai-skeleton><uai-skeleton id="circle" shape="circle" width="40px" height="40px"></uai-skeleton>',
    });
    const radius = (id: string) => page.$eval(`#${id}`, (element: HTMLElement) => getComputedStyle(element).borderTopLeftRadius);
    expect(await radius('square')).toBe('8px');
    expect(parseFloat(await radius('circle'))).toBeGreaterThanOrEqual(20);
  });

  it('keeps the minimum size of 8 by 8 pixels', async () => {
    const page = await newE2EPage({ html: '<uai-skeleton width="0" height="0"></uai-skeleton>' });
    const box = await page.$eval('uai-skeleton', (element: HTMLElement) => element.getBoundingClientRect().toJSON());
    expect(box.width).toBe(8);
    expect(box.height).toBe(8);
  });
});
