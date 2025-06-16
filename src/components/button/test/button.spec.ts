import { Button } from '../button';

describe('bds-button', () => {
  it('should create component', () => {
    const component = new Button();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Button();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
