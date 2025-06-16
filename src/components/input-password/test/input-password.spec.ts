import { InputPassword } from '../input-password';

describe('bds-input-password', () => {
  it('should create component', () => {
    const component = new InputPassword();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new InputPassword();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
