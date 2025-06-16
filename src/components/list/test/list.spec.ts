import { List } from '../list';

describe('bds-list', () => {
  it('should create component', () => {
    const component = new List();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new List();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
