import React from 'react';
import { UaiChipTag, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-chip-tag.mdx';

const COLORS = ['system', 'outline', 'info', 'success', 'warning', 'danger', 'disabled'];

export default {
  title: 'UAI/Chip Tag',
  component: UaiChipTag,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ padding: 'var(--uai-spacing-xl)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
  argTypes: {
    color: { options: COLORS, control: 'select' },
    icon: { control: 'text' },
  },
};

export const Playground = (args) => <UaiChipTag {...args}>Texto</UaiChipTag>;
Playground.args = { color: 'system', icon: 'info' };

export const Colors = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-md)' }}>
    {COLORS.map((color) => (
      <UaiChipTag key={color} color={color} icon="info">
        {color}
      </UaiChipTag>
    ))}
  </div>
);

export const WithoutIcon = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-md)' }}>
    {COLORS.map((color) => (
      <UaiChipTag key={color} color={color}>
        {color}
      </UaiChipTag>
    ))}
  </div>
);
