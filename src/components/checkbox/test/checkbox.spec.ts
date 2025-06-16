import { Checkbox } from '../checkbox';

describe('bds-checkbox', () => {
  it('should create component', () => {
    const component = new Checkbox();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Checkbox();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
