import { Icon } from '../icon';

describe('bds-icon', () => {
  it('should create component', () => {
    const component = new Icon();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Icon();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
