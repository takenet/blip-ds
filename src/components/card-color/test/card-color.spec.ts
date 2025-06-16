import { CardColor } from '../card-color';

describe('bds-card-color', () => {
  it('should create component', () => {
    const component = new CardColor();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CardColor();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
