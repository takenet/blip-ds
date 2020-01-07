import { Component, h, Prop } from "@stencil/core";

export type ButtonSize = 'tall'
  | 'standard'
  | 'short';

export type ButtonVariant = 'primary'
  | 'second'
  | 'ghost'
  | 'dashed';

@Component({
  tag: 'bds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Size. Entered as one of the size. Can be one of: 
   * 'tall', 'standard', 'short';
   */
  @Prop() size?: ButtonSize = 'standard';

  /**
   * Variant. Entered as one of the variant. Can be one of: 
   * 'primary', 'second', 'ghost', 'dashed';
   */
  @Prop() variant?: ButtonVariant = 'primary';

  render(): HTMLElement {
    return (
      <button
        disabled={this.disabled}
        class={{
          'button': true,
          [`button__${this.variant}`]: true,
          [`button__${this.variant}--disabled`]: this.disabled,
          [`button--size-${this.size}`]: true
        }}>
        <div class={{
          'button__content': true,
          [`button__content__${this.variant}`]: true,
          [`button__content__${this.variant}--disabled`]: this.disabled,
        }}>
          <bds-typo variant="fs-14" lineHeight="simple" bold="regular">
            <slot></slot>
          </bds-typo>
        </div>
      </button>
    )
  }
}
