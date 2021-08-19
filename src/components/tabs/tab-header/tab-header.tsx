import { Component, ComponentInterface, EventEmitter, Event, h, Prop, Method } from '@stencil/core';
import { BdsTabData } from '../tabs-interface';

@Component({
  tag: 'bds-tab-header',
  styleUrl: 'tab-header.scss',
})
export class TabHeader implements ComponentInterface {
  @Prop() name: string;

  @Event() bdsSelect: EventEmitter;

  @Prop() active = false;

  @Prop() label!: string;

  @Method()
  async getChild(): Promise<BdsTabData> {
    return {
      active: this.active,
      name: this.name,
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
    const bold = this.active ? 'semi-bold' : 'regular';

    return (
      <div class={classes} onClick={this.onClick.bind(this)}>
        <bds-typo variant="fs-16" bold={bold}>
          {this.label}
        </bds-typo>
      </div>
    );
  }
}
