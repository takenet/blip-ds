import { Component, Host, Prop, h } from '@stencil/core';

export type UaiStepOrientation = 'horizontal' | 'vertical';

/**
 * One stage of a UaiStepper, with a numbered marker, a title and an optional description.
 * Use inside uai-stepper, which sets its orientation, number and position; avoid it outside a stepper.
 *
 * @slot heading - Step title. Use for rich content; pair with no heading prop, which it replaces.
 * @slot description - Step description. Use for rich content; pair with no description prop, which it replaces.
 */
@Component({
  tag: 'uai-step',
  styleUrl: 'uai-step.scss',
  shadow: true,
})
export class UaiStep {
  /** Step title. Use a short noun phrase; pair with description for details; avoid long sentences. */
  @Prop() heading?: string = null;

  /** Step description. Use for one or two lines of detail; pair with heading; in the horizontal stepper it is cut at two lines. */
  @Prop() description?: string = null;

  /** Layout of the step. Set by the stepper from its orientation; avoid setting it by hand. */
  @Prop({ reflect: true, mutable: true }) orientation?: UaiStepOrientation = 'horizontal';

  /** Marks the last step, which draws no connector in the vertical layout. Set by the stepper; avoid setting it by hand. */
  @Prop({ reflect: true, mutable: true }) last?: boolean = false;

  /** Marks the stage as done and shows a check. Use with setCompletedStep; the active step wins over completed. */
  @Prop({ reflect: true, mutable: true }) completed?: boolean = false;

  /** Marks the current stage. Use with setActiveStep; avoid more than one active step. */
  @Prop({ reflect: true, mutable: true }) active?: boolean = false;

  /** Makes the step unavailable. Use for stages that cannot be reached yet; avoid combining it with pointer. */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** Position of the step, starting at 0. Set by the stepper; avoid setting it by hand. */
  @Prop({ mutable: true }) index?: number = 0;

  /** Shows a pointer cursor. Use when steps are clickable; ignored on disabled steps. */
  @Prop({ reflect: true }) pointer?: boolean = false;

  /** Data test is the prop to specifically test the component action object. */
  @Prop() dataTest?: string = null;

  private get state(): 'active' | 'completed' | 'pending' {
    if (this.active) return 'active';
    if (this.completed) return 'completed';
    return 'pending';
  }

  render() {
    const state = this.state;
    const vertical = this.orientation === 'vertical';

    return (
      <Host role="listitem" aria-current={this.active ? 'step' : undefined} aria-disabled={this.disabled ? 'true' : undefined}>
        <div
          class={{
            step: true,
            [`step--${state}`]: true,
            'step--disabled': this.disabled,
            'step--pointer': this.pointer && !this.disabled,
          }}
          data-test={this.dataTest}
        >
          <div class="step__number">
            <span class="step__marker" aria-hidden="true">
              {state === 'completed' ? (
                <uai-icon name="check" size="medium"></uai-icon>
              ) : (
                <uai-typo tag="span" variant="body-base" bold="medium" margin={false}>
                  {this.index + 1}
                </uai-typo>
              )}
            </span>
            {vertical && !this.last && <span class="step__line" aria-hidden="true"></span>}
          </div>
          <div class="step__content">
            <uai-typo tag="span" variant="title-md" bold="semibold" margin={false} class="step__heading">
              <slot name="heading">{this.heading}</slot>
            </uai-typo>
            <div class="step__description">
              <uai-typo tag="span" variant="body-base" margin={false}>
                <slot name="description">{this.description}</slot>
              </uai-typo>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
