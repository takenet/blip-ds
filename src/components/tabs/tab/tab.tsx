import { Component, ComponentInterface, EventEmitter, Event, h, Prop, Host, Listen, State } from '@stencil/core';

@Component({
  tag: 'bds-tab',
  styleUrl: 'tab.scss',
})
export class Tab implements ComponentInterface {
  /**
   * Specifies the Tab group. Used to link it to the TabPanel.
   */
  @Prop() group!: string;

  @Event() bdsSelectTab: EventEmitter;

  @Prop() label!: string;

  @Prop() active = false;

  @State() isActive = this.active;

  @Listen('bdsSelectTab', { target: 'body' })
  onSelectedTab(event: CustomEvent) {
    this.isActive = event.detail == this.group;
  }

  async onClick() {
    this.bdsSelectTab.emit(await this.group);
  }

  render(): HTMLElement {
    const bold = this.isActive ? 'bold' : 'regular';
    return (
      <Host
        class={{
          'bds-tab': true,
          ['bds-tab--selected']: this.isActive,
        }}
        onClick={this.onClick.bind(this)}
      >
        <div class="bds-tab__text">
          <bds-typo variant="fs-16" bold={bold}>
            {this.label}
          </bds-typo>
        </div>
      </Host>
    );
  }
}
