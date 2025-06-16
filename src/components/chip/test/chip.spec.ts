import { Chip } from '../chip';

describe('bds-chip', () => {
  it('should create component', () => {
    const component = new Chip();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Chip();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
