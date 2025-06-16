import { AlertActions } from '../alert-actions';

describe('bds-alert-actions', () => {
  it('should create component', () => {
    const component = new AlertActions();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AlertActions();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});