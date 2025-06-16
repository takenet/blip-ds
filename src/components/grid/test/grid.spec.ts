import { Grid } from '../grid';

describe('bds-grid', () => {
  it('should create component', () => {
    const component = new Grid();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Grid();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
