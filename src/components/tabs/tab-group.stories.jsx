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
    <bds-tab-group align={args.align} content-scrollable={args.contentScrollable}>
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
        error={args.error}
        header-style={args.headerStyle}
        content-style={args.contentStyle}
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
  error: false,
  headerStyle: null,
  contentStyle: null
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
  error: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  headerStyle: {
    table: {
      defaultValue: { summary: 'null' },
    },
    control: {
      type: 'text',
    },
    description: 'Optional inline styles to be applied to the tab group header element',
  },
  contentStyle: {
    table: {
      defaultValue: { summary: 'null' },
    },
    control: {
      type: 'text',
    },
    description: 'Optional inline styles to be applied to the tab group content element',
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
            <bds-tab-item label="Basic settings" error={true}>
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

export const CustomStyling = () => {
  return (
    <bds-tab-group>
      <bds-tab-item 
        label="Basic settings" 
        error={true}
        header-style="padding: 0;"
        content-style="background: red;"
      >
        <bds-typo variant="fs-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer arcu enim, placerat eget mauris sed, pretium congue augue.
        </bds-typo>
      </bds-tab-item>
      <bds-tab-item 
        label="Advanced settings"
        header-style="padding: 20px; background: lightblue;"
        content-style="background: lightgreen; padding: 20px;"
      >
        <bds-typo variant="fs-16">
          Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac habitasse platea dictumst. Morbi non suscipit nisi.
        </bds-typo>
      </bds-tab-item>
      <bds-tab-item 
        label="Very advanced settings"
        header-style="padding: 10px; border: 2px solid purple;"
        content-style="background: lightyellow; border: 1px solid orange; padding: 15px;"
      >
        <bds-typo variant="fs-16">
          Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
