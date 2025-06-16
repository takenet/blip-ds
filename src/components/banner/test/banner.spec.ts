import { Banner } from '../banner';

describe('bds-banner', () => {
  it('should create component', () => {
    const component = new Banner();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Banner();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
