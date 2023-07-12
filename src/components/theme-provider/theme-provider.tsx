import { Component, Host, h, Prop } from '@stencil/core';

export type Themes = 'light' | 'dark' | 'high-contrast';

@Component({
  tag: 'bds-theme-provider',
  styleUrl: 'theme-provider.scss',
  shadow: true,
})
export class ThemeProvider {
  /**
   * Set what theme will be aplyed inside the component.
   * 'light', 'dark';
   */
  @Prop() theme?: Themes = 'light';

  render() {
    return (
      <Host class={{ theme: true, [`theme--${this.theme}`]: true }}>
        <slot></slot>
      </Host>
    );
  }
}
