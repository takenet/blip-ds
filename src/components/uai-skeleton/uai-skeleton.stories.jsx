import React from 'react';
import { UaiSkeleton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-skeleton.mdx';

export default {
  title: 'UAI/Skeleton',
  component: UaiSkeleton,
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
    shape: { options: ['square', 'circle'], control: 'select' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

const row = { display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' };
const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-xs)', flex: 1 };

export const Playground = (args) => <UaiSkeleton {...args} />;
Playground.args = { shape: 'square', width: '100%', height: 'var(--uai-control-height-medium)' };

export const Shapes = () => (
  <div style={row}>
    <UaiSkeleton shape="square" width="var(--uai-sizing-5xl)" height="var(--uai-sizing-5xl)" />
    <UaiSkeleton shape="circle" width="var(--uai-sizing-5xl)" height="var(--uai-sizing-5xl)" />
  </div>
);

export const Usage = () => (
  <div role="status" aria-busy="true" aria-label="Carregando contatos" style={{ ...column, maxWidth: 'var(--uai-width-panel)' }}>
    {[1, 2, 3].map((item) => (
      <div key={item} style={row}>
        <UaiSkeleton shape="circle" width="var(--uai-sizing-2xl)" height="var(--uai-sizing-2xl)" />
        <div style={column}>
          <UaiSkeleton width="60%" height="var(--uai-sizing-md)" />
          <UaiSkeleton width="40%" height="var(--uai-sizing-sm)" />
        </div>
      </div>
    ))}
  </div>
);
Usage.parameters = {
  docs: {
    source: {
      code: `<UaiThemeProvider theme="light">
  <div role="status" aria-busy="true" aria-label="Carregando contatos">
    <UaiSkeleton shape="circle" width="var(--uai-sizing-2xl)" height="var(--uai-sizing-2xl)" />
    <UaiSkeleton width="60%" height="var(--uai-sizing-md)" />
    <UaiSkeleton width="40%" height="var(--uai-sizing-sm)" />
  </div>
</UaiThemeProvider>`,
    },
  },
};
