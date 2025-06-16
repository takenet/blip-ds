import { BdsToastContainer } from '../toast-container';

describe('bds-toast-container', () => {
  it('should create component', () => {
    const component = new BdsToastContainer();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsToastContainer();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
