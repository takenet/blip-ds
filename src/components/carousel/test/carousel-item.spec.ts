import { newSpecPage } from '@stencil/core/testing';
import { BdsCarouselItem } from '../carousel-item';

describe('bds-carousel-item', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item></bds-carousel-item>',
    });
  });

  it('should build', () => {
    expect(new BdsCarouselItem()).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.root).toEqualHtml(`
      <bds-carousel-item class="carrosel-item">
        <mock:shadow-root>
          <bds-theme-provider class="carrosel-item-frame" theme="light">
            <slot></slot>
          </bds-theme-provider>
        </mock:shadow-root>
      </bds-carousel-item>
    `);
  });

  it('should apply custom theme', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item theme="dark"></bds-carousel-item>',
    });

    const themeProvider = page.root.shadowRoot.querySelector('bds-theme-provider');
    expect(themeProvider.getAttribute('theme')).toBe('dark');
  });

  it('should render with background color', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item bg-color="#ff0000"></bds-carousel-item>',
    });

    const frame = page.root.shadowRoot.querySelector('.carrosel-item-frame');
    expect(frame.style.background).toBe('#ff0000');
  });

  it('should render with background image', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item bg-image="test.jpg"></bds-carousel-item>',
    });

    const image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('test.jpg');
    expect(image.getAttribute('alt')).toBe('Example of a image');
    expect(image.getAttribute('width')).toBe('100%');
    expect(image.getAttribute('height')).toBe('100%');
    expect(image.getAttribute('object-fit')).toBe('cover');
  });

  it('should render background image with custom brightness', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item bg-image="test.jpg" bg-image-brightness="0.5"></bds-carousel-item>',
    });

    const image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeTruthy();
    expect(image.getAttribute('brightness')).toBe('0.5');
  });

  it('should render background image with default brightness when not specified', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item bg-image="test.jpg"></bds-carousel-item>',
    });

    const image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeTruthy();
    expect(image.getAttribute('brightness')).toBe('1');
  });

  it('should not render background image when bgImage is not provided', async () => {
    const image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeFalsy();
  });

  it('should render with all props combined', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item theme="dark" bg-color="#333" bg-image="bg.jpg" bg-image-brightness="0.8"></bds-carousel-item>',
    });

    const themeProvider = page.root.shadowRoot.querySelector('bds-theme-provider');
    expect(themeProvider.getAttribute('theme')).toBe('dark');
    
    const frame = page.root.shadowRoot.querySelector('.carrosel-item-frame');
    expect(frame.style.background).toBe('#333');

    const image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('bg.jpg');
    expect(image.getAttribute('brightness')).toBe('0.8');
  });

  it('should render slot content', async () => {
    page = await newSpecPage({
      components: [BdsCarouselItem],
      html: '<bds-carousel-item><div>Test content</div></bds-carousel-item>',
    });

    expect(page.root.innerHTML).toContain('<div>Test content</div>');
  });

  it('should have correct CSS classes', async () => {
    expect(page.root.classList.contains('carrosel-item')).toBe(true);

    const frame = page.root.shadowRoot.querySelector('.carrosel-item-frame');
    expect(frame).toBeTruthy();
  });

  it('should update props dynamically', async () => {
    page.root.theme = 'dark';
    page.root.bgColor = '#000';
    page.root.bgImage = 'new-image.jpg';
    page.root.bgImageBrightness = 0.3;

    await page.waitForChanges();

    const themeProvider = page.root.shadowRoot.querySelector('bds-theme-provider');
    expect(themeProvider.getAttribute('theme')).toBe('dark');
    
    const frame = page.root.shadowRoot.querySelector('.carrosel-item-frame');
    expect(frame.style.background).toBe('#000');

    const image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('new-image.jpg');
    expect(image.getAttribute('brightness')).toBe('0.3');
  });

  it('should handle edge cases', async () => {
    // Test with empty bgImage
    page.root.bgImage = '';
    await page.waitForChanges();
    
    let image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeFalsy();

    // Test with bgImage set back
    page.root.bgImage = 'test.jpg';
    await page.waitForChanges();
    
    image = page.root.shadowRoot.querySelector('bds-image');
    expect(image).toBeTruthy();
  });

  it('should preserve default prop values', async () => {
    const component = new BdsCarouselItem();
    expect(component.theme).toBe('light');
    expect(component.bgImageBrightness).toBe(1);
    expect(component.bgImage).toBeUndefined();
    expect(component.bgColor).toBeUndefined();
  });
});
