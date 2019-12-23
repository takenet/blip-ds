import { Component, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

export interface TabActivateEvent {
  name: String;
}

@Component({
  tag: 'my-tab',
  styleUrl: 'my-tab.scss',
  shadow: true
})
export class MyTab {
  @Prop() name: string;
  @Prop() active: boolean;
  @Prop() tab: string;
  @Event() tabActivate: EventEmitter<TabActivateEvent>;
  @Listen("click")
  handleClick() {
    this.active = true;
    this.tabActivate.emit({ name: this.name });
  }

  getCSSClass = () => this.active ? "my-tab active" : "my-tab"

  render() {
    return (  
      <div>
      <div class={this.getCSSClass()}>{this.tab}</div>
      {this.active && <div class="tabContainer"><div class="tabContent"><slot></slot></div></div>}
      </div>

    );
  }
}
