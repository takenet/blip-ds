import { MenuListItem } from '../menu-list-item';

describe('bds-menu-list-item', () => {
  it('should create component', () => {
    const component = new MenuListItem();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new MenuListItem();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
