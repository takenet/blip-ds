import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';
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

  @Listen('onSelect')
  onSelectedTab(event: CustomEvent) {
    const group = this.tabGroup.find((group) => group.header.id === event.detail.id);
    this.selectGroup(group);
  }

  createGroup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tabsHeaderEl = Array.from(this.el.querySelectorAll('bds-tab-header')) as any[];
    this.tabsHeader = tabsHeaderEl.map((el) => el.getChild());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tabsContentEl = Array.from(this.el.querySelectorAll('bds-tab-content')) as any[];
    this.tabsContent = tabsContentEl.map((el) => el.getChild());

    this.tabGroup = this.tabsHeader.map((header) => {
      const content = this.tabsContent.find((content) => content.name === header.name);

      return {
        header: header,
        content: content,
      };
    });
  }

  selectGroup(group: TabGroup) {
    this.tabGroup.forEach((tab) => {
      tab.header.unselect();
      tab.content.unselect();
    });

    group.header.select();
    group.content.select();
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
