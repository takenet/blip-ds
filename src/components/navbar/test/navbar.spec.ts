import { Navbar } from '../navbar';

describe('bds-navbar', () => {
  it('should create component', () => {
    const component = new Navbar();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Navbar();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
