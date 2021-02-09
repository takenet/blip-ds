import { Component, h, Prop } from '@stencil/core';
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

  private mapSize: IconSizeMap = {
    tall: 'xxx-large',
    standard: 'x-large',
    short: 'medium',
  };

  private mapVariantStyle: IconButtonVariantMap = {
    primary: 'icon__button--primary',
    secondary: 'icon__button--secondary',
    tertiary: 'icon__button--tertiary',
    delete: 'icon__button--delete',
    ghost: 'icon__button--ghost',
    'secondary--white': 'icon__button--secondary-white',
  };

  render(): HTMLElement {
    if (!this.icon) return null;

    const size: IconSize = this.mapSize[this.size];
    const state: string = this.mapVariantStyle[this.variant];

    return (
      <button
        disabled={this.disabled}
        class={{
          ['icon__button']: true,
          [state]: true,
          [`${state}--disabled`]: this.disabled,
        }}
      >
        <bds-icon name={this.icon} size={size} color="inherit"></bds-icon>
      </button>
    );
  }
}
