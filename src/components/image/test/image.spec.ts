import { Image } from '../image';

describe('bds-image', () => {
  it('should create component', () => {
    const component = new Image();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Image();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
