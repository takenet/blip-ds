import { BdsProgressBar } from '../progress-bar';

describe('bds-progress-bar', () => {
  it('should create component', () => {
    const component = new BdsProgressBar();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsProgressBar();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
