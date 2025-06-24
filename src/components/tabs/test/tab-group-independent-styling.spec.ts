import { newSpecPage } from '@stencil/core/testing';
import { BdsTabGroup } from '../tab-group';
import { BdsTabItem } from '../tab-item/tab-item';

describe('bds-tab-group independent styling', () => {
  it('should support navigationStyled property', async () => {
    const page = await newSpecPage({
      components: [BdsTabGroup, BdsTabItem],
      html: `
        <bds-tab-group navigation-styled>
          <bds-tab-item label="Test Tab">Content</bds-tab-item>
        </bds-tab-group>
      `,
    });
    
    const tabGroup = page.root;
    expect(tabGroup).toHaveProperty('navigationStyled', true);
    
    const tabGroupElement = page.root.shadowRoot.querySelector('.tab_group');
    expect(tabGroupElement).toHaveClass('tab_group--navigation-styled');
  });

  it('should support bodyStyled property', async () => {
    const page = await newSpecPage({
      components: [BdsTabGroup, BdsTabItem],
      html: `
        <bds-tab-group body-styled>
          <bds-tab-item label="Test Tab">Content</bds-tab-item>
        </bds-tab-group>
      `,
    });
    
    const tabGroup = page.root;
    expect(tabGroup).toHaveProperty('bodyStyled', true);
    
    const tabGroupElement = page.root.shadowRoot.querySelector('.tab_group');
    expect(tabGroupElement).toHaveClass('tab_group--body-styled');
  });

  it('should support both navigationStyled and bodyStyled properties together', async () => {
    const page = await newSpecPage({
      components: [BdsTabGroup, BdsTabItem],
      html: `
        <bds-tab-group navigation-styled body-styled>
          <bds-tab-item label="Test Tab">Content</bds-tab-item>
        </bds-tab-group>
      `,
    });
    
    const tabGroup = page.root;
    expect(tabGroup).toHaveProperty('navigationStyled', true);
    expect(tabGroup).toHaveProperty('bodyStyled', true);
    
    const tabGroupElement = page.root.shadowRoot.querySelector('.tab_group');
    expect(tabGroupElement).toHaveClass('tab_group--navigation-styled');
    expect(tabGroupElement).toHaveClass('tab_group--body-styled');
  });

  it('should default to false for styling properties', async () => {
    const page = await newSpecPage({
      components: [BdsTabGroup, BdsTabItem],
      html: `
        <bds-tab-group>
          <bds-tab-item label="Test Tab">Content</bds-tab-item>
        </bds-tab-group>
      `,
    });
    
    const tabGroup = page.root;
    expect(tabGroup).toHaveProperty('navigationStyled', false);
    expect(tabGroup).toHaveProperty('bodyStyled', false);
    
    const tabGroupElement = page.root.shadowRoot.querySelector('.tab_group');
    expect(tabGroupElement).not.toHaveClass('tab_group--navigation-styled');
    expect(tabGroupElement).not.toHaveClass('tab_group--body-styled');
  });

  it('should maintain all existing functionality with new styling options', async () => {
    const page = await newSpecPage({
      components: [BdsTabGroup, BdsTabItem],
      html: `
        <bds-tab-group navigation-styled body-styled align="left">
          <bds-tab-item label="Tab 1" open>Content 1</bds-tab-item>
          <bds-tab-item label="Tab 2">Content 2</bds-tab-item>
        </bds-tab-group>
      `,
    });
    
    // Check that existing functionality still works
    const tabGroup = page.root;
    expect(tabGroup).toHaveProperty('align', 'left');
    
    // Check that new functionality is added
    expect(tabGroup).toHaveProperty('navigationStyled', true);
    expect(tabGroup).toHaveProperty('bodyStyled', true);
    
    // Check that content scrollable default is maintained
    expect(tabGroup).toHaveProperty('contentScrollable', true);
  });
});