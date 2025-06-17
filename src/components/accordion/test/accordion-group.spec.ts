import { newSpecPage } from '@stencil/core/testing';
import { AccordionGroup } from '../accordion-group';
import { Accordion } from '../accordion';

describe('bds-accordion-group', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [AccordionGroup, Accordion],
      html: `<bds-accordion-group></bds-accordion-group>`,
    });
    component = page.rootInstance;
  });

  it('should create and render component', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toEqualHtml(`
      <bds-accordion-group>
        <mock:shadow-root>
          <div class="accordion_group">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bds-accordion-group>
    `);
  });

  it('should have default property values', () => {
    expect(component.collapse).toBe('single');
    expect(component.divisor).toBe(true);
  });

  it('should render with collapse property', async () => {
    page = await newSpecPage({
      components: [AccordionGroup],
      html: `<bds-accordion-group collapse="multiple"></bds-accordion-group>`,
    });
    component = page.rootInstance;
    
    expect(component.collapse).toBe('multiple');
  });

  it('should render with divisor property', async () => {
    page = await newSpecPage({
      components: [AccordionGroup],
      html: `<bds-accordion-group divisor="false"></bds-accordion-group>`,
    });
    component = page.rootInstance;
    
    expect(component.divisor).toBe(false);
  });

  it('should render with child accordions', async () => {
    page = await newSpecPage({
      components: [AccordionGroup, Accordion],
      html: `
        <bds-accordion-group>
          <bds-accordion></bds-accordion>
          <bds-accordion></bds-accordion>
        </bds-accordion-group>
      `,
    });

    const accordions = page.root.querySelectorAll('bds-accordion');
    expect(accordions.length).toBe(2);
  });

  it('should emit closeAll event', async () => {
    const closeAllSpy = jest.fn();
    
    page = await newSpecPage({
      components: [AccordionGroup],
      html: `<bds-accordion-group></bds-accordion-group>`,
    });
    component = page.rootInstance;
    
    page.root.addEventListener('bdsAccordionCloseAll', closeAllSpy);
    
    await component.closeAll();
    
    expect(closeAllSpy).toHaveBeenCalled();
  });

  it('should emit openAll event', async () => {
    const openAllSpy = jest.fn();
    
    page = await newSpecPage({
      components: [AccordionGroup],
      html: `<bds-accordion-group></bds-accordion-group>`,
    });
    component = page.rootInstance;
    
    page.root.addEventListener('bdsAccordionOpenAll', openAllSpy);
    
    await component.openAll();
    
    expect(openAllSpy).toHaveBeenCalled();
  });

  it('should handle closeAll method logic', async () => {
    // Mock accordions collection
    const mockAccordion1 = { close: jest.fn() };
    const mockAccordion2 = { close: jest.fn() };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    await component.closeAll();
    
    expect(mockAccordion1.close).toHaveBeenCalled();
    expect(mockAccordion2.close).toHaveBeenCalled();
  });

  it('should handle openAll method logic', async () => {
    // Mock accordions collection
    const mockAccordion1 = { open: jest.fn() };
    const mockAccordion2 = { open: jest.fn() };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    await component.openAll();
    
    expect(mockAccordion1.open).toHaveBeenCalled();
    expect(mockAccordion2.open).toHaveBeenCalled();
  });

  it('should handle closeAll with actNumber parameter in single collapse mode', async () => {
    component.collapse = 'single';
    
    const mockAccordion1 = { close: jest.fn() };
    const mockAccordion2 = { close: jest.fn() };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    await component.closeAll(0);
    
    expect(mockAccordion1.close).not.toHaveBeenCalled(); // actNumber is 0, so accordion at index 0 should not close
    expect(mockAccordion2.close).toHaveBeenCalled();
  });

  it('should handle openAll with actNumber parameter in single collapse mode', async () => {
    component.collapse = 'single';
    
    const mockAccordion1 = { open: jest.fn() };
    const mockAccordion2 = { open: jest.fn() };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    await component.openAll(1);
    
    expect(mockAccordion1.open).toHaveBeenCalled();
    expect(mockAccordion2.open).not.toHaveBeenCalled(); // actNumber is 1, so accordion at index 1 should not open
  });

  it('should handle closeAll in multiple collapse mode', async () => {
    component.collapse = 'multiple';
    
    const mockAccordion1 = { close: jest.fn() };
    const mockAccordion2 = { close: jest.fn() };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    await component.closeAll(0);
    
    expect(mockAccordion1.close).toHaveBeenCalled(); // In multiple mode, all should close regardless of actNumber
    expect(mockAccordion2.close).toHaveBeenCalled();
  });

  it('should handle openAll in multiple collapse mode', async () => {
    component.collapse = 'multiple';
    
    const mockAccordion1 = { open: jest.fn() };
    const mockAccordion2 = { open: jest.fn() };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    await component.openAll(1);
    
    expect(mockAccordion1.open).toHaveBeenCalled(); // In multiple mode, all should open regardless of actNumber
    expect(mockAccordion2.open).toHaveBeenCalled();
  });

  it('should watch divisor property changes', () => {
    const mockAccordion1 = { divisor: true };
    const mockAccordion2 = { divisor: true };
    
    component.accordionsElement = [mockAccordion1, mockAccordion2];
    component.accordionsElement.length = 2;
    
    component.divisorChanged(false);
    
    expect(mockAccordion1.divisor).toBe(false);
    expect(mockAccordion2.divisor).toBe(false);
  });

  it('should handle divisorChanged when accordionsElement is null', () => {
    component.accordionsElement = null;
    
    expect(() => {
      component.divisorChanged(false);
    }).not.toThrow();
  });

  it('should handle empty accordionsElement collection', async () => {
    component.accordionsElement = [];
    component.accordionsElement.length = 0;
    
    await component.closeAll();
    await component.openAll();
    
    // Should not throw any errors
    expect(true).toBe(true);
  });

  it('should render slot content correctly', async () => {
    page = await newSpecPage({
      components: [AccordionGroup],
      html: `
        <bds-accordion-group>
          <div class="test-content">Test Content</div>
        </bds-accordion-group>
      `,
    });

    expect(page.root).toEqualHtml(`
      <bds-accordion-group>
        <mock:shadow-root>
          <div class="accordion_group">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div class="test-content">Test Content</div>
      </bds-accordion-group>
    `);
  });

  it('should have proper class structure', () => {
    const groupDiv = page.root.shadowRoot.querySelector('.accordion_group');
    expect(groupDiv).toBeTruthy();
    expect(groupDiv.tagName).toBe('DIV');
  });
});
