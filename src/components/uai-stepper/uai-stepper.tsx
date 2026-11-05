import { Component, Element, Host, Method, Prop, Watch, h } from '@stencil/core';

/**
 * Sequential steps of a process. Use for flows with ordered stages; pair with UaiStep; avoid it for free navigation between views (use uai-tab-group).
 * The stepper numbers the steps, marks the last one and sets their orientation.
 *
 * @slot - UaiStep items, in order.
 */
@Component({
  tag: 'uai-stepper',
  styleUrl: 'uai-stepper.scss',
  shadow: true,
})
export class UaiStepper {
  @Element() el!: HTMLUaiStepperElement;

  /** Layout of the steps: a row with a state bar under each step, or a column with connectors. Use vertical for long labels or narrow areas; avoid unsupported values. */
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Watch('orientation')
  protected orientationChanged(): void {
    this.syncSteps();
  }

  private get steps(): HTMLUaiStepElement[] {
    return Array.from(this.el.children).filter((child) => child.tagName === 'UAI-STEP') as HTMLUaiStepElement[];
  }

  connectedCallback(): void {
    this.syncSteps();
  }

  componentDidLoad(): void {
    this.syncSteps();
  }

  /**
   * Sets the active step. Use for moving forward or back; pair with setCompletedStep; avoid indexes outside the steps, which are ignored.
   * @param index Zero-based index of the step.
   */
  @Method()
  async setActiveStep(index: number): Promise<void> {
    const step = this.steps[index];
    if (!step) return;
    await this.resetActiveSteps();
    step.active = true;
  }

  /**
   * Marks a step as completed. Use after the person finishes a stage; pair with setActiveStep; avoid indexes outside the steps, which are ignored.
   * @param index Zero-based index of the step.
   */
  @Method()
  async setCompletedStep(index: number): Promise<void> {
    const step = this.steps[index];
    if (step) step.completed = true;
  }

  /**
   * Index of the active step, or -1 when none is active. Use to decide the next step; pair with setActiveStep; avoid assuming a step is always active.
   */
  @Method()
  async getActiveStep(): Promise<number> {
    return this.steps.findIndex((step) => step.active === true);
  }

  /** Clears the active state of every step. Use before restarting a flow; pair with resetCompletedSteps. */
  @Method()
  async resetActiveSteps(): Promise<void> {
    this.steps.forEach((step) => (step.active = false));
  }

  /** Clears the completed state of every step. Use before restarting a flow; pair with resetActiveSteps. */
  @Method()
  async resetCompletedSteps(): Promise<void> {
    this.steps.forEach((step) => (step.completed = false));
  }

  private syncSteps = (): void => {
    const steps = this.steps;
    steps.forEach((step, index) => {
      step.index = index;
      step.last = index === steps.length - 1;
      step.orientation = this.orientation === 'vertical' ? 'vertical' : 'horizontal';
    });
  };

  render() {
    return (
      <Host role="list">
        <slot onSlotchange={this.syncSteps}></slot>
      </Host>
    );
  }
}
