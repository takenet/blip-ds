import { Breadcrumb } from '../breadcrumb';

describe('bds-breadcrumb', () => {
  it('should create component', () => {
    const component = new Breadcrumb();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Breadcrumb();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
