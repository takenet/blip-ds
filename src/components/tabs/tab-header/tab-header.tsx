import { Component, ComponentInterface, EventEmitter, Event, h, Prop, State, Method } from '@stencil/core';
import { BdsTabHeaderData } from '../tabs-interface';

@Component({
  tag: 'bds-tab-header',
  styleUrl: 'tab-header.scss',
})
export class TabHeader implements ComponentInterface {
  id: string = Math.random().toString(36).substr(2, 10);

  @Prop() name: string;

  @Event() bdsSelect: EventEmitter;

  @State() active = false;

  @Method()
  async getChild(): Promise<BdsTabHeaderData> {
    return {
      active: this.active,
      name: this.name,
      id: this.id,
    };
  }

  onClick() {
    // eslint-disable-next-line no-console
    console.log('aaaaaaaaaaaaaa');
    this.bdsSelect.emit(this.getChild());
  }

  render(): HTMLElement {
    const classes = {
      'bds-tab-header': true,
      'bds-tab-header-selected': this.active,
    };

    return (
      <div class={classes} onClick={this.onClick.bind(this)}>
        <slot />
      </div>
    );
  }
}
