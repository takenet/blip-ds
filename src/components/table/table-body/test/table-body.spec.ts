import { TableBody } from '../table-body';

describe('bds-table-body', () => {
  it('should create component', () => {
    const component = new TableBody();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new TableBody();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
