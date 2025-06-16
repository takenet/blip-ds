import { InputChips } from '../input-chips';

describe('bds-input-chips', () => {
  it('should create component', () => {
    const component = new InputChips();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new InputChips();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
