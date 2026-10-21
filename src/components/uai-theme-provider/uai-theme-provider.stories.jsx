import React from 'react';
import { UaiButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';

export default {
  title: 'UAI/Theme provider',
  component: UaiThemeProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          'Raiz de tema dos componentes UAI. Coloca `data-uai-theme` no próprio elemento e declara os tokens `--uai-*` do blip-tokens para o conteúdo. Não altera o layout (`display: contents`).',
          '',
          '```jsx\nimport { UaiThemeProvider } from \'blip-ds-react/dist/components\';\n\n<UaiThemeProvider theme="light">\n  <App />\n</UaiThemeProvider>;\n```',
          '',
          'Use um provider na raiz da aplicação. Para uma área com outro tema, como um painel escuro, use um provider aninhado. Fora do React, use o custom element `<uai-theme-provider>`.',
        ].join('\n'),
      },
    },
  },
};

/**
 * Troque o tema para ver os mesmos componentes no tema claro e no escuro. Os componentes UAI dentro do provider leem os tokens do tema escolhido.
 */
export const Playground = (args) => (
  <UaiThemeProvider {...args}>
    <div
      style={{
        display: 'flex',
        gap: '16px',
        padding: '24px',
        borderRadius: '16px',
        background: 'var(--uai-surface-paper)',
        color: 'var(--uai-content-primary)',
      }}
    >
      <UaiButton>Solid</UaiButton>
      <UaiButton variant="outline">Outline</UaiButton>
      <UaiButton variant="text">Text</UaiButton>
    </div>
  </UaiThemeProvider>
);

Playground.args = {
  theme: 'light',
};

Playground.argTypes = {
  theme: {
    table: { defaultValue: { summary: 'light' } },
    description: 'Tema aplicado aos componentes UAI dentro do provider.',
    options: ['light', 'dark'],
    control: 'select',
  },
};
