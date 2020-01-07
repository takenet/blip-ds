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
  styleUrl: 'button.scss'
})
export class Button {
  @Prop() disabled?: boolean = false;

  @Prop() size?: ButtonSize = 'standard';

  @Prop() variant?: ButtonVariant = 'primary';

  render(): HTMLElement {
    return (
      <button class={{
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
          <bds-typo variant="fs-14" lineHeight="simple" bold="regular">Text Button</bds-typo>
        </div>
      </button>
    )
  }
}
