import { TableHeader } from '../table-header';

describe('bds-table-header', () => {
  it('should create component', () => {
    const component = new TableHeader();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new TableHeader();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
