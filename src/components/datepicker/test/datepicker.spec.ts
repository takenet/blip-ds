import { DatePicker } from '../datepicker';

describe('bds-datepicker', () => {
  it('should create component', () => {
    const component = new DatePicker();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new DatePicker();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
