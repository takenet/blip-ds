import { BdsTabGroup } from '../tab-group';

describe('bds-tab-group', () => {
  it('should create component', () => {
    const component = new BdsTabGroup();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsTabGroup();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
