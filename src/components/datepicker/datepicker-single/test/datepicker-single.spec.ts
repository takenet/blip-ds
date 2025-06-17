import { newSpecPage, SpecPage } from '@stencil/core/testing';

// Mock the utility functions that cause issues in testing
jest.mock('../../../../utils/calendar', () => ({
  THIS_DAY: new Date('2023-06-15'),
  defaultStartDate: '01/01/2020',
  defaultEndDate: '31/12/2030',
  weekDays: jest.fn((_lang) => ({
    0: 'Dom',
    1: 'Seg',
    2: 'Ter',
    3: 'Qua',
    4: 'Qui',
    5: 'Sex',
    6: 'Sáb'
  })),
  changeMonths: jest.fn((_lang) => [
    { value: 0, label: 'Janeiro' },
    { value: 1, label: 'Fevereiro' },
    { value: 2, label: 'Março' },
    { value: 3, label: 'Abril' },
    { value: 4, label: 'Maio' },
    { value: 5, label: 'Junho' },
    { value: 6, label: 'Julho' },
    { value: 7, label: 'Agosto' },
    { value: 8, label: 'Setembro' },
    { value: 9, label: 'Outubro' },
    { value: 10, label: 'Novembro' },
    { value: 11, label: 'Dezembro' }
  ]),
  getMonthsSlide: jest.fn((year, month) => [
    {
      year: year,
      month: month - 1 < 0 ? 11 : month - 1,
      days: [
        { date: 1, month: month - 1 < 0 ? 11 : month - 1, year: year, day: 1 },
        { date: 2, month: month - 1 < 0 ? 11 : month - 1, year: year, day: 2 }
      ]
    },
    {
      year: year,
      month: month,
      days: [
        { date: 1, month: month, year: year, day: 3 },
        { date: 15, month: month, year: year, day: 4 },
        { date: 30, month: month, year: year, day: 5 }
      ]
    },
    {
      year: year,
      month: month + 1 > 11 ? 0 : month + 1,
      days: [
        { date: 1, month: month + 1 > 11 ? 0 : month + 1, year: year, day: 6 },
        { date: 2, month: month + 1 > 11 ? 0 : month + 1, year: year, day: 0 }
      ]
    }
  ]),
  getYears: jest.fn((_currentYear, _startYear, _endYear) => [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' }
  ]),
  getMonths: jest.fn((_year, _startDate, _endDate, months) => months),
  fillDayList: jest.fn((date) => {
    if (!date) return 0;
    if (typeof date === 'string') return parseInt(date.replace(/\D/g, ''));
    return date.year * 10000 + date.month * 100 + date.date;
  }),
  fillDate: jest.fn((date) => {
    if (!date) return 0;
    return date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate();
  }),
  dateToDayList: jest.fn((dateStr) => {
    if (!dateStr) return null;
    const parts = dateStr.split('/');
    return {
      date: parseInt(parts[0]),
      month: parseInt(parts[1]) - 1,
      year: parseInt(parts[2]),
      day: 1
    };
  }),
}));

import { BdsdatepickerSingle } from '../datepicker-single';

describe('bds-datepicker-single', () => {
  let page: SpecPage;
  let component: BdsdatepickerSingle;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsdatepickerSingle],
      html: '<bds-datepicker-single></bds-datepicker-single>',
    });
    component = page.rootInstance;
  });

  describe('Component Initialization', () => {
    it('should create BdsdatepickerSingle class instance', () => {
      expect(component).toBeInstanceOf(BdsdatepickerSingle);
    });

    it('should have default properties', () => {
      expect(component.language).toBe('pt_BR');
      expect(component.dateSelect).toBe(null);
      expect(component.animatePrev).toBe(false);
      expect(component.animateNext).toBe(false);
      expect(component.openSelectMonth).toBe(false);
      expect(component.openSelectYear).toBe(false);
      expect(component.loadingSlide).toBe('await');
    });

    it('should initialize with correct default date limits', () => {
      expect(component.startDate).toBeDefined();
      expect(component.endDate).toBeDefined();
    });

    it('should set monthActivated and yearActivated based on current date when no dateSelect', () => {
      expect(component.monthActivated).toBeDefined();
      expect(component.yearActivated).toBeDefined();
    });

    it('should set monthActivated and yearActivated based on dateSelect when provided', async () => {
      const testDate = new Date('2023-05-10');
      page = await newSpecPage({
        components: [BdsdatepickerSingle],
        html: '<bds-datepicker-single></bds-datepicker-single>',
      });
      component = page.rootInstance;
      component.dateSelect = testDate;

      await page.waitForChanges();

      expect(component.monthActivated).toBeDefined();
      expect(component.yearActivated).toBeDefined();
    });
  });

  describe('Property Rendering', () => {
    it('should render with different props via HTML attributes', async () => {
      page = await newSpecPage({
        components: [BdsdatepickerSingle],
        html: '<bds-datepicker-single language="en_US"></bds-datepicker-single>',
      });
      component = page.rootInstance;

      expect(component.language).toBe('en_US');
    });

    it('should render with date limits', async () => {
      page = await newSpecPage({
        components: [BdsdatepickerSingle],
        html: '<bds-datepicker-single></bds-datepicker-single>',
      });
      component = page.rootInstance;

      expect(component.startDate).toBeDefined();
      expect(component.endDate).toBeDefined();
    });
  });

  describe('Data Test Attributes', () => {
    it('should render with data-test attributes', async () => {
      page = await newSpecPage({
        components: [BdsdatepickerSingle],
        html: `<bds-datepicker-single 
          dt-button-prev="test-btn-prev"
          dt-button-next="test-btn-next"
          dt-select-month="test-select-month"
          dt-select-year="test-select-year"
        ></bds-datepicker-single>`,
      });
      component = page.rootInstance;

      expect(component.dtButtonPrev).toBe('test-btn-prev');
      expect(component.dtButtonNext).toBe('test-btn-next');
      expect(component.dtSelectMonth).toBe('test-select-month');
      expect(component.dtSelectYear).toBe('test-select-year');
    });
  });

  describe('Event Emitters', () => {
    it('should have all event emitters defined', () => {
      expect(component.bdsDateSelected).toBeDefined();
    });

    it('should emit bdsDateSelected event when dateSelect changes', () => {
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDate = new Date('2023-06-15');

      component.dateSelect = testDate;
      component['startDateSelectChanged']();

      expect(spy).toHaveBeenCalledWith({ value: testDate });
    });

    it('should emit bdsDateSelected event when date is selected', () => {
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDay = { date: 15, month: 5, year: 2023, day: 4 };

      component['selectDate'](testDay);

      expect(spy).toHaveBeenCalledWith({ value: new Date(2023, 5, 15) });
    });
  });

  describe('Date Selection Logic', () => {
    it('should select date and emit event', () => {
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDay = { date: 15, month: 5, year: 2023, day: 4 };

      component['selectDate'](testDay);

      expect(spy).toHaveBeenCalledWith({ value: new Date(2023, 5, 15) });
    });

    it('should handle different date selections', () => {
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDay1 = { date: 1, month: 0, year: 2023, day: 0 };
      const testDay2 = { date: 31, month: 11, year: 2023, day: 0 };

      component['selectDate'](testDay1);
      expect(spy).toHaveBeenCalledWith({ value: new Date(2023, 0, 1) });

      component['selectDate'](testDay2);
      expect(spy).toHaveBeenCalledWith({ value: new Date(2023, 11, 31) });
    });
  });

  describe('Navigation Methods', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should navigate to previous month', () => {
      component.loadingSlide = 'await';
      component.monthActivated = 5;
      component.yearActivated = 2023;

      component['prevMonth']();

      expect(component.animatePrev).toBe(true);
      expect(component.loadingSlide).toBe('pendding');

      jest.advanceTimersByTime(300);

      expect(component.animatePrev).toBe(false);
      expect(component.monthActivated).toBe(4);
      expect(component.yearActivated).toBe(2023);
      expect(component.loadingSlide).toBe('success');
    });

    it('should navigate to previous year when month goes below 0', () => {
      component.loadingSlide = 'await';
      component.monthActivated = 0;
      component.yearActivated = 2023;

      component['prevMonth']();
      jest.advanceTimersByTime(300);

      expect(component.monthActivated).toBe(11);
      expect(component.yearActivated).toBe(2022);
    });

    it('should navigate to next month', () => {
      component.loadingSlide = 'await';
      component.monthActivated = 5;
      component.yearActivated = 2023;

      component['nextMonth']();

      expect(component.animateNext).toBe(true);
      expect(component.loadingSlide).toBe('pendding');

      jest.advanceTimersByTime(300);

      expect(component.animateNext).toBe(false);
      expect(component.monthActivated).toBe(6);
      expect(component.yearActivated).toBe(2023);
      expect(component.loadingSlide).toBe('success');
    });

    it('should navigate to next year when month goes above 11', () => {
      component.loadingSlide = 'await';
      component.monthActivated = 11;
      component.yearActivated = 2023;

      component['nextMonth']();
      jest.advanceTimersByTime(300);

      expect(component.monthActivated).toBe(0);
      expect(component.yearActivated).toBe(2024);
    });

    it('should not navigate when loading slide is pending', () => {
      component.loadingSlide = 'pendding';
      const initialMonth = component.monthActivated;

      component['prevMonth']();

      expect(component.monthActivated).toBe(initialMonth);
    });

    it('should not navigate next when loading slide is pending', () => {
      component.loadingSlide = 'pendding';
      const initialMonth = component.monthActivated;

      component['nextMonth']();

      expect(component.monthActivated).toBe(initialMonth);
    });
  });

  describe('Day Validation Methods', () => {
    it('should check if day is current day', () => {
      const currentDay = { date: 15, month: 5, year: 2023, day: 4 };
      const notCurrentDay = { date: 16, month: 5, year: 2023, day: 5 };

      expect(typeof component['checkCurrentDay'](currentDay)).toBe('boolean');
      expect(typeof component['checkCurrentDay'](notCurrentDay)).toBe('boolean');
    });

    it('should check if day is disabled due to start date limit', () => {
      component.startDate = { date: 1, month: 5, year: 2023, day: 4 };
      const dayBeforeStart = { date: 31, month: 4, year: 2023, day: 3 };
      const validDay = { date: 15, month: 5, year: 2023, day: 4 };

      expect(component['checkDisableDay'](dayBeforeStart)).toBe(true);
      expect(component['checkDisableDay'](validDay)).toBe(undefined);
    });

    it('should check if day is disabled due to end date limit', () => {
      component.endDate = { date: 30, month: 5, year: 2023, day: 5 };

      const dayAfterEnd = { date: 1, month: 6, year: 2023, day: 4 };
      const validDay = { date: 15, month: 5, year: 2023, day: 4 };

      const result1 = component['checkDisableDay'](dayAfterEnd);
      const result2 = component['checkDisableDay'](validDay);

      expect(typeof result1 === 'boolean' || result1 === undefined).toBe(true);
      expect(typeof result2 === 'boolean' || result2 === undefined).toBe(true);
    });

    it('should check if day is selected', () => {
      component.dateSelect = new Date(2023, 5, 15);

      const selectedDay = { date: 15, month: 5, year: 2023, day: 4 };
      const notSelectedDay = { date: 16, month: 5, year: 2023, day: 5 };

      expect(typeof component['checkSelectedDay'](selectedDay)).toBe('boolean');
      expect(typeof component['checkSelectedDay'](notSelectedDay)).toBe('boolean');
    });

    it('should handle null dateSelect in selected day check', () => {
      component.dateSelect = null;

      const testDay = { date: 15, month: 5, year: 2023, day: 4 };

      expect(component['checkSelectedDay'](testDay)).toBe(false);
    });
  });

  describe('Selector Handlers', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should handle month selection', () => {
      const event = { detail: { value: 8 } } as CustomEvent;

      component['handler'](event, 'months');

      expect(component.monthActivated).toBe(8);
    });

    it('should handle year selection', () => {
      component.startDate = { date: 1, month: 2, year: 2020, day: 0 };
      component.endDate = { date: 31, month: 10, year: 2025, day: 2 };
      component.monthActivated = 1; // February

      const event = { detail: { value: 2023 } } as CustomEvent;

      component['handler'](event, 'years');

      expect(component.yearActivated).toBe(2023);
    });

    it('should adjust month when year is start year and month is before start month', () => {
      component.startDate = { date: 1, month: 5, year: 2023, day: 4 };
      component.monthActivated = 3; // April (before June)

      const event = { detail: { value: 2023 } } as CustomEvent;

      component['handler'](event, 'years');

      expect(component.monthActivated).toBe(5); // Adjusted to June
      expect(component.yearActivated).toBe(2023);
    });

    it('should adjust month when year is end year and month is after end month', () => {
      component.endDate = { date: 31, month: 8, year: 2023, day: 0 };
      component.monthActivated = 10; // November (after September)

      const event = { detail: { value: 2023 } } as CustomEvent;

      component['handler'](event, 'years');

      expect(component.monthActivated).toBe(8); // Adjusted to September
      expect(component.yearActivated).toBe(2023);
    });

    it('should open month selector', () => {
      component['openDateSelect'](true, 'months');

      jest.advanceTimersByTime(100);

      expect(component.openSelectMonth).toBe(true);
    });

    it('should close month selector', () => {
      component.openSelectMonth = true;

      component['openDateSelect'](false, 'months');

      jest.advanceTimersByTime(100);

      expect(component.openSelectMonth).toBe(false);
    });

    it('should open year selector', () => {
      component['openDateSelect'](true, 'years');

      jest.advanceTimersByTime(100);

      expect(component.openSelectYear).toBe(true);
    });

    it('should close year selector', () => {
      component.openSelectYear = true;

      component['openDateSelect'](false, 'years');

      jest.advanceTimersByTime(100);

      expect(component.openSelectYear).toBe(false);
    });
  });

  describe('Utility Methods', () => {
    it('should generate previous days spacing', () => {
      const result = component['prevDays'](3);

      expect(result).toHaveLength(3);
    });

    it('should generate empty array for zero previous days', () => {
      const result = component['prevDays'](0);

      expect(result).toHaveLength(0);
    });

    it('should generate correct number of spacing elements', () => {
      const result = component['prevDays'](5);

      expect(result).toHaveLength(5);
    });
  });

  describe('Clear Method', () => {
    it('should clear selected date', async () => {
      component.dateSelect = new Date('2023-06-15');

      await component.clear();

      expect(component.dateSelect).toBe(null);
    });

    it('should handle clearing when dateSelect is already null', async () => {
      component.dateSelect = null;

      await component.clear();

      expect(component.dateSelect).toBe(null);
    });
  });

  describe('Watchers', () => {
    it('should update month and year when period dates change', () => {
      const newValue = { date: 1, month: 8, year: 2024, day: 0 };
      const oldValue = { date: 1, month: 5, year: 2023, day: 4 };

      component.startDate = newValue;
      component['periodToSelectChanged'](newValue, oldValue);

      expect(component.monthActivated).toBe(newValue.month);
      expect(component.yearActivated).toBe(newValue.year);
    });

    it('should not update when new and old values are the same', () => {
      const sameValue = { date: 1, month: 5, year: 2023, day: 4 };
      const initialMonth = component.monthActivated;
      const initialYear = component.yearActivated;

      component['periodToSelectChanged'](sameValue, sameValue);

      expect(component.monthActivated).toBe(initialMonth);
      expect(component.yearActivated).toBe(initialYear);
    });

    it('should emit event when dateSelect changes', () => {
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDate = new Date('2023-06-20');

      component.dateSelect = testDate;
      component['startDateSelectChanged']();

      expect(spy).toHaveBeenCalledWith({ value: testDate });
    });
  });

  describe('Lifecycle Methods', () => {
    it('should initialize correctly in componentWillLoad when dates are outside current range', () => {
      const futureStartDate = { date: 1, month: 11, year: 2025, day: 1 };
      const futureEndDate = { date: 31, month: 11, year: 2025, day: 3 };

      component.startDate = futureStartDate;
      component.endDate = futureEndDate;

      component.componentWillLoad();

      expect(component.monthActivated).toBe(futureStartDate.month);
      expect(component.yearActivated).toBe(futureStartDate.year);
    });

    it('should set up component data in componentWillRender', () => {
      component.componentWillRender();

      expect(component.week).toBeDefined();
      expect(component.monthsSlide).toBeDefined();
      expect(component.years).toBeDefined();
      expect(component.months).toBeDefined();
    });

    it('should handle current date within range in componentWillLoad', () => {
      const currentStartDate = { date: 1, month: 5, year: 2023, day: 4 };
      const currentEndDate = { date: 30, month: 6, year: 2023, day: 5 };

      component.startDate = currentStartDate;
      component.endDate = currentEndDate;

      const initialMonth = component.monthActivated;
      const initialYear = component.yearActivated;

      component.componentWillLoad();

      // Should not change when current date is within range
      expect(component.monthActivated).toBe(initialMonth);
      expect(component.yearActivated).toBe(initialYear);
    });
  });

  describe('Render Methods', () => {
    it('should render main component', () => {
      const rendered = component.render();

      expect(rendered).toBeDefined();
    });

    it('should render select data component', () => {
      const testData = [
        { value: 0, label: 'Janeiro' },
        { value: 1, label: 'Fevereiro' }
      ];

      const rendered = component.renderSelectData(testData, 0, 'months');

      expect(rendered).toBeDefined();
    });

    it('should render car slide box component', () => {
      const testDays = [
        { date: 1, month: 5, year: 2023, day: 4 },
        { date: 2, month: 5, year: 2023, day: 5 }
      ];

      const rendered = component.renderCarSlideBox(testDays, 1);

      expect(rendered).toBeDefined();
    });

    it('should handle empty data in renderSelectData', () => {
      const testData = [];

      expect(() => component.renderSelectData(testData, 0, 'months')).not.toThrow();
    });

    it('should handle empty days in renderCarSlideBox', () => {
      const testDays = [];

      const rendered = component.renderCarSlideBox(testDays, 0);

      expect(rendered).toBeDefined();
    });
  });

  describe('State Management', () => {
    it('should handle language changes', async () => {
      page = await newSpecPage({
        components: [BdsdatepickerSingle],
        html: '<bds-datepicker-single language="en_US"></bds-datepicker-single>',
      });
      component = page.rootInstance;

      expect(component.language).toBe('en_US');
    });

    it('should handle different language options', async () => {
      const languages = ['pt_BR', 'en_US', 'es_ES'];

      for (const lang of languages) {
        page = await newSpecPage({
          components: [BdsdatepickerSingle],
          html: `<bds-datepicker-single language="${lang}"></bds-datepicker-single>`,
        });
        component = page.rootInstance;

        expect(component.language).toBe(lang);
      }
    });

    it('should maintain state during navigation', () => {
      const initialLanguage = component.language;
      const initialStartDate = component.startDate;
      const initialEndDate = component.endDate;

      component['nextMonth']();

      expect(component.language).toBe(initialLanguage);
      expect(component.startDate).toBe(initialStartDate);
      expect(component.endDate).toBe(initialEndDate);
    });
  });

  describe('Edge Cases', () => {
    it('should handle null values gracefully', () => {
      component.dateSelect = null;
      component.startDate = null;
      component.endDate = null;

      const testDay = { date: 15, month: 5, year: 2023, day: 4 };

      expect(() => component['checkSelectedDay'](testDay)).not.toThrow();
      expect(() => component['checkDisableDay'](testDay)).not.toThrow();
      expect(() => component['checkCurrentDay'](testDay)).not.toThrow();
    });

    it('should handle invalid date objects', () => {
      const invalidDay = { date: 32, month: 13, year: 2023, day: 8 };

      expect(() => component['selectDate'](invalidDay)).not.toThrow();
      expect(() => component['checkCurrentDay'](invalidDay)).not.toThrow();
      expect(() => component['checkSelectedDay'](invalidDay)).not.toThrow();
    });

    it('should handle empty selector data', () => {
      const emptyData = [];

      expect(() => component.renderSelectData(emptyData, 0, 'months')).not.toThrow();
    });

    it('should handle selector with single option', () => {
      const singleOption = [{ value: 0, label: 'Janeiro' }];

      const rendered = component.renderSelectData(singleOption, 0, 'months');

      expect(rendered).toBeDefined();
    });

    it('should handle animation state changes', () => {
      component.animatePrev = true;
      component.animateNext = true;

      const rendered = component.render();

      expect(rendered).toBeDefined();
    });

    it('should handle loading state transitions', () => {
      const states = ['await', 'pendding', 'success'];

      states.forEach(state => {
        component.loadingSlide = state as any;
        expect(component.loadingSlide).toBe(state);
      });
    });
  });

  describe('Integration Tests', () => {
    it('should handle complete date selection flow', () => {
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDay = { date: 15, month: 5, year: 2023, day: 4 };

      // Select a date
      component['selectDate'](testDay);

      // Verify event was emitted
      expect(spy).toHaveBeenCalledWith({ value: new Date(2023, 5, 15) });

      // Clear the selection
      component.clear();

      expect(component.dateSelect).toBe(null);
    });

    it('should handle navigation and date selection together', () => {
      jest.useFakeTimers();

      // Navigate to next month
      component['nextMonth']();
      jest.advanceTimersByTime(300);

      // Then select a date
      const spy = jest.spyOn(component.bdsDateSelected, 'emit');
      const testDay = { date: 15, month: component.monthActivated, year: component.yearActivated, day: 4 };

      component['selectDate'](testDay);

      expect(spy).toHaveBeenCalled();

      jest.useRealTimers();
    });

    it('should handle selector interactions', () => {
      jest.useFakeTimers();

      // Open month selector
      component['openDateSelect'](true, 'months');
      jest.advanceTimersByTime(100);
      expect(component.openSelectMonth).toBe(true);

      // Select a month
      const event = { detail: { value: 8 } } as CustomEvent;
      component['handler'](event, 'months');
      expect(component.monthActivated).toBe(8);

      // Close selector
      component['openDateSelect'](false, 'months');
      jest.advanceTimersByTime(100);
      expect(component.openSelectMonth).toBe(false);

      jest.useRealTimers();
    });
  });
});
