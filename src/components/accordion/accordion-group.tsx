import { Component, h, Prop, Element, Method } from '@stencil/core';

export type collapses = 'default' | 'multiple';

@Component({
  tag: 'bds-accordion-group',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionGroup {
  private accheaders?: HTMLCollectionOf<HTMLBdsAccordionHeaderElement> = null;
  private accBodies?: HTMLCollectionOf<HTMLBdsAccordionBodyElement> = null;

  @Element() private element: HTMLElement;

  /**
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'default';

  @Method()
  async closeAll(actNumber) {
    if (this.collapse == 'default') {
      for (let i = 0; i < this.accBodies.length; i++) {
        if (actNumber != i) this.accBodies[i].close();
      }
      for (let i = 0; i < this.accheaders.length; i++) {
        if (actNumber != i) this.accheaders[i].close();
      }
    }
  }

  componentWillRender() {
    this.accheaders = this.element.getElementsByTagName(
      'bds-accordion-header'
    ) as HTMLCollectionOf<HTMLBdsAccordionHeaderElement>;
    this.accBodies = this.element.getElementsByTagName(
      'bds-accordion-body'
    ) as HTMLCollectionOf<HTMLBdsAccordionBodyElement>;

    for (let i = 0; i < this.accheaders.length; i++) {
      this.accheaders[i].reciveNumber(i);
      this.accBodies[i].reciveNumber(i);
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
