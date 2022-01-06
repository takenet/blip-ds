import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-datepicker',
  styleUrl: 'datepicker.scss',
  shadow: true,
})
export class DatePicker {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
