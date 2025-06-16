import { BdsdatepickerSingle } from '../datepicker-single';

describe('bds-datepicker-single', () => {
  it('should create component', () => {
    const component = new BdsdatepickerSingle();
    expect(component).toBeTruthy();
  });

  it('should have default language', () => {
    const component = new BdsdatepickerSingle();
    expect(component.language).toBe('pt_BR');
  });
});
