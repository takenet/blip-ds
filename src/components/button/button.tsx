import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

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

  /**
   * The icon name
   */
  @Prop() icon?: string = null;

  /**
   * The arrow button
   */
  @Prop() arrow?: boolean = false;

  /**
   * Set the handler to handle click event	
   */
  @Event() click: EventEmitter;

  onHandleClick = (event): void => {
    this.click.emit(event);
  }

  getSizeClass(): string {
    return this.arrow || !!this.icon ? `button--size-${this.size}--icon` : `button--size-${this.size}`;
  }

  renderIcon(): HTMLElement {
    return this.icon && (
      <div class="button__icon">
        <bds-icon name={this.icon} color="inherit"></bds-icon>
      </div>
    )
  }

  renderText(): HTMLElement {
    return (
      <div class={{
        'button__content': true,
        [`button__content__${this.variant}`]: true,
        [`button__content__${this.variant}--disabled`]: this.disabled,
      }}>
        <bds-typo variant="fs-14" lineHeight="simple" bold="regular">
          <slot></slot>
        </bds-typo>
      </div>
    )
  }

  renderArrow(): HTMLElement {
    return this.arrow && (
      <div class="button__arrow">
        <bds-icon name="arrow-right" color="inherit"></bds-icon>
      </div>
    )
  }

  render(): HTMLElement {
    const sizeClass = this.getSizeClass();

    return (
      <button
        onClick={this.onHandleClick}
        disabled={this.disabled}
        class={{
          'button': true,
          [`button__${this.variant}`]: true,
          [`button__${this.variant}--disabled`]: this.disabled,
          [sizeClass]: true,
          'button--size-icon--left': !!this.icon,
          'button--size-icon--right': this.arrow,
        }}>
        {this.renderIcon()}
        {this.renderText()}
        {this.renderArrow()}
      </button>
    )
  }
}
