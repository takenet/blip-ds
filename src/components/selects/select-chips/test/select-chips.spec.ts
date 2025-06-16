import { SelectChips } from '../select-chips';

describe('bds-select-chips', () => {
  it('should create component', () => {
    const component = new SelectChips();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new SelectChips();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
