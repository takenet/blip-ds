import { Component, h, Element, Prop, EventEmitter, Event, Method } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-accordion-group',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionGroup {
  private accordionsElement?: HTMLCollectionOf<HTMLBdsAccordionElement> = null;

  @Element() private element: HTMLElement;
  /**
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'single';

  /**
   * bdsAccordionCloseAll. Event to return value when accordion is closed.
   */
  @Event() bdsAccordionCloseAll?: EventEmitter;

  @Method()
  async closeAll(actNumber) {
    this.bdsAccordionCloseAll.emit();
    for (let i = 0; i < this.accordionsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i) this.accordionsElement[i].close();
      } else {
        this.accordionsElement[i].close();
      }
    }
  }

  componentWillRender() {
    this.accordionsElement = this.element.getElementsByTagName(
      'bds-accordion'
    ) as HTMLCollectionOf<HTMLBdsAccordionElement>;

    for (let i = 0; i < this.accordionsElement.length; i++) {
      this.accordionsElement[i].reciveNumber(i);
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
