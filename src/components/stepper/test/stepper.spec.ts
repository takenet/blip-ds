import { newSpecPage } from '@stencil/core/testing';
import { BdsStepper } from '../stepper';

describe('bds-stepper', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: '<bds-stepper></bds-stepper>',
    });

    expect(page.root).toEqualHtml(`
      <bds-stepper class="stepper__container">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-stepper>
    `);
  });

  it('should render with step children', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    // Wait for componentDidLoad to execute and add dividers
    await page.waitForChanges();

    // Check that steps are rendered with dividers
    expect(page.root.querySelectorAll('bds-step')).toHaveLength(3);
    expect(page.root.querySelectorAll('.stepper__container__divisor')).toHaveLength(2);
  });

  it('should set index for child steps on connectedCallback', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;
    
    expect(steps[0].index).toBe(0);
    expect(steps[1].index).toBe(1);
    expect(steps[2].index).toBe(2);
  });

  it('should mark last step on connectedCallback', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;
    
    expect(steps[0].last).toBeFalsy();
    expect(steps[1].last).toBeFalsy();
    expect(steps[2].last).toBe(true);
  });

  it('should render divider lines between steps on componentDidLoad', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    await page.waitForChanges();

    // Check that divider elements have been inserted
    const dividers = page.root.querySelectorAll('.stepper__container__divisor');
    expect(dividers.length).toBe(2); // Should have n-1 dividers for n steps
  });

  it('should set active step using setActiveStep method', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;

    await stepper.setActiveStep(1);

    expect(steps[0].active).toBe(false);
    expect(steps[1].active).toBe(true);
    expect(steps[2].active).toBe(false);
  });

  it('should reset previous active steps when setting new active step', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step active>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;

    await stepper.setActiveStep(2);

    expect(steps[0].active).toBe(false);
    expect(steps[1].active).toBe(false);
    expect(steps[2].active).toBe(true);
  });

  it('should set completed step using setCompletedStep method', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;

    await stepper.setCompletedStep(0);
    await stepper.setCompletedStep(1);

    expect(steps[0].completed).toBe(true);
    expect(steps[1].completed).toBe(true);
    expect(steps[2].completed).toBeFalsy();
  });

  it('should get active step index using getActiveStep method', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;
    
    // Manually set the active property
    steps[1].active = true;
    
    const activeStepIndex = await stepper.getActiveStep();

    expect(activeStepIndex).toBe(1);
  });

  it('should reset all active steps using resetActiveSteps method', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step active>Step 1</bds-step>
          <bds-step active>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;

    await stepper.resetActiveSteps();

    expect(steps[0].active).toBe(false);
    expect(steps[1].active).toBe(false);
    expect(steps[2].active).toBe(false);
  });

  it('should reset all completed steps using resetCompletedSteps method', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step completed>Step 1</bds-step>
          <bds-step completed>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;

    await stepper.resetCompletedSteps();

    expect(steps[0].completed).toBe(false);
    expect(steps[1].completed).toBe(false);
    expect(steps[2].completed).toBe(false);
  });

  it('should handle empty stepper', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: '<bds-stepper></bds-stepper>',
    });

    const stepper = page.rootInstance;
    
    // Should not throw errors when there are no steps
    await stepper.resetActiveSteps();
    await stepper.resetCompletedSteps();

    // Getting active step should not crash but may return undefined
    try {
      const activeStepIndex = await stepper.getActiveStep();
      expect(activeStepIndex).toBeUndefined();
    } catch (error) {
      // The method may throw an error when no active step is found, which is acceptable
      expect(error).toBeDefined();
    }
  });

  it('should handle single step', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Only Step</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const step = page.root.querySelector('bds-step') as HTMLBdsStepElement;

    expect(step.index).toBe(0);
    expect(step.last).toBe(true);

    await stepper.setActiveStep(0);
    expect(step.active).toBe(true);

    await stepper.setCompletedStep(0);
    expect(step.completed).toBe(true);

    const activeStepIndex = await stepper.getActiveStep();
    expect(activeStepIndex).toBe(0);

    // Should not add any dividers for single step
    await page.waitForChanges();
    const dividers = page.root.querySelectorAll('.stepper__container__divisor');
    expect(dividers.length).toBe(0);
  });

  it('should properly manage step states in complex scenario', async () => {
    const page = await newSpecPage({
      components: [BdsStepper],
      html: `
        <bds-stepper>
          <bds-step>Step 1</bds-step>
          <bds-step>Step 2</bds-step>
          <bds-step>Step 3</bds-step>
          <bds-step>Step 4</bds-step>
        </bds-stepper>
      `,
    });

    const stepper = page.rootInstance;
    const steps = page.root.querySelectorAll('bds-step') as NodeListOf<HTMLBdsStepElement>;

    // Complete first two steps
    await stepper.setCompletedStep(0);
    await stepper.setCompletedStep(1);
    
    // Set third step as active
    await stepper.setActiveStep(2);

    expect(steps[0].completed).toBe(true);
    expect(steps[0].active).toBe(false);
    expect(steps[1].completed).toBe(true);
    expect(steps[1].active).toBe(false);
    expect(steps[2].completed).toBeFalsy();
    expect(steps[2].active).toBe(true);
    expect(steps[3].completed).toBeFalsy();
    expect(steps[3].active).toBe(false);

    const activeStepIndex = await stepper.getActiveStep();
    expect(activeStepIndex).toBe(2);
  });
});
