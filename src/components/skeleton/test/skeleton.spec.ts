import { newSpecPage } from '@stencil/core/testing';
import { Skeleton } from '../skeleton';

describe('bds-skeleton', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton></bds-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <bds-skeleton style="display: flex; position: relative; overflow: hidden; width: 100%; height: 50px; border-radius: 8px;">
        <mock:shadow-root>
          <bds-grid class="skeleton skeleton_shape--square" xxs="12"></bds-grid>
          <div style="display: flex; width: 100%; height: 100%; position: absolute; border-radius: 8px; overflow: hidden;">
            <div class="animation"></div>
          </div>
        </mock:shadow-root>
      </bds-skeleton>
    `);
  });

  it('should render with circle shape', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton shape="circle"></bds-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <bds-skeleton shape="circle" style="display: flex; position: relative; overflow: hidden; width: 100%; height: 50px; border-radius: 50%;">
        <mock:shadow-root>
          <bds-grid class="skeleton skeleton_shape--circle" xxs="12"></bds-grid>
          <div style="display: flex; width: 100%; height: 100%; position: absolute; border-radius: 50%; overflow: hidden;">
            <div class="animation"></div>
          </div>
        </mock:shadow-root>
      </bds-skeleton>
    `);
  });

  it('should render with square shape', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton shape="square"></bds-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <bds-skeleton shape="square" style="display: flex; position: relative; overflow: hidden; width: 100%; height: 50px; border-radius: 8px;">
        <mock:shadow-root>
          <bds-grid class="skeleton skeleton_shape--square" xxs="12"></bds-grid>
          <div style="display: flex; width: 100%; height: 100%; position: absolute; border-radius: 8px; overflow: hidden;">
            <div class="animation"></div>
          </div>
        </mock:shadow-root>
      </bds-skeleton>
    `);
  });

  it('should render with custom width and height', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton width="200px" height="100px"></bds-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <bds-skeleton height="100px" width="200px" style="display: flex; position: relative; overflow: hidden; width: 200px; height: 100px; border-radius: 8px;">
        <mock:shadow-root>
          <bds-grid class="skeleton skeleton_shape--square" xxs="12"></bds-grid>
          <div style="display: flex; width: 100%; height: 100%; position: absolute; border-radius: 8px; overflow: hidden;">
            <div class="animation"></div>
          </div>
        </mock:shadow-root>
      </bds-skeleton>
    `);
  });

  it('should render with dataTest attribute', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton data-test="skeleton-test"></bds-skeleton>',
    });

    const animationContainer = page.root.shadowRoot.querySelector('div[data-test]');
    expect(animationContainer.getAttribute('data-test')).toBe('skeleton-test');
  });

  it('should apply correct border radius for circle shape', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton shape="circle"></bds-skeleton>',
    });

    const hostStyle = page.root.style;
    expect(hostStyle.borderRadius).toBe('50%');

    const animationContainer = page.root.shadowRoot.querySelector('div[style*="border-radius"]') as HTMLElement;
    expect(animationContainer.style.borderRadius).toBe('50%');
  });

  it('should apply correct border radius for square shape', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton shape="square"></bds-skeleton>',
    });

    const hostStyle = page.root.style;
    expect(hostStyle.borderRadius).toBe('8px');

    const animationContainer = page.root.shadowRoot.querySelector('div[style*="border-radius"]') as HTMLElement;
    expect(animationContainer.style.borderRadius).toBe('8px');
  });

  it('should have correct CSS classes for different shapes', async () => {
    const circlePage = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton shape="circle"></bds-skeleton>',
    });

    const circleGrid = circlePage.root.shadowRoot.querySelector('bds-grid');
    expect(circleGrid).toHaveClass('skeleton');
    expect(circleGrid).toHaveClass('skeleton_shape--circle');

    const squarePage = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton shape="square"></bds-skeleton>',
    });

    const squareGrid = squarePage.root.shadowRoot.querySelector('bds-grid');
    expect(squareGrid).toHaveClass('skeleton');
    expect(squareGrid).toHaveClass('skeleton_shape--square');
  });

  it('should have animation container with correct styles', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton></bds-skeleton>',
    });

    const animationContainer = page.root.shadowRoot.querySelector('div[style*="position: absolute"]') as HTMLElement;
    expect(animationContainer.style.display).toBe('flex');
    expect(animationContainer.style.width).toBe('100%');
    expect(animationContainer.style.height).toBe('100%');
    expect(animationContainer.style.position).toBe('absolute');
    expect(animationContainer.style.overflow).toBe('hidden');
  });

  it('should contain animation div inside container', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton></bds-skeleton>',
    });

    const animationDiv = page.root.shadowRoot.querySelector('.animation');
    expect(animationDiv).toBeTruthy();
    expect(animationDiv.tagName.toLowerCase()).toBe('div');
  });

  it('should have proper component defaults', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<bds-skeleton></bds-skeleton>',
    });

    expect(page.rootInstance.shape).toBe('square');
    expect(page.rootInstance.height).toBe('50px');
    expect(page.rootInstance.width).toBe('100%');
    expect(page.rootInstance.dataTest).toBe(null);
  });
});
