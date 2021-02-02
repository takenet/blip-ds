import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bds-expansion-panel-body',
  styleUrl: 'expansion-panel-body.scss',
  shadow: true,
})
export class ExpansionPanelBody implements ComponentInterface {
  @Prop() open?: boolean = false;

  render() {
    return (
      <Host>
        <div class="expansion-content" hidden={this.open}>
          <div class="with-line">
            <slot></slot>
            <div class="circle"></div>
          </div>
        </div>
      </Host>
    );
  }
}
