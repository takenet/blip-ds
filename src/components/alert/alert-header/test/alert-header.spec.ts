import { AlertHeader } from '../alert-header';

describe('bds-alert-header', () => {
  it('should create component', () => {
    const component = new AlertHeader();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AlertHeader();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
