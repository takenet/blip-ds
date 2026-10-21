import React from 'react';

export default {
  title: 'UAI/Theme provider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Raiz de tema dos componentes UAI. Coloca `data-uai-theme` no próprio elemento e declara os tokens `--uai-*` do blip-tokens para o conteúdo. Não altera o layout (`display: contents`).',
      },
    },
  },
};

export const Properties = (args) => (
  <uai-theme-provider theme={args.theme}>
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
      <uai-button>Solid</uai-button>
      <uai-button variant="outline">Outline</uai-button>
      <uai-button variant="text">Text</uai-button>
    </div>
  </uai-theme-provider>
);

Properties.args = {
  theme: 'light',
};

Properties.argTypes = {
  theme: {
    table: { defaultValue: { summary: 'light' } },
    description: 'Tema aplicado aos componentes UAI dentro do provider.',
    options: ['light', 'dark'],
    control: 'select',
  },
};
