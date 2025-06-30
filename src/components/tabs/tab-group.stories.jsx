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
      navigation-background={args.navigationBackground}
      body-background={args.bodyBackground}
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
  navigationBackground: null,
  bodyBackground: null,
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
  dataTest: ''
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
  navigationBackground: {
    table: {
      defaultValue: { summary: 'null' },
    },
    options: [null, 'surface-1', 'surface-2', 'surface-3', 'surface-4'],
    control: 'select',
  },
  bodyBackground: {
    table: {
      defaultValue: { summary: 'null' },
    },
    options: [null, 'surface-1', 'surface-2', 'surface-3', 'surface-4'],
    control: 'select',
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

// Independent styling examples with dramatic visual differences
export const IndependentNavigationStyling = () => {
  return (
    <bds-grid padding="3" gap="4" direction="column" style={{ backgroundColor: '#f0f0f0', minHeight: '400px' }}>
      <bds-typo variant="fs-20" bold="bold">🎨 Dark Navigation with Light Content</bds-typo>
      <bds-typo variant="fs-14" style={{ color: '#666', marginTop: '-12px' }}>
        Navigation uses surface-4 (dark) background for strong visual contrast
      </bds-typo>
      <bds-tab-group navigation-background="surface-4">
        <bds-tab-item label="🎯 Dashboard">
          <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '200px' }}>
            <bds-typo variant="fs-18" bold="bold">Welcome to the Dashboard</bds-typo>
            <bds-typo variant="fs-16">
              Notice how the navigation bar has a dark background (surface-4) while this content area 
              maintains the default light background. This creates a strong visual separation between 
              the navigation and content sections.
            </bds-typo>
            <bds-grid direction="row" gap="2">
              <bds-button variant="primary">Primary Action</bds-button>
              <bds-button variant="secondary">Secondary Action</bds-button>
            </bds-grid>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="📊 Analytics">
          <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '200px' }}>
            <bds-typo variant="fs-18" bold="bold">Analytics Overview</bds-typo>
            <bds-typo variant="fs-16">
              The dark navigation provides a professional header-like appearance, similar to many 
              modern applications. This matches the Figma design intention for independent styling.
            </bds-typo>
            <bds-grid direction="row" gap="2">
              <bds-chip>Active Users</bds-chip>
              <bds-chip>Revenue</bds-chip>
              <bds-chip>Conversions</bds-chip>
            </bds-grid>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="⚙️ Settings">
          <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '200px' }}>
            <bds-typo variant="fs-18" bold="bold">System Settings</bds-typo>
            <bds-typo variant="fs-16">
              This demonstrates how the dark navigation bar creates a clear visual hierarchy and 
              separates the tab controls from the main content area.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
      </bds-tab-group>
    </bds-grid>
  );
};

export const IndependentBodyStyling = () => {
  return (
    <bds-grid padding="3" gap="4" direction="column" style={{ backgroundColor: '#f0f0f0', minHeight: '800px' }}>
      <bds-typo variant="fs-20" bold="bold">🌈 Each Tab with Different Body Background</bds-typo>
      <bds-typo variant="fs-14" style={{ color: '#666', marginTop: '-12px' }}>
        Demonstrating all surface background variations with different content styling for each tab
      </bds-typo>
      
      {/* Tab with Default Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🏠 Default Background (No Styling)</bds-typo>
        <bds-tab-group>
          <bds-tab-item label="Default Home">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Default White Background</bds-typo>
              <bds-typo variant="fs-14">
                This is the standard appearance without any background styling applied.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-1 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌟 Surface-1 Background (Very Light Gray)</bds-typo>
        <bds-tab-group body-background="surface-1">
          <bds-tab-item label="Surface-1 Content">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-1 Background (#F6F6F6)</bds-typo>
              <bds-typo variant="fs-14">
                Very light gray background - subtle but provides slight contrast from pure white.
              </bds-typo>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'white', 
                borderRadius: '4px',
                border: '1px solid #e0e0e0'
              }}>
                <bds-typo variant="fs-12">Notice the subtle contrast with this white card</bds-typo>
              </div>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-2 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌫️ Surface-2 Background (Light Gray)</bds-typo>
        <bds-tab-group body-background="surface-2">
          <bds-tab-item label="Surface-2 Content">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-2 Background (#E0E0E0)</bds-typo>
              <bds-typo variant="fs-14">
                Light gray background - more noticeable than surface-1, good for secondary content areas.
              </bds-typo>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'white', 
                borderRadius: '4px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}>
                <bds-typo variant="fs-12">Cards stand out nicely against this background</bds-typo>
              </div>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-3 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌊 Surface-3 Background (Medium Gray)</bds-typo>
        <bds-tab-group body-background="surface-3">
          <bds-tab-item label="Surface-3 Content">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-3 Background (#CFCFCF)</bds-typo>
              <bds-typo variant="fs-14">
                Medium gray background - creates good contrast and visual hierarchy.
              </bds-typo>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'white', 
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <bds-typo variant="fs-12">Strong contrast makes content pop</bds-typo>
              </div>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-4 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌚 Surface-4 Background (Dark Gray)</bds-typo>
        <bds-tab-group body-background="surface-4">
          <bds-tab-item label="Surface-4 Content">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold" style={{ color: 'white' }}>Surface-4 Background (#141414)</bds-typo>
              <bds-typo variant="fs-14" style={{ color: '#e0e0e0' }}>
                Dark background - perfect for dramatic contrast and modern interfaces.
              </bds-typo>
              <div style={{ 
                padding: '12px', 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <bds-typo variant="fs-12" style={{ color: '#cfcfcf' }}>Dark theme styling with subtle contrast</bds-typo>
              </div>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Comparison Summary */}
      <div style={{ 
        marginTop: '32px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '2px solid #0096fa'
      }}>
        <bds-typo variant="fs-18" bold="bold" style={{ marginBottom: '16px' }}>📊 Background Color Comparison</bds-typo>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '12px',
          marginTop: '16px'
        }}>
          <div style={{ 
            padding: '16px', 
            backgroundColor: 'white',
            border: '2px solid #f0f0f0',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <bds-typo variant="fs-12" bold="bold">Default</bds-typo>
            <bds-typo variant="fs-10">White</bds-typo>
          </div>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#F6F6F6',
            border: '2px solid #e0e0e0',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <bds-typo variant="fs-12" bold="bold">Surface-1</bds-typo>
            <bds-typo variant="fs-10">#F6F6F6</bds-typo>
          </div>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#E0E0E0',
            border: '2px solid #cfcfcf',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <bds-typo variant="fs-12" bold="bold">Surface-2</bds-typo>
            <bds-typo variant="fs-10">#E0E0E0</bds-typo>
          </div>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#CFCFCF',
            border: '2px solid #a0a0a0',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <bds-typo variant="fs-12" bold="bold">Surface-3</bds-typo>
            <bds-typo variant="fs-10">#CFCFCF</bds-typo>
          </div>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#141414',
            color: 'white',
            border: '2px solid #333',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <bds-typo variant="fs-12" bold="bold" style={{ color: 'white' }}>Surface-4</bds-typo>
            <bds-typo variant="fs-10" style={{ color: '#e0e0e0' }}>#141414</bds-typo>
          </div>
        </div>
      </div>
    </bds-grid>
  );
};

export const CombinedIndependentStyling = () => {
  return (
    <bds-grid padding="3" gap="4" direction="column" style={{ backgroundColor: '#f0f0f0', minHeight: '500px' }}>
      <bds-typo variant="fs-20" bold="bold">🔥 Maximum Contrast: Dark Navigation + Light Content</bds-typo>
      <bds-typo variant="fs-14" style={{ color: '#666', marginTop: '-12px' }}>
        Dark navigation (surface-4) with very light content (surface-1) for maximum visual impact
      </bds-typo>
      <bds-tab-group navigation-background="surface-4" body-background="surface-1">
        <bds-tab-item label="🚀 Launch">
          <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '250px' }}>
            <bds-typo variant="fs-18" bold="bold">Product Launch Dashboard</bds-typo>
            <bds-typo variant="fs-16">
              This combination creates the strongest visual contrast possible with our surface colors. 
              The dark navigation (surface-4: #141414) paired with the very light content area 
              (surface-1: #F6F6F6) provides maximum distinction between sections.
            </bds-typo>
            <bds-grid direction="row" gap="2" style={{ marginTop: '16px' }}>
              <div style={{ 
                padding: '12px 16px', 
                backgroundColor: '#e8f4f8', 
                borderRadius: '4px',
                border: '1px solid #d0ebf0'
              }}>
                <bds-typo variant="fs-14" bold="bold">Launch Status</bds-typo>
                <bds-typo variant="fs-12">Ready to deploy</bds-typo>
              </div>
              <div style={{ 
                padding: '12px 16px', 
                backgroundColor: '#fff2e8', 
                borderRadius: '4px',
                border: '1px solid #ffe4d0'
              }}>
                <bds-typo variant="fs-14" bold="bold">Pending Reviews</bds-typo>
                <bds-typo variant="fs-12">3 items</bds-typo>
              </div>
            </bds-grid>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="📈 Metrics">
          <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '250px' }}>
            <bds-typo variant="fs-18" bold="bold">Performance Metrics</bds-typo>
            <bds-typo variant="fs-16">
              Perfect for creating professional dashboards where you need clear visual hierarchy. 
              The dark header acts like a toolbar while the light content area provides excellent 
              readability for data and content.
            </bds-typo>
            <bds-grid direction="row" gap="3" style={{ marginTop: '16px' }}>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: 1
              }}>
                <bds-typo variant="fs-16" bold="bold">Active Users</bds-typo>
                <bds-typo variant="fs-24" bold="bold" style={{ color: '#1e6bf1' }}>12,547</bds-typo>
              </div>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: 1
              }}>
                <bds-typo variant="fs-16" bold="bold">Conversion Rate</bds-typo>
                <bds-typo variant="fs-24" bold="bold" style={{ color: '#84ebbc' }}>23.4%</bds-typo>
              </div>
            </bds-grid>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="⚡ Performance">
          <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '250px' }}>
            <bds-typo variant="fs-18" bold="bold">System Performance</bds-typo>
            <bds-typo variant="fs-16">
              This styling approach matches modern application designs where navigation areas are 
              darker and content areas are lighter for optimal readability and visual hierarchy.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
      </bds-tab-group>
    </bds-grid>
  );
};

export const AllSurfaceVariations = () => {
  return (
    <bds-grid padding="3" gap="4" direction="column" style={{ minHeight: '600px' }}>
      <bds-typo variant="fs-20" bold="bold">🎨 Complete Surface Color Showcase</bds-typo>
      <bds-typo variant="fs-14" style={{ color: '#666' }}>
        Compare all surface background options to see the visual differences
      </bds-typo>
      
      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">🌟 Most Dramatic: Dark Navigation</bds-typo>
        <div style={{ border: '2px solid #0096fa', borderRadius: '8px', padding: '8px' }}>
          <bds-tab-group navigation-background="surface-4">
            <bds-tab-item label="Dark Header">
              <bds-grid padding="3">
                <bds-typo variant="fs-14" bold="bold">Surface-4 Navigation (#141414)</bds-typo>
                <bds-typo variant="fs-12">Creates maximum contrast with light content</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3">
                <bds-typo variant="fs-14">Professional, modern look with clear separation</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </div>
      </bds-grid>

      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">🔄 Reversed: Dark Content</bds-typo>
        <div style={{ border: '2px solid #84ebbc', borderRadius: '8px', padding: '8px' }}>
          <bds-tab-group body-background="surface-4">
            <bds-tab-item label="Light Header">
              <bds-grid padding="3" style={{ minHeight: '100px' }}>
                <bds-typo variant="fs-14" bold="bold" style={{ color: 'white' }}>Surface-4 Content (#141414)</bds-typo>
                <bds-typo variant="fs-12" style={{ color: '#e0e0e0' }}>Dark content area with light navigation</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3" style={{ minHeight: '100px' }}>
                <bds-typo variant="fs-12" style={{ color: '#cfcfcf' }}>Great for media or focus content</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </div>
      </bds-grid>

      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">⚡ Subtle Variations</bds-typo>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '4px' }}>
            <bds-tab-group navigation-background="surface-2">
              <bds-tab-item label="Surface-2">
                <bds-grid padding="2">
                  <bds-typo variant="fs-12">Medium gray (#E0E0E0)</bds-typo>
                </bds-grid>
              </bds-tab-item>
            </bds-tab-group>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '4px' }}>
            <bds-tab-group navigation-background="surface-3">
              <bds-tab-item label="Surface-3">
                <bds-grid padding="2">
                  <bds-typo variant="fs-12">Darker gray (#CFCFCF)</bds-typo>
                </bds-grid>
              </bds-tab-item>
            </bds-tab-group>
          </div>
        </div>
      </bds-grid>

      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">🎯 Best Practice Combinations</bds-typo>
        <div style={{ 
          border: '3px solid #fde99b', 
          borderRadius: '8px', 
          padding: '8px',
          backgroundColor: '#fffbf0'
        }}>
          <bds-tab-group navigation-background="surface-4" body-background="surface-1">
            <bds-tab-item label="Recommended">
              <bds-grid padding="3">
                <bds-typo variant="fs-14" bold="bold">Best Contrast Combination</bds-typo>
                <bds-typo variant="fs-12">Dark navigation + Very light content = Maximum readability</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Professional">
              <bds-grid padding="3">
                <bds-typo variant="fs-12">Perfect for dashboards, admin panels, and professional interfaces</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </div>
      </bds-grid>
    </bds-grid>
  );
};

export const ExtremeContrastExample = () => {
  return (
    <bds-grid padding="4" gap="4" direction="column" style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '500px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px'
    }}>
      <bds-typo variant="fs-24" bold="bold" style={{ textAlign: 'center', color: '#1e6bf1' }}>
        🔥 EXTREME CONTRAST DEMO 🔥
      </bds-typo>
      <bds-typo variant="fs-16" style={{ textAlign: 'center', color: '#666' }}>
        This example uses the darkest navigation with the lightest content for maximum visual impact
      </bds-typo>
      
      <div style={{ 
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '2px dashed #0096fa'
      }}>
        <bds-tab-group navigation-background="surface-4" body-background="surface-1">
          <bds-tab-item label="🎯 BEFORE & AFTER">
            <div style={{ 
              padding: '32px',
              background: 'linear-gradient(135deg, #f6f6f6 0%, #ffffff 100%)',
              minHeight: '200px'
            }}>
              <bds-typo variant="fs-20" bold="bold" style={{ marginBottom: '16px' }}>
                Navigation: DARK (#141414) vs Content: LIGHT (#F6F6F6)
              </bds-typo>
              <bds-typo variant="fs-16" style={{ marginBottom: '24px' }}>
                Look at the stark difference! The navigation bar above is nearly black while this 
                content area is very light gray - creating maximum visual separation.
              </bds-typo>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '16px',
                marginTop: '24px'
              }}>
                <div style={{ 
                  padding: '16px', 
                  backgroundColor: '#141414',
                  color: 'white',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  <bds-typo variant="fs-14" bold="bold" style={{ color: 'white' }}>
                    Navigation Color
                  </bds-typo>
                  <bds-typo variant="fs-12" style={{ color: '#e0e0e0' }}>
                    #141414 (surface-4)
                  </bds-typo>
                </div>
                <div style={{ 
                  padding: '16px', 
                  backgroundColor: '#F6F6F6',
                  color: '#333',
                  borderRadius: '4px',
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}>
                  <bds-typo variant="fs-14" bold="bold">Content Color</bds-typo>
                  <bds-typo variant="fs-12">#F6F6F6 (surface-1)</bds-typo>
                </div>
              </div>
            </div>
          </bds-tab-item>
          
          <bds-tab-item label="📊 VISUAL COMPARISON">
            <div style={{ 
              padding: '32px',
              background: 'linear-gradient(135deg, #f6f6f6 0%, #ffffff 100%)',
              minHeight: '200px'
            }}>
              <bds-typo variant="fs-18" bold="bold" style={{ marginBottom: '16px' }}>
                Compare with Default Styling
              </bds-typo>
              
              <div style={{ marginBottom: '24px' }}>
                <bds-typo variant="fs-14" bold="bold" style={{ marginBottom: '8px' }}>
                  ❌ Default (No Background Props):
                </bds-typo>
                <div style={{ 
                  padding: '12px', 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  marginBottom: '16px'
                }}>
                  <bds-typo variant="fs-12">Both navigation and content have same/similar backgrounds</bds-typo>
                </div>
              </div>
              
              <div>
                <bds-typo variant="fs-14" bold="bold" style={{ marginBottom: '8px' }}>
                  ✅ With Independent Styling:
                </bds-typo>
                <div style={{ 
                  padding: '12px', 
                  background: 'linear-gradient(to right, #141414 0%, #141414 30%, #F6F6F6 30%, #F6F6F6 100%)',
                  borderRadius: '4px',
                  color: 'white'
                }}>
                  <bds-typo variant="fs-12" style={{ color: 'white' }}>
                    Clear visual separation between navigation and content sections!
                  </bds-typo>
                </div>
              </div>
            </div>
          </bds-tab-item>
          
          <bds-tab-item label="🎨 USE CASES">
            <div style={{ 
              padding: '32px',
              background: 'linear-gradient(135deg, #f6f6f6 0%, #ffffff 100%)',
              minHeight: '200px'
            }}>
              <bds-typo variant="fs-18" bold="bold" style={{ marginBottom: '20px' }}>
                Perfect For These Interface Types:
              </bds-typo>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ 
                  padding: '16px', 
                  backgroundColor: 'white',
                  borderLeft: '4px solid #1e6bf1',
                  borderRadius: '0 4px 4px 0'
                }}>
                  <bds-typo variant="fs-14" bold="bold">🏢 Admin Dashboards</bds-typo>
                  <bds-typo variant="fs-12">Professional look with clear navigation hierarchy</bds-typo>
                </div>
                
                <div style={{ 
                  padding: '16px', 
                  backgroundColor: 'white',
                  borderLeft: '4px solid #84ebbc',
                  borderRadius: '0 4px 4px 0'
                }}>
                  <bds-typo variant="fs-14" bold="bold">📱 Modern Apps</bds-typo>
                  <bds-typo variant="fs-12">Clean separation between header and content areas</bds-typo>
                </div>
                
                <div style={{ 
                  padding: '16px', 
                  backgroundColor: 'white',
                  borderLeft: '4px solid #fde99b',
                  borderRadius: '0 4px 4px 0'
                }}>
                  <bds-typo variant="fs-14" bold="bold">💼 Enterprise Interfaces</bds-typo>
                  <bds-typo variant="fs-12">Matches Figma design system requirements</bds-typo>
                </div>
              </div>
            </div>
          </bds-tab-item>
        </bds-tab-group>
      </div>
    </bds-grid>
  );
};
