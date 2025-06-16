import { BdsStepper } from '../stepper';

describe('bds-stepper', () => {
  it('should create component', () => {
    const component = new BdsStepper();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsStepper();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
