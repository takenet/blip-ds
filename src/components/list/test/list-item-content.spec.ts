import { ListItemContent } from '../list-item-content';

describe('bds-list-item-content', () => {
  it('should create component', () => {
    const component = new ListItemContent();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ListItemContent();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
