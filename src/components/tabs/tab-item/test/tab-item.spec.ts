import { BdsTabItem } from '../tab-item';

describe('bds-tab-item', () => {
  it('should create component', () => {
    const component = new BdsTabItem();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsTabItem();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
