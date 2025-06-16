import { Typo } from '../typo';

describe('bds-typo', () => {
  it('should have default values', () => {
    const component = new Typo();
    expect(component.variant).toBe('fs-16');
    expect(component.tag).toBe('p');
    expect(component.margin).toBe(true);
    expect(component.italic).toBe(false);
    expect(component.noWrap).toBe(false);
    expect(component.paragraph).toBe(false);
    expect(component.lineHeight).toBe(null);
    expect(component.bold).toBe(null);
    expect(component.dataTest).toBe(null);
  });

  it('should accept all valid variants', () => {
    const component = new Typo();
    const validVariants = ['fs-10', 'fs-12', 'fs-14', 'fs-16', 'fs-20', 'fs-24', 'fs-32', 'fs-40'];
    
    validVariants.forEach(variant => {
      component.variant = variant as any;
      expect(component.variant).toBe(variant);
    });
  });

  it('should accept all valid tags', () => {
    const component = new Typo();
    const validTags = ['p', 'h1', 'h2', 'h3', 'h4', 'span'];
    
    validTags.forEach(tag => {
      component.tag = tag as any;
      expect(component.tag).toBe(tag);
    });
  });

  it('should accept all valid line heights', () => {
    const component = new Typo();
    const validLineHeights = ['none', 'small', 'simple', 'plus', 'double'];
    
    validLineHeights.forEach(lineHeight => {
      component.lineHeight = lineHeight as any;
      expect(component.lineHeight).toBe(lineHeight);
    });
  });

  it('should accept all valid bold values', () => {
    const component = new Typo();
    const validBoldValues = ['regular', 'semi-bold', 'bold', 'extra-bold'];
    
    validBoldValues.forEach(bold => {
      component.bold = bold as any;
      expect(component.bold).toBe(bold);
    });
  });

  it('should accept boolean values for optional properties', () => {
    const component = new Typo();
    
    component.italic = true;
    expect(component.italic).toBe(true);
    component.italic = false;
    expect(component.italic).toBe(false);

    component.noWrap = true;
    expect(component.noWrap).toBe(true);
    component.noWrap = false;
    expect(component.noWrap).toBe(false);

    component.paragraph = true;
    expect(component.paragraph).toBe(true);
    component.paragraph = false;
    expect(component.paragraph).toBe(false);

    component.margin = false;
    expect(component.margin).toBe(false);
    component.margin = true;
    expect(component.margin).toBe(true);
  });

  it('should accept dataTest string', () => {
    const component = new Typo();
    
    component.dataTest = 'test-id';
    expect(component.dataTest).toBe('test-id');
    
    component.dataTest = null;
    expect(component.dataTest).toBe(null);
  });

  it('should render method should return JSX element', () => {
    const component = new Typo();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should render method should handle property changes', () => {
    const component = new Typo();
    
    // Test with different configurations
    component.variant = 'fs-20';
    component.tag = 'h1';
    component.italic = true;
    component.noWrap = true;
    component.paragraph = true;
    component.lineHeight = 'simple';
    component.bold = 'semi-bold';
    component.dataTest = 'test';
    
    const result = component.render();
    expect(result).toBeTruthy();
    
    // Test with null/false values
    component.margin = false;
    component.lineHeight = null;
    component.bold = null;
    component.dataTest = null;
    
    const result2 = component.render();
    expect(result2).toBeTruthy();
  });
});