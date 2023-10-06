import { Component, h, Host, Element, Prop, Watch, Event, EventEmitter, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bds-radio-group',
  scoped: true,
})
export class RadioGroup implements ComponentInterface {
  private radioGroupElement?: HTMLCollectionOf<HTMLBdsRadioElement> = null;

  @Element() private element: HTMLElement;

  /**
   * The value of the selected radio
   */
  @Prop({ mutable: true, reflect: true }) value?: string;
  /**
   * Emitted when the value has changed due to a click event.
   */
  @Event() bdsRadioGroupChange: EventEmitter;

  @Watch('value')
  valueChanged(value: string) {
    this.setSelectedRadio(value);

    this.bdsRadioGroupChange.emit({ value });
  }

  componentWillRender() {
    this.radioGroupElement = this.element.getElementsByTagName('bds-radio') as HTMLCollectionOf<HTMLBdsRadioElement>;
    for (let i = 0; i < this.radioGroupElement.length; i++) {
      this.radioGroupElement[i].addEventListener('bdsChange', (event: CustomEvent) =>
        this.chagedOptions(this.radioGroupElement[i].value, event)
      );
    }
  }

  private chagedOptions = (value: string, event: CustomEvent): void => {
    if (event.detail.checked == true) {
      this.value = value;
    }
  };

  private setSelectedRadio(value: string) {
    const radios = this.radioGroupElement;
    for (let i = 0; i < radios.length; i++) {
      const getValue = radios[i].value;
      radios[i].checked = false;
      if (radios[i].checked == false && value == getValue) {
        radios[i].checked = true;
      }
    }
  }

  render(): HTMLElement {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
