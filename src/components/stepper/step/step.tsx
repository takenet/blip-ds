import { Component, ComponentInterface, h, Prop, Element } from '@stencil/core';
@Component({
  tag: 'bds-step',
  styleUrl: 'step.scss',
  shadow: true,
})
export class BdsStep implements ComponentInterface {
  @Element() el: HTMLBdsToastElement;
  /**
   * Used to define the last step component on the list
   */
  @Prop() last?: boolean = false;

  /**
   * Used to complete the step
   */
  @Prop() completed?: boolean = false;

  /**
   * Used to set the step as active
   */
  @Prop() active?: boolean = false;

  /**
   * Used to set the step as disabled
   */
  @Prop() disabled?: boolean = false;

  /**
   * Used to set the index of the steps
   */
  @Prop() index?: number = 0;

  /**
   * Used to set cursor pointer on the step (useful to allow clicks on the steps)
   */
  @Prop() pointer?: boolean = false;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  render() {
    return (
      <div class="step">
        <div
          class={{
            step__content: true,
            'step__content--active': this.active,
            'step__content--completed': this.completed,
            'step__content--disabled': this.disabled,
            'step__content--pointer': this.pointer,
            'step--last': this.last,
          }}
          data-test={this.dataTest}
        >
          <div
            class={{
              step__content__ellipse: true,
              'step__content__ellipse--active': this.active,
              'step__content__ellipse--completed': this.completed,
              'step__content__ellipse--disabled': this.disabled,
            }}
          >
            {this.completed && <bds-icon name="true"></bds-icon>}
            {!this.completed && <bds-typo>{this.index + 1}</bds-typo>}
          </div>
          <bds-typo
            variant="fs-16"
            class={{
              step__content__text: true,
              'step__content__text--completed': this.completed && !this.active,
              'step__content__text--active': this.active,
              'step__content__text--disabled': this.disabled,
            }}
            bold={this.active ? 'bold' : 'regular'}
          >
            <slot />
          </bds-typo>
        </div>
      </div>
    );
  }
}
