import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bds-tab-panel',
  styleUrl: 'tab-panel.scss',
})
export class TabPanel implements ComponentInterface {
  /**
   * Specifies the TabPanel group. Used to link it to the Tab.
   */
  @Prop() group!: string;

  @Prop() active = false;

  render(): HTMLElement {
    return (
      <Host
        class={{
          'bds-tab-panel': true,
          ['bds-tab-panel--selected']: this.active,
        }}
      >
        <bds-typo>
          <slot />
        </bds-typo>
      </Host>
    );
  }
}
