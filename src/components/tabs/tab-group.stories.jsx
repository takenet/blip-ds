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

// Independent styling examples
export const IndependentNavigationStyling = () => {
  return (
    <bds-grid padding="2" gap="2" direction="column">
      <bds-typo variant="fs-20" bold="bold">Navigation with Surface-2 Background</bds-typo>
      <bds-tab-group navigation-background="surface-2">
        <bds-tab-item label="Design">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              This example shows independent styling of the navigation bar with surface-2 background.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="Development">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              The navigation has a different background color while the content remains with default styling.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="Testing">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              This allows for creating distinct visual sections as shown in the Figma designs.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
      </bds-tab-group>
    </bds-grid>
  );
};

export const IndependentBodyStyling = () => {
  return (
    <bds-grid padding="2" gap="2" direction="column">
      <bds-typo variant="fs-20" bold="bold">Body with Surface-3 Background</bds-typo>
      <bds-tab-group body-background="surface-3">
        <bds-tab-item label="Overview">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              This example shows independent styling of the body content with surface-3 background.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="Details">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              The content area has a different background color while the navigation remains with default styling.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="Settings">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              This enables creating interfaces with distinct visual treatments for different sections.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
      </bds-tab-group>
    </bds-grid>
  );
};

export const CombinedIndependentStyling = () => {
  return (
    <bds-grid padding="2" gap="2" direction="column">
      <bds-typo variant="fs-20" bold="bold">Both Navigation and Body with Independent Backgrounds</bds-typo>
      <bds-tab-group navigation-background="surface-2" body-background="surface-1">
        <bds-tab-item label="Dashboard">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              This example shows both navigation and body with independent background styling.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="Analytics">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              The navigation has surface-2 background while the content area has surface-1 background.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
        <bds-tab-item label="Reports">
          <bds-grid padding="2">
            <bds-typo variant="fs-16">
              This matches the desired interface shown in the Figma designs.
            </bds-typo>
          </bds-grid>
        </bds-tab-item>
      </bds-tab-group>
    </bds-grid>
  );
};

export const AllSurfaceVariations = () => {
  return (
    <bds-grid padding="2" gap="3" direction="column">
      <bds-typo variant="fs-20" bold="bold">All Surface Background Variations</bds-typo>
      
      <bds-grid gap="2" direction="column">
        <bds-typo variant="fs-16" bold="bold">Surface-1 Navigation</bds-typo>
        <bds-tab-group navigation-background="surface-1">
          <bds-tab-item label="Tab 1">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Navigation with surface-1 background</bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Tab 2">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Content with default background</bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </bds-grid>

      <bds-grid gap="2" direction="column">
        <bds-typo variant="fs-16" bold="bold">Surface-2 Navigation</bds-typo>
        <bds-tab-group navigation-background="surface-2">
          <bds-tab-item label="Tab 1">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Navigation with surface-2 background</bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Tab 2">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Content with default background</bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </bds-grid>

      <bds-grid gap="2" direction="column">
        <bds-typo variant="fs-16" bold="bold">Surface-3 Navigation</bds-typo>
        <bds-tab-group navigation-background="surface-3">
          <bds-tab-item label="Tab 1">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Navigation with surface-3 background</bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Tab 2">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Content with default background</bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </bds-grid>

      <bds-grid gap="2" direction="column">
        <bds-typo variant="fs-16" bold="bold">Surface-4 Navigation</bds-typo>
        <bds-tab-group navigation-background="surface-4">
          <bds-tab-item label="Tab 1">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Navigation with surface-4 background</bds-typo>
            </bds-grid>
          </bds-tab-item>
          <bds-tab-item label="Tab 2">
            <bds-grid padding="2">
              <bds-typo variant="fs-14">Content with default background</bds-typo>
            </bds-grid>
          </bds-tab-item>
        </bds-tab-group>
      </bds-grid>
    </bds-grid>
  );
};
