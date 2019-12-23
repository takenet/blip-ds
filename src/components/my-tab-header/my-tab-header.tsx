import { Component, h, Listen, Element, Prop, Watch } from '@stencil/core';

import {  TabActivateEvent } from '../my-tab/my-tab';

@Component({
  tag: 'my-tab-header',
  styleUrl: 'my-tab-header.scss',
  shadow: false
})
export class MyTabHeader {
  @Prop({ mutable: true }) activeTab: string;
  @Watch("activeTab")
  handleActiveTabChange(newValue: string) {
    const headings = this.getHeadings();
    
    headings.forEach(heading => {
      if (heading.name === newValue) {
        heading.actve = true;
      } else {
        heading.active = false;
      }
    })
  }

  @Element() element;

  @Listen('tabActivate')
  handleTabActivate(e: CustomEvent<TabActivateEvent>) {
    this.activeTab = String(e.detail.name);
  }

  componentDidLoad() {
    if (this.activeTab === undefined) {
      const headings = this.getHeadings();
      const haveActiveTab = headings.filter(heading => heading.active).length > 0;
  
      if (!haveActiveTab && headings.length > 0) {
        this.activeTab = headings[0].name;
      }
    } else {
      this.handleActiveTabChange(this.activeTab);
    } 

  }

  getHeadings = () => (
    [].slice.call(this.element.querySelector(".my-tabs-container").children).filter(child => child.tagName.toLowerCase() === "my-tab")
  )
  render() {
    return (
      <div class="my-tabs-container">
        <slot></slot>
      </div>
    );
  }
}
