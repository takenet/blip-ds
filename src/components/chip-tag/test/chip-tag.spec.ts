import { ChipTag } from '../chip-tag';

describe('bds-chip-tag', () => {
  it('should create component', () => {
    const component = new ChipTag();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ChipTag();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
