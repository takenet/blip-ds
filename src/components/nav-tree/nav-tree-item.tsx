import { Component, Host, h, Element, Prop, Method, Event, EventEmitter, Watch } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-nav-tree-item',
  styleUrl: 'nav-tree.scss',
  shadow: true,
})
export class NavTreeItem {
  private navTreeParent?: HTMLBdsNavTreeElement | HTMLBdsNavTreeItemElement = null;
  private navTreeChild?: HTMLBdsNavTreeItemElement = null;
  private itensElement?: HTMLCollectionOf<HTMLBdsNavTreeItemElement> = null;

  @Element() private element: HTMLElement;
  /**
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'single';
  /**
   * Icon. Used to add icon in list item.
   */
  @Prop() icon?: string = null;
  /**
   * Text. Used to insert a text in the display item.
   */
  @Prop() text!: string;
  /**
   * SecondaryText. Used to insert a secondaryText in the display item.
   */
  @Prop() secondaryText?: string = null;
  /**
   * Active. Used to define when the item is highlighted.
   */
  @Prop({ mutable: true, reflect: true }) isOpen?: boolean = false;
  /**
   * Loading state. Indicates if the component is in a loading state.
   */
  @Prop() loading?: boolean = false;

  /**
   * Disable state. Indicates if the component is disabled.
   */
  @Prop() disable?: boolean = false;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   * When de activation of component change, the event are dispache.
   */
  @Event() bdsToogleChange: EventEmitter;

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  @Watch('isOpen')
  protected isOpenChanged(value): void {
    this.bdsToogleChange.emit({ value: value, element: this.element });
    // if (this.navTreeChild) this.navTreeChild.isOpen = value;
  }

  componentWillLoad() {
    this.navTreeParent =
      (this.element.parentElement.tagName == 'BDS-NAV-TREE' && (this.element.parentElement as HTMLBdsNavTreeElement)) ||
      ('BDS-NAV-TREE-ITEM' && (this.element.parentElement as HTMLBdsNavTreeItemElement));
    this.navTreeChild = this.element.querySelector('bds-nav-tree-item');
  }
  componentWillRender() {
    this.itensElement = this.navTreeParent.getElementsByTagName(
      'bds-nav-tree-item',
    ) as HTMLCollectionOf<HTMLBdsNavTreeItemElement>;
  }

  private handler = () => {
    if (!this.loading && !this.disable) {
      if (this.navTreeParent.collapse == 'single') {
        for (let i = 0; i < this.itensElement.length; i++) {
          if (this.itensElement[i] != this.element) this.itensElement[i].isOpen = false;
        }
      }
      this.toggle();
    }
  };

  private handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.handler();
    }
  }

  render() {
    return (
      <Host>
        <div tabindex="0" onKeyDown={this.handleKeyDown.bind(this)} class="focus">
          <div
            class={{
              nav_tree_item: true,
              nav_tree_item_active: this.isOpen,
              nav_tree_item_button: !this.navTreeChild,
              nav_tree_item_button_active: !this.navTreeChild && this.isOpen,
              [`nav_tree_item--loading`]: this.loading,
              [`nav_tree_item--disable`]: this.disable,
            }}
            onClick={() => this.handler()}
            data-test={this.dataTest}
            aria-label={this.text + (this.secondaryText && `: ${this.secondaryText}`)}
          >
            {this.loading ? (
              <bds-loading-spinner size="extra-small"></bds-loading-spinner>
            ) : this.icon ? (
              <bds-icon
                class={{
                  [`icon-item`]: true,
                  [`icon-item-active`]: this.isOpen,
                }}
                size="medium"
                name={this.icon}
                color="inherit"
                theme="outline"
              ></bds-icon>
            ) : (
              ''
            )}
            <div class="nav_tree_item_content">
              {this.text && (
                <bds-typo
                  class={{ ['title-item']: true, [`title-item--loading`]: this.loading }}
                  variant="fs-14"
                  tag="span"
                  line-height="small"
                  bold={this.isOpen ? 'bold' : 'semi-bold'}
                >
                  {this.text}
                </bds-typo>
              )}
              {this.secondaryText && (
                <bds-typo
                  class={{ ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }}
                  variant="fs-12"
                  line-height="small"
                  tag="span"
                  margin={false}
                >
                  {this.secondaryText}
                </bds-typo>
              )}
            </div>
            <div class="nav_tree_item_slot">
              <slot name="header-content"></slot>
            </div>
            {this.navTreeChild && (
              <bds-icon
                class={{
                  [`nav_main_arrow`]: true,
                  [`nav_main_arrow_active`]: this.isOpen,
                  [`nav_main_arrow--loading`]: this.loading,
                }}
                name="arrow-down"
              ></bds-icon>
            )}
          </div>
        </div>
        {this.navTreeChild && (
          <div
            class={{
              accordion: true,
              accordion_open: this.isOpen,
            }}
          >
            <div class="container">
              <slot></slot>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
