import { Component, ComponentInterface, h, Method, Prop, State } from '@stencil/core';
import { BdsTabData } from '../tabs-interface';

@Component({
  tag: 'bds-tab-content',
  styleUrl: 'tab-content.scss',
})
export class TabContent implements ComponentInterface {
  @Prop() name: string;

  @State() active = false;

  @Method()
  async getChild(): Promise<BdsTabData> {
    return {
      active: this.active,
      name: this.name,
    };
  }

  render(): HTMLElement {
    const classes = {
      'bds-tab-content': true,
      'bds-tab-content-selected': this.active,
    };

    return (
      <div class={classes}>
        <slot />
      </div>
    );
  }
}
