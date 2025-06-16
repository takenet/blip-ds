import { ExpansionPanel } from '../expansion-panel';

describe('bds-expansion-panel', () => {
  it('should create component', () => {
    const component = new ExpansionPanel();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ExpansionPanel();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
