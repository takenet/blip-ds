import { AccordionHeader } from '../accordion-header';

describe('bds-accordion-header', () => {
  it('should create component', () => {
    const component = new AccordionHeader();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AccordionHeader();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
