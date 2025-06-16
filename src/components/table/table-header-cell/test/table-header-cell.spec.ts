import { TableHeaderCell } from '../table-header-cell';

describe('bds-table-header-cell', () => {
  it('should create component', () => {
    const component = new TableHeaderCell();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new TableHeaderCell();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
