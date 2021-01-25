import { Component, ComponentInterface, h, Element, Method } from '@stencil/core';
@Component({
  tag: 'bds-stepper',
  styleUrl: 'stepper.scss',
})
export class BdsStepper implements ComponentInterface {
  @Element() el: HTMLBdsStepperElement;

  connectedCallback() {
    this.childOptions.forEach((option, index) => {
      option.index = index;
      if (index === this.childOptions.length - 1) {
        option.last = true;
      }
    });
  }

  componentDidLoad() {
    this.renderLine();
  }

  /**
   * Set the active step
   *
   * @param index The index of the step to be set as active
   * @returns void
   */
  @Method()
  public async setActiveStep(index: number): Promise<void> {
    this.resetActiveSteps();
    this.childOptions[index].active = true;
  }

  /**
   * Set the completed step
   *
   * @param index The index of the step to be set as completed
   * @returns void
   */
  @Method()
  public async setCompletedStep(index: number): Promise<void> {
    this.childOptions[index].completed = true;
  }

  /**
   * Returns the active step
   *
   * @returns HTMLBdsStepElement
   */
  @Method()
  public async getActiveStep(): Promise<number> {
    return this.childOptions.find((step) => step.active === true).index;
  }

  /**
   * Reset all active steps
   *
   * @returns void
   */
  @Method()
  public async resetActiveSteps() {
    for (const step of this.childOptions) {
      step.active = false;
    }
  }

  /**
   * Reset all completed steps
   *
   * @returns void
   */
  @Method()
  public async resetCompletedSteps() {
    for (const step of this.childOptions) {
      step.completed = false;
    }
  }

  private get childOptions() {
    return Array.from(this.el.children) as HTMLBdsStepElement[];
  }

  private renderLine() {
    const line = document.createElement('div');
    line.classList.add('stepper__container__divisor');

    const childrenCount = this.el.firstElementChild.children.length;
    const child = this.el.firstElementChild.children;

    Array.from(child).forEach((item, idx) => {
      if (childrenCount - 1 != idx) {
        item.insertAdjacentHTML('afterend', line.outerHTML);
      }
    });
  }

  render() {
    return (
      <div class="stepper__container">
        <slot />
      </div>
    );
  }
}
