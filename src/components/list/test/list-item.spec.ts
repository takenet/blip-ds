import { ListItem } from '../list-item';

describe('bds-list-item', () => {
  it('should create component', () => {
    const component = new ListItem();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ListItem();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
