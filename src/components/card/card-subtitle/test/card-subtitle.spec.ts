import { CardSubtitle } from '../card-subtitle';

describe('bds-card-subtitle', () => {
  it('should create component', () => {
    const component = new CardSubtitle();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CardSubtitle();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
