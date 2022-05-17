import { Component, State, h, Method, Watch } from '@stencil/core';

@Component({
  tag: 'bds-accordion-body',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionBody {
  private container?: HTMLElement = null;

  @State() isOpen?: boolean = false;
  @State() heightContainer?: number;
  @State() numberElement?: number = null;

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  @Watch('isOpen')
  isOpenChanged(): void {
    this.heightContainer = this.isOpen ? this.container.offsetHeight : 0;
  }

  private refContainer = (el: HTMLElement): void => {
    this.container = el;
  };

  render() {
    return (
      <div class="accordion_body" style={{ height: `${this.heightContainer}px` }}>
        <div class="container" ref={(el) => this.refContainer(el)}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
