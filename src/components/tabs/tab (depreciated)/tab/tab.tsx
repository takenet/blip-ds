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

  /**
   * The text to be shown at the Tab
   */
  @Prop() label!: string;

  /**
   * Prop to control externally if a tab will be active by default
   */
  @Prop() active = false;

  /**
   * State to control if a tab is current active
   */
  @State() isActive = false;

  /**
   * Event to emmit when the active tab should be updated
   */
  @Event() bdsTabChange: EventEmitter;

  @Listen('bdsTabChange', { target: 'body' })
  @Listen('bdsTabInit', { target: 'body' })
  handleTabChange(event: CustomEvent) {
    this.isActive = event.detail == this.group;
  }

  async onClick() {
    this.bdsTabChange.emit(this.group);
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
