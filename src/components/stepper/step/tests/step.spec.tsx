import { newSpecPage } from '@stencil/core/testing';
import { BdsStep } from '../step';

describe('bds-stepper', () => {
  jest.useFakeTimers();

  const getStepComponent = async () => {
    return await newSpecPage({
      components: [BdsStep],
      html: `
        <bds-step
          active="true"> Step one 1
        </bds-step>
      `,
    });
  };

  it('should build', () => {
    expect(new BdsStep()).toBeTruthy();
  });

  it('should contain divisor', async () => {
    const page = await getStepComponent();

    const divisor = page.root.shadowRoot.querySelector('.step__divisor');

    expect(page.root.last).toBeFalsy();
    expect(divisor).toBeDefined();
  });

  it('should be active', async () => {
    const page = await getStepComponent();

    const divActive = page.root.shadowRoot.querySelector('.step__content--active');

    expect(divActive).toBeDefined();
  });

  it('should be disabled', async () => {
    const page = await getStepComponent();

    const divDisabled = page.root.shadowRoot.querySelector('.step__content--disabled');

    expect(divDisabled).toBeDefined();
  });

  it('index should be zero by default', async () => {
    const page = await getStepComponent();

    const stepIndex = page.root.index;

    expect(stepIndex).toBe(0);
  });

  it('should have pointer', async () => {
    const page = await getStepComponent();

    const divPointer = page.root.shadowRoot.querySelector('.step__content--pointer');

    expect(divPointer).toBeDefined();
  });

  it('should be completed', async () => {
    const page = await getStepComponent();

    page.root.completed = true;

    await page.waitForChanges();

    const divCompleted = page.root.shadowRoot.querySelector('.step__content--completed');

    const color = divCompleted.querySelector('bds-icon').getAttribute('color');

    expect(color).toBe('#fff');
  });
});
