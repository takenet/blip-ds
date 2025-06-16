import { ChipSelected } from '../chip-selected';

describe('bds-chip-selected', () => {
  it('should create component', () => {
    const component = new ChipSelected();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ChipSelected();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
