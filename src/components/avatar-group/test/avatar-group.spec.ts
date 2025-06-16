import { AvatarGroup } from '../avatar-group';

describe('bds-avatar-group', () => {
  it('should create component', () => {
    const component = new AvatarGroup();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AvatarGroup();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
