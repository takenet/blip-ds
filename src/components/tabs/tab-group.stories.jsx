import React, { useEffect } from 'react';
import { BdsTabGroup, BdsTabItem, BdsTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './tabs.mdx';

export default {
  title: 'Components/Tabs',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const contentDefault = {
  color: 'var(--color-content-default, #000)',
};

export const Properties = (args) => {
  return (
    <bds-tab-group 
      align={args.align} 
      content-scrollable={args.contentScrollable}
      navigation-styled={args.navigationStyled}
      body-styled={args.bodyStyled}
    >
      <bds-tab-item 
        label={args.label} 
        icon={args.icon} 
        icon-position={args.iconPosition} 
        icon-theme={args.iconTheme} 
        badge={args.badge} 
        badge-shape={args.badgeShape} 
        badge-color={args.badgeColor} 
        badge-icon={args.badgeIcon} 
        badge-animation={args.badgeAnimation} 
        badge-number={args.badgeNumber}
        badge-position={args.badgePosition}
      >
        <bds-grid padding="2">
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer arcu enim, placerat eget mauris sed, pretium congue augue.
          </bds-typo>
        </bds-grid>
      </bds-tab-item>
      <bds-tab-item disable={args.disable} label="Advanced settings">
        <bds-grid padding="2">
          <bds-typo variant="fs-16">
            Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac habitasse platea dictumst. Morbi non suscipit nisi.
          </bds-typo>
        </bds-grid>
      </bds-tab-item>
      <bds-tab-item open={args.open} label="Very advanced settings">
        <bds-grid padding="2">
          <bds-typo variant="fs-16">
            Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </bds-typo>
        </bds-grid>
      </bds-tab-item>
    </bds-tab-group>
  );
};

Properties.args = {
  align: 'center',
  contentScrollable: true,
  disable: false,
  label: 'Basic settings',
  icon: 'builder-publish-bot',
  iconPosition: 'left',
  iconTheme: 'outline',
  badge: true,
  badgeShape: 'circle',
  badgeColor: 'warning',
  badgeIcon: 'warning',
  badgeAnimation: false,
  badgeNumber: null,
  badgePosition: 'right',
  open: false,
  dataTest: '',
  navigationStyled: false,
  bodyStyled: false
};

Properties.argTypes = {
  align: {
    table: {
      defaultValue: { summary: 'center' },
    },
    options: ['center', 'left', 'right'],
    control: 'select',
  },
  contentScrollable: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  disable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  iconPosition: {
    table: {
      defaultValue: { summary: 'left' },
    },
    options: ['left', 'right'],
    control: 'select',
  },
  iconTheme: {
    table: {
      defaultValue: { summary: 'solid' },
    },
    options: ['solid', 'outline', 'emoji', 'logos'],
    control: 'select',
  },
  badge: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  badgeShape: {
    table: {
      defaultValue: { summary: 'circle' },
    },
    options: ['circle', 'square', 'triangle', 'triangle-reverse', 'polygon'],
    control: 'select',
  },
  badgeColor: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  badgeIcon: {
    table: {
      defaultValue: { summary: 'system' },
    },
    options: ['system', 'danger', 'warning', 'success', 'neutral'],
    control: 'select',
  },
  badgeAnimation: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  badgeNumber: {
    table: {
      defaultValue: { summary: 'null' },
    },
    control: 'number',
  },
  badgePosition: {
    table: {
      defaultValue: { summary: 'right' },
    },
    options: ['left', 'right'],
    control: 'select',
  },
  open: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  dataTest: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  navigationStyled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  bodyStyled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
};


export const Events = () => {
  useEffect(() => {
    const tabs = document.getElementById('tabs');
    tabs.addEventListener('bdsTabChange', () => {
      console.log('Evento bdsTabChange funcionando');
    });
    tabs.addEventListener('bdsTabDisabled', () => {
      console.log('Evento bdsTabDisabled funcionando');
    });
  });
  return (
          <bds-tab-group id="tabs">
            <bds-tab-item label="Basic settings">
              <bds-typo style={contentDefault} variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat.
                Integer arcu enim, placerat eget mauris sed, pretium congue augue.
              </bds-typo>
            </bds-tab-item>
            <bds-tab-item disable={true} label="Advanced settings">
              <bds-typo style={contentDefault} variant="fs-16">
                Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac
                habitasse platea dictumst. Morbi non suscipit nisi.
              </bds-typo>
            </bds-tab-item>
            <bds-tab-item label="Very advanced settings">
              <bds-typo style={contentDefault} variant="fs-16">
                Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </bds-typo>
            </bds-tab-item>
            <bds-tab-item label="Personal settings">
              <bds-typo style={contentDefault} variant="fs-16">
                Phasellus eget semper ipsum. Vivamus interdum luctus varius. Nullam vel orci elit. Phasellus auctor
                augue vitae ultrices accumsan. In eget ornare orci, eu sollicitudin justo.
              </bds-typo>
            </bds-tab-item>
            <bds-tab-item label="Common settings">
              <bds-typo style={contentDefault} variant="fs-16">
                Integer sollicitudin bibendum eros, quis scelerisque lorem vulputate sit amet. Aliquam cursus lacinia
                egestas. In hac habitasse platea dictumst. Aenean eu volutpat risus.
              </bds-typo>
            </bds-tab-item>
          </bds-tab-group>
  );
};

export const FrameworkReact = () => {
  return (
    <>
          <BdsTabGroup>
            <BdsTabItem label="Basic settings">
              <BdsTypo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat.
                Integer arcu enim, placerat eget mauris sed, pretium congue augue.
              </BdsTypo>
            </BdsTabItem>
            <BdsTabItem label="Advanced settings">
              <BdsTypo variant="fs-16">
                Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac
                habitasse platea dictumst. Morbi non suscipit nisi.
              </BdsTypo>
            </BdsTabItem>
          </BdsTabGroup>
    </>
  );
};

export const IndependentNavigationStyling = () => {
  const navigationStyledTabs = {
    '--tab-navigation-background': '#f8f9fa',
    '--tab-navigation-border': '1px solid #e9ecef',
    '--tab-navigation-border-radius': '8px 8px 0 0',
    '--tab-navigation-padding': '16px 24px',
    '--tab-navigation-shadow': '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <h3>Navigation with Custom Background and Border</h3>
      <div style={{ marginBottom: '32px' }}>
        <bds-tab-group navigation-styled style={navigationStyledTabs}>
          <bds-tab-item label="Dashboard">
            <bds-grid padding="3">
              <bds-typo variant="fs-16">
                This tab group has custom navigation styling with background color, border, and shadow.
                The navigation area is styled independently from the content body.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Analytics">
            <bds-grid padding="3">
              <bds-typo variant="fs-16">
                Notice how the navigation bar has a distinct visual treatment separate from the content area.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Settings">
            <bds-grid padding="3">
              <bds-typo variant="fs-16">
                This demonstrates the capability to style the navigation independently.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>
    </div>
  );
};

export const IndependentBodyStyling = () => {
  const bodyStyledTabs = {
    '--tab-body-background': '#fff',
    '--tab-body-border': '1px solid #e9ecef',
    '--tab-body-border-radius': '0 0 8px 8px',
    '--tab-body-padding': '24px',
    '--tab-body-shadow': '0 4px 6px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <h3>Body with Custom Background and Styling</h3>
      <div style={{ marginBottom: '32px' }}>
        <bds-tab-group body-styled style={bodyStyledTabs}>
          <bds-tab-item label="Content">
            <bds-typo variant="fs-16">
              This tab group has custom body styling with background color, border, padding, and shadow.
              The content area is styled independently from the navigation.
            </bds-typo>
          </bds-tab-item>
          <bds-tab-item label="Media">
            <bds-typo variant="fs-16">
              The body area has distinct styling while the navigation maintains default appearance.
            </bds-typo>
          </bds-tab-item>
          <bds-tab-item label="Documents">
            <bds-typo variant="fs-16">
              This demonstrates independent body styling capabilities.
            </bds-typo>
          </bds-tab-item>
        </bds-tab-group>
      </div>
    </div>
  );
};

export const CombinedIndependentStyling = () => {
  const combinedStyledTabs = {
    '--tab-navigation-background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '--tab-navigation-border': 'none',
    '--tab-navigation-border-radius': '12px 12px 0 0',
    '--tab-navigation-padding': '20px 32px',
    '--tab-navigation-shadow': '0 -2px 10px rgba(102, 126, 234, 0.25)',
    
    '--tab-body-background': '#ffffff',
    '--tab-body-border': '2px solid #f1f3f4',
    '--tab-body-border-radius': '0 0 12px 12px',
    '--tab-body-padding': '32px',
    '--tab-body-shadow': '0 8px 16px rgba(0,0,0,0.1)',
    '--tab-body-margin': '0'
  };

  return (
    <div>
      <h3>Combined Navigation and Body Independent Styling</h3>
      <div style={{ marginBottom: '32px' }}>
        <bds-tab-group navigation-styled body-styled style={combinedStyledTabs}>
          <bds-tab-item label="Overview">
            <div style={{ minHeight: '200px' }}>
              <bds-typo variant="fs-16" style={{ marginBottom: '16px' }}>
                This example demonstrates both navigation and body styling working together.
              </bds-typo>
              <bds-typo variant="fs-14">
                • Navigation has a gradient background and rounded top corners<br/>
                • Body has white background with border and rounded bottom corners<br/>
                • Both areas have independent shadows and spacing<br/>
                • This creates a card-like appearance with distinct sections
              </bds-typo>
            </div>
          </bds-tab-item>
          <bds-tab-item label="Details">
            <div style={{ minHeight: '200px' }}>
              <bds-typo variant="fs-16" style={{ marginBottom: '16px' }}>
                The styling is completely independent between navigation and content.
              </bds-typo>
              <bds-typo variant="fs-14">
                This enables designers to create interfaces where the tab navigation
                and content body have completely different visual treatments.
              </bds-typo>
            </div>
          </bds-tab-item>
          <bds-tab-item label="Configuration">
            <div style={{ minHeight: '200px' }}>
              <bds-typo variant="fs-16" style={{ marginBottom: '16px' }}>
                All styling is controlled via CSS custom properties.
              </bds-typo>
              <bds-typo variant="fs-14">
                This approach maintains backward compatibility while enabling
                powerful new styling capabilities as requested in the Figma designs.
              </bds-typo>
            </div>
          </bds-tab-item>
        </bds-tab-group>
      </div>
    </div>
  );
};

export const DefaultVsStyledComparison = () => {
  const styledTabs = {
    '--tab-navigation-background': '#e3f2fd',
    '--tab-navigation-border': '1px solid #2196f3',
    '--tab-navigation-padding': '12px 20px',
    '--tab-body-background': '#f5f5f5',
    '--tab-body-border': '1px solid #ddd',
    '--tab-body-padding': '20px'
  };

  return (
    <div>
      <h3>Comparison: Default vs Independent Styling</h3>
      
      <div style={{ marginBottom: '32px' }}>
        <h4>Default Styling (Existing Behavior)</h4>
        <bds-tab-group>
          <bds-tab-item label="Tab 1">
            <bds-grid padding="2">
              <bds-typo variant="fs-16">
                This uses the default tab styling with no independent control over navigation and body areas.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Tab 2">
            <bds-grid padding="2">
              <bds-typo variant="fs-16">
                Default styling maintains existing appearance and behavior.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h4>Independent Styling (New Capability)</h4>
        <bds-tab-group navigation-styled body-styled style={styledTabs}>
          <bds-tab-item label="Tab 1">
            <bds-typo variant="fs-16">
              This demonstrates independent styling with different background colors and borders for 
              navigation and body areas.
            </bds-typo>
          </bds-tab-item>
          <bds-tab-item label="Tab 2">
            <bds-typo variant="fs-16">
              The navigation and content areas can now have completely different visual treatments
              as requested in the Figma component requirements.
            </bds-typo>
          </bds-tab-item>
        </bds-tab-group>
      </div>
    </div>
  );
};
