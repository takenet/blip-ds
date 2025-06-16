import { BdsAutocomplete } from '../autocomplete';

describe('bds-autocomplete', () => {
  it('should create component', () => {
    const component = new BdsAutocomplete();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsAutocomplete();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
