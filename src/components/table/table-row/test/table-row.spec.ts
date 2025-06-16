import { TableRow } from '../table-row';

describe('bds-table-row', () => {
  it('should create component', () => {
    const component = new TableRow();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new TableRow();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
