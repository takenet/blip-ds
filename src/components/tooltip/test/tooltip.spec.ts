import { Tooltip } from '../tooltip';

describe('bds-tooltip', () => {
  it('should create component', () => {
    const component = new Tooltip();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Tooltip();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
