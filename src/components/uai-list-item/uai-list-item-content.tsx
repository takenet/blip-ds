import { Component, Element, Host, Prop, h } from '@stencil/core';
import type { alignItems, direction, flexWrap, gap, justifyContent } from '../grid/grid-interface';

/**
 * Flex wrapper for custom content inside a uai-list-item slot. Use to stack or align extra content; pair with
 * the content-area or action-area slots; avoid it for whole page layouts (use uai-grid).
 *
 * @slot - Content laid out by the inner uai-grid.
 */
@Component({
  tag: 'uai-list-item-content',
  styleUrl: 'uai-list-item-content.scss',
  scoped: true,
})
export class UaiListItemContent {
  @Element() hostElement: HTMLElement;

  /** Flex direction of the content. Use column for stacked text; pair with gap. Avoid reverse directions for reading order. */
  @Prop() direction?: direction = 'column';

  /** Main-axis alignment. Use flex-start by default; pair with direction. Avoid space-around in narrow rows. */
  @Prop() justifyContent?: justifyContent = 'flex-start';

  /** Wrapping of the content. Use wrap by default; pair with gap. Avoid nowrap with long content. */
  @Prop() flexWrap?: flexWrap = 'wrap';

  /** Cross-axis alignment. Use flex-start by default; pair with direction. Avoid stretch with icons. */
  @Prop() alignItems?: alignItems = 'flex-start';

  /** Space between children, in the uai-grid gap scale. Use for separated content; pair with direction. Avoid margins on the children. */
  @Prop() gap?: gap;

  render() {
    return (
      <Host class={{ list_item_content: true }}>
        <uai-grid
          direction={this.direction}
          flexWrap={this.flexWrap}
          justifyContent={this.justifyContent}
          alignItems={this.alignItems}
          gap={this.gap}
        >
          <slot />
        </uai-grid>
      </Host>
    );
  }
}
