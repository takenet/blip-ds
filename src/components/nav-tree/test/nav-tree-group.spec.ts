import { NavTreeGroup } from '../nav-tree-group';

describe('bds-nav-tree-group', () => {
  it('should create component', () => {
    const component = new NavTreeGroup();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new NavTreeGroup();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
