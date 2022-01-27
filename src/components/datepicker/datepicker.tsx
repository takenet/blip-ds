import { Component, h, Host, State, Prop, Watch } from '@stencil/core';
import { defaultStartDate, defaultEndDate, fillDayList, dateToDayList, dateToString } from '../../utils/calendar';
import { dateValidation, maskDate } from '../../utils/validations';
import { DaysList } from './datepicker-interface';

export type typeDate = 'single' | 'period';

@Component({
  tag: 'bds-datepicker',
  styleUrl: 'datepicker.scss',
  shadow: true,
})
export class DatePicker {
  @State() endDateLimitDaysList: DaysList;
  @State() open?: boolean = false;
  @State() dateSelected?: Date = null;
  @State() endDateSelected?: Date = null;
  @State() valueDateSelected?: string = null;
  @State() valueEndDateSelected?: string = null;
  @State() datepickerPeriod?: HTMLBdsDatepickerPeriodElement;
  @State() datepickerSingle?: HTMLBdsDatepickerSingleElement;
  @State() errorMsgDate?: string = null;
  @State() errorMsgEndDate?: string = null;
  /**
   * TypeOfDate. Select type of date.
   */
  @Prop() typeOfDate?: typeDate = 'single';

  /**
   * StartDateLimit. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true })
  startDateLimit?: string = defaultStartDate;

  /**
   * EndDateLimit. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true })
  endDateLimit?: string = defaultEndDate;

  @Watch('startDateLimit')
  startDateLimitChanged(): void {
    if (!dateValidation(this.startDateLimit)) {
      this.startDateLimit = defaultStartDate;
      // eslint-disable-next-line no-console
      console.error('Date field is not formatted correctly. Please enter with the example dd/mm/yyyy.');
    }
  }
  @Watch('endDateLimit')
  endDateLimitChanged(): void {
    const dlStartDate = dateToDayList(this.startDateLimit);
    const dlEndDate = dateToDayList(this.endDateLimit);
    if (!dateValidation(this.endDateLimit)) {
      this.endDateLimit = defaultEndDate;
      // eslint-disable-next-line no-console
      console.error('Date field is not formatted correctly. Please enter with the example dd/mm/yyyy.');
    }
    if (fillDayList(dlEndDate) < fillDayList(dlStartDate)) {
      this.endDateLimit = defaultEndDate;
      // eslint-disable-next-line no-console
      console.error('The end date limit field is smaller than the start date.');
    }
  }

  componentWillLoad() {
    this.endDateLimitChanged();
    this.startDateLimitChanged();
  }

  private refDatepickerPeriod = (el: HTMLBdsDatepickerPeriodElement): void => {
    this.datepickerPeriod = el;
  };

  private refDatepickerSingle = (el: HTMLBdsDatepickerSingleElement): void => {
    this.datepickerSingle = el;
  };

  private selectDate(event: CustomEvent<{ value: Date }>) {
    const {
      detail: { value },
    } = event;
    this.dateSelected = value;
    this.valueDateSelected = this.dateSelected && dateToString(this.dateSelected);
    this.errorMsgDate = null;
  }

  private selectEndDate(event: CustomEvent<{ value: Date }>) {
    const {
      detail: { value },
    } = event;
    this.endDateSelected = value;
    this.valueEndDateSelected = this.endDateSelected && dateToString(this.endDateSelected);
    this.errorMsgEndDate = null;
  }

  private clearDateSingle = () => {
    this.datepickerSingle.clear();
    this.valueDateSelected = null;
  };

  private clearDatePeriod = () => {
    this.datepickerPeriod.clear();
    this.valueDateSelected = null;
    this.valueEndDateSelected = null;
  };

  private maskDateSelected = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueDateSelected = maskDate(input.value);
  };

  private maskEndDateSelected = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueEndDateSelected = maskDate(input.value);
  };

  private valideteDate = () => {
    const valueSelected = this.valueDateSelected && dateToDayList(this.valueDateSelected);
    const start = this.startDateLimit && dateToDayList(this.startDateLimit);
    const end = this.endDateLimit && dateToDayList(this.endDateLimit);

    if (this.valueDateSelected)
      if (!dateValidation(this.valueDateSelected)) {
        this.errorMsgDate = `Formato da data esta incorreto!`;
      } else {
        if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
          this.errorMsgDate = `Por favor selecione uma data entre o periodo de ${this.startDateLimit} - ${this.endDateLimit}`;
        } else {
          this.errorMsgDate = null;
          this.dateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
        }
      }
  };

  private valideteEndDateSelected = () => {
    const valueSelected = dateToDayList(this.valueEndDateSelected);
    const start = dateToDayList(this.startDateLimit);
    const end = dateToDayList(this.endDateLimit);

    if (!dateValidation(this.valueEndDateSelected)) {
      this.errorMsgEndDate = `Formato da data esta incorreto!`;
    } else {
      if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
        this.errorMsgEndDate = `Por favor selecione uma data entre o periodo de ${this.valueDateSelected} - ${this.endDateLimit}`;
      } else {
        this.errorMsgEndDate = null;
        this.endDateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
      }
    }
  };

  render() {
    return (
      <Host class={{ datepicker: true }}>
        {this.typeOfDate == 'single' ? (
          <div class={{ datepicker__inputs: true }}>
            <bds-input
              label="Definir a data"
              value={this.valueDateSelected}
              placeholder="__/__/____"
              maxlength={10}
              icon="calendar"
              onClick={() => (this.open = true)}
              onBdsInput={(ev) => this.maskDateSelected(ev)}
              onBdsOnBlur={() => this.valideteDate()}
              danger={this.errorMsgDate ? true : false}
              errorMessage={this.errorMsgDate}
            ></bds-input>
          </div>
        ) : (
          <div class={{ datepicker__inputs: true }}>
            <bds-input
              label="De"
              value={this.valueDateSelected}
              placeholder="__/__/____"
              maxlength={10}
              icon="calendar"
              onClick={() => (this.open = true)}
              onBdsInput={(ev) => this.maskDateSelected(ev)}
              onBdsOnBlur={() => this.valideteDate()}
              danger={this.errorMsgDate ? true : false}
              errorMessage={this.errorMsgDate}
            ></bds-input>
            <bds-input
              label="Até"
              value={this.valueEndDateSelected}
              disabled={!this.dateSelected}
              placeholder="__/__/____"
              maxlength={10}
              icon="calendar"
              onClick={() => (this.open = true)}
              onBdsInput={(ev) => this.maskEndDateSelected(ev)}
              onBdsOnBlur={() => this.valideteEndDateSelected()}
              danger={this.errorMsgEndDate ? true : false}
              errorMessage={this.errorMsgEndDate}
            ></bds-input>
          </div>
        )}
        <div class={{ datepicker__menu: true, datepicker__menu__open: this.open }}>
          {this.typeOfDate == 'single' ? (
            <bds-datepicker-single
              ref={this.refDatepickerSingle}
              startDate={dateToDayList(this.startDateLimit)}
              endDate={dateToDayList(this.endDateLimit)}
              dateSelect={this.dateSelected}
              onBdsDateSelected={(event) => this.selectDate(event)}
            ></bds-datepicker-single>
          ) : (
            <bds-datepicker-period
              ref={this.refDatepickerPeriod}
              startDate={dateToDayList(this.startDateLimit)}
              endDate={dateToDayList(this.endDateLimit)}
              startDateSelect={this.dateSelected}
              endDateSelect={this.endDateSelected}
              onBdsStartDate={(event) => this.selectDate(event)}
              onBdsEndDate={(event) => this.selectEndDate(event)}
            ></bds-datepicker-period>
          )}
          <div class={{ datepicker__menu__footer: true }}>
            {this.typeOfDate == 'single' ? (
              <bds-button variant="secondary" onClick={() => this.clearDateSingle()}>
                Redefinir
              </bds-button>
            ) : (
              <bds-button variant="secondary" onClick={() => this.clearDatePeriod()}>
                Redefinir
              </bds-button>
            )}
            <bds-button onClick={() => (this.open = false)}>Concluir</bds-button>
          </div>
        </div>
      </Host>
    );
  }
}
