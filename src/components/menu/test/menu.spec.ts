import { BdsMenu } from '../menu';

describe('bds-menu', () => {
  it('should create component', () => {
    const component = new BdsMenu();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsMenu();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
