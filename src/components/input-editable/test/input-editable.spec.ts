import { InputEditable } from '../input-editable';

describe('bds-input-editable', () => {
  it('should create component', () => {
    const component = new InputEditable();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new InputEditable();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
