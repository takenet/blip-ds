import { NavTreeItem } from '../nav-tree-item';

describe('bds-nav-tree-item', () => {
  it('should create component', () => {
    const component = new NavTreeItem();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new NavTreeItem();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
