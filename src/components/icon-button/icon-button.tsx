import { Component, h, Prop } from '@stencil/core';
import { IconSize } from '../icon/icon-interface';

export type IconButtonSize = 'tall' | 'standard' | 'short';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'secondary--white' | 'delete';
export type IconType = 'icon' | 'logo' | 'emoji';
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
   * The type of the icon. Can be one of:
   * 'icon', 'logo', 'emoji';
   */
  @Prop({ reflect: true }) typeIcon: IconType = 'icon';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  render(): HTMLElement {
    if (!this.icon) return null;

    return (
      <button
        disabled={this.disabled}
        class={{
          button: true,
          [`button__${this.variant}`]: true,
          [`button__disabled`]: this.disabled,
          [`button--size-${this.size}`]: true,
        }}
        part="button"
        data-test={this.dataTest}
      >
        <div class={{ button__icon: true }}>
          <bds-icon name={this.icon} type={this.typeIcon} color="inherit"></bds-icon>
        </div>
      </button>
    );
  }
}
