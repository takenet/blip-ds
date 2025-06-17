import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from '../accordion';

describe('bds-accordion', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Accordion],
      html: `<bds-accordion></bds-accordion>`,
    });
    component = page.rootInstance;
  });

  it('should create and render component', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toEqualHtml(`
      <bds-accordion>
        <mock:shadow-root>
          <div class="accordion_group">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bds-accordion>
    `);
  });

  it('should have default property values', () => {
    expect(component.startOpen).toBe(false);
    expect(component.divisor).toBe(true);
    expect(component.isOpen).toBe(false);
    expect(component.numberElement).toBe(null);
    expect(component.condition).toBe(false);
  });

  it('should render with startOpen property', async () => {
    page = await newSpecPage({
      components: [Accordion],
      html: `<bds-accordion start-open="true"></bds-accordion>`,
    });
    component = page.rootInstance;
    
    expect(component.startOpen).toBe(true);
  });

  it('should render with divisor property set to false', async () => {
    page = await newSpecPage({
      components: [Accordion],
      html: `<bds-accordion divisor="false"></bds-accordion>`,
    });
    component = page.rootInstance;
    
    expect(component.divisor).toBe(false);
  });

  it('should toggle state and emit events', async () => {
    const toggleSpy = jest.fn();
    page.root.addEventListener('bdsToggle', toggleSpy);

    await component.toggle();

    expect(component.isOpen).toBe(true);
    expect(toggleSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: true }
      })
    );
  });

  it('should toggle state multiple times', async () => {
    const toggleSpy = jest.fn();
    page.root.addEventListener('bdsToggle', toggleSpy);

    // First toggle - open
    await component.toggle();
    expect(component.isOpen).toBe(true);
    expect(toggleSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: true }
      })
    );

    // Second toggle - close
    await component.toggle();
    expect(component.isOpen).toBe(false);
    expect(toggleSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: false }
      })
    );
  });

  it('should open accordion and emit bdsAccordionOpen event', async () => {
    const openSpy = jest.fn();
    page.root.addEventListener('bdsAccordionOpen', openSpy);

    await component.open();

    expect(component.isOpen).toBe(true);
    expect(openSpy).toHaveBeenCalled();
  });

  it('should close accordion and emit bdsAccordionClose event', async () => {
    const closeSpy = jest.fn();
    page.root.addEventListener('bdsAccordionClose', closeSpy);

    // First open the accordion
    await component.open();
    
    // Then close it
    await component.close();

    expect(component.isOpen).toBe(false);
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should set startOpen to false when notStart is called', async () => {
    component.startOpen = true;
    
    await component.notStart();
    
    expect(component.startOpen).toBe(false);
  });

  it('should receive and set number element', async () => {
    const testNumber = 5;
    
    await component.reciveNumber(testNumber);
    
    expect(component.numberElement).toBe(testNumber);
  });

  it('should handle isOpen state change and emit events', () => {
    const openSpy = jest.fn();
    const closeSpy = jest.fn();
    page.root.addEventListener('bdsAccordionOpen', openSpy);
    page.root.addEventListener('bdsAccordionClose', closeSpy);

    // Simulate isOpen changing to true
    component.isOpenChanged(true);
    expect(openSpy).toHaveBeenCalled();

    // Simulate isOpen changing to false
    component.isOpenChanged(false);
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should handle divisor change', () => {
    // Create a mock accordion body element
    const mockAccordionBody = {
      divisor: jest.fn()
    };
    
    // Mock querySelector to return our mock element
    jest.spyOn(page.root, 'querySelector').mockReturnValue(mockAccordionBody);

    component.divisorChanged(false);

    expect(mockAccordionBody.divisor).toHaveBeenCalledWith(false);
  });

  it('should initialize component state in componentWillLoad when startOpen is true', async () => {
    page = await newSpecPage({
      components: [Accordion],
      html: `<bds-accordion start-open="true"></bds-accordion>`,
    });
    component = page.rootInstance;

    // Trigger componentWillLoad manually to test the logic
    component.componentWillLoad();

    expect(component.condition).toBe(true);
    expect(component.isOpen).toBe(true);
  });

  it('should render slot content correctly', async () => {
    page = await newSpecPage({
      components: [Accordion],
      html: `
        <bds-accordion>
          <div class="test-content">Test Content</div>
        </bds-accordion>
      `,
    });

    expect(page.root).toEqualHtml(`
      <bds-accordion>
        <mock:shadow-root>
          <div class="accordion_group">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div class="test-content">Test Content</div>
      </bds-accordion>
    `);
  });
});
