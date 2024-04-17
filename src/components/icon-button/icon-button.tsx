import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { IconSize } from '../icon/icon-interface';

export type IconButtonSize = 'tall' | 'standard' | 'short';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'secondary--white' | 'delete';
export type IconSizeMap = { [key in string]: IconSize };
export type IconButtonVariantMap = { [key in IconButtonVariant]: string };
export type ButtonIconTheme = 'outline' | 'solid';

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
   * The theme of the icon. Can be one of:
   * 'outline', 'solid';
   */
  @Prop({ reflect: true }) iconTheme: ButtonIconTheme = 'outline';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Event buttom onClick.
   */
  @Event() bdsClick: EventEmitter;

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

  private handleClick = (ev) => {
    if (!this.disabled) {
      this.bdsClick.emit(ev);
    }
  };

  private handleKeyDown = (ev) => {
    if (!this.disabled) {
      if (ev.key === 'Enter') {
        this.bdsClick.emit(ev);
      }
    }
  };

  render(): HTMLElement {
    if (!this.icon) return null;

    const size: IconSize = this.mapSize[this.size];
    const state: string = this.mapVariantStyle[this.variant];

    return (
      <button
        onClick={(ev) => this.handleClick(ev)}
        disabled={this.disabled}
        class={{
          ['icon__button']: true,
          [state]: true,
          [`${state}--disabled`]: this.disabled,
          [`size-${this.size}`]: true,
        }}
        data-test={this.dataTest}
        tabindex="0"
        onKeyDown={this.handleKeyDown.bind(this)}
      >
        <bds-icon name={this.icon} size={size} theme={this.iconTheme} color="inherit"></bds-icon>
      </button>
    );
  }
}
