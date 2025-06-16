import { CardHeader } from '../card-header';

describe('bds-card-header', () => {
  it('should create component', () => {
    const component = new CardHeader();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CardHeader();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
