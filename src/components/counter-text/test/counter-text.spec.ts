import { newSpecPage } from '@stencil/core/testing';
import { CounterText } from '../counter-text';
import { CounterTextState } from '../counter-text-interface';

describe('bds-counter-text', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="10" max="50"></bds-counter-text>`,
    });
  });

  it('should create and render component', async () => {
    expect(page.root).toBeTruthy();
    expect(page.root.querySelector('.counter-text')).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.rootInstance.active).toBe(false);
    expect(page.rootInstance.warning).toEqual({ max: 20, min: 2 });
    expect(page.rootInstance.delete).toEqual({ max: 1, min: 0 });
  });

  it('should calculate actual length correctly', async () => {
    // max: 50, length: 10 = actual length: 40
    expect(page.rootInstance.getActualLength()).toBe(40);
  });

  it('should display actual length in typo component', async () => {
    const typoElement = page.root.querySelector('bds-typo');
    expect(typoElement).toBeTruthy();
    expect(typoElement.textContent).toBe('40');
  });

  it('should return default state when actual length is normal', async () => {
    // actual length: 40 (normal range)
    expect(page.rootInstance.getState()).toBe(CounterTextState.Default);
  });

  it('should return warning state when actual length is in warning range', async () => {
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="35" max="50"></bds-counter-text>`,
    });

    // actual length: 15 (within warning range 2-20)
    expect(page.rootInstance.getActualLength()).toBe(15);
    expect(page.rootInstance.getState()).toBe(CounterTextState.Warning);
  });

  it('should return delete state when actual length is in delete range', async () => {
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="49" max="50"></bds-counter-text>`,
    });

    // actual length: 1 (within delete range 0-1)
    expect(page.rootInstance.getActualLength()).toBe(1);
    expect(page.rootInstance.getState()).toBe(CounterTextState.Delete);
  });

  it('should apply active class when active prop is true', async () => {
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="10" max="50" active="true"></bds-counter-text>`,
    });

    const counterElement = page.root.querySelector('.counter-text');
    expect(counterElement.classList.contains('counter-text--active')).toBe(true);
  });

  it('should not apply active class when active prop is false', async () => {
    const counterElement = page.root.querySelector('.counter-text');
    expect(counterElement.classList.contains('counter-text--active')).toBe(false);
  });

  it('should apply correct state class', async () => {
    // Test default state
    let counterElement = page.root.querySelector('.counter-text');
    expect(counterElement.classList.contains('counter-text--default')).toBe(true);

    // Test warning state
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="45" max="50"></bds-counter-text>`,
    });
    counterElement = page.root.querySelector('.counter-text');
    expect(counterElement.classList.contains('counter-text--warning')).toBe(true);

    // Test delete state
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="50" max="50"></bds-counter-text>`,
    });
    counterElement = page.root.querySelector('.counter-text');
    expect(counterElement.classList.contains('counter-text--delete')).toBe(true);
  });

  it('should work with custom warning rules', async () => {
    const component = new CounterText();
    component.length = 30;
    component.max = 50;
    component.warning = { max: 30, min: 10 };
    component.delete = { max: 5, min: 0 };

    // actual length: 20 (within custom warning range 10-30)
    expect(component.getActualLength()).toBe(20);
    expect(component.getState()).toBe(CounterTextState.Warning);
  });

  it('should work with custom delete rules', async () => {
    const component = new CounterText();
    component.length = 49;
    component.max = 50;
    component.warning = { max: 20, min: 10 }; // Warning range: 10-20
    component.delete = { max: 5, min: 0 }; // Delete range: 0-5

    // actual length: 1 (within custom delete range 0-5, but NOT in warning range 10-20)
    expect(component.getActualLength()).toBe(1);
    expect(component.getState()).toBe(CounterTextState.Delete);
  });

  it('should handle edge cases correctly', async () => {
    const component = new CounterText();
    component.warning = { max: 10, min: 5 };
    component.delete = { max: 2, min: 0 };

    // Test boundary values
    component.length = 40;
    component.max = 50;
    // actual length: 10 (max of warning range)
    expect(component.getActualLength()).toBe(10);
    expect(component.getState()).toBe(CounterTextState.Warning);

    component.length = 45;
    // actual length: 5 (min of warning range)
    expect(component.getActualLength()).toBe(5);
    expect(component.getState()).toBe(CounterTextState.Warning);

    component.length = 48;
    // actual length: 2 (max of delete range)
    expect(component.getActualLength()).toBe(2);
    expect(component.getState()).toBe(CounterTextState.Delete);
  });

  it('should render typo component with correct variant', async () => {
    const typoElement = page.root.querySelector('bds-typo');
    expect(typoElement.getAttribute('variant')).toBe('fs-10');
  });

  it('should handle zero actual length', async () => {
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="50" max="50"></bds-counter-text>`,
    });

    expect(page.rootInstance.getActualLength()).toBe(0);
    expect(page.rootInstance.getState()).toBe(CounterTextState.Delete);
    
    const typoElement = page.root.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('0');
  });

  it('should handle negative actual length', async () => {
    page = await newSpecPage({
      components: [CounterText],
      html: `<bds-counter-text length="60" max="50"></bds-counter-text>`,
    });

    expect(page.rootInstance.getActualLength()).toBe(-10);
    expect(page.rootInstance.getState()).toBe(CounterTextState.Delete);
    
    const typoElement = page.root.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('-10');
  });

  it('should update display when props change', async () => {
    // Initial state
    let typoElement = page.root.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('40');

    // Update length
    page.rootInstance.length = 30;
    await page.waitForChanges();
    
    typoElement = page.root.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('20');
  });

  it('should maintain component structure', async () => {
    const counterElement = page.root.querySelector('.counter-text');
    const typoElement = page.root.querySelector('bds-typo');
    
    expect(counterElement).toBeTruthy();
    expect(typoElement).toBeTruthy();
    expect(counterElement.contains(typoElement)).toBe(true);
  });

  it('should handle all state transitions correctly', async () => {
    const component = new CounterText();
    component.max = 100;
    component.warning = { max: 20, min: 5 };
    component.delete = { max: 3, min: 0 };

    // Default state (high actual length)
    component.length = 50;
    expect(component.getActualLength()).toBe(50);
    expect(component.getState()).toBe(CounterTextState.Default);

    // Warning state
    component.length = 85;
    expect(component.getActualLength()).toBe(15);
    expect(component.getState()).toBe(CounterTextState.Warning);

    // Delete state
    component.length = 98;
    expect(component.getActualLength()).toBe(2);
    expect(component.getState()).toBe(CounterTextState.Delete);
  });
});
