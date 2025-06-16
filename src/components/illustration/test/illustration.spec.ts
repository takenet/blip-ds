import { BdsIllustration } from '../illustration';

describe('bds-illustration', () => {
  it('should create component', () => {
    const component = new BdsIllustration();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsIllustration();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
