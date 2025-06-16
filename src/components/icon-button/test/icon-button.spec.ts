import { IconButton } from '../icon-button';

describe('bds-icon-button', () => {
  it('should create component', () => {
    const component = new IconButton();
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    const component = new IconButton();
    expect(component.variant).toBe('primary');
    expect(component.size).toBe('standard');
    expect(component.iconTheme).toBe('outline');
    expect(component.disabled).toBe(false);
    expect(component.icon).toBe(null);
    expect(component.dataTest).toBe(null);
  });

  it('should render when icon is provided', () => {
    const component = new IconButton();
    component.icon = 'user';
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
