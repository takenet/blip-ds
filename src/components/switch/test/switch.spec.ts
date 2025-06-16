import { Switch } from '../switch';

describe('bds-switch', () => {
  it('should create component', () => {
    const component = new Switch();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Switch();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
