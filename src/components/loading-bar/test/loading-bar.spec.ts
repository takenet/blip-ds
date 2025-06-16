import { BdsloadingBar } from '../loading-bar';

describe('bds-loading-bar', () => {
  it('should create component', () => {
    const component = new BdsloadingBar();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsloadingBar();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
