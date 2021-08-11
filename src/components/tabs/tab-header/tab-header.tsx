import { Component, ComponentInterface, EventEmitter, Event, h, Prop, Method } from '@stencil/core';
import { BdsTabHeaderData } from '../tabs-interface';

@Component({
  tag: 'bds-tab-header',
  styleUrl: 'tab-header.scss',
})
export class TabHeader implements ComponentInterface {
  @Prop() id: string = Math.random().toString(36).substr(2, 10);

  @Prop() name: string;

  @Event() bdsSelect: EventEmitter;

  @Prop() active = false;

  @Method()
  async getChild(): Promise<BdsTabHeaderData> {
    return {
      active: this.active,
      name: this.name,
      id: this.id,
    };
  }

  async onClick() {
    this.bdsSelect.emit(await this.getChild());
  }

  render(): HTMLElement {
    const classes = {
      'bds-tab-header': true,
      'bds-tab-header-selected': this.active,
    };
    const bold = this.active ? 'bold' : 'regular';
    /*
      $font-weight-regular: 400;
      $font-weight-semi-bold: 600;
      $font-weight-bold: 700;
    */

    return (
      <div class={classes} onClick={this.onClick.bind(this)}>
        <bds-typo variant="fs-16" bold={bold}>
          <slot />
        </bds-typo>
      </div>
    );
  }
}
