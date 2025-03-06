import { Component, Host, Element, State, Prop, Method, Event, EventEmitter, Watch, h } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-nav-tree',
  styleUrl: 'nav-tree.scss',
  shadow: true,
})
export class NavTree {
  private itemsGroup?: HTMLBdsNavTreeGroupElement = null;

  @Element() private element: HTMLElement;

  @State() isOpenAftAnimation?: boolean = false;
  @State() navTreeChild? = null;
  @State() numberElement?: number = null;
  /**
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'single';
  /**
   * A prop for make the nav open.
   */
  @Prop({ mutable: true, reflect: true }) isOpen?: boolean = false;
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
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   * Loading state. Indicates if the component is in a loading state.
   */
  @Prop() loading?: boolean = false;

  /**
   * Disable state. Indicates if the component is disabled.
   */
  @Prop() disable?: boolean = false;
  /**
   * When de open or close of component change, the event are dispache.
   */
  @Event() bdsToogleChange: EventEmitter;

  @Method()
  async toggle() {
    if (!this.disable) {
      this.isOpen = !this.isOpen;
    }
  }

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }
  @Watch('isOpen')
  protected isOpenChanged(value): void {
    this.bdsToogleChange.emit({ value: value, element: this.element });
    if (value) {
      if (this.itemsGroup.collapse == 'single') {
        this.itemsGroup?.closeAll(this.numberElement);
      }
    }
  }

  componentWillLoad() {
    this.itemsGroup =
      this.element.parentElement.tagName == 'BDS-NAV-TREE-GROUP' &&
      (this.element.parentElement as HTMLBdsNavTreeGroupElement);
    this.navTreeChild = this.element.querySelector('bds-nav-tree-item') === null ? false : true;
  }

  private handler = (): void => {
    if (!this.loading && !this.disable) {
      this.isOpen = !this.isOpen;
    }
  };

  private handleKeyDown(event) {
    if (event.key == 'Enter' && !this.disable) {
      this.isOpen = !this.isOpen;
    }
  }

  render() {
    return (
      <Host>
        <div tabindex="0" onKeyDown={this.handleKeyDown.bind(this)} class="focus">
          <div
            class={{
              [`nav_main--disable`]: this.disable,
            }}
          >
            <div
              onClick={this.handler}
              class={{
                nav_main: true,
                nav_main_active: this.isOpen,
                [`nav_main--loading`]: this.loading,
                [`nav_main--disable`]: this.disable,
              }}
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
              <div class="nav_main_text">
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
              <div class="nav_main_content">
                <slot name="header-content"></slot>
              </div>
              {this.navTreeChild && (
                <bds-icon
                  name="arrow-down"
                  class={{
                    [`nav_main_arrow`]: true,
                    [`nav_main_arrow_active`]: this.isOpen,
                    [`nav_main_arrow--loading`]: this.loading,
                  }}
                ></bds-icon>
              )}
            </div>
          </div>
        </div>
        <div
          class={{
            accordion: true,
            accordion_open: this.isOpen && this.navTreeChild,
          }}
        >
          <div class={{ ['container']: true, [`container--disable`]: this.disable }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
