import { Radio } from '../radio';

describe('bds-radio', () => {
  it('should create component', () => {
    const component = new Radio();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Radio();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
