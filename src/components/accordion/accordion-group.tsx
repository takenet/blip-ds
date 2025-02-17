import { Component, h, Element, Prop, EventEmitter, Event, Method, Watch } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-accordion-group',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionGroup {
  private accordionsElement?: HTMLCollectionOf<HTMLBdsAccordionElement> = null;

  @Element() private element: HTMLElement;
  @Prop() collapse?: collapses = 'single';
  @Prop() divisor?: boolean = true;

  @Event() bdsAccordionCloseAll?: EventEmitter;
  @Event() bdsAccordionOpenAll?: EventEmitter;

  @Method()
  async closeAll(actNumber?) {
    this.bdsAccordionCloseAll.emit();
    for (let i = 0; i < this.accordionsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i) this.accordionsElement[i].close();
      } else {
        this.accordionsElement[i].close();
      }
    }
  }

  @Method()
  async openAll(actNumber?) {
    this.bdsAccordionOpenAll.emit();
    for (let i = 0; i < this.accordionsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i) this.accordionsElement[i].open();
      } else {
        this.accordionsElement[i].open();
      }
    }
  }

  @Watch('divisor')
  divisorChanged(newValue: boolean): void {
    if (this.accordionsElement) {
      for (let i = 0; i < this.accordionsElement.length; i++) {
        this.accordionsElement[i].divisor = newValue;  // Atualiza divisor nos filhos
      }
    }
  }

  componentWillRender() {
    this.accordionsElement = this.element.getElementsByTagName(
      'bds-accordion',
    ) as HTMLCollectionOf<HTMLBdsAccordionElement>;
    for (let i = 0; i < this.accordionsElement.length; i++) {
      this.accordionsElement[i].reciveNumber(i);
      this.accordionsElement[i].divisor = this.divisor;
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
