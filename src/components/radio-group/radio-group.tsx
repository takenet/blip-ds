import { Component, h, Host, Element, Prop, Watch, Event, EventEmitter, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bds-radio-group',
  scoped: true,
})
export class RadioGroup implements ComponentInterface {
  @Element() el: HTMLBdsRadioGroupElement;

  /**
   * The value of the selected radio
   */
  @Prop() value: string;
  /**
   * Emitted when the value has changed due to a click event.
   */
  @Event() bdsRadioGroupChange: EventEmitter;

  @Watch('value')
  valueChanged(value: string) {
    this.setSelectedRadio(value);

    this.bdsRadioGroupChange.emit({ value });
  }

  private handleClick = (ev) => {
    const selectedRadio = ev.target && (ev.target as HTMLElement).closest('bds-radio');

    if (selectedRadio) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;

      if (newValue !== currentValue) {
        this.value = newValue;
      }
    }
  };

  private getRadios(): HTMLBdsRadioElement[] {
    return Array.from(this.el.querySelectorAll('bds-radio'));
  }

  private setSelectedRadio(value: string) {
    const radios = this.getRadios();

    const first = radios.find((radio) => !radio.disabled);
    const checked = radios.find((radio) => radio.value === value && !radio.disabled);

    if (!first && !checked) {
      return;
    }

    for (const radio of radios) {
      if (radio.value !== checked.value) {
        radio.checked = false;
      }
    }
  }

  render(): HTMLElement {
    return (
      <Host onClick={this.handleClick}>
        <slot></slot>
      </Host>
    );
  }
}
