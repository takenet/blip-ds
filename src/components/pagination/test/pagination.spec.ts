import { Pagination } from '../pagination';

describe('bds-pagination', () => {
  it('should create component', () => {
    const component = new Pagination();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Pagination();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
