/* eslint-disable no-console */
import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';
import { BdsTabData, TabGroup } from './tabs-interface';

@Component({
  tag: 'bds-tabs',
  styleUrl: 'tabs.scss',
})
export class Tabs implements ComponentInterface {
  tabsHeader: BdsTabData[];
  tabsContent: BdsTabData[];
  tabGroup: TabGroup[];

  @Prop({ mutable: true }) overflowLeft = false;

  @Element() el!: HTMLElement;

  componentWillLoad() {
    this.createGroup();
    const [group] = this.tabGroup;
    this.selectGroup(group);
  }

  @Listen('bdsSelect')
  onSelectedTab(event: CustomEvent) {
    const group = this.tabGroup.find((group) => group.header.name === event.detail.name);
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
  }

  async resetActiveGroup() {
    for (const group of this.tabGroup) {
      group.content.active = false;
      group.header.active = false;
    }
  }

  render(): HTMLElement {
    return (
      <Host>
        <bds-tab-bar class="bds-tabs-header-container">
          <slot name="header" />
        </bds-tab-bar>
        <div class="bds-tabs-content">
          <slot name="content" />
        </div>
      </Host>
    );
  }
}
