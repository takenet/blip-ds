import { Accordion } from '../accordion';

describe('bds-accordion', () => {
  it('should create component', () => {
    const component = new Accordion();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Accordion();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
