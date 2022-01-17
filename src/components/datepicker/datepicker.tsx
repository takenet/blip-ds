import { Component, h, Prop } from '@stencil/core';

export type typeDate = 'single' | 'period';

@Component({
  tag: 'bds-datepicker',
  styleUrl: 'datepicker.scss',
  shadow: true,
})
export class DatePicker {
  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() typeOfDate?: typeDate = 'single';

  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() selectBeforeCurrent?: boolean = false;

  /**
   * DateLimit. Insert a limiter to select the date period.
   */
  @Prop() dateLimit?: number = null;

  render() {
    return (
      <div class={{ datePicker: true }}>
        <div class={{ datePicker__inputs: true, [`datePicker__inputs__${this.typeOfDate}`]: true }}>
          {this.typeOfDate == 'single' ? (
            <bds-datepicker-single selectBeforeCurrent={this.selectBeforeCurrent}></bds-datepicker-single>
          ) : (
            <bds-datepicker-period
              selectBeforeCurrent={this.selectBeforeCurrent}
              dateLimit={this.dateLimit}
            ></bds-datepicker-period>
          )}
        </div>
      </div>
    );
  }
}
