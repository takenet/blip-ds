import { DataTable } from '../data-table';

describe('bds-data-table', () => {
  it('should create component', () => {
    const component = new DataTable();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new DataTable();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
