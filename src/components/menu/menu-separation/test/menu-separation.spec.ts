import { BdsMenuSeparation } from '../menu-separation';

describe('bds-menu-separation', () => {
  it('should create component', () => {
    const component = new BdsMenuSeparation();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsMenuSeparation();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
