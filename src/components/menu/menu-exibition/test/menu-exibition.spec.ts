import { BdsMenuExibition } from '../menu-exibition';

describe('bds-menu-exibition', () => {
  it('should create component', () => {
    const component = new BdsMenuExibition();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsMenuExibition();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
