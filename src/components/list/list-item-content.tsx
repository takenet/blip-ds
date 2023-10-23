import { Component, h, Host, Element, Prop } from '@stencil/core';
import { direction, justifyContent, flexWrap, alignItems, gap } from '../grid/grid-interface';

@Component({
  tag: 'bds-list-item-content',
  styleUrl: 'list.scss',
  shadow: true,
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
          [`direction--${this.direction}`]: true,
          [`justify_content--${this.justifyContent}`]: true,
          [`flex_wrap--${this.flexWrap}`]: true,
          [`align_items--${this.alignItems}`]: true,
          [`gap--${this.gap}`]: true,
        }}
      >
        <slot />
      </Host>
    );
  }
}
