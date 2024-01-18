import { Component, h, Host, Element, Prop } from '@stencil/core';
import { direction, justifyContent, flexWrap, alignItems, gap } from '../grid/grid-interface';

@Component({
  tag: 'bds-list-item-content',
  styleUrl: 'list.scss',
  scoped: true,
})
export class ListItemContent {
  @Element() hostElement: HTMLElement;

  @Prop() direction?: direction = 'column';
  @Prop() justifyContent?: justifyContent = 'flex-start';
  @Prop() flexWrap?: flexWrap = 'wrap';
  @Prop() alignItems?: alignItems = 'flex-start';
  @Prop() gap?: gap;

  render() {
    return (
      <Host
        class={{
          list_item_content: true,
        }}
      >
        <bds-grid
          direction={this.direction}
          flexWrap={this.flexWrap}
          justifyContent={this.justifyContent}
          alignItems={this.alignItems}
          gap={this.gap}
        >
          <slot />
        </bds-grid>
      </Host>
    );
  }
}
