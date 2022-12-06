import { Component, h, State, Element, Method, EventEmitter, Event, Watch } from '@stencil/core';

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

  /**
   * bdsToggle. Event to return value of toggle.
   */
  @Event() bdsToggle?: EventEmitter;

  /**
   * bdsAccordionOpen. Event to return value when accordion is open.
   */
  @Event() bdsAccordionOpen?: EventEmitter;

  /**
   * bdsAccordionOpen. Event to return value when accordion is closed.
   */
  @Event() bdsAccordionClose?: EventEmitter;

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
    this.accheaders?.close();
    this.accBodies?.close();
  }

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }

  @Watch('isOpen')
  isOpenChanged(value): void {
    this.accheaders?.toggle();
    this.accBodies?.toggle();
    this.bdsToggle.emit({ value: value });
    if (value) {
      this.bdsAccordionOpen.emit();
    } else {
      this.bdsAccordionClose.emit();
    }
    if (this.accGroup.collapse == 'single') this.accGroup?.closeAll(this.numberElement);
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
