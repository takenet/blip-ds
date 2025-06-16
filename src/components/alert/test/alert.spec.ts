import { BdsAlert } from '../alert';

describe('bds-alert', () => {
  it('should create component', () => {
    const component = new BdsAlert();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsAlert();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
