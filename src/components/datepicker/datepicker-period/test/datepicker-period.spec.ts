import { BdsdatepickerPeriod } from '../datepicker-period';

describe('bds-datepicker-period', () => {
  it('should create component', () => {
    const component = new BdsdatepickerPeriod();
    expect(component).toBeTruthy();
  });

  it('should have default language', () => {
    const component = new BdsdatepickerPeriod();
    expect(component.language).toBe('pt_BR');
  });
});
