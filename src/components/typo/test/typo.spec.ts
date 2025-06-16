import { Typo } from '../typo';

describe('bds-typo', () => {
  describe('Properties and Default Values', () => {
    it('should have correct default properties', () => {
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

    it('should accept boolean values for style properties', () => {
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

    it('should accept dataTest string value', () => {
      const component = new Typo();
      
      component.dataTest = 'test-id';
      expect(component.dataTest).toBe('test-id');
      
      component.dataTest = null;
      expect(component.dataTest).toBe(null);
    });
  });

  describe('Render Method and Component Behavior', () => {
    it('should render method return JSX element', () => {
      const component = new Typo();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });

    it('should render with different property combinations', () => {
      const component = new Typo();
      
      // Test with all properties set
      component.variant = 'fs-20';
      component.tag = 'h1';
      component.italic = true;
      component.noWrap = true;
      component.paragraph = true;
      component.lineHeight = 'simple';
      component.bold = 'semi-bold';
      component.dataTest = 'test';
      component.margin = false;
      
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      
      // Verify the component element type matches the tag
      expect(result.$tag$).toBe('h1');
    });

    it('should render with minimal properties', () => {
      const component = new Typo();
      
      // Test with only required properties
      component.variant = 'fs-32';
      component.tag = 'span';
      
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      expect(result.$tag$).toBe('span');
    });

    it('should render correct element tag based on tag property', () => {
      const component = new Typo();
      
      const tags = ['p', 'h1', 'h2', 'h3', 'h4', 'span'];
      tags.forEach(tag => {
        component.tag = tag as any;
        const result = component.render();
        expect(result.$tag$).toBe(tag);
      });
    });

    it('should include correct CSS classes based on properties', () => {
      const component = new Typo();
      
      // Test base classes
      component.variant = 'fs-20';
      component.margin = true;
      let result = component.render();
      expect(result.$attrs$.class).toContain('typo');
      expect(result.$attrs$.class).toContain('typo__variant--fs-20');
      expect(result.$attrs$.class).toContain('typo__margin--fs-20');

      // Test italic
      component.italic = true;
      result = component.render();
      expect(result.$attrs$.class).toContain('typo--italic');

      // Test no-wrap
      component.noWrap = true;
      result = component.render();
      expect(result.$attrs$.class).toContain('typo--no-wrap');

      // Test paragraph
      component.paragraph = true;
      result = component.render();
      expect(result.$attrs$.class).toContain('typo--paragraph');

      // Test line height
      component.lineHeight = 'double';
      result = component.render();
      expect(result.$attrs$.class).toContain('typo__line-height--double');

      // Test bold
      component.bold = 'extra-bold';
      result = component.render();
      expect(result.$attrs$.class).toContain('typo__bold--extra-bold');
    });

    it('should not include optional CSS classes when properties are false or null', () => {
      const component = new Typo();
      
      component.italic = false;
      component.noWrap = false;
      component.paragraph = false;
      component.lineHeight = null;
      component.bold = null;
      component.margin = false;
      
      const result = component.render();
      
      expect(result.$attrs$.class).not.toContain('typo--italic');
      expect(result.$attrs$.class).not.toContain('typo--no-wrap');
      expect(result.$attrs$.class).not.toContain('typo--paragraph');
      expect(result.$attrs$.class).not.toContain('typo__line-height--');
      expect(result.$attrs$.class).not.toContain('typo__bold--');
      expect(result.$attrs$.class).not.toContain('typo__margin--fs-16');
    });

    it('should include data-test attribute when specified', () => {
      const component = new Typo();
      
      component.dataTest = 'test-typography';
      const result = component.render();
      expect(result.$attrs$['data-test']).toBe('test-typography');
      
      component.dataTest = null;
      const result2 = component.render();
      expect(result2.$attrs$['data-test']).toBe(null);
    });

    it('should include part attribute for styling', () => {
      const component = new Typo();
      const result = component.render();
      expect(result.$attrs$.part).toBe('bds-typo__text');
    });

    it('should render slot as child element', () => {
      const component = new Typo();
      const result = component.render();
      expect(result.$children$).toBeTruthy();
      expect(result.$children$.length).toBe(1);
      expect(result.$children$[0].$tag$).toBe('slot');
    });
  });
});