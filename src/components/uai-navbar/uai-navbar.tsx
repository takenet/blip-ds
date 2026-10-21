import { Component, h, Host, Prop, Element } from '@stencil/core';

export type uaiNavbarOrientation = 'horizontal' | 'vertical';
export type uaiNavbarBackground = 'surface-background' | 'surface-contrast' | 'surface-inverse' | 'surface-muted' | 'surface-paper';
export type uaiNavbarJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  tag: 'uai-navbar',
  styleUrl: 'uai-navbar.scss',
  shadow: true,
})
export class UaiNavbar {
  @Element() hostElement: HTMLElement;

  /** Navbar orientation: horizontal or vertical. */
  @Prop() orientation?: uaiNavbarOrientation = 'vertical';

  /** Background surface color. */
  @Prop() backgroundColor?: uaiNavbarBackground = 'surface-paper';

  /** Alignment for navbar content. */
  @Prop() justifyContent?: uaiNavbarJustifyContent = 'space-between';

  /** Attribute used to identify the component in tests. */
  @Prop() dataTest?: string = null;

  render() {
    return (
      <Host class={{ [`${this.orientation}`]: true }}>
        <div
          class={{
            navbar: true,
            [`navbar__justify-content__${this.justifyContent}`]: true,
            [`navbar__orientation__${this.orientation}`]: true,
            [`navbar__background-color__${this.backgroundColor}`]: true,
          }}
          data-test={this.dataTest}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
