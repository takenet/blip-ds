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

const styles = {
  width: '720px',
};

const paperStyles = {
  marginTop: '2px',
  marginBottom: '10px',
  padding: '5px',
};

const contentDefault = {
  color: 'var(--color-content-default, #000)',
};

export const Properties = (args) => {
  return (
          <bds-tab-group align={args.align} content-scrollable={args.contentScrollable}>
            <bds-tab-item label={args.label}>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat.
                Integer arcu enim, placerat eget mauris sed, pretium congue augue.
              </bds-typo>
            </bds-tab-item>
            <bds-tab-item disable={args.disable} label="Advanced settings">
              <bds-typo variant="fs-16">
                Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac
                habitasse platea dictumst. Morbi non suscipit nisi.
              </bds-typo>
            </bds-tab-item>
            <bds-tab-item open={args.open} label="Very advanced settings">
              <bds-typo variant="fs-16">
                Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </bds-typo>
            </bds-tab-item>
          </bds-tab-group>
  );
};

Properties.args = {
  align: 'center',
  contentScrollable: true,
  disable: false,
  label: 'Basic settings',
  open: false
};

Properties.argTypes = {
  align: {
    table: {
      defaultValue: { summary: 'center' },
    },
    options: ["center", "left", "right"],
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
  open: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
}

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
