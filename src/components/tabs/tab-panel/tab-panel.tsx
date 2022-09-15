import { Component, ComponentInterface, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'bds-tab-panel',
  styleUrl: 'tab-panel.scss',
})
export class TabPanel implements ComponentInterface {
  /**
   * Specifies the TabPanel group. Used to link it to the Tab.
   */
  @Prop() group!: string;

  /**
   * State to control if a tab panel is current active
   */
  @State() isActive = false;

  @Listen('bdsTabChange', { target: 'body' })
  @Listen('bdsTabInit', { target: 'body' })
  handleTabChange(event: CustomEvent) {
    this.isActive = event.detail == this.group;
  }

  render(): HTMLElement {
    return (
      <Host
        class={{
          'bds-tab-panel': true,
          ['bds-tab-panel--selected']: this.isActive,
        }}
      >
        <bds-typo>
          <slot />
        </bds-typo>
      </Host>
    );
  }
}
