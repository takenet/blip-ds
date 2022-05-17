import { Component, h, State, Element, Method, Watch } from '@stencil/core';

@Component({
  tag: 'bds-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionGroup {
  private accGroup?: HTMLBdsAccordionGroupElement = null;
  private accheaders?: HTMLBdsAccordionHeaderElement = null;
  private accBodies?: HTMLBdsAccordionBodyElement = null;

  @Element() private element: HTMLElement;

  @State() isOpen?: boolean = false;
  @State() numberElement?: number = null;

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  @Method()
  async close() {
    this.accheaders?.close();
    this.accBodies?.close();
  }

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }

  @Watch('isOpen')
  isOpenChanged(): void {
    this.accheaders?.toggle();
    this.accBodies?.toggle();
    if (this.accGroup) this.accGroup?.closeAll(this.numberElement);
  }

  componentWillRender() {
    this.accGroup =
      this.element.parentElement.tagName == 'BDS-ACCORDION-GROUP' &&
      (this.element.parentElement as HTMLBdsAccordionGroupElement);
    this.accheaders = this.element.children[0] as HTMLBdsAccordionHeaderElement;
    this.accBodies = this.element.children[1] as HTMLBdsAccordionBodyElement;
  }

  render() {
    return (
      <div class="accordion_group">
        <slot></slot>
      </div>
    );
  }
}
