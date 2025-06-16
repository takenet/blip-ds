import { Table } from '../table';

describe('bds-table', () => {
  it('should create component', () => {
    const component = new Table();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Table();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
