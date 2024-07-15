import React from 'react';
import DocumentationTemplate from './tooltip.mdx';
import { BdsGrid, BdsIcon, BdsTooltip } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Tooltip',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-grid margin="auto">
      <bds-tooltip
        position={args.position}
        tooltip-text={args.tooltipText}
        disabled={args.disabled}
        max-width={args.maxWidth}
      >
        <bds-button>Hover me</bds-button>
      </bds-tooltip>
    </bds-grid>
  );
};

Properties.args = {
  disabled: false,
  position: 'right-center',
  tooltipText: 'Tooltip',
  maxWidth: '',
};

Properties.argTypes = {
  disabled: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'boolean',
  },
  position: {
    table: {
      defaultValue: { summary: 'right-center' },
    },
    options: [
      'bottom-center',
      'bottom-left',
      'bottom-right',
      'left-bottom',
      'left-center',
      'left-top',
      'right-bottom',
      'right-center',
      'right-top',
      'top-center',
      'top-left',
      'top-right',
    ],
    control: 'select',
  },
  tooltipText: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  maxWidth: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
};

export const Methods = () => {
  const showTooltip = async (id) => {
    const tooltip = document.getElementById(id);
    tooltip.visible();
  };
  return (
    <bds-grid margin="auto" gap="3" direction="column" align-items="center">
      <bds-tooltip id="tooltip" position="left-center" tooltip-text="Texto do tooltip">
        <bds-icon name="warning"></bds-icon>
      </bds-tooltip>
      <bds-button onClick={() => showTooltip('tooltip')}>Mostrar tooltip</bds-button>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsGrid margin="auto" gap="3" direction="column" align-items="center">
      <BdsTooltip id="tooltip" position="left-center" tooltip-text="Texto do tooltip">
        <BdsIcon name="warning"></BdsIcon>
      </BdsTooltip>
    </BdsGrid>
  );
};
