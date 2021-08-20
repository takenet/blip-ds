import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { BdsTabData } from '../tabs-interface';

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

  @Method()
  async getChild(): Promise<BdsTabData> {
    return {
      active: this.active,
      group: this.group,
    };
  }

  render(): HTMLElement {
    const classes = {
      'bds-tab-panel': true,
      'bds-tab-panel-selected': this.active,
    };

    return (
      <div class={classes}>
        <bds-typo>
          <slot />
        </bds-typo>
      </div>
    );
  }
}
