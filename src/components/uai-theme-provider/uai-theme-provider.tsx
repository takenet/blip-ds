import { Component, Host, Prop, Watch, h } from '@stencil/core';

export type UaiTheme = 'light' | 'dark';

const THEMES: UaiTheme[] = ['light', 'dark'];

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
      console.warn(`[uai-theme-provider] Unsupported theme "${this.theme}". Using "light".`);
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
