import { Component, h, State, Prop, Watch } from '@stencil/core';
import { THIS_DAY, dateToDayList } from '../../utils/calendar';
import { isDate } from '../../utils/regex';
import { DaysList } from './datepicker-interface';

export type typeDate = 'single' | 'period';

@Component({
  tag: 'bds-datepicker',
  styleUrl: 'datepicker.scss',
  shadow: true,
})
export class DatePicker {
  @State() endDateLimitDaysList: DaysList;
  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() typeOfDate?: typeDate = 'single';

  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() selectBeforeCurrent?: boolean = false;

  /**
   * EndDateLimit. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true })
  endDateLimit?: string = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${THIS_DAY.getFullYear() + 100}`;

  /**
   * StartDateLimit. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true })
  startDateLimit?: string = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${THIS_DAY.getFullYear() - 100}`;

  @Watch('endDateLimit')
  endDateLimitChanged(): void {
    if (!isDate(this.endDateLimit)) {
      this.endDateLimit = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${THIS_DAY.getFullYear() + 100}`;
    }
  }
  @Watch('startDateLimit')
  startDateLimitChanged(): void {
    if (!isDate(this.startDateLimit)) {
      this.startDateLimit = `${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${THIS_DAY.getFullYear() - 100}`;
    }
  }

  componentWillLoad() {
    this.endDateLimitChanged();
    this.startDateLimitChanged();
  }

  render() {
    return (
      <div class={{ datePicker: true }}>
        <div class={{ datePicker__inputs: true, [`datePicker__inputs__${this.typeOfDate}`]: true }}>
          {this.typeOfDate == 'single' ? (
            <bds-datepicker-single
              startDate={dateToDayList(this.startDateLimit)}
              endDate={dateToDayList(this.endDateLimit)}
            ></bds-datepicker-single>
          ) : (
            <bds-datepicker-period
              startDate={dateToDayList(this.startDateLimit)}
              endDate={dateToDayList(this.endDateLimit)}
            ></bds-datepicker-period>
          )}
        </div>
      </div>
    );
  }
}
