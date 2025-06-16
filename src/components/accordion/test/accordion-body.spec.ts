import { AccordionBody } from '../accordion-body';

describe('bds-accordion-body', () => {
  it('should create component', () => {
    const component = new AccordionBody();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new AccordionBody();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
