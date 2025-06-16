import { Warning } from '../warning';

describe('bds-warning', () => {
  it('should create component', () => {
    const component = new Warning();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Warning();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
