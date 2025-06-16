import { RichText } from '../rich-text';

describe('bds-rich-text', () => {
  it('should create component', () => {
    const component = new RichText();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new RichText();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
