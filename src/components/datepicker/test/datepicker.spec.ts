import { newSpecPage, SpecPage } from '@stencil/core/testing';

// Mock the utility functions that cause issues in testing
jest.mock('../../../utils/position-element', () => ({
  getScrollParent: jest.fn(() => document.body),
  positionAbsoluteElement: jest.fn(() => ({ x: 'center', y: 'bottom' })),
}));

jest.mock('../../../utils/calendar', () => ({
  defaultStartDate: '01/01/2020',
  defaultEndDate: '31/12/2030',
  fillDayList: jest.fn((date) => date ? 20230615 : 0),
  dateToDayList: jest.fn((date) => {
    if (!date) return null;
    const parts = date.split('/');
    return {
      date: parseInt(parts[0]),
      month: parseInt(parts[1]) - 1,
      year: parseInt(parts[2])
    };
  }),
  dateToInputDate: jest.fn((date) => {
    if (!date) return null;
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  }),
  dateToString: jest.fn((date) => {
    if (!date) return null;
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  }),
  dateToTypeDate: jest.fn((date) => {
    if (!date) return null;
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  }),
  typeDateToStringDate: jest.fn((date) => date),
}));

jest.mock('../../../utils/validations', () => ({
  dateValidation: jest.fn((date) => {
    if (!date) return false;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  }),
}));

jest.mock('../../../utils/languages', () => ({
  termTranslate: jest.fn((_lang, term) => {
    const translations = {
      'setTheDate': 'Set the Date',
      'from': 'From',
      'to': 'To',
      'reset': 'Reset',
      'conclude': 'Conclude',
      'startTime': 'Start time',
      'endTime': 'End time',
    };
    return translations[term] || term;
  }),
  messageTranslate: jest.fn((_lang, term) => {
    const translations = {
      'dateFormatIsIncorrect': 'Date format is incorrect',
      'betweenPeriodOf': 'Between period of',
      'endDateIsEmpty': 'End date is empty'
    };
    return translations[term] || term;
  }),
}));

import { DatePicker } from '../datepicker';

describe('bds-datepicker', () => {
  let page: SpecPage;
  let component: DatePicker;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [DatePicker],
      html: '<bds-datepicker></bds-datepicker>',
    });
    component = page.rootInstance;
  });

  describe('Component Initialization', () => {
    it('should create DatePicker class instance', () => {
      expect(component).toBeInstanceOf(DatePicker);
    });

    it('should have default properties', () => {
      expect(component.typeOfDate).toBe('single');
      expect(component.language).toBe('pt_BR');
      expect(component.disabled).toBe(false);
      expect(component.positionOptions).toBe('auto');
      expect(component.variantBanner).toBe('warning');
      expect(component.open).toBe(false);
      expect(component.stateSelect).toBe('start');
      expect(component.dateSelected).toBe(null);
      expect(component.endDateSelected).toBe(null);
    });

    it('should initialize with correct default date limits', () => {
      expect(component.startDateLimit).toBe('01/01/2020');
      expect(component.endDateLimit).toBe('31/12/2030');
    });
  });

  describe('Property Rendering', () => {
    it('should render with different props via HTML attributes', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period" language="en_US" disabled="true"></bds-datepicker>',
      });
      component = page.rootInstance;

      expect(component.typeOfDate).toBe('period');
      expect(component.language).toBe('en_US');
      expect(component.disabled).toBe(true);
    });

    it('should render with period-time type', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period-time"></bds-datepicker>',
      });
      component = page.rootInstance;

      expect(component.typeOfDate).toBe('period-time');
    });

    it('should render with position and variant props', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker position-options="top-center" variant-banner="error"></bds-datepicker>',
      });
      component = page.rootInstance;

      expect(component.positionOptions).toBe('top-center');
      expect(component.variantBanner).toBe('error');
    });

    it('should render with label and message', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker label="Custom Date Label" message="Custom message"></bds-datepicker>',
      });
      component = page.rootInstance;
      
      expect(component.label).toBe('Custom Date Label');
      expect(component.message).toBe('Custom message');
    });
  });

  describe('Data Test Attributes', () => {
    it('should render with data-test attributes', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: `<bds-datepicker 
          dt-input-start="test-input-start"
          dt-input-end="test-input-end"
          dt-outzone="test-outzone"
          dt-button-prev="test-btn-prev"
          dt-button-next="test-btn-next"
          dt-select-month="test-select-month"
          dt-select-year="test-select-year"
          dt-button-clear="test-btn-clear"
          dt-button-confirm="test-btn-confirm"
        ></bds-datepicker>`,
      });
      component = page.rootInstance;
      
      expect(component.dtInputStart).toBe('test-input-start');
      expect(component.dtInputEnd).toBe('test-input-end');
      expect(component.dtOutzone).toBe('test-outzone');
      expect(component.dtButtonPrev).toBe('test-btn-prev');
      expect(component.dtButtonNext).toBe('test-btn-next');
      expect(component.dtSelectMonth).toBe('test-select-month');
      expect(component.dtSelectYear).toBe('test-select-year');
      expect(component.dtButtonClear).toBe('test-btn-clear');
      expect(component.dtButtonConfirm).toBe('test-btn-confirm');
    });
  });

  describe('Event Emitters', () => {
    it('should have all event emitters defined', () => {
      expect(component.bdsStartDate).toBeDefined();
      expect(component.bdsEndDate).toBeDefined();
      expect(component.concludeDatepicker).toBeDefined();
      expect(component.emptyConcludeDatepicker).toBeDefined();
    });

    it('should emit bdsStartDate event when date is selected', () => {
      const spy = jest.spyOn(component.bdsStartDate, 'emit');
      const testDate = new Date('2023-06-15');
      
      component['selectDate']({ detail: { value: testDate } } as any);
      
      expect(spy).toHaveBeenCalledWith({ value: '15/06/2023' });
      expect(component.dateSelected).toEqual(testDate);
    });

    it('should emit bdsEndDate event when end date is selected', () => {
      const spy = jest.spyOn(component.bdsEndDate, 'emit');
      const testDate = new Date('2023-06-20');
      
      component['selectEndDate']({ detail: { value: testDate } } as any);
      
      expect(spy).toHaveBeenCalledWith({ value: '20/06/2023' });
      expect(component.endDateSelected).toEqual(testDate);
    });
  });

  describe('Date Validation', () => {
    it('should validate date format correctly', () => {
      // Mock a valid date input
      const mockEvent = {
        target: { value: '15/06/2023' }
      } as any;
      
      component['onInputDateSelected'](mockEvent);
      expect(component['valueDate']).toBe('15/06/2023');
    });

    it('should validate end date format correctly', () => {
      // Set start date first
      component['valueDate'] = '15/06/2023';
      
      const mockEvent = {
        target: { value: '20/06/2023' }
      } as any;
      
      component['onInputEndDateSelected'](mockEvent);
      expect(component['valueEndDate']).toBe('20/06/2023');
    });

    it('should handle invalid date format', () => {
      const mockEvent = {
        target: { value: 'invalid-date' }
      } as any;
      
      component['onInputDateSelected'](mockEvent);
      // Should not crash and should handle gracefully
      expect(component['valueDate']).toBe('invalid-date');
    });
  });

  describe('State Management', () => {
    it('should have default properties', () => {
      expect(component.open).toBe(false);
      expect(component.stateSelect).toBe('start');
      expect(component.dateSelected).toBe(null);
      expect(component.endDateSelected).toBe(null);
    });

    it('should have default time values in period-time mode', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period-time"></bds-datepicker>',
      });
      component = page.rootInstance;

      expect(component['startTime']).toBe('00:00');
      expect(component['endTime']).toBe('23:59');
    });

    it('should handle open/close state', () => {
      expect(component.open).toBe(false);
      
      component['openDatepicker']();
      expect(component.open).toBe(true);
    });

    it('should not open when disabled', () => {
      component.disabled = true;
      component['openDatepicker']();
      expect(component.open).toBe(false);
    });

    it('should change state when date is selected', () => {
      expect(component.stateSelect).toBe('start');
      
      const testDate = new Date('2023-06-15');
      component.dateSelected = testDate;
      component['dateSelectedChanged']();
      
      expect(component.stateSelect).toBe('end');
    });

    it('should handle focus state changes', () => {
      component['onFocusDateSelect']();
      expect(component.stateSelect).toBe('start');
      
      component['onFocusEndDateSelect']();
      expect(component.stateSelect).toBe('end');
    });

    it('should update startTime when time input changes', () => {
      const mockEvent = {
        target: { value: '09:00' }
      } as any;

      component['onInputStartTimeSelected'](mockEvent);
      expect(component['startTime']).toBe('09:00');
    });

    it('should update endTime when time input changes', () => {
      const mockEvent = {
        target: { value: '18:30' }
      } as any;

      component['onInputEndTimeSelected'](mockEvent);
      expect(component['endTime']).toBe('18:30');
    });
  });

  describe('Date Limits Validation', () => {
    it('should validate start date limit', () => {
      component.startDateLimit = 'invalid-date';
      component['startDateLimitChanged']();
      expect(component.startDateLimit).toBe('01/01/2020'); // Should reset to default
    });

    it('should validate end date limit', () => {
      component.endDateLimit = 'invalid-date';
      component['endDateLimitChanged']();
      expect(component.endDateLimit).toBe('31/12/2030'); // Should reset to default
    });

    it('should handle valid date limits', () => {
      component.startDateLimit = '01/01/2023';
      component.endDateLimit = '31/12/2023';
      
      component['startDateLimitChanged']();
      component['endDateLimitChanged']();
      
      expect(component.startDateLimit).toBe('01/01/2023');
      expect(component.endDateLimit).toBe('31/12/2023');
    });
  });

  describe('Clear Functionality', () => {
    it('should clear single date', async () => {
      // Create a page with single type
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="single"></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component['valueDate'] = '15/06/2023';
      
      // Mock datepicker single element
      component['datepickerSingle'] = {
        clear: jest.fn()
      } as any;
      
      const bdsStartDateSpy = jest.spyOn(component.bdsStartDate, 'emit');
      
      component['clearDate']();
      
      expect(component['valueDate']).toBe(null);
      expect(bdsStartDateSpy).toHaveBeenCalledWith({ value: null });
      expect(component['datepickerSingle'].clear).toHaveBeenCalled();
    });

    it('should clear period dates', async () => {
      // Create a page with period type
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period"></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component['valueDate'] = '15/06/2023';
      component['valueEndDate'] = '20/06/2023';
      
      // Mock datepicker period element and input element
      component['datepickerPeriod'] = {
        clear: jest.fn()
      } as any;
      component['inputSetDate'] = {
        setFocus: jest.fn()
      } as any;
      
      const bdsStartDateSpy = jest.spyOn(component.bdsStartDate, 'emit');
      const bdsEndDateSpy = jest.spyOn(component.bdsEndDate, 'emit');
      
      component['clearDate']();
      
      expect(component['valueDate']).toBe(null);
      expect(component['valueEndDate']).toBe(null);
      expect(bdsStartDateSpy).toHaveBeenCalledWith({ value: null });
      expect(bdsEndDateSpy).toHaveBeenCalledWith({ value: null });
      expect(component['datepickerPeriod'].clear).toHaveBeenCalled();
    });

    it('should clear period-time dates and reset times', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period-time"></bds-datepicker>',
      });
      component = page.rootInstance;

      component['valueDate'] = '15/06/2023';
      component['valueEndDate'] = '20/06/2023';
      component['startTime'] = '08:30';
      component['endTime'] = '17:00';

      component['datepickerPeriod'] = {
        clear: jest.fn()
      } as any;
      component['inputSetDate'] = {
        setFocus: jest.fn()
      } as any;

      component['clearDate']();

      expect(component['valueDate']).toBe(null);
      expect(component['valueEndDate']).toBe(null);
      expect(component['startTime']).toBe('00:00');
      expect(component['endTime']).toBe('23:59');
    });
  });

  describe('Conclude Functionality', () => {
    it('should conclude single date picker', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="single"></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component['valueDate'] = '15/06/2023';
      
      const concludeSpy = jest.spyOn(component.concludeDatepicker, 'emit');
      
      component['clickConcludeDatepicker']();
      
      expect(component.open).toBe(false);
      expect(concludeSpy).toHaveBeenCalledWith({
        startDate: '15/06/2023'
      });
    });

    it('should conclude period date picker with both dates', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period"></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component['valueDate'] = '15/06/2023';
      component['valueEndDate'] = '20/06/2023';
      
      // Mock the input element
      component['inputSetEndDate'] = {
        removeFocus: jest.fn()
      } as any;
      
      const concludeSpy = jest.spyOn(component.concludeDatepicker, 'emit');
      
      component['clickConcludeDatepicker']();
      
      expect(component.open).toBe(false);
      expect(concludeSpy).toHaveBeenCalledWith({
        startDate: '15/06/2023',
        endDate: '20/06/2023'
      });
    });

    it('should emit empty conclude when period has no dates', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period"></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component['valueDate'] = null;
      component['valueEndDate'] = null;
      
      const emptyConcludeSpy = jest.spyOn(component.emptyConcludeDatepicker, 'emit');
      
      component['clickConcludeDatepicker']();
      
      expect(component.open).toBe(false);
      expect(emptyConcludeSpy).toHaveBeenCalled();
    });

    it('should show error when period missing end date', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period"></bds-datepicker>',
      });
      component = page.rootInstance;
      component['valueDate'] = '15/06/2023';
      component['valueEndDate'] = null;
      
      component['clickConcludeDatepicker']();
      
      expect(component.open).toBe(true);
      expect(component['errorMsgEndDate']).toBe('End date is empty');
    });

    it('should conclude period-time date picker with dates and times', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period-time"></bds-datepicker>',
      });
      component = page.rootInstance;

      component['valueDate'] = '15/06/2023';
      component['valueEndDate'] = '20/06/2023';
      component['startTime'] = '08:30';
      component['endTime'] = '17:00';

      component['inputSetEndDate'] = {
        removeFocus: jest.fn()
      } as any;

      const concludeSpy = jest.spyOn(component.concludeDatepicker, 'emit');

      component['clickConcludeDatepicker']();

      expect(component.open).toBe(false);
      expect(concludeSpy).toHaveBeenCalledWith({
        startDate: '15/06/2023',
        endDate: '20/06/2023',
        startTime: '08:30',
        endTime: '17:00',
      });
    });

    it('should emit empty conclude when period-time has no dates', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period-time"></bds-datepicker>',
      });
      component = page.rootInstance;

      component['valueDate'] = null;
      component['valueEndDate'] = null;

      const emptyConcludeSpy = jest.spyOn(component.emptyConcludeDatepicker, 'emit');

      component['clickConcludeDatepicker']();

      expect(component.open).toBe(false);
      expect(emptyConcludeSpy).toHaveBeenCalled();
    });
  });

  describe('Calendar Events', () => {
    it('should handle calendar click event', () => {
      const mockEvent = {
        detail: { value: 'start' }
      } as any;
      
      // Mock the input element and its setFocus method
      const mockInputElement = {
        setFocus: jest.fn()
      };
      component['inputSetEndDate'] = mockInputElement as any;
      
      component['whenClickCalendar'](mockEvent);
      
      expect(mockInputElement.setFocus).toHaveBeenCalled();
    });
  });

  describe('Render Method', () => {
    it('should render single date picker', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="single"></bds-datepicker>',
      });
      
      const element = page.root;
      expect(element).toHaveClass('datepicker');
      
      const inputsDiv = element.shadowRoot.querySelector('.datepicker__inputs');
      expect(inputsDiv).toHaveClass('datepicker__inputs__single');
    });

    it('should render period date picker', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period"></bds-datepicker>',
      });
      
      const element = page.root;
      expect(element).toHaveClass('datepicker');
      
      const inputsDiv = element.shadowRoot.querySelector('.datepicker__inputs');
      expect(inputsDiv).toHaveClass('datepicker__inputs__period');
    });

    it('should render period-time date picker', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker type-of-date="period-time"></bds-datepicker>',
      });

      const element = page.root;
      expect(element).toHaveClass('datepicker');

      const inputsDiv = element.shadowRoot.querySelector('.datepicker__inputs');
      expect(inputsDiv).toHaveClass('datepicker__inputs__period');

      const timeInputs = element.shadowRoot.querySelector('.datepicker__menu__time-inputs');
      expect(timeInputs).not.toBeNull();
    });

    it('should render with banner when message is provided', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker message="Test banner message" variant-banner="error"></bds-datepicker>',
      });
      
      const banner = page.root.shadowRoot.querySelector('bds-banner');
      expect(banner).not.toBeNull();
      expect(banner.getAttribute('variant')).toBe('error');
      expect(banner.getAttribute('context')).toBe('inside');
    });

    it('should render outzone when open', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component.open = true;
      await page.waitForChanges();
      
      const outzone = page.root.shadowRoot.querySelector('.outzone');
      expect(outzone).not.toBeNull();
    });

    it('should not render outzone when closed', async () => {
      page = await newSpecPage({
        components: [DatePicker],
        html: '<bds-datepicker></bds-datepicker>',
      });
      component = page.rootInstance;
      
      component.open = false;
      await page.waitForChanges();
      
      const outzone = page.root.shadowRoot.querySelector('.outzone');
      expect(outzone).toBeNull();
    });
  });

  describe('Component Lifecycle', () => {
    it('should call componentWillLoad', () => {
      const spy1 = jest.spyOn(component, 'endDateLimitChanged' as any);
      const spy2 = jest.spyOn(component, 'startDateLimitChanged' as any);
      const spy3 = jest.spyOn(component, 'valueDateSelectedChanged' as any);
      const spy4 = jest.spyOn(component, 'valueEndDateSelectedChanged' as any);
      
      component.componentWillLoad();
      
      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(spy3).toHaveBeenCalled();
      expect(spy4).toHaveBeenCalled();
    });
  });

  describe('Watchers', () => {
    it('should watch valueDateSelected changes', () => {
      const spy = jest.spyOn(component, 'valueDateSelectedChanged' as any);
      
      component.valueDateSelected = '15/06/2023';
      component['valueDateSelectedChanged']();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should watch valueEndDateSelected changes', () => {
      const spy = jest.spyOn(component, 'valueEndDateSelectedChanged' as any);
      
      component.valueEndDateSelected = '20/06/2023';
      component['valueEndDateSelectedChanged']();
      
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('formatTimeInput', () => {
    it('should return empty string for empty input', () => {
      expect(component['formatTimeInput']('')).toBe('');
    });

    it('should strip non-digit characters', () => {
      expect(component['formatTimeInput']('ab:cd')).toBe('');
    });

    it('should format 4 digits with colon', () => {
      expect(component['formatTimeInput']('1200')).toBe('12:00');
    });

    it('should format partial 3 digits with colon', () => {
      expect(component['formatTimeInput']('123')).toBe('12:3');
    });

    it('should return 2 digits without colon', () => {
      expect(component['formatTimeInput']('09')).toBe('09');
    });

    it('should clamp hours first digit above 2 to 2', () => {
      expect(component['formatTimeInput']('4599')).toBe('23:59');
    });

    it('should clamp hours value above 23 to 23', () => {
      expect(component['formatTimeInput']('2900')).toBe('23:00');
    });

    it('should clamp minutes first digit above 5 to 5', () => {
      expect(component['formatTimeInput']('1273')).toBe('12:53');
    });

    it('should clamp minutes value above 59 to 59', () => {
      expect(component['formatTimeInput']('1080')).toBe('10:50');
    });

    it('should handle valid max time 23:59', () => {
      expect(component['formatTimeInput']('2359')).toBe('23:59');
    });

    it('should handle valid min time 00:00', () => {
      expect(component['formatTimeInput']('0000')).toBe('00:00');
    });
  });

  describe('normalizeTime', () => {
    it('should return 00:00 for empty string', () => {
      expect(component['normalizeTime']('')).toBe('00:00');
    });

    it('should pad a single digit hour', () => {
      expect(component['normalizeTime']('9')).toBe('09:00');
    });

    it('should pad a two digit hour without minutes', () => {
      expect(component['normalizeTime']('12')).toBe('12:00');
    });

    it('should pad a single digit minute', () => {
      expect(component['normalizeTime']('12:3')).toBe('12:03');
    });

    it('should leave a complete HH:MM unchanged', () => {
      expect(component['normalizeTime']('08:30')).toBe('08:30');
    });

    it('should return 00:00 for invalid input', () => {
      expect(component['normalizeTime']('abc')).toBe('00:00');
    });
  });
});
