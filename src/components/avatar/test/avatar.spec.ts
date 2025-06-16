import { BdsAvatar } from '../avatar';

describe('bds-avatar', () => {
  it('should create component', () => {
    const component = new BdsAvatar();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsAvatar();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
