import { ExpansionPanelHeader } from '../expansion-panel-header';

describe('bds-expansion-panel-header', () => {
  it('should create component', () => {
    const component = new ExpansionPanelHeader();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new ExpansionPanelHeader();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
