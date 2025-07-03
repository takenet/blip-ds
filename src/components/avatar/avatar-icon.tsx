import { Component, h, Prop, Element, Host, State, Watch, Method } from '@stencil/core';
import { IconSize, IconTheme, IconType } from '../icon/icon-interface';
import { BgColor } from './color-letter';

export type avatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';

@Component({
  tag: 'bds-avatar-icon',
  shadow: true,
})
export class AvatarIcon {
  @Element() el: HTMLElement;

  @State() iconSize: IconSize;

  /**
   * The name of the icon to be displayed.
   */
  @Prop({ mutable: true }) iconName?: string;

  /**
   * The size of the icon.
   */
  @Prop({ mutable: true }) size?: IconSize = 'medium';

  /**
   * The color of the icon.
   */
  @Prop({ mutable: true }) color?: BgColor = null;

  /**
   * The theme of the icon.
   */
  @Prop({ mutable: true }) theme?: IconTheme = 'outline';

  /**
   * The type of the icon.
   */
  @Prop({ mutable: true }) type?: IconType = 'icon';

  @Watch('size')
  @Watch('iconName')
  @Watch('color')
  @Watch('theme')
  handleParentSizeChange() {
    this.iconSize = this.getParentSize();
  }

  componentWillLoad() {
    this.iconSize = this.getParentSize();
  }

  private getParentSize(): IconSize {
    const parent = this.el.closest('bds-avatar');
    if (parent) {
      const parentSize = parent.getAttribute('size') as avatarSize;
      switch (parentSize) {
        case 'micro':
          return 'x-small';
        case 'extra-small':
          return 'x-small';
        case 'small':
          return 'medium';
        case 'standard':
          return 'x-large';
        case 'large':
          return 'xxx-large';
        case 'extra-large':
          return 'xxx-large';
        default:
          return this.size;
      }
    }
    return this.size;
  }

  /**
   * Method to update the icon name.
   */
  @Method()
  async setIconName(name: string): Promise<void> {
    this.iconName = name;
  }

  /**
   * Method to update the icon size.
   */
  @Method()
  async setSize(size: IconSize): Promise<void> {
    this.size = size;
    this.iconSize = this.getParentSize();
  }

  /**
   * Method to update the icon color.
   */
  @Method()
  async setColor(color: BgColor): Promise<void> {
    this.color = color;
  }

  /**
   * Method to update the icon theme.
   */
  @Method()
  async setTheme(theme: IconTheme): Promise<void> {
    this.theme = theme;
  }

  render() {
    return (
      <Host style={{ display: 'flex', alignItems: 'center' }}>
        <bds-icon
          name={this.iconName}
          size={this.iconSize}
          class="color-primary"
          color={this.color}
          theme={this.theme}
          type={this.type}
        ></bds-icon>
      </Host>
    );
  }
}
