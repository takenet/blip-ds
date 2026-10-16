import { newSpecPage } from '@stencil/core/testing';
import { Image } from '../image';

describe('bds-image', () => {
  const url = 'https://cdn.blip.ai/blip-tokens/2.0.0/logos/blip-chat.svg';

  it('uses the original CDN URL without fetching or creating a blob URL', async () => {
    const fetchMock = jest.fn();
    const previous = global.fetch;
    global.fetch = fetchMock;
    try {
      const page = await newSpecPage({ components: [Image], html: `<bds-image src="${url}" alt="Brand"></bds-image>` });
      const image = page.root.shadowRoot.querySelector('img');
      expect(image.getAttribute('src')).toBe(url);
      expect(image.getAttribute('alt')).toBe('Brand');
      expect(image.hidden).toBe(true);
      expect(page.root.shadowRoot.querySelector('bds-skeleton')).toBeTruthy();
      expect(fetchMock).not.toHaveBeenCalled();
    } finally {
      global.fetch = previous;
    }
  });

  it('reveals the image and removes the skeleton after the native load event', async () => {
    const page = await newSpecPage({ components: [Image], html: `<bds-image src="${url}"></bds-image>` });
    page.root.shadowRoot.querySelector('img').dispatchEvent(new Event('load'));
    await page.waitForChanges();
    expect(page.rootInstance.imageLoaded).toBe(true);
    expect(page.root.shadowRoot.querySelector('img').hidden).toBe(false);
    expect(page.root.shadowRoot.querySelector('bds-skeleton')).toBeNull();
    expect(page.root).not.toHaveClass('empty_img');
  });

  it('shows the broken-image fallback after a native loading error', async () => {
    const page = await newSpecPage({ components: [Image], html: `<bds-image src="${url}"></bds-image>` });
    page.root.shadowRoot.querySelector('img').dispatchEvent(new Event('error'));
    await page.waitForChanges();
    expect(page.rootInstance.loadError).toBe(true);
    expect(page.root.shadowRoot.querySelector('img')).toBeNull();
    expect(page.root.shadowRoot.querySelector('bds-illustration').getAttribute('name')).toBe('broken-image');
    expect(page.root.shadowRoot.querySelector('bds-skeleton')).toBeNull();
  });

  it('updates the native URL and clears the error when src changes', async () => {
    const page = await newSpecPage({ components: [Image], html: `<bds-image src="${url}"></bds-image>` });
    page.root.shadowRoot.querySelector('img').dispatchEvent(new Event('error'));
    await page.waitForChanges();
    page.root.src = `${url}?updated`;
    await page.waitForChanges();
    expect(page.rootInstance.loadError).toBe(false);
    expect(page.rootInstance.imageLoaded).toBe(false);
    expect(page.root.shadowRoot.querySelector('img').getAttribute('src')).toBe(`${url}?updated`);
    expect(page.root.shadowRoot.querySelector('bds-skeleton')).toBeTruthy();
  });

  it.each([undefined, ''])('shows the empty fallback without a source (%s)', async src => {
    const page = await newSpecPage({ components: [Image], html: '<bds-image alt="Empty" data-test="image"></bds-image>' });
    page.root.src = src;
    await page.rootInstance.loadImage();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('img')).toBeNull();
    const fallback = page.root.shadowRoot.querySelector('bds-illustration');
    expect(fallback.getAttribute('name')).toBe('image-not-found');
    expect(fallback.getAttribute('alt')).toBe('Empty');
    expect(fallback.getAttribute('data-test')).toBe('image');
  });

  it.each(['fill', 'contain', 'cover', 'none', 'scale-down'])('preserves object-fit %s', async objectFit => {
    const page = await newSpecPage({ components: [Image], html: `<bds-image src="${url}" object-fit="${objectFit}" brightness="0.5"></bds-image>` });
    const image = page.root.shadowRoot.querySelector('img');
    expect(image.style.objectFit).toBe(objectFit);
    expect(image.style.filter).toBe('brightness(0.5)');
    expect(image.getAttribute('draggable')).toBe('false');
  });

  it('preserves dimensions, defaults, and the public reload method', async () => {
    const page = await newSpecPage({ components: [Image], html: `<bds-image src="${url}" width="300px" height="200px"></bds-image>` });
    expect(page.root.style.width).toBe('300px');
    expect(page.root.style.height).toBe('200px');
    expect(page.rootInstance.objectFit).toBe('cover');
    expect(page.rootInstance.dataTest).toBe(null);
    await page.rootInstance.loadImage();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('img').getAttribute('src')).toBe(url);
    expect(page.root.shadowRoot.querySelector('img').style.filter).toBe('brightness(1)');
  });
});