import { Input } from '../input';

describe('bds-input', () => {
  it('should create component', () => {
    const component = new Input();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Input();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
