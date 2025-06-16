import { MenuList } from '../menu-list';

describe('bds-menu-list', () => {
  it('should create component', () => {
    const component = new MenuList();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new MenuList();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
