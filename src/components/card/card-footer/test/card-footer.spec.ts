import { CardFooter } from '../card-footer';

describe('bds-card-footer', () => {
  it('should create component', () => {
    const component = new CardFooter();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CardFooter();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
