import { NavTree } from '../nav-tree';

describe('bds-nav-tree', () => {
  it('should create component', () => {
    const component = new NavTree();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new NavTree();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
