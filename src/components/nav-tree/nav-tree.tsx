import { Component, Host, h, Element, State, Prop, Event, EventEmitter, Watch } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-nav-tree',
  styleUrl: 'nav-tree.scss',
  shadow: true,
})
export class NavTree {
  @Element() private element: HTMLElement;

  @State() isOpenAftAnimation?: boolean = false;
  /**
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'single';
  /**
   * A prop for make the nav open.
   */
  @Prop({ mutable: true, reflect: true }) isOpen?: boolean = false;

  /**
   * When de open or close of component change, the event are dispache.
   */
  @Event() bdsToogleChange: EventEmitter;

  @Watch('isOpen')
  protected isOpenChanged(value): void {
    this.bdsToogleChange.emit({ value: value, element: this.element });
  }

  render() {
    return (
      <Host>
        <div
          class={{
            nav_tree: true,
            nav_tree_open: this.isOpen,
          }}
        >
          <div class="container">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
