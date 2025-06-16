import { NavbarContent } from '../navbar-content';

describe('bds-navbar-content', () => {
  it('should create component', () => {
    const component = new NavbarContent();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new NavbarContent();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
