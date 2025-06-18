import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { BdsProgressBar } from '../progress-bar';

describe('bds-progress-bar', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar></bds-progress-bar>`,
    });
  });

  afterEach(() => {
    page = null;
  });

  it('should create component', () => {
    const component = new BdsProgressBar();
    expect(component).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.root).toEqualHtml(`
      <bds-progress-bar>
        <mock:shadow-root>
          <div class="progress_bar size_default">
            <div class="bar_behind">
              <div class="progress color_default" style="width: 0%;"></div>
            </div>
          </div>
        </mock:shadow-root>
      </bds-progress-bar>
    `);
  });

  it('should have default values', () => {
    const component = new BdsProgressBar();
    expect(component.percent).toBe(0);
    expect(component.size).toBe('default');
    expect(component.color).toBe('default');
    expect(component.text).toBe('');
    expect(component.dataTest).toBe(null);
  });

  it('should render with custom percent value', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar percent="50"></bds-progress-bar>`,
    });

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('50%');
  });

  it('should cap percent at 100%', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar percent="150"></bds-progress-bar>`,
    });

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('100%');
  });

  it('should handle zero percent', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar percent="0"></bds-progress-bar>`,
    });

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('0%');
  });

  it('should handle negative percent', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar percent="-10"></bds-progress-bar>`,
    });

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('-10%');
  });

  it('should render with small size', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar size="small"></bds-progress-bar>`,
    });

    const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
    expect(progressBar).toHaveClass('size_small');
  });

  it('should render with default size', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar size="default"></bds-progress-bar>`,
    });

    const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
    expect(progressBar).toHaveClass('size_default');
  });

  it('should render with different color variants', async () => {
    const colors = ['default', 'positive', 'information', 'warning'];

    for (const color of colors) {
      const page = await newSpecPage({
        components: [BdsProgressBar],
        html: `<bds-progress-bar color="${color}"></bds-progress-bar>`,
      });

      const progressDiv = page.root.shadowRoot.querySelector('.progress');
      expect(progressDiv).toHaveClass(`color_${color}`);
    }
  });

  it('should render with text when provided', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar text="Loading..."></bds-progress-bar>`,
    });

    const typoDiv = page.root.shadowRoot.querySelector('.typo_progress');
    expect(typoDiv).toBeTruthy();

    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement).toBeTruthy();
    expect(typoElement.getAttribute('variant')).toBe('fs-14');
    expect(typoElement.textContent).toBe('Loading...');
  });

  it('should not render text div when text is empty', async () => {
    const typoDiv = page.root.shadowRoot.querySelector('.typo_progress');
    expect(typoDiv).toBeNull();
  });

  it('should not render text div when text is not provided', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar text=""></bds-progress-bar>`,
    });

    const typoDiv = page.root.shadowRoot.querySelector('.typo_progress');
    expect(typoDiv).toBeNull();
  });

  it('should set data-test attribute when provided', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar data-test="progress-test"></bds-progress-bar>`,
    });

    const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
    expect(progressBar.getAttribute('data-test')).toBe('progress-test');
  });

  it('should not set data-test attribute when not provided', async () => {
    const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
    expect(progressBar.getAttribute('data-test')).toBeNull();
  });

  it('should handle complex prop combinations', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar percent="75" size="small" color="positive" text="75% Complete" data-test="complex-progress"></bds-progress-bar>`,
    });

    const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
    expect(progressBar).toHaveClass('size_small');
    expect(progressBar.getAttribute('data-test')).toBe('complex-progress');

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv).toHaveClass('color_positive');
    expect(progressDiv.style.width).toBe('75%');

    const typoDiv = page.root.shadowRoot.querySelector('.typo_progress');
    expect(typoDiv).toBeTruthy();

    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('75% Complete');
  });

  it('should handle decimal percent values', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar percent="33.5"></bds-progress-bar>`,
    });

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('33.5%');
  });

  it('should handle null percent value', async () => {
    const page = await newSpecPage({
      components: [BdsProgressBar],
      html: `<bds-progress-bar></bds-progress-bar>`,
    });

    const component = page.rootInstance;
    component.percent = null;
    await page.waitForChanges();

    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('0%');
  });

  it('should update progress width when percent changes', async () => {
    const component = page.rootInstance;
    
    component.percent = 30;
    await page.waitForChanges();
    
    const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressDiv.style.width).toBe('30%');
    
    component.percent = 80;
    await page.waitForChanges();
    
    expect(progressDiv.style.width).toBe('80%');
  });

  it('should maintain structure with required CSS classes', async () => {
    const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
    expect(progressBar).toBeTruthy();
    expect(progressBar).toHaveClass('progress_bar');
    expect(progressBar).toHaveClass('size_default');

    const barBehind = page.root.shadowRoot.querySelector('.bar_behind');
    expect(barBehind).toBeTruthy();
    expect(barBehind).toHaveClass('bar_behind');

    const progress = page.root.shadowRoot.querySelector('.progress');
    expect(progress).toBeTruthy();
    expect(progress).toHaveClass('progress');
    expect(progress).toHaveClass('color_default');
  });

  it('should render JSX element from render method', () => {
    const component = new BdsProgressBar();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should handle edge case values', async () => {
    const testCases = [
      { percent: 0, expected: '0%' },
      { percent: 1, expected: '1%' },
      { percent: 99, expected: '99%' },
      { percent: 100, expected: '100%' },
      { percent: 101, expected: '100%' },
      { percent: 200, expected: '100%' },
    ];

    for (const testCase of testCases) {
      const page = await newSpecPage({
        components: [BdsProgressBar],
        html: `<bds-progress-bar percent="${testCase.percent}"></bds-progress-bar>`,
      });

      const progressDiv = page.root.shadowRoot.querySelector('.progress') as HTMLElement;
      expect(progressDiv.style.width).toBe(testCase.expected);
    }
  });

  it('should handle string values for props', () => {
    const component = new BdsProgressBar();
    
    component.percent = 50;
    component.size = 'small';
    component.color = 'positive';
    component.text = 'Test text';
    component.dataTest = 'test-id';
    
    expect(component.percent).toBe(50);
    expect(component.size).toBe('small');
    expect(component.color).toBe('positive');
    expect(component.text).toBe('Test text');
    expect(component.dataTest).toBe('test-id');
  });

  it('should render with all size variants', async () => {
    const sizes = ['small', 'default'];

    for (const size of sizes) {
      const page = await newSpecPage({
        components: [BdsProgressBar],
        html: `<bds-progress-bar size="${size}"></bds-progress-bar>`,
      });

      const progressBar = page.root.shadowRoot.querySelector('.progress_bar');
      expect(progressBar).toHaveClass(`size_${size}`);
    }
  });
});
