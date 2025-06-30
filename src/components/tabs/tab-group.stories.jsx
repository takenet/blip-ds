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
    <bds-grid padding="3" gap="4" direction="column" style={{ minHeight: '400px' }}>
      <bds-typo variant="fs-20" bold="bold">🎨 White Navigation with Default Content</bds-typo>
      <bds-typo variant="fs-14" style={{ marginTop: '-12px' }}>
        Navigation uses surface-0 (white) background for clean, minimal appearance
      </bds-typo>
      <bds-tab-group navigation-background="surface-0">
        <bds-tab-item label="🎯 Dashboard">
          <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '200px' }}>
            <bds-typo variant="fs-18" bold="bold">Welcome to the Dashboard</bds-typo>
            <bds-typo variant="fs-16">
              Notice how the navigation bar has a clean white background (surface-0) while this content area 
              maintains the default background. This creates a subtle but clear visual separation between 
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
              The white navigation provides a clean, minimal header appearance that works well in both 
              light and dark themes. This matches the Figma design intention for independent styling.
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
              This demonstrates how the white navigation bar creates a clean visual hierarchy and 
              separates the tab controls from the main content area in a subtle way.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
      </bds-tab-group>
    </bds-grid>
  );
};

export const IndependentBodyStyling = () => {
  return (
    <bds-grid padding="3" gap="4" direction="column" style={{ minHeight: '600px' }}>
      <bds-typo variant="fs-20" bold="bold">🌈 Multiple Tabs with Different Gray Background Tones</bds-typo>
      <bds-typo variant="fs-14" style={{ marginTop: '-12px' }}>
        Each tab group demonstrates a different gray tone background, progressing from lightest to darkest
      </bds-typo>
      
      {/* Single tab group showing all backgrounds in tabs */}
      <div style={{ marginBottom: '32px' }}>
        <bds-typo variant="fs-18" bold="bold" style={{ marginBottom: '16px' }}>🎯 Progressive Gray Tone Demonstration</bds-typo>
        <bds-typo variant="fs-14" style={{ marginBottom: '16px' }}>
          Click through each tab to see different background tones from surface-1 (lightest) to surface-4 (darkest)
        </bds-typo>
      </div>

      {/* Tab with Surface-1 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌟 Surface-1 (Lightest Gray)</bds-typo>
        <bds-tab-group body-background="surface-1">
          <bds-tab-item label="Very Light" open>
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-1 Background</bds-typo>
              <bds-typo variant="fs-14">
                The lightest gray tone - subtle contrast from pure white, perfect for minimal designs.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Alternative">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Consistent Light Background</bds-typo>
              <bds-typo variant="fs-14">
                All tabs in this group share the same light background tone.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Example">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Light Gray Content</bds-typo>
              <bds-typo variant="fs-14">
                Great for clean, minimal interfaces with subtle background differentiation.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-2 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌫️ Surface-2 (Light Gray)</bds-typo>
        <bds-tab-group body-background="surface-2">
          <bds-tab-item label="Light Gray" open>
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-2 Background</bds-typo>
              <bds-typo variant="fs-14">
                Light gray background - more noticeable than surface-1, good for secondary content areas.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Content A">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Consistent Medium-Light Tone</bds-typo>
              <bds-typo variant="fs-14">
                Perfect for content areas that need subtle visual separation.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Content B">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Balanced Gray Background</bds-typo>
              <bds-typo variant="fs-14">
                Provides good contrast for white cards and elements while remaining subtle.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-3 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌊 Surface-3 (Medium Gray)</bds-typo>
        <bds-tab-group body-background="surface-3">
          <bds-tab-item label="Medium Gray" open>
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-3 Background</bds-typo>
              <bds-typo variant="fs-14">
                Medium gray background - creates good contrast and visual hierarchy for content.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Dashboard">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Professional Gray Tone</bds-typo>
              <bds-typo variant="fs-14">
                Ideal for business applications and dashboards requiring clear content separation.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Settings">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Structured Background</bds-typo>
              <bds-typo variant="fs-14">
                Creates strong visual hierarchy while maintaining readability.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>

      {/* Tab with Surface-4 Background */}
      <div style={{ marginBottom: '24px' }}>
        <bds-typo variant="fs-16" bold="bold" style={{ marginBottom: '8px' }}>🌚 Surface-4 (Darkest Gray)</bds-typo>
        <bds-tab-group body-background="surface-4">
          <bds-tab-item label="Dark Gray" open>
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Surface-4 Background</bds-typo>
              <bds-typo variant="fs-14">
                Dark background - creates dramatic contrast and modern interface aesthetics.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Media">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Dramatic Dark Tone</bds-typo>
              <bds-typo variant="fs-14">
                Perfect for media applications, dark themes, and high-contrast interfaces.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Focus">
            <bds-grid padding="4" gap="3" direction="column" style={{ minHeight: '120px' }}>
              <bds-typo variant="fs-16" bold="bold">Maximum Contrast Background</bds-typo>
              <bds-typo variant="fs-14">
                Creates the strongest visual impact with maximum contrast against content.
              </bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </div>
    </bds-grid>
  );
};

export const CombinedIndependentStyling = () => {
  return (
    <bds-grid padding="3" gap="4" direction="column" style={{ minHeight: '500px' }}>
      <bds-typo variant="fs-20" bold="bold">🔥 Combined Styling: Navigation + Body Backgrounds</bds-typo>
      <bds-typo variant="fs-14" style={{ marginTop: '-12px' }}>
        Demonstrates combining navigation and body background styling for maximum visual impact
      </bds-typo>
      <bds-tab-group navigation-background="surface-4" body-background="surface-1">
        <bds-tab-item label="🚀 Launch">
          <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '250px' }}>
            <bds-typo variant="fs-18" bold="bold">Product Launch Dashboard</bds-typo>
            <bds-typo variant="fs-16">
              This combination creates strong visual contrast with surface colors. 
              The dark navigation (surface-4) paired with the very light content area 
              (surface-1) provides excellent distinction between sections and adapts to both light and dark themes.
            </bds-typo>
            <bds-grid direction="row" gap="2" style={{ marginTop: '16px' }}>
              <bds-chip color="info">Launch Status</bds-chip>
              <bds-chip color="warning">Pending Reviews</bds-chip>
              <bds-chip color="success">Ready to Deploy</bds-chip>
            </bds-grid>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="📈 Metrics">
          <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '250px' }}>
            <bds-typo variant="fs-18" bold="bold">Performance Metrics</bds-typo>
            <bds-typo variant="fs-16">
              Perfect for creating professional dashboards where you need clear visual hierarchy. 
              The contrasting headers act like toolbars while the content area provides excellent 
              readability for data and content in any theme.
            </bds-typo>
            <bds-grid direction="row" gap="3" style={{ marginTop: '16px' }}>
              <bds-card padding="2" style={{ flex: 1 }}>
                <bds-typo variant="fs-16" bold="bold">Active Users</bds-typo>
                <bds-typo variant="fs-24" bold="bold">12,547</bds-typo>
              </bds-card>
              <bds-card padding="2" style={{ flex: 1 }}>
                <bds-typo variant="fs-16" bold="bold">Conversion Rate</bds-typo>
                <bds-typo variant="fs-24" bold="bold">23.4%</bds-typo>
              </bds-card>
            </bds-grid>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="⚡ Performance">
          <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '250px' }}>
            <bds-typo variant="fs-18" bold="bold">System Performance</bds-typo>
            <bds-typo variant="fs-16">
              This styling approach matches modern application designs where navigation areas have 
              different backgrounds from content areas, creating optimal visual hierarchy that works 
              seamlessly across both light and dark themes.
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
      <bds-typo variant="fs-14">
        Compare all surface background options and see how they adapt to light and dark themes
      </bds-typo>
      
      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">🌟 Clean Navigation Examples</bds-typo>
        <bds-card padding="2">
          <bds-tab-group navigation-background="surface-0">
            <bds-tab-item label="Surface-0 Nav">
              <bds-grid padding="3">
                <bds-typo variant="fs-14" bold="bold">Surface-0 Navigation</bds-typo>
                <bds-typo variant="fs-12">Clean white/base background that adapts to theme</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3">
                <bds-typo variant="fs-14">Minimal, clean appearance with theme adaptation</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </bds-card>
      </bds-grid>

      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">🔄 Progressive Content Backgrounds</bds-typo>
        <bds-card padding="2" style={{ marginBottom: '12px' }}>
          <bds-typo variant="fs-14" bold="bold" style={{ marginBottom: '8px' }}>Surface-1 Content</bds-typo>
          <bds-tab-group body-background="surface-1">
            <bds-tab-item label="Lightest">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-14">Subtle background variation - lightest gray tone</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-12">Perfect for minimal content differentiation</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </bds-card>
        
        <bds-card padding="2" style={{ marginBottom: '12px' }}>
          <bds-typo variant="fs-14" bold="bold" style={{ marginBottom: '8px' }}>Surface-2 Content</bds-typo>
          <bds-tab-group body-background="surface-2">
            <bds-tab-item label="Light">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-14">Balanced gray background - medium light tone</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-12">Good for secondary content areas</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </bds-card>

        <bds-card padding="2" style={{ marginBottom: '12px' }}>
          <bds-typo variant="fs-14" bold="bold" style={{ marginBottom: '8px' }}>Surface-3 Content</bds-typo>
          <bds-tab-group body-background="surface-3">
            <bds-tab-item label="Medium">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-14">Medium gray background - good contrast</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-12">Creates clear visual hierarchy</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </bds-card>

        <bds-card padding="2">
          <bds-typo variant="fs-14" bold="bold" style={{ marginBottom: '8px' }}>Surface-4 Content</bds-typo>
          <bds-tab-group body-background="surface-4">
            <bds-tab-item label="Dark">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-14">Dark background - maximum contrast</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Example">
              <bds-grid padding="3" style={{ minHeight: '80px' }}>
                <bds-typo variant="fs-12">Perfect for dramatic visual impact</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </bds-card>
      </bds-grid>

      <bds-grid gap="3" direction="column">
        <bds-typo variant="fs-16" bold="bold">🎯 Recommended Combination</bds-typo>
        <bds-card padding="2" color="info">
          <bds-tab-group navigation-background="surface-4" body-background="surface-1">
            <bds-tab-item label="Best Practice">
              <bds-grid padding="3">
                <bds-typo variant="fs-14" bold="bold">Optimal Contrast Combination</bds-typo>
                <bds-typo variant="fs-12">Dark navigation + Light content = Maximum readability across themes</bds-typo>
              </bds-grid>
            </bds-tab-item>
            <bds-tab-item label="Professional">
              <bds-grid padding="3">
                <bds-typo variant="fs-12">Perfect for dashboards, admin panels, and professional interfaces</bds-typo>
              </bds-grid>
            </bds-tab-item>
          </bds-tab-group>
        </bds-card>
      </bds-grid>
    </bds-grid>
  );
};

export const ExtremeContrastExample = () => {
  return (
    <bds-grid padding="4" gap="4" direction="column" style={{ 
      minHeight: '500px',
      borderRadius: '8px'
    }}>
      <bds-typo variant="fs-24" bold="bold" style={{ textAlign: 'center' }}>
        🔥 EXTREME CONTRAST DEMO 🔥
      </bds-typo>
      <bds-typo variant="fs-16" style={{ textAlign: 'center' }}>
        This example demonstrates the most dramatic visual contrast using surface-4 navigation with surface-1 content
      </bds-typo>
      
      <bds-card padding="3" style={{ marginTop: '16px' }}>
        <bds-tab-group navigation-background="surface-4" body-background="surface-1">
          <bds-tab-item label="🎯 BEFORE & AFTER">
            <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '200px' }}>
              <bds-typo variant="fs-20" bold="bold" style={{ marginBottom: '16px' }}>
                Navigation vs Content Background Contrast
              </bds-typo>
              <bds-typo variant="fs-16" style={{ marginBottom: '24px' }}>
                Look at the stark difference! The navigation bar above uses surface-4 while this 
                content area uses surface-1 - creating maximum visual separation that adapts perfectly 
                to both light and dark themes.
              </bds-typo>
              
              <bds-grid direction="row" gap="3" style={{ marginTop: '24px' }}>
                <bds-chip color="system">Navigation: Surface-4</bds-chip>
                <bds-chip color="info">Content: Surface-1</bds-chip>
                <bds-chip color="success">Theme Adaptive</bds-chip>
              </bds-grid>
            </bds-grid>
          </bds-tab-item>
          
          <bds-tab-item label="📊 VISUAL COMPARISON">
            <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '200px' }}>
              <bds-typo variant="fs-18" bold="bold" style={{ marginBottom: '16px' }}>
                Compare with Default Styling
              </bds-typo>
              
              <bds-alert color="warning" style={{ marginBottom: '16px' }}>
                <bds-typo variant="fs-14" bold="bold">❌ Default (No Background Props):</bds-typo>
                <bds-typo variant="fs-12">Both navigation and content have same/similar backgrounds</bds-typo>
              </bds-alert>
              
              <bds-alert color="success">
                <bds-typo variant="fs-14" bold="bold">✅ With Independent Styling:</bds-typo>
                <bds-typo variant="fs-12">
                  Clear visual separation between navigation and content sections that works in any theme!
                </bds-typo>
              </bds-alert>
            </bds-grid>
          </bds-tab-item>
          
          <bds-tab-item label="🎨 USE CASES">
            <bds-grid padding="4" gap="4" direction="column" style={{ minHeight: '200px' }}>
              <bds-typo variant="fs-18" bold="bold" style={{ marginBottom: '20px' }}>
                Perfect For These Interface Types:
              </bds-typo>
              
              <bds-grid gap="3" direction="column">
                <bds-card padding="3" color="primary">
                  <bds-typo variant="fs-14" bold="bold">🏢 Admin Dashboards</bds-typo>
                  <bds-typo variant="fs-12">Professional look with clear navigation hierarchy</bds-typo>
                </bds-card>
                
                <bds-card padding="3" color="success">
                  <bds-typo variant="fs-14" bold="bold">📱 Modern Apps</bds-typo>
                  <bds-typo variant="fs-12">Clean separation between header and content areas</bds-typo>
                </bds-card>
                
                <bds-card padding="3" color="warning">
                  <bds-typo variant="fs-14" bold="bold">💼 Enterprise Interfaces</bds-typo>
                  <bds-typo variant="fs-12">Matches Figma design system requirements with theme support</bds-typo>
                </bds-card>
              </bds-grid>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </bds-card>
    </bds-grid>
  );
};
