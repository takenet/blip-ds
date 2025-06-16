import { TableCell } from '../table-cell';

describe('bds-table-cell', () => {
  it('should create component', () => {
    const component = new TableCell();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new TableCell();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
