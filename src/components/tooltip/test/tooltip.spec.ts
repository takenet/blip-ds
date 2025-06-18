import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from '../tooltip';

describe('bds-tooltip', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip><button>Hover me</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.tooltipText).toBe('Tooltip');
    expect(tooltip.disabled).toBe(false);
    expect(tooltip.position).toBe('left-center');
    expect(tooltip.maxWidth).toBe('320px');
    expect(tooltip.dataTest).toBe(null);
    expect(tooltip.isMouseOver).toBe(false);
  });

  it('should render with custom properties', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `
        <bds-tooltip 
          tooltip-text="Custom tooltip" 
          position="top-center" 
          max-width="400px"
          data-test="test-tooltip">
          <button>Test</button>
        </bds-tooltip>
      `,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.tooltipText).toBe('Custom tooltip');
    expect(tooltip.position).toBe('top-center');
    expect(tooltip.maxWidth).toBe('400px');
    expect(tooltip.dataTest).toBe('test-tooltip');
  });

  it('should handle disabled state', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip disabled="true"><button>Disabled</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.disabled).toBe(true);
  });

  it('should process tooltip text with line breaks', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip tooltip-text="Line 1<br>Line 2"><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.textVerify).toBe('Line 1\r\nLine 2');
  });

  it('should handle empty tooltip text', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip tooltip-text=""><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.textVerify).toBe('');
  });

  it('should show tooltip on mouse enter', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    const wrapper = page.root.shadowRoot.querySelector('.tooltip__wrapper > div');
    
    expect(tooltip.isMouseOver).toBe(false);
    
    const mouseEnterEvent = new MouseEvent('mouseenter');
    wrapper.dispatchEvent(mouseEnterEvent);
    await page.waitForChanges();
    
    expect(tooltip.isMouseOver).toBe(true);
  });

  it('should hide tooltip on mouse leave', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    const wrapper = page.root.shadowRoot.querySelector('.tooltip__wrapper > div');
    
    // First show the tooltip
    const mouseEnterEvent = new MouseEvent('mouseenter');
    wrapper.dispatchEvent(mouseEnterEvent);
    await page.waitForChanges();
    expect(tooltip.isMouseOver).toBe(true);
    
    // Then hide it
    const mouseLeaveEvent = new MouseEvent('mouseleave');
    wrapper.dispatchEvent(mouseLeaveEvent);
    await page.waitForChanges();
    
    expect(tooltip.isMouseOver).toBe(false);
  });

  it('should not show tooltip when disabled', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip disabled="true"><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    const wrapper = page.root.shadowRoot.querySelector('.tooltip__wrapper > div');
    
    const mouseEnterEvent = new MouseEvent('mouseenter');
    wrapper.dispatchEvent(mouseEnterEvent);
    await page.waitForChanges();
    
    expect(tooltip.isMouseOver).toBe(false);
  });

  it('should apply correct CSS classes based on position', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip position="top-right"><button>Test</button></bds-tooltip>`,
    });

    const tooltipTip = page.root.shadowRoot.querySelector('.tooltip__tip');
    expect(tooltipTip.classList.contains('tooltip__tip--top-right')).toBe(true);
  });

  it('should apply visible class when mouse is over', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    tooltip.isMouseOver = true;
    await page.waitForChanges();

    const tooltipTip = page.root.shadowRoot.querySelector('.tooltip__tip');
    expect(tooltipTip.classList.contains('tooltip__tip--visible')).toBe(true);
  });

  it('should apply custom max-width style', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip max-width="500px"><button>Test</button></bds-tooltip>`,
    });

    const tooltipTip = page.root.shadowRoot.querySelector('.tooltip__tip') as HTMLElement;
    expect(tooltipTip.style.maxWidth).toBe('500px');
  });

  it('should render slot content', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip><button>Click me</button><span>Extra content</span></bds-tooltip>`,
    });

    expect(page.root.textContent).toContain('Click me');
    expect(page.root.textContent).toContain('Extra content');
    expect(page.root.querySelector('button')).toBeTruthy();
    expect(page.root.querySelector('span')).toBeTruthy();
  });

  it('should test all valid positions', async () => {
    const positions = [
      'top-center', 'top-left', 'top-right',
      'left-center', 'left-top', 'left-bottom',
      'bottom-center', 'bottom-right', 'bottom-left',
      'right-center', 'right-top', 'right-bottom'
    ];

    for (const position of positions) {
      const page = await newSpecPage({
        components: [Tooltip],
        html: `<bds-tooltip position="${position}"><button>Test</button></bds-tooltip>`,
      });

      const tooltip = page.rootInstance;
      expect(tooltip.position).toBe(position);
      
      const tooltipTip = page.root.shadowRoot.querySelector('.tooltip__tip');
      expect(tooltipTip.classList.contains(`tooltip__tip--${position}`)).toBe(true);
    }
  });

  it('should expose visible and invisible methods', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    
    // Test visible method
    await tooltip.visible();
    expect(tooltip.isMouseOver).toBe(true);
    
    // Test invisible method
    await tooltip.invisible();
    expect(tooltip.isMouseOver).toBe(false);
  });

  it('should watch tooltipText changes', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip tooltip-text="Initial"><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.textVerify).toBe('Initial');

    tooltip.tooltipText = 'Updated<br>Text';
    await page.waitForChanges();
    
    expect(tooltip.textVerify).toBe('Updated\r\nText');
  });

  it('should watch maxWidth changes', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip max-width="300px"><button>Test</button></bds-tooltip>`,
    });

    const tooltip = page.rootInstance;
    expect(tooltip.maxWidtTooltip).toBe('300px');

    tooltip.maxWidth = '600px';
    await page.waitForChanges();
    
    expect(tooltip.maxWidtTooltip).toBe('600px');
  });

  it('should handle data-test attribute', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip data-test="tooltip-test"><button>Test</button></bds-tooltip>`,
    });

    const wrapper = page.root.shadowRoot.querySelector('[data-test="tooltip-test"]');
    expect(wrapper).toBeTruthy();
  });

  it('should render typography component with correct attributes', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<bds-tooltip tooltip-text="Test text"><button>Test</button></bds-tooltip>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo).toBeTruthy();
    expect(typo.getAttribute('variant')).toBe('fs-12');
    expect(typo.getAttribute('no-wrap')).toBe('false');
    expect(typo.classList.contains('text')).toBe(true);
  });
});
