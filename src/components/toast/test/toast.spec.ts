import { BdsToast } from '../toast';

describe('bds-toast', () => {
  it('should create component', () => {
    const component = new BdsToast();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsToast();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
