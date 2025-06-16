import { BdsStep } from '../step';

describe('bds-step', () => {
  it('should create component', () => {
    const component = new BdsStep();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsStep();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
