import { ButtonGroup } from '../button-group';

describe('bds-button-group', () => {
  it('should create component', () => {
    const component = new ButtonGroup();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ButtonGroup();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
