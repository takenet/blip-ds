import { BdsDropdown } from '../dropdown';

describe('bds-dropdown', () => {
  it('should create component', () => {
    const component = new BdsDropdown();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsDropdown();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
