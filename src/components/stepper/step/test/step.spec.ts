import { newSpecPage } from '@stencil/core/testing';
import { BdsStep } from '../step';

describe('bds-step', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step>Step Content</bds-step>',
    });

    expect(page.root).toEqualHtml(`
      <bds-step>
        <mock:shadow-root>
          <div class="step">
            <div class="step__content">
              <div class="step__content__ellipse">
                <bds-typo>1</bds-typo>
              </div>
              <bds-typo class="step__content__text" bold="regular" variant="fs-16">
                <slot></slot>
              </bds-typo>
            </div>
          </div>
        </mock:shadow-root>
        Step Content
      </bds-step>
    `);
  });

  it('should render with active state', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step active>Active Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    const ellipse = page.root.shadowRoot.querySelector('.step__content__ellipse');
    const text = page.root.shadowRoot.querySelector('.step__content__text');

    expect(stepContent).toHaveClass('step__content--active');
    expect(ellipse).toHaveClass('step__content__ellipse--active');
    expect(text).toHaveClass('step__content__text--active');
    expect(text.getAttribute('bold')).toBe('bold');
  });

  it('should render with completed state', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step completed>Completed Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    const ellipse = page.root.shadowRoot.querySelector('.step__content__ellipse');
    const text = page.root.shadowRoot.querySelector('.step__content__text');
    const icon = page.root.shadowRoot.querySelector('bds-icon');

    expect(stepContent).toHaveClass('step__content--completed');
    expect(ellipse).toHaveClass('step__content__ellipse--completed');
    expect(text).toHaveClass('step__content__text--completed');
    expect(icon).toBeTruthy();
    expect(icon.getAttribute('name')).toBe('true');
  });

  it('should render with disabled state', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step disabled>Disabled Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    const ellipse = page.root.shadowRoot.querySelector('.step__content__ellipse');
    const text = page.root.shadowRoot.querySelector('.step__content__text');

    expect(stepContent).toHaveClass('step__content--disabled');
    expect(ellipse).toHaveClass('step__content__ellipse--disabled');
    expect(text).toHaveClass('step__content__text--disabled');
  });

  it('should render with pointer cursor', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step pointer>Clickable Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    expect(stepContent).toHaveClass('step__content--pointer');
  });

  it('should render as last step', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step last>Last Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    expect(stepContent).toHaveClass('step--last');
  });

  it('should render with custom index', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step index="3">Step with Index</bds-step>',
    });

    const typo = page.root.shadowRoot.querySelector('.step__content__ellipse bds-typo');
    expect(typo.textContent).toBe('4'); // index + 1
  });

  it('should render with data-test attribute', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step data-test="step-test">Test Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    expect(stepContent.getAttribute('data-test')).toBe('step-test');
  });

  it('should render completed step with icon instead of number', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step completed>Completed Step</bds-step>',
    });

    const icon = page.root.shadowRoot.querySelector('.step__content__ellipse bds-icon');
    const typo = page.root.shadowRoot.querySelector('.step__content__ellipse bds-typo');

    expect(icon).toBeTruthy();
    expect(icon.getAttribute('name')).toBe('true');
    expect(typo).toBeNull();
  });

  it('should render active and completed step correctly', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step active completed>Active Completed Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    const ellipse = page.root.shadowRoot.querySelector('.step__content__ellipse');
    const text = page.root.shadowRoot.querySelector('.step__content__text');
    const icon = page.root.shadowRoot.querySelector('bds-icon');

    expect(stepContent).toHaveClass('step__content--active');
    expect(stepContent).toHaveClass('step__content--completed');
    expect(ellipse).toHaveClass('step__content__ellipse--active');
    expect(ellipse).toHaveClass('step__content__ellipse--completed');
    expect(text).toHaveClass('step__content__text--active'); // Active takes precedence for text
    expect(text).not.toHaveClass('step__content__text--completed');
    expect(text.getAttribute('bold')).toBe('bold');
    expect(icon).toBeTruthy(); // Completed step shows icon
  });

  it('should render with multiple combined states', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step disabled pointer last data-test="multi-state">Multi State Step</bds-step>',
    });

    const stepContent = page.root.shadowRoot.querySelector('.step__content');

    expect(stepContent).toHaveClass('step__content--disabled');
    expect(stepContent).toHaveClass('step__content--pointer');
    expect(stepContent).toHaveClass('step--last');
    expect(stepContent.getAttribute('data-test')).toBe('multi-state');
  });

  it('should have proper default values', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step>Default Step</bds-step>',
    });

    expect(page.rootInstance.last).toBe(false);
    expect(page.rootInstance.completed).toBe(false);
    expect(page.rootInstance.active).toBe(false);
    expect(page.rootInstance.disabled).toBe(false);
    expect(page.rootInstance.index).toBe(0);
    expect(page.rootInstance.pointer).toBe(false);
    expect(page.rootInstance.dataTest).toBe(null);
  });

  it('should handle edge case with index 0', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step index="0">First Step</bds-step>',
    });

    const typo = page.root.shadowRoot.querySelector('.step__content__ellipse bds-typo');
    expect(typo.textContent).toBe('1'); // 0 + 1 = 1
  });

  it('should handle boolean prop variations', async () => {
    const page = await newSpecPage({
      components: [BdsStep],
      html: '<bds-step active="true" completed="false">Boolean Props Step</bds-step>',
    });

    expect(page.rootInstance.active).toBe(true);
    expect(page.rootInstance.completed).toBe(false);

    const stepContent = page.root.shadowRoot.querySelector('.step__content');
    expect(stepContent).toHaveClass('step__content--active');
    expect(stepContent).not.toHaveClass('step__content--completed');
  });
});
