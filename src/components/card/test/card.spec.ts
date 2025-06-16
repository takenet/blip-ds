import { Card } from '../card';

describe('bds-card', () => {
  it('should create component', () => {
    const component = new Card();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new Card();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
