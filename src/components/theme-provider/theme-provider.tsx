import { Component, Host, h, Prop } from '@stencil/core';

export type Themes = 'light' | 'dark';

@Component({
  tag: 'bds-theme-provider',
  styleUrl: 'theme-provider.scss',
  shadow: true,
})
export class ThemeProvider {
  /**
   * Size. Entered as one of the size. Can be one of:
   * 'static', 'primary', 'secondary';
   */
  @Prop() theme?: Themes = 'light';

  render() {
    return (
      <Host>
        <div class={{ theme: true, [`theme--${this.theme}`]: true }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
