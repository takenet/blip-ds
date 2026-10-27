import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiTheme = 'light' | 'dark';

const THEMES: UaiTheme[] = ['light', 'dark'];

/**
 * Theme root for UAI components. Wrap the app (or an area with another theme) in it with theme="light" or "dark".
 * It sets data-uai-theme and the --uai-* tokens from blip-tokens, and does not change the layout (display: contents).
 *
 * @slot - The app or area that receives the theme.
 */
@Component({
  tag: 'uai-theme-provider',
  styleUrl: 'uai-theme-provider.scss',
  shadow: true,
})
export class UaiThemeProvider {
  /**
   * Theme applied to the UAI components inside the provider. Can be one of:
   * 'light', 'dark'. Any other value falls back to 'light' with a console warning.
   */
  @Prop({ reflect: true }) theme?: UaiTheme = 'light';

  @Watch('theme')
  protected validateTheme(): void {
    if (!THEMES.includes(this.theme)) {
      warnLegacyValue('uai-theme-provider', 'theme', this.theme, 'light');
    }
  }

  componentWillLoad(): void {
    this.validateTheme();
  }

  render(): HTMLElement {
    const theme = THEMES.includes(this.theme) ? this.theme : 'light';
    return (
      <Host data-uai-theme={theme}>
        <slot></slot>
      </Host>
    );
  }
}
