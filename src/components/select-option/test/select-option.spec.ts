import { SelectOption } from '../select-option';

describe('bds-select-option', () => {
  it('should create component', () => {
    const component = new SelectOption();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new SelectOption();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
