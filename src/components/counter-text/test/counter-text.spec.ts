import { CounterText } from '../counter-text';

describe('bds-counter-text', () => {
  it('should create component', () => {
    const component = new CounterText();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CounterText();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
