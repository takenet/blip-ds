import { BdsMenuAction } from '../menu-action';

describe('bds-menu-action', () => {
  it('should create component', () => {
    const component = new BdsMenuAction();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsMenuAction();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
