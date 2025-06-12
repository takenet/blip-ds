import { Component, h, Element, Prop, EventEmitter, Event, Method, Watch } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-accordion-group',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class AccordionGroup {
  private accordionsElement?: HTMLCollectionOf<HTMLBdsAccordionElement> = null;
  private accordionsHeaderElement?: HTMLCollectionOf<HTMLBdsAccordionHeaderElement> = null;

  @Element() private element: HTMLElement;
  @Prop() collapse?: collapses = 'single';
  @Prop() divisor?: boolean = true;
  @Prop({ mutable: true }) size?: string = 'large';
  @Prop({ mutable: true }) arrowAlign?: string = 'right';

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
        this.accordionsElement[i].divisor = newValue;
      }
    }
  }

  @Watch('size')
  @Watch('arrowAlign')
  handlePropsChange() {
    this.sizeChanged(this.size);
    this.arrowAlignChanged(this.arrowAlign);
  }

  sizeChanged(newValue: string): void {
    if (this.accordionsHeaderElement) {
      for (let i = 0; i < this.accordionsHeaderElement.length; i++) {
        this.accordionsHeaderElement[i].size = newValue;
      }
    }
  }

  arrowAlignChanged(newValue: string): void {
    if (this.accordionsHeaderElement) {
      for (let i = 0; i < this.accordionsHeaderElement.length; i++) {
        this.accordionsHeaderElement[i].arrowAlign = newValue;
      }
    }
  }

  componentWillRender() {
    this.accordionsElement = this.element.getElementsByTagName(
      'bds-accordion',
    ) as HTMLCollectionOf<HTMLBdsAccordionElement>;
    this.accordionsHeaderElement = this.element.getElementsByTagName(
      'bds-accordion-header',
    ) as HTMLCollectionOf<HTMLBdsAccordionHeaderElement>;
    for (let i = 0; i < this.accordionsElement.length; i++) {
      this.accordionsElement[i].reciveNumber(i);
      this.accordionsElement[i].divisor = this.divisor;
    }
    this.sizeChanged(this.size);
    this.arrowAlignChanged(this.arrowAlign);
  }

  render() {
    return (
      <div class="accordion_group">
        <slot></slot>
      </div>
    );
  }
}
