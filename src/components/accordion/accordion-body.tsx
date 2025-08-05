import { Component, State, h, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'bds-accordion-body',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionBody {
  private container?: HTMLElement = null;

  @State() isOpen?: boolean = false;
  @State() isOpenAftAnimation?: boolean = false;
  @State() heightContainer?: number;
  @State() numberElement?: number = null;
  @State() hasDivisor?: boolean = true;

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

  @Method()
  async divisor(valor) {
    this.hasDivisor = valor;
  }

  @Watch('isOpen')
  isOpenChanged(): void {
    this.heightContainer = this.isOpen ? (this.container?.offsetHeight || 0) : 0;
    if (this.isOpen) {
      setTimeout(() => {
        this.isOpenAftAnimation = true;
      }, 500);
    } else {
      this.isOpenAftAnimation = false;
    }
  }

  private refContainer = (el: HTMLElement): void => {
    this.container = el;
  };

  render() {
    return (
      <div
        class={{
          accordion_body: true,
          accordion_body_divisor: this.hasDivisor,
          accordion_body_isOpen: this.isOpenAftAnimation,
        }}
        style={{ height: `${this.heightContainer}px` }}
        data-test={this.dataTest}
      >
        <div class="container" ref={(el) => this.refContainer(el)}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
