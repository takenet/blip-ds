import { Component, ComponentInterface, EventEmitter, Event, h, Prop, Method, Host } from '@stencil/core';
import { BdsTabData } from '../tabs-interface';

@Component({
  tag: 'bds-tab',
  styleUrl: 'tab.scss',
})
export class Tab implements ComponentInterface {
  /**
   * Specifies the Tab group. Used to link it to the TabPanel.
   */
  @Prop() group!: string;

  @Event() bdsSelect: EventEmitter;

  @Prop() active = false;

  @Prop() label!: string;

  @Method()
  async getChild(): Promise<BdsTabData> {
    return {
      active: this.active,
      group: this.group,
    };
  }

  async onClick() {
    this.bdsSelect.emit(await this.getChild());
  }

  render(): HTMLElement {
    const classes = {
      'bds-tab': true,
      'bds-tab--selected': this.active,
    };
    const bold = this.active ? 'semi-bold' : 'regular';

    return (
      <Host class={classes} onClick={this.onClick.bind(this)}>
        <bds-typo variant="fs-16" bold={bold}>
          {this.label}
        </bds-typo>
      </Host>
    );
  }
}
