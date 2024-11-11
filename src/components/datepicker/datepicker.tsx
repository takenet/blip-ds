import { Component, Host, h, Element, State, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import {
  defaultStartDate,
  defaultEndDate,
  fillDayList,
  dateToDayList,
  dateToInputDate,
  dateToTypeDate,
  typeDateToStringDate,
} from '../../utils/calendar';
import { dateValidation } from '../../utils/validations';
import { getScrollParent, positionAbsoluteElement } from '../../utils/position-element';
import { termTranslate, messageTranslate, languages } from '../../utils/languages';
import { BannerVariant } from '../banner/banner';

export type typeDate = 'single' | 'period';
export type stateSelect = 'start' | 'end';
export type DropdownPostionType =
  | 'auto'
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'right-center'
  | 'right-top'
  | 'right-bottom'
  | 'left-center'
  | 'left-top'
  | 'left-bottom';

@Component({
  tag: 'bds-datepicker',
  styleUrl: 'datepicker.scss',
  shadow: true,
})
export class DatePicker {
  private menuElement?: HTMLElement;
  private inputSetDate?: HTMLBdsInputElement;
  private inputSetEndDate?: HTMLBdsInputElement;
  private datepickerPeriod?: HTMLBdsDatepickerPeriodElement;
  private datepickerSingle?: HTMLBdsDatepickerSingleElement;

  @Element() element: HTMLElement;

  @State() open?: boolean = false;
  @State() stateSelect?: stateSelect = 'start';
  @State() dateSelected?: Date = null;
  @State() endDateSelected?: Date = null;
  @State() errorMsgDate?: string = null;
  @State() errorMsgEndDate?: string = null;
  @State() intoView?: HTMLElement = null;
  @State() scrollingTop?: number = 0;
  @State() valueDate?: string;
  @State() valueEndDate?: string;
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
   *  label in input, with he the input size increases.
   */
  @Prop() label? = '';
  /**
   * Message. Select type of date.
   */
  @Prop() message?: string = null;
  /**
   * Message. Select type of date.
   */
  @Prop({ reflect: true, mutable: true }) variantBanner?: BannerVariant = 'warning';
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
   * Default value input.
   */
  @Prop({ reflect: true, mutable: true }) valueDateSelected?: string = null;
  /**
   * Default value input.
   */
  @Prop({ reflect: true, mutable: true }) valueEndDateSelected?: string = null;

  /**
   * Used to set drop position
   */
  @Prop() positionOptions?: DropdownPostionType = 'auto';
  /**
   * Data test is the prop to specifically test the component action object.
   * dtInputStart is the data-test to input start.
   */
  @Prop() dtInputStart?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtInputEnd is the data-test to input end.
   */
  @Prop() dtInputEnd?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtOutzone is the data-test to outzone.
   */
  @Prop() dtOutzone?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonPrev is the data-test to button prev.
   */
  @Prop() dtButtonPrev?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonNext is the data-test to button next.
   */
  @Prop() dtButtonNext?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtSelectMonth is the data-test to select month.
   */
  @Prop() dtSelectMonth?: string = null;
  /**
   * Data test is the prop to specifically test the component action object.
   * dtSelectYear is the data-test to select year.
   */
  @Prop() dtSelectYear?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonClear is the data-test to button clear.
   */
  @Prop() dtButtonClear?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonConfirm is the data-test to button confirm.
   */
  @Prop() dtButtonConfirm?: string = null;
  /**
   * bdsStartDate. Event to return selected date value.
   */
  @Event() bdsStartDate?: EventEmitter;
  /**
   * bdsStartDate. Event to return selected end date value.
   */
  @Event() bdsEndDate?: EventEmitter;
  /**
   * bdsStartDate. Event to return selected end date value.
   */
  @Event() concludeDatepicker?: EventEmitter;

  componentWillLoad() {
    this.endDateLimitChanged();
    this.startDateLimitChanged();
    this.valueDateSelectedChanged();
    this.valueEndDateSelectedChanged();
    this.intoView = getScrollParent(this.element);
    if (this.valueDate) this.validationDateSelected(this.valueDate);
    if (this.valueEndDate) this.validationEndDateSelected(this.valueEndDate);
  }

  componentDidLoad() {
    if (this.positionOptions != 'auto') {
      this.centerDropElement(this.positionOptions);
      this.setDefaultPlacement(this.positionOptions);
    } else {
      this.validatePositionDrop();
    }
  }

  @Watch('valueDateSelected')
  valueDateSelectedChanged(): void {
    this.valueDate = this.valueDateSelected && dateToInputDate(this.valueDateSelected);
    if (this.valueDate) this.validationDateSelected(this.valueDate);
  }

  @Watch('valueEndDateSelected')
  valueEndDateSelectedChanged(): void {
    this.valueEndDate = this.valueEndDateSelected && dateToInputDate(this.valueEndDateSelected);
    if (this.valueEndDate) this.validationEndDateSelected(this.valueEndDate);
  }

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
    this.stateSelect = 'end';
  }

  private setDefaultPlacement(value: DropdownPostionType) {
    if (this.typeOfDate == 'single') {
      this.menuElement.classList.add(`datepicker__menu__single__${value}`);
    } else {
      this.menuElement.classList.add(`datepicker__menu__period__${value}`);
    }
  }

  private validatePositionDrop() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.element,
      changedElement: this.menuElement,
      intoView: this.intoView,
    });
    if (this.typeOfDate == 'single') {
      this.menuElement.classList.add(`datepicker__menu__single__${positionValue.y}-${positionValue.x}`);
    } else {
      this.menuElement.classList.add(`datepicker__menu__period__${positionValue.y}-${positionValue.x}`);
    }
  }

  private centerDropElement = (value: DropdownPostionType) => {
    const arrayPosition = value.split('-');
    if ((arrayPosition[0] == 'left' || arrayPosition[0] == 'right') && arrayPosition[1] == 'center') {
      this.menuElement.style.top = `calc(50% - ${this.menuElement.offsetHeight / 2}px)`;
    }
  };

  private refMenuElement = (el: HTMLElement): void => {
    this.menuElement = el as HTMLElement;
  };

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
   * whenClickCalendar. Function to output selected date.
   */
  private whenClickCalendar(event: CustomEvent) {
    const {
      detail: { value },
    } = event;
    if (value == 'start') {
      this.inputSetEndDate?.setFocus();
    }
  }
  /**
   * selectDate. Function to output selected date.
   */
  private selectDate(event: CustomEvent<{ value: Date }>) {
    const {
      detail: { value },
    } = event;
    this.dateSelected = value;
    this.bdsStartDate.emit({ value: this.dateSelected });
    this.valueDate = this.dateSelected && dateToTypeDate(this.dateSelected);
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
    this.valueEndDate = this.endDateSelected && dateToTypeDate(this.endDateSelected);
    this.errorMsgEndDate = null;
  }

  /**
   * clearDatepicker. Function to clear datepicker
   */
  private clearDate = () => {
    this.valueDate = null;
    this.bdsStartDate.emit({ value: null });
    if (this.typeOfDate == 'single') {
      this.datepickerSingle.clear();
    } else {
      this.datepickerPeriod.clear();
      this.valueEndDate = null;
      this.bdsEndDate.emit({ value: null });
      setTimeout(() => {
        this.inputSetDate?.setFocus();
      }, 10);
    }
  };

  private onInputDateSelected = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueDate = input.value;
    if (!this.valueDate) {
      this.valueEndDate = null;
    }
    this.validationDateSelected(this.valueDate);
  };

  /**
   * validationDateSelected. Function to validate date field
   */
  private validationDateSelected = (value: string): void => {
    const formatData = typeDateToStringDate(value);
    const valueSelected = formatData && dateToDayList(formatData);
    const start = this.startDateLimit && dateToDayList(this.startDateLimit);
    const end = this.endDateLimit && dateToDayList(this.endDateLimit);
    if (!dateValidation(formatData)) {
      this.errorMsgDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
    } else {
      if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
        this.errorMsgDate = `${messageTranslate(
          this.language,
          'betweenPeriodOf',
        )} ${this.startDateLimit} - ${this.endDateLimit}`;
      } else {
        this.errorMsgDate = null;
        this.dateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
      }
    }
  };

  private onInputEndDateSelected = (ev: Event): void => {
    const input = ev.target as HTMLInputElement | null;
    this.valueEndDate = input.value;
    this.validationEndDateSelected(this.valueEndDate);
  };

  /**
   * maskEndDateSelected. Function to add mask to the end date field
   */
  private validationEndDateSelected = (value: string): void => {
    const formatData = typeDateToStringDate(value);
    const formatValueDateSelected = typeDateToStringDate(this.valueDate);
    const valueSelected = formatData && dateToDayList(formatData);
    const start = formatValueDateSelected ? dateToDayList(formatValueDateSelected) : dateToDayList(this.startDateLimit);
    const end = this.endDateLimit && dateToDayList(this.endDateLimit);

    if (!dateValidation(formatData)) {
      this.errorMsgEndDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
    } else {
      if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
        this.errorMsgEndDate = `${messageTranslate(
          this.language,
          'betweenPeriodOf',
        )} ${formatValueDateSelected} - ${this.endDateLimit}`;
      } else {
        this.errorMsgEndDate = null;
        this.endDateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
      }
    }
  };

  private openDatepicker = () => {
    if (!this.disabled) {
      this.open = true;
    }
  };

  private clickConcludeDatepicker = () => {
    if (this.typeOfDate == 'period') {
      if (this.valueEndDate) {
        const data = {
          startDate: typeDateToStringDate(this.valueDate),
          endDate: typeDateToStringDate(this.valueEndDate),
        };
        this.open = false;
        this.concludeDatepicker.emit(data);
        this.inputSetEndDate.removeFocus();
        this.errorMsgEndDate = null;
      } else {
        if (!this.valueDate && !this.valueEndDate) {
          this.open = false;
        } else {
          this.open = true;
          this.errorMsgEndDate = messageTranslate(this.language, 'endDateIsEmpty');
        }
      }
    } else {
      if (this.valueDate != null) {
        const data = {
          startDate: typeDateToStringDate(this.valueDate),
        };
        this.concludeDatepicker.emit(data);
      }
      this.open = false;
    }
  };

  private onFocusDateSelect = () => {
    this.stateSelect = 'start';
  };

  private onFocusEndDateSelect = () => {
    this.stateSelect = 'end';
  };

  render() {
    return (
      <Host class={{ datepicker: true }}>
        {this.typeOfDate == 'single' ? (
          <div
            class={{
              datepicker__inputs: true,
              [`datepicker__inputs__${this.typeOfDate}`]: true,
              datepicker__inputs__open: this.open,
            }}
          >
            <bds-input
              label={this.label.length > 0 ? this.label : termTranslate(this.language, 'setTheDate')}
              value={this.valueDate}
              disabled={this.disabled}
              type="date"
              maxlength={10}
              icon="calendar"
              onClick={() => this.openDatepicker()}
              onBdsInput={(ev) => this.onInputDateSelected(ev)}
              danger={this.errorMsgDate ? true : false}
              errorMessage={this.errorMsgDate}
              dataTest={this.dtInputStart}
            ></bds-input>
          </div>
        ) : (
          <div
            class={{
              datepicker__inputs: true,
              [`datepicker__inputs__${this.typeOfDate}`]: true,
              datepicker__inputs__open: this.open,
            }}
          >
            <bds-input
              ref={this.refInputSetDate}
              label={termTranslate(this.language, 'from')}
              value={this.valueDate}
              disabled={this.disabled}
              type="date"
              maxlength={10}
              icon="calendar"
              onClick={() => this.openDatepicker()}
              onFocus={() => this.onFocusDateSelect()}
              onBdsInput={(ev) => this.onInputDateSelected(ev)}
              danger={this.errorMsgDate ? true : false}
              errorMessage={this.errorMsgDate}
              dataTest={this.dtInputStart}
            ></bds-input>
            <bds-input
              ref={this.refInputSetEndDate}
              label={termTranslate(this.language, 'to')}
              value={this.valueEndDate}
              disabled={this.disabled || this.errorMsgDate ? true : false || !this.dateSelected}
              type="date"
              maxlength={10}
              icon="calendar"
              onClick={() => this.openDatepicker()}
              onFocus={() => this.onFocusEndDateSelect()}
              onBdsInput={(ev) => this.onInputEndDateSelected(ev)}
              danger={this.errorMsgEndDate ? true : false}
              errorMessage={this.errorMsgEndDate}
              dataTest={this.dtInputEnd}
            ></bds-input>
          </div>
        )}
        <div
          ref={this.refMenuElement}
          class={{
            datepicker__menu: true,
            datepicker__menu__open: this.open,
          }}
        >
          {this.message && (
            <bds-grid margin="b-2">
              <bds-banner variant={this.variantBanner} context="inside">
                {this.message}
              </bds-banner>
            </bds-grid>
          )}
          {this.typeOfDate == 'single' ? (
            <bds-datepicker-single
              ref={this.refDatepickerSingle}
              startDate={this.startDateLimit && dateToDayList(this.startDateLimit)}
              endDate={this.endDateLimit && dateToDayList(this.endDateLimit)}
              dateSelect={this.dateSelected}
              onBdsDateSelected={(event) => this.selectDate(event)}
              language={this.language}
              dtButtonPrev={this.dtButtonPrev}
              dtButtonNext={this.dtButtonNext}
              dtSelectMonth={this.dtSelectMonth}
              dtSelectYear={this.dtSelectYear}
            ></bds-datepicker-single>
          ) : (
            <bds-datepicker-period
              ref={this.refDatepickerPeriod}
              startDate={this.startDateLimit && dateToDayList(this.startDateLimit)}
              endDate={this.endDateLimit && dateToDayList(this.endDateLimit)}
              startDateSelect={this.dateSelected}
              stateSelect={this.stateSelect}
              endDateSelect={this.endDateSelected}
              onBdsStartDate={(event) => this.selectDate(event)}
              onBdsEndDate={(event) => this.selectEndDate(event)}
              onBdsClickDayButton={(event) => this.whenClickCalendar(event)}
              language={this.language}
              dtButtonPrev={this.dtButtonPrev}
              dtButtonNext={this.dtButtonNext}
              dtSelectMonth={this.dtSelectMonth}
              dtSelectYear={this.dtSelectYear}
            ></bds-datepicker-period>
          )}
          <div class={{ datepicker__menu__footer: true }}>
            <bds-button size="short" variant="secondary" onClick={() => this.clearDate()} dataTest={this.dtButtonClear}>
              {termTranslate(this.language, 'reset')}
            </bds-button>
            <bds-button size="short" onClick={this.clickConcludeDatepicker} dataTest={this.dtButtonConfirm}>
              {termTranslate(this.language, 'conclude')}
            </bds-button>
          </div>
        </div>
        {this.open && (
          <div
            class={{ outzone: true }}
            onClick={() => this.clickConcludeDatepicker()}
            data-test={this.dtOutzone}
          ></div>
        )}
      </Host>
    );
  }
}
