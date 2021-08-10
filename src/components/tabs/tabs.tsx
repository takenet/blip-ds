/* eslint-disable no-console */
import { Component, ComponentInterface, Element, h, Host, Listen, Method, Prop } from '@stencil/core';
import { BdsTabData, BdsTabHeaderData, TabGroup } from './tabs-interface';

@Component({
  tag: 'bds-tabs',
  styleUrl: 'tabs.scss',
})
export class Tabs implements ComponentInterface {
  @Prop() tabsHeader: BdsTabHeaderData[];
  @Prop() tabsContent: BdsTabData[];
  @Prop() tabGroup: TabGroup[];

  @Element() el!: HTMLElement;

  componentDidLoad() {
    this.createGroup();

    const [group] = this.tabGroup;
    this.selectGroup(group);
  }

  @Listen('bdsSelect')
  onSelectedTab(event: CustomEvent) {
    console.warn({ event });
    const group = this.tabGroup.find((group) => group.header.id === event.detail.id);
    this.selectGroup(group);
  }

  createGroup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.tabsHeader = Array.from(this.el.querySelectorAll('bds-tab-header')) as any[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.tabsContent = Array.from(this.el.querySelectorAll('bds-tab-content')) as any[];

    this.tabGroup = this.tabsHeader.map((header) => {
      const content = this.tabsContent.find((content) => content.name === header.name);

      return {
        header: header,
        content: content,
      };
    });
  }

  async selectGroup(group: TabGroup) {
    await this.resetActiveGroup();
    group.header.active = true;
    group.content.active = true;

    console.log('enabled', group.header.active, group.content.active);
  }

  @Method()
  public async resetActiveGroup() {
    for (const group of this.tabGroup) {
      group.content.active = false;
      group.header.active = false;

      console.log('disabled', { header: group.header.active, content: group.content.active });
    }
  }

  render(): HTMLElement {
    return (
      <Host>
        <div class="bds-tabs-header">
          <slot name="header" />
        </div>
        <div class="bds-tabs-content">
          <slot name="content" />
        </div>
      </Host>
    );
  }
}
