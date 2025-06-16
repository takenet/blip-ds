import { AlertBody } from '../alert-body';

describe('bds-alert-body', () => {
  it('should create component', () => {
    const component = new AlertBody();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AlertBody();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});