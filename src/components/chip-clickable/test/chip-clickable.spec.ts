import { ChipClickable } from '../chip-clickable';

describe('bds-chip-clickable', () => {
  it('should create component', () => {
    const component = new ChipClickable();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ChipClickable();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
