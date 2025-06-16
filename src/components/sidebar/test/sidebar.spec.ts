import { Sidebar } from '../sidebar';

describe('bds-sidebar', () => {
  it('should create component', () => {
    const component = new Sidebar();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Sidebar();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
