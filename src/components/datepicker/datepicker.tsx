import { Component, h, Element, State, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { defaultStartDate, defaultEndDate, fillDayList, dateToDayList, dateToString } from '../../utils/calendar';
import { dateValidation, maskDate } from '../../utils/validations';
import { getScrollParent, positionElement } from '../../utils/position-element';
import { termTranslate, messageTranslate, languages } from '../../utils/languages';

export type typeDate = 'single' | 'period';

@Component({
  tag: 'bds-datepicker',
  styleUrl: 'datepicker.scss',
  shadow: false,
})
export class DatePicker {
  private actionElement?: HTMLElement;
  private menuElement?: HTMLElement;
  private inputSetDate?: HTMLBdsInputElement;
  private inputSetEndDate?: HTMLBdsInputElement;
  private datepickerPeriod?: HTMLBdsDatepickerPeriodElement;
  private datepickerSingle?: HTMLBdsDatepickerSingleElement;

  @Element() private element: HTMLElement;

  @State() open?: boolean = false;
  @State() dateSelected?: Date = null;
  @State() endDateSelected?: Date = null;
  @State() valueDateSelected?: string = null;
  @State() valueEndDateSelected?: string = null;
  @State() errorMsgDate?: string = null;
  @State() errorMsgEndDate?: string = null;
  @State() intoView?: HTMLElement = null;
  @State() scrollingTop?: number = 0;
  @State() menupositionTop?: number = 0;
  @State() menupositionLeft?: number = 0;
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
  /**
   * Message. Select type of date.
   */
  @Prop() message?: string = null;
  /**
   * Language, Entered as one of the languages. Can be one of:
   * 'pt_BR', 'es_ES', 'en_US'.
   */
  @Prop() language?: languages = 'pt_BR';
  /**
   * Disabled input.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;
  /**
   * bdsStartDate. Event to return selected date value.
   */
  @Event() bdsStartDate?: EventEmitter;
  /**
   * bdsStartDate. Event to return selected end date value.
   */
  @Event() bdsEndDate?: EventEmitter;
  /**
   * startDateLimit validation.
   */
  @Watch('startDateLimit')
  startDateLimitChanged(): void {
    if (!dateValidation(this.startDateLimit)) {
      this.startDateLimit = defaultStartDate;
    }
  }
  /**
   * endDateLimit validation.
   */
  @Watch('endDateLimit')
  endDateLimitChanged(): void {
    const dlStartDate = dateToDayList(this.startDateLimit);
    const dlEndDate = dateToDayList(this.endDateLimit);
    if (!dateValidation(this.endDateLimit)) {
      this.endDateLimit = defaultEndDate;
    }
    if (fillDayList(dlEndDate) < fillDayList(dlStartDate)) {
      this.endDateLimit = `${dlEndDate.date.toString().padStart(2, '0')}/${(dlEndDate.month + 1)
        .toString()
        .padStart(2, '0')}/${dlStartDate.year + 1}`;
    }
  }

  @Watch('dateSelected')
  dateSelectedChanged(): void {
    this.inputSetEndDate?.setFocus();
  }

  componentWillLoad() {
    this.endDateLimitChanged();
    this.startDateLimitChanged();
    this.intoView = getScrollParent(this.element);
  }

  private refInputSetDate = (el: HTMLBdsInputElement): void => {
    this.inputSetDate = el;
  };

  private refInputSetEndDate = (el: HTMLBdsInputElement): void => {
    this.inputSetEndDate = el;
  };

  private refDatepickerPeriod = (el: HTMLBdsDatepickerPeriodElement): void => {
    this.datepickerPeriod = el;
  };

  private refDatepickerSingle = (el: HTMLBdsDatepickerSingleElement): void => {
    this.datepickerSingle = el;
  };
  /**
   * selectDate. Function to output selected date.
   */
  private selectDate(event: CustomEvent<{ value: Date }>) {
    const {
      detail: { value },
    } = event;
    this.dateSelected = value;
    this.bdsStartDate.emit({ value: this.dateSelected });
    this.valueDateSelected = this.dateSelected && dateToString(this.dateSelected);
    this.errorMsgDate = null;
  }
  /**
   * selectEndDate. Function to issue selected end date..
   */
  private selectEndDate(event: CustomEvent<{ value: Date }>) {
    const {
      detail: { value },
    } = event;
    this.endDateSelected = value;
    this.bdsEndDate.emit({ value: this.endDateSelected });
    this.valueEndDateSelected = this.endDateSelected && dateToString(this.endDateSelected);
    this.errorMsgEndDate = null;
  }
  /**
   * clearDateSingle. Function to clear datepicker-single
   */
  private clearDateSingle = () => {
    this.datepickerSingle.clear();
    this.valueDateSelected = null;
    this.bdsStartDate.emit({ value: null });
  };
  /**
   * clearDatePeriod. Function to clear datepicker-period
   */
  private clearDatePeriod = () => {
    this.datepickerPeriod.clear();
    this.valueDateSelected = null;
    this.valueEndDateSelected = null;
    this.bdsStartDate.emit({ value: null });
    this.bdsEndDate.emit({ value: null });
    setTimeout(() => {
      this.inputSetDate?.setFocus();
    }, 10);
  };
  /**
   * maskDateSelected. Function to add mask to date field
   */
  private maskDateSelected = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueDateSelected = maskDate(input.value);
    const valueSelected = this.valueDateSelected && dateToDayList(this.valueDateSelected);
    const start = this.startDateLimit && dateToDayList(this.startDateLimit);
    const end = this.endDateLimit && dateToDayList(this.endDateLimit);
    if (!dateValidation(this.valueDateSelected)) {
      this.errorMsgDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
    } else {
      if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
        this.errorMsgDate = `${messageTranslate(this.language, 'betweenPeriodOf')} ${this.startDateLimit} - ${
          this.endDateLimit
        }`;
      } else {
        this.errorMsgDate = null;
        this.dateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
      }
    }
  };
  /**
   * maskEndDateSelected. Function to add mask to the end date field
   */
  private maskEndDateSelected = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueEndDateSelected = maskDate(input.value);
    const valueSelected = this.valueEndDateSelected && dateToDayList(this.valueEndDateSelected);
    const start = this.valueDateSelected ? dateToDayList(this.valueDateSelected) : dateToDayList(this.startDateLimit);
    const end = this.endDateLimit && dateToDayList(this.endDateLimit);

    if (!dateValidation(this.valueEndDateSelected)) {
      this.errorMsgEndDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
    } else {
      if (fillDayList(valueSelected) <= fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
        this.errorMsgEndDate = `${messageTranslate(this.language, 'betweenPeriodOf')} ${this.valueDateSelected} - ${
          this.endDateLimit
        }`;
      } else {
        this.errorMsgEndDate = null;
        this.endDateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
      }
    }
  };

  private onClickSetDate = () => {
    const positionValue = positionElement({
      actionElement: this.actionElement,
      changedElement: this.menuElement,
      intoView: this.intoView,
    });
    this.menupositionTop = positionValue.top;
    this.menupositionLeft = positionValue.left;
    this.open = true;
    setTimeout(() => {
      this.inputSetDate?.setFocus();
      this.inputSetEndDate?.removeFocus();
    }, 50);
    this.datepickerPeriod?.clear();
    this.valueEndDateSelected = null;
  };

  private openDatepicker = () => {
    const positionValue = positionElement({
      actionElement: this.actionElement,
      changedElement: this.menuElement,
      intoView: this.intoView ? this.intoView : document.body,
    });
    this.menupositionTop = positionValue.top;
    this.menupositionLeft = positionValue.left;
    this.open = true;
  };

  private closeDatepicker = () => {
    this.inputSetEndDate.removeFocus();
    this.open = false;
  };

  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };
    return (
      <div
        ref={(el) => (this.actionElement = el as HTMLElement)}
        class={{ datepicker: true }}
        onBlur={() => (this.open = false)}
        tabindex="0"
      >
        {this.typeOfDate == 'single' ? (
          <div class={{ datepicker__inputs: true, [`datepicker__inputs__${this.typeOfDate}`]: true }}>
            <bds-input
              label={termTranslate(this.language, 'setTheDate')}
              value={this.valueDateSelected}
              disabled={this.disabled}
              placeholder="__/__/____"
              maxlength={10}
              icon="calendar"
              onClick={() => this.openDatepicker()}
              onBdsInput={(ev) => this.maskDateSelected(ev)}
              danger={this.errorMsgDate ? true : false}
              errorMessage={this.errorMsgDate}
            ></bds-input>
          </div>
        ) : (
          <div class={{ datepicker__inputs: true, [`datepicker__inputs__${this.typeOfDate}`]: true }}>
            <bds-input
              ref={this.refInputSetDate}
              label={termTranslate(this.language, 'from')}
              value={this.valueDateSelected}
              disabled={this.disabled}
              placeholder="__/__/____"
              maxlength={10}
              icon="calendar"
              onClick={() => this.onClickSetDate()}
              onBdsInput={(ev) => this.maskDateSelected(ev)}
              danger={this.errorMsgDate ? true : false}
              errorMessage={this.errorMsgDate}
            ></bds-input>
            <bds-input
              ref={this.refInputSetEndDate}
              label={termTranslate(this.language, 'to')}
              value={this.valueEndDateSelected}
              disabled={this.disabled || !this.dateSelected}
              placeholder="__/__/____"
              maxlength={10}
              icon="calendar"
              onClick={() => this.openDatepicker}
              onBdsInput={(ev) => this.maskEndDateSelected(ev)}
              danger={this.errorMsgEndDate ? true : false}
              errorMessage={this.errorMsgEndDate}
            ></bds-input>
          </div>
        )}
        <div
          ref={(el) => (this.menuElement = el as HTMLElement)}
          class={{ datepicker__menu: true, datepicker__menu__open: this.open }}
          style={menuPosition}
        >
          {this.message && (
            <div class="datepicker__menu__message">
              <bds-icon name="warning" theme="outline" aria-label="Ícone de atenção"></bds-icon>
              <bds-typo variant="fs-16">{this.message}</bds-typo>
            </div>
          )}
          {this.typeOfDate == 'single' ? (
            <bds-datepicker-single
              ref={this.refDatepickerSingle}
              startDate={this.startDateLimit && dateToDayList(this.startDateLimit)}
              endDate={this.endDateLimit && dateToDayList(this.endDateLimit)}
              dateSelect={this.dateSelected}
              onBdsDateSelected={(event) => this.selectDate(event)}
              language={this.language}
            ></bds-datepicker-single>
          ) : (
            <bds-datepicker-period
              ref={this.refDatepickerPeriod}
              startDate={this.startDateLimit && dateToDayList(this.startDateLimit)}
              endDate={this.endDateLimit && dateToDayList(this.endDateLimit)}
              startDateSelect={this.dateSelected}
              endDateSelect={this.endDateSelected}
              onBdsStartDate={(event) => this.selectDate(event)}
              onBdsEndDate={(event) => this.selectEndDate(event)}
              language={this.language}
            ></bds-datepicker-period>
          )}
          {this.typeOfDate == 'single' ? (
            <div class={{ datepicker__menu__footer: true }}>
              <bds-button variant="secondary" onClick={() => this.clearDateSingle()}>
                {termTranslate(this.language, 'reset')}
              </bds-button>
              <bds-button onClick={() => (this.open = false)}>{termTranslate(this.language, 'conclude')}</bds-button>
            </div>
          ) : (
            <div class={{ datepicker__menu__footer: true }}>
              <bds-button variant="secondary" onClick={() => this.clearDatePeriod()}>
                {termTranslate(this.language, 'reset')}
              </bds-button>
              <bds-button onClick={this.closeDatepicker}>{termTranslate(this.language, 'conclude')}</bds-button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
