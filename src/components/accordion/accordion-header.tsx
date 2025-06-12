import { Component, State, h, Prop, Element, Method, Watch } from '@stencil/core';

@Component({
  tag: 'bds-accordion-header',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionHeader {
  private accordionElement?: HTMLBdsAccordionElement = null;

  @Element() private element: HTMLElement;
  @State() isOpen?: boolean = false;
  @State() btToggleIsfocus?: boolean = false;
  @State() numberElement?: number = null;
  @State() bdsAccordionGroup: HTMLBdsAccordionGroupElement;
  @State() sizes: 'small' | 'medium' | 'large' | 'x-large';

  /**
   * Accordion Title. Used to add title in header accordion.
   */
  @Prop() accordionTitle?: string = null;

  /**
   * Icon. Used to add icon in header accordion.
   */
  @Prop() icon?: string = null;

  /**
   * Avatar Name. Used to add avatar in header accordion.
   */
  @Prop() avatarName?: string = null;

  /**
   * Avatar Thumb. Used to add avatar in header accordion.
   */
  @Prop() avatarThumb?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;
  /**
   * Size. Used to define the size of the accordion header.
   */
  @Prop({ mutable: true }) size?: string = 'large';

  /**
   * Arrow Align. Used to define the alignment of the arrow icon.
   */
  @Prop({ mutable: true }) arrowAlign?: string = 'right';

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  componentWillRender() {
    this.accordionElement = this.element.parentElement as HTMLBdsAccordionElement;
  }

  componentWillLoad() {
    this.bdsAccordionGroup = this.element.closest('bds-accordion-group');
    if (this.bdsAccordionGroup) {
      const size = this.bdsAccordionGroup.getAttribute('size');
      const arrowAlign = this.bdsAccordionGroup.getAttribute('arrow-align');
      if (arrowAlign) {
        this.arrowAlign = arrowAlign;
      }
      if (size) {
        this.size = size;
      }
      this.handlePropsChange();
    }
  }

  @Watch('size')
  @Watch('arrowAlign')
    handlePropsChange() {
      this.sizes = (this.size === 'small' ? 'medium' : this.size === 'medium' ? 'large' : 'x-large') as
      | 'small'
      | 'medium'
      | 'large'
      | 'x-large';
    };

  private toggleHeader = (): void => {
    if (this.isOpen) {
      this.accordionElement?.close();
    } else {
      this.accordionElement?.open();
    }
  };

  handleKeyDown(event) {
    if (event.key == 'Enter') {
      if (this.isOpen) {
        this.accordionElement?.close();
      } else {
        this.accordionElement?.open();
      }
    }
  }

  render() {
    return (
      <div
        onClick={this.toggleHeader}
        class={{ accordion_header: true, [`accordion_header-size--${this.size}`]: true }}
        data-test={this.dataTest}
      >
        {this.arrowAlign === 'left' && (
          <bds-icon
            class={{
              accButton: true,
              accButton__isopen: this.isOpen,
              accButton__isfocus: this.btToggleIsfocus,
            }}
            size={this.sizes}
            name="arrow-down"
            color="inherit"
            tabindex="0"
            onKeyDown={this.handleKeyDown.bind(this)}
          ></bds-icon>
        )}
        {this.avatarName || this.avatarThumb ? (
          <bds-avatar name={this.avatarName} thumbnail={this.avatarThumb} size="extra-small"></bds-avatar>
        ) : (
          this.icon && <bds-icon size={this.sizes} name={this.icon} color="inherit"></bds-icon>
        )}
        {this.accordionTitle && (
          <bds-typo bold="bold" variant="fs-16" line-height="double">
            {this.accordionTitle}
          </bds-typo>
        )}
        <slot></slot>
        {this.arrowAlign === 'right' && (
          <bds-icon
            class={{
              accButton: true,
              accButton__isopen: this.isOpen,
              accButton__isfocus: this.btToggleIsfocus,
            }}
            size={this.sizes}
            name="arrow-down"
            color="inherit"
            tabindex="0"
            onKeyDown={this.handleKeyDown.bind(this)}
          ></bds-icon>
        )}
      </div>
    );
  }
}
