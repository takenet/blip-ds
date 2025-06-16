import { InputPhoneNumber } from '../input-phone-number';

describe('bds-input-phone-number', () => {
  it('should create component', () => {
    const component = new InputPhoneNumber();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new InputPhoneNumber();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
