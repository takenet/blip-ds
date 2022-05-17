import { Component, h, Element, Prop, Method } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-accordion-group',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionGroup {
  private accordionElement?: HTMLCollectionOf<HTMLBdsAccordionElement> = null;

  @Element() private element: HTMLElement;
  /**
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'single';

  @Method()
  async closeAll(actNumber) {
    if (this.collapse == 'single') {
      for (let i = 0; i < this.accordionElement.length; i++) {
        if (actNumber != i) this.accordionElement[i].close();
      }
    }
  }

  componentWillRender() {
    this.accordionElement = this.element.getElementsByTagName(
      'bds-accordion'
    ) as HTMLCollectionOf<HTMLBdsAccordionElement>;

    for (let i = 0; i < this.accordionElement.length; i++) {
      this.accordionElement[i].reciveNumber(i);
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
