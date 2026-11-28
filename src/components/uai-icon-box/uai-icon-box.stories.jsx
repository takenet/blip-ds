import React from 'react';
import { UaiIcon, UaiIconBox, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-icon-box.mdx';

const SIZES = ['sm', 'md', 'lg'];

export default {
  title: 'UAI Components/Icon Box',
  component: UaiIconBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ padding: 'var(--uai-spacing-md)', backgroundColor: 'var(--uai-surface-paper)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
  argTypes: {
    icon: { control: 'text', description: 'Nome do glifo na fonte de ícones UAI.' },
    iconTheme: { options: ['outline', 'solid'], control: 'select', description: 'Estilo do glifo UAI.' },
    size: { options: SIZES, control: 'select', description: 'Escala do contêiner (`sm`, `md` ou `lg`).' },
  },
};

const row = { display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)', flexWrap: 'wrap' };

export const Playground = (args) => <UaiIconBox {...args} />;
Playground.args = {
  icon: 'robot-2',
  iconTheme: 'outline',
  size: 'md',
};

export const Sizes = () => (
  <div style={row}>
    {SIZES.map((size) => (
      <UaiIconBox key={size} icon="robot-2" size={size} />
    ))}
  </div>
);

export const CustomSlot = () => (
  <div style={row}>
    <UaiIconBox size="md">
      <UaiIcon name="sparkle-ai" theme="solid" color="feedback-info" />
    </UaiIconBox>
  </div>
);
