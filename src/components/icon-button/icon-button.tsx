import { Component, h, Prop, Host } from '@stencil/core';
import { IconSize } from '../icon/icon-interface';

export type IconButtonSize = 'tall' | 'standard' | 'short';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'secondary--white' | 'delete';
export type IconSizeMap = { [key in string]: IconSize };
export type IconButtonVariantMap = { [key in IconButtonVariant]: string };

@Component({
  tag: 'bds-button-icon',
  styleUrl: 'icon-button.scss',
  shadow: true,
})
export class IconButton {
  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Size. Entered as one of the size. Can be one of:
   * 'tall', 'standard', 'short';
   */
  @Prop() size?: IconButtonSize = 'standard';

  /**
   * Variant. Entered as one of the variant. Can be one of:
   * 'primary', 'secondary', 'ghost', 'dashed';
   */
  @Prop() variant?: IconButtonVariant = 'primary';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * 	If true, shows the loading spinner
   */
  @Prop() bdsLoading?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  private mapSize: IconSizeMap = {
    tall: 'xxx-large',
    standard: 'x-large',
    short: 'medium',
  };

  renderIcon(): HTMLElement {
    const size: IconSize = this.mapSize[this.size];
    return <bds-icon name={this.icon} size={size} color="inherit"></bds-icon>;
  }

  renderLoadingSpinner(): HTMLBdsLoadingSpinnerElement {
    const sizeValue = this.size == 'short' || this.size === 'standard' ? 'extra-small' : 'small';
    const colorValue = this.variant == 'delete' ? 'light' : 'main';
    return <bds-loading-spinner size={sizeValue} color={colorValue}></bds-loading-spinner>;
  }

  render(): HTMLElement {
    if (!this.icon) return null;
    return (
      <Host>
        <button
          disabled={this.disabled}
          class={{
            button: true,
            [`button__${this.variant}`]: true,
            [`button--disabled`]: this.disabled,
            [`button--size-${this.size}`]: true,
            'button--size-icon--left': !!this.icon,
          }}
          data-test={this.dataTest}
        >
          {[this.bdsLoading ? this.renderLoadingSpinner() : this.renderIcon()]}
        </button>
      </Host>
    );
  }
}
