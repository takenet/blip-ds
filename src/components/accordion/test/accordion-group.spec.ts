import { AccordionGroup } from '../accordion-group';

describe('bds-accordion-group', () => {
  it('should create component', () => {
    const component = new AccordionGroup();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AccordionGroup();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
