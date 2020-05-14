import { Component, h, Prop, Element } from '@stencil/core';

export type ButtonSize = 'tall' | 'standard' | 'short';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dashed';

export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  tag: 'bds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() el!: HTMLElement;

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
   * 'primary', 'secondary', 'ghost', 'dashed';
   */
  @Prop() variant?: ButtonVariant = 'primary';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * The arrow button
   */
  @Prop() arrow?: boolean = false;

  /**
   * If true, the text will be bold
   */
  @Prop() bold?: boolean = false;

  /**
   * The type of the button. Can be one of:
   * 'button', 'submit', 'reset';
   */
  @Prop() type: ButtonType = 'button';

  getSizeClass(): string {
    return this.arrow || !!this.icon ? `button--size-${this.size}--icon` : `button--size-${this.size}`;
  }

  renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div class="button__icon">
          <bds-icon name={this.icon} color="inherit"></bds-icon>
        </div>
      )
    );
  }

  renderText(): HTMLElement {
    return (
      <div
        class={{
          button__content: true,
          [`button__content__${this.variant}`]: true,
          [`button__content__${this.variant}--disabled`]: this.disabled,
        }}
      >
        <bds-typo variant="fs-14" lineHeight="simple" bold={this.bold ? 'bold' : 'regular'}>
          <slot></slot>
        </bds-typo>
      </div>
    );
  }

  renderArrow(): HTMLElement {
    return (
      this.arrow && (
        <div class="button__arrow">
          <bds-icon name="arrow-right" color="inherit"></bds-icon>
        </div>
      )
    );
  }

  private handleClick = (ev: Event) => {
    const form = this.el.closest('form');
    if (form) {
      ev.preventDefault();

      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      form.appendChild(fakeButton);
      fakeButton.click();
      fakeButton.remove();
    }
  };

  render(): HTMLElement {
    const sizeClass = this.getSizeClass();

    return (
      <button
        onClick={this.handleClick}
        disabled={this.disabled}
        type={this.type}
        class={{
          button: true,
          [`button__${this.variant}`]: true,
          [`button__${this.variant}--disabled`]: this.disabled,
          [sizeClass]: true,
          'button--size-icon--left': !!this.icon,
          'button--size-icon--right': this.arrow,
        }}
      >
        {this.renderIcon()}
        {this.renderText()}
        {this.renderArrow()}
      </button>
    );
  }
}
