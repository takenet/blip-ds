import { Component, h, State, Element, Method, EventEmitter, Event, Watch, Prop } from '@stencil/core';

@Component({
  tag: 'bds-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  private accGroup?: HTMLBdsAccordionGroupElement = null;
  private accheaders?: HTMLBdsAccordionHeaderElement = null;
  private accBodies?: HTMLBdsAccordionBodyElement = null;

  @Element() private element: HTMLElement;

  @State() isOpen?: boolean = false;
  @State() numberElement?: number = null;
  @State() condition?: boolean = false;

  @Event() bdsToggle?: EventEmitter;
  @Event() bdsAccordionOpen?: EventEmitter;
  @Event() bdsAccordionClose?: EventEmitter;

  @Prop() startOpen?: boolean = false;
  @Prop() divisor?: boolean = true;

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
    this.bdsToggle.emit({ value: this.isOpen });
  }

  @Method()
  async open() {
    this.accheaders?.open();
    this.accBodies?.open();
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.accheaders?.close();
    this.accBodies?.close();
    this.isOpen = false;
  }

  @Method()
  async notStart() {
    this.startOpen = false;
  }

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }

  @Watch('isOpen')
  isOpenChanged(value): void {
    if (value) {
      if (this.accGroup.collapse == 'single' && this.condition === false) {
        this.accGroup?.closeAll(this.numberElement);
      }
      this.accheaders?.open();
      this.accBodies?.open();
      this.bdsAccordionOpen.emit();
    } else {
      this.accheaders?.close();
      this.accBodies?.close();
      this.bdsAccordionClose.emit();
    }
    this.condition = false;
  }

  @Watch('divisor')
  divisorChanged(newValue: boolean): void {
    const accordionBody = this.element.querySelector('bds-accordion-body') as HTMLBdsAccordionBodyElement;
    if (accordionBody) {
      (accordionBody as any).divisor(newValue);
    }
  }

  componentWillLoad() {
    this.accGroup =
      this.element.parentElement.tagName == 'BDS-ACCORDION-GROUP' &&
      (this.element.parentElement as HTMLBdsAccordionGroupElement);
    this.accheaders = this.element.children[0] as HTMLBdsAccordionHeaderElement;
    this.accBodies = this.element.children[1] as HTMLBdsAccordionBodyElement;

    // Passar a prop divisor para o AccordionBody
    const accordionBody = this.element.querySelector('bds-accordion-body') as HTMLBdsAccordionBodyElement;
    if (accordionBody) {
      (accordionBody as any).divisor(this.divisor);
    }

    if (this.startOpen === true) {
      this.condition = true;
      this.isOpen = true;
    }
  }

  render() {
    return (
      <div class="accordion_group">
        <slot></slot>
      </div>
    );
  }
}
