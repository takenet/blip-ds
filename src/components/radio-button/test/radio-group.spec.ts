import { RadioGroup } from '../radio-group';

describe('bds-radio-group', () => {
  it('should create component', () => {
    const component = new RadioGroup();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new RadioGroup();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
