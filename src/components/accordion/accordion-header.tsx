import { Component, State, h, Prop, Element, Method } from '@stencil/core';

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
        class={{ accordion_header: true }} 
        data-test={this.dataTest}
        role="button"
        aria-expanded={this.isOpen ? 'true' : 'false'}
        tabindex="0"
        onKeyDown={this.handleKeyDown.bind(this)}
      >
        {this.avatarName || this.avatarThumb ? (
          <bds-avatar name={this.avatarName} thumbnail={this.avatarThumb} size="extra-small"></bds-avatar>
        ) : (
          this.icon && <bds-icon size="x-large" name={this.icon} color="inherit" aria-hidden="true"></bds-icon>
        )}
        {this.accordionTitle && (
          <bds-typo bold="bold" variant="fs-16" line-height="double">
            {this.accordionTitle}
          </bds-typo>
        )}
        <slot></slot>
        <bds-icon
          class={{
            accButton: true,
            accButton__isopen: this.isOpen,
            accButton__isfocus: this.btToggleIsfocus,
          }}
          size="x-large"
          name="arrow-down"
          color="inherit"
          aria-hidden="true"
        ></bds-icon>
      </div>
    );
  }
}
