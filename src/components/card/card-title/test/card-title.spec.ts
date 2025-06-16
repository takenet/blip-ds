import { CardTitle } from '../card-title';

describe('bds-card-title', () => {
  it('should create component', () => {
    const component = new CardTitle();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CardTitle();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
