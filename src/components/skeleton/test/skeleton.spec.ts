import { Skeleton } from '../skeleton';

describe('bds-skeleton', () => {
  it('should create component', () => {
    const component = new Skeleton();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Skeleton();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
