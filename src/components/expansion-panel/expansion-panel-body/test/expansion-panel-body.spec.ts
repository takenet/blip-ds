import { ExpansionPanelBody } from '../expansion-panel-body';

describe('bds-expansion-panel-body', () => {
  it('should create component', () => {
    const component = new ExpansionPanelBody();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ExpansionPanelBody();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
