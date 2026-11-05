import { newSpecPage } from '@stencil/core/testing';
import { UaiStepper } from '../uai-stepper';
import { UaiStep } from '../../uai-step/uai-step';

const html = `
  <uai-stepper>
    <uai-step heading="One" description="First"></uai-step>
    <uai-step heading="Two"></uai-step>
    <uai-step heading="Three"></uai-step>
  </uai-stepper>`;

const steps = (page) => Array.from(page.root.querySelectorAll('uai-step')) as any[];

describe('uai-stepper', () => {
  it('renders a list with a slot', async () => {
    const page = await newSpecPage({ components: [UaiStepper], html: '<uai-stepper></uai-stepper>' });
    expect(page.root.getAttribute('role')).toBe('list');
    expect(page.root.shadowRoot.querySelector('slot')).not.toBeNull();
  });

  it('numbers the steps and marks the last one', async () => {
    const page = await newSpecPage({ components: [UaiStepper, UaiStep], html });
    expect(steps(page).map((step) => step.index)).toEqual([0, 1, 2]);
    expect(steps(page).map((step) => step.last)).toEqual([false, false, true]);
  });

  it('passes its orientation to the steps and follows changes', async () => {
    const page = await newSpecPage({ components: [UaiStepper, UaiStep], html });
    expect(steps(page).map((step) => step.orientation)).toEqual(['horizontal', 'horizontal', 'horizontal']);
    page.root.orientation = 'vertical';
    await page.waitForChanges();
    expect(steps(page).map((step) => step.orientation)).toEqual(['vertical', 'vertical', 'vertical']);
  });

  it('draws the vertical connector after every step but the last', async () => {
    const page = await newSpecPage({
      components: [UaiStepper, UaiStep],
      html: html.replace('<uai-stepper>', '<uai-stepper orientation="vertical">'),
    });
    await page.waitForChanges();
    expect(steps(page).map((step) => !!step.shadowRoot.querySelector('.step__line'))).toEqual([true, true, false]);
  });

  it('sets a single active step and reports it', async () => {
    const page = await newSpecPage({ components: [UaiStepper, UaiStep], html });
    await page.root.setActiveStep(1);
    await page.root.setActiveStep(2);
    await page.waitForChanges();
    expect(steps(page).map((step) => step.active)).toEqual([false, false, true]);
    expect(await page.root.getActiveStep()).toBe(2);
    expect(steps(page)[2].getAttribute('aria-current')).toBe('step');
  });

  it('returns -1 when no step is active', async () => {
    const page = await newSpecPage({ components: [UaiStepper, UaiStep], html });
    expect(await page.root.getActiveStep()).toBe(-1);
  });

  it('ignores indexes outside the steps', async () => {
    const page = await newSpecPage({ components: [UaiStepper, UaiStep], html });
    await page.root.setActiveStep(0);
    await page.root.setActiveStep(9);
    await page.root.setCompletedStep(9);
    expect(steps(page).map((step) => step.active)).toEqual([true, false, false]);
    expect(steps(page).some((step) => step.completed)).toBe(false);
  });

  it('completes and resets steps', async () => {
    const page = await newSpecPage({ components: [UaiStepper, UaiStep], html });
    await page.root.setCompletedStep(0);
    await page.root.setCompletedStep(1);
    await page.waitForChanges();
    expect(steps(page).map((step) => step.completed)).toEqual([true, true, false]);
    expect(steps(page)[0].shadowRoot.querySelector('uai-icon')).not.toBeNull();
    await page.root.resetCompletedSteps();
    await page.root.setActiveStep(0);
    await page.root.resetActiveSteps();
    await page.waitForChanges();
    expect(steps(page).some((step) => step.completed || step.active)).toBe(false);
  });
});
