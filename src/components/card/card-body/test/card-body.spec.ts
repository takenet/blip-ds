import { CardBody } from '../card-body';

describe('bds-card-body', () => {
  it('should create component', () => {
    const component = new CardBody();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new CardBody();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
