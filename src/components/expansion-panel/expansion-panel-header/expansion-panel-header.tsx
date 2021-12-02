import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'bds-expansion-panel-header',
  styleUrl: 'expansion-panel-header.scss',
  shadow: true,
})
export class ExpansionPanelHeader implements ComponentInterface {
  @Prop() text?: string;

  render() {
    return (
      <Host>
        <div class="header">
          <slot />
        </div>
        <bds-typo variant="fs-12">
          {this.text}
        </bds-typo>
      </Host>
    );
  }
}
