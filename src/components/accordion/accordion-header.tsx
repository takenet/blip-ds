import { Component, State, h, Prop, Element, Method } from '@stencil/core';

@Component({
  tag: 'bds-accordion-header',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionHeader {
  private accGroup?: HTMLBdsAccordionGroupElement = null;
  private accNextBody?: HTMLBdsAccordionBodyElement = null;

  @Element() private element: HTMLElement;

  @State() isOpen?: boolean = false;

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

  @Method()
  async close() {
    this.isOpen = false;
  }

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }

  componentWillRender() {
    this.accGroup = this.element.parentElement as HTMLBdsAccordionGroupElement;
    this.accNextBody = this.element.nextElementSibling as HTMLBdsAccordionBodyElement;
  }

  private toggle = (): void => {
    this.isOpen = !this.isOpen;
    this.accNextBody?.toggle();
    this.accGroup?.closeAll(this.numberElement);
  };

  render() {
    return (
      <div onClick={this.toggle} class={{ accordion_header: true }}>
        {this.avatarName || this.avatarThumb ? (
          <bds-avatar name={this.avatarName} thumbnail={this.avatarThumb} size="extra-small"></bds-avatar>
        ) : (
          this.icon && <bds-icon size="x-large" name="tag" color="inherit"></bds-icon>
        )}
        {this.accordionTitle && (
          <bds-typo bold="bold" variant="fs-16">
            {this.accordionTitle}
          </bds-typo>
        )}
        <slot></slot>
        {this.accNextBody && (
          <bds-icon
            class={{
              accButton: true,
              accButton__isopen: this.isOpen,
            }}
            size="x-large"
            name="arrow-down"
            color="inherit"
            tabindex="0"
            onKeyPress={this.toggle}
          ></bds-icon>
        )}
      </div>
    );
  }
}
