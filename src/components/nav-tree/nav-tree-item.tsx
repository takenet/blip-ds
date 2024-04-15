import { Component, Host, h, Element, Prop, Method, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'bds-nav-tree-item',
  styleUrl: 'nav-tree.scss',
  shadow: true,
})
export class NavTree {
  private navTreeParent?: HTMLBdsNavTreeElement = null;
  private navTreeChild?: HTMLBdsNavTreeElement = null;
  private itensElement?: HTMLCollectionOf<HTMLBdsNavTreeItemElement> = null;

  @Element() private element: HTMLElement;

  /**
   * Text. Used to insert a text in the display item.
   */
  @Prop() text?: string = null;
  /**
   * SecondaryText. Used to insert a secondaryText in the display item.
   */
  @Prop() secondaryText?: string = null;
  /**
   * Active. Used to define when the item is highlighted.
   */
  @Prop({ mutable: true, reflect: true }) active?: boolean = false;

  /**
   * When de activation of component change, the event are dispache.
   */
  @Event() bdsActiveChange: EventEmitter;

  @Method()
  async toggle() {
    this.active = !this.active;
  }

  @Watch('active')
  protected activeChanged(value): void {
    this.bdsActiveChange.emit({ value: value, element: this.element });
    if (this.navTreeChild) this.navTreeChild.isOpen = value;
  }

  componentWillLoad() {
    this.navTreeParent =
      this.element.parentElement.tagName == 'BDS-NAV-TREE' && (this.element.parentElement as HTMLBdsNavTreeElement);
    this.navTreeChild = this.element.querySelector('bds-nav-tree');
  }
  componentWillRender() {
    this.itensElement = this.navTreeParent.getElementsByTagName(
      'bds-nav-tree-item'
    ) as HTMLCollectionOf<HTMLBdsNavTreeItemElement>;
  }

  private handler = () => {
    if (this.navTreeParent.collapse == 'single') {
      for (let i = 0; i < this.itensElement.length; i++) {
        if (this.itensElement[i] != this.element) this.itensElement[i].active = false;
      }
    }
    this.toggle();
  };

  render() {
    return (
      <Host>
        <div
          class={{
            nav_tree_item: true,
            nav_tree_item_active: this.active,
          }}
          onClick={() => this.handler()}
        >
          <div class="nav_tree_item_content">
            {this.text && (
              <bds-typo
                class="title-item"
                variant="fs-14"
                tag="span"
                line-height="small"
                bold={this.active ? 'bold' : 'regular'}
              >
                {this.text}
              </bds-typo>
            )}
            {this.secondaryText && (
              <bds-typo class="subtitle-item" variant="fs-12" line-height="small" tag="span" margin={false}>
                {this.secondaryText}
              </bds-typo>
            )}
          </div>
          <div class="nav_tree_item_slot">
            <slot name="content"></slot>
          </div>
          {this.navTreeChild && (
            <bds-icon class={{ [`icon-arrow`]: true, [`icon-arrow-active`]: this.active }} name="arrow-down"></bds-icon>
          )}
        </div>
        <slot name="nav-tree"></slot>
      </Host>
    );
  }
}
