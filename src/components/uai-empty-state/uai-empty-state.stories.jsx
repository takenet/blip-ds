import React from 'react';
import {
  UaiButton,
  UaiEmptyState,
  UaiPaper,
  UaiThemeProvider,
} from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-empty-state.mdx';

export default {
  title: 'UAI/Empty State',
  component: UaiEmptyState,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(var(--uai-width-panel), 1fr))',
  gap: 'var(--uai-spacing-md)',
  alignItems: 'start',
};
const narrow = { maxWidth: 'var(--uai-width-panel)' };

// The action of each variant, as in the Figma masters: outline short on page, text short on inline.
const RetryButton = ({ variant }) => (
  <UaiButton
    slot="actions"
    variant={variant === 'inline' ? 'text' : 'outline'}
    color="content"
    size="short"
    iconLeft="refresh"
  >
    Tentar de novo
  </UaiButton>
);

export const Playground = ({ showActions, ...args }) => (
  <div style={args.variant === 'inline' ? narrow : undefined}>
    <UaiEmptyState {...args}>{showActions && <RetryButton variant={args.variant} />}</UaiEmptyState>
  </div>
);
Playground.args = {
  variant: 'page',
  tone: 'neutral',
  icon: 'message-ballon',
  heading: 'Título curto do estado',
  headingTag: 'h2',
  description: 'Explique o que aconteceu e o que a pessoa pode fazer agora.',
  showActions: true,
};
Playground.argTypes = {
  variant: { control: 'select', options: ['page', 'inline'] },
  tone: { control: 'select', options: ['neutral', 'error'] },
  icon: { control: 'text' },
  heading: { control: 'text' },
  headingTag: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] },
  description: { control: 'text' },
  showActions: { control: 'boolean', description: 'Preenche o slot actions (só na story).' },
};

export const Variants = () => (
  <div style={grid}>
    {['page', 'inline'].map((variant) =>
      ['neutral', 'error'].map((tone) => (
        <div key={`${variant}-${tone}`} style={variant === 'inline' ? narrow : undefined}>
          <UaiEmptyState
            variant={variant}
            tone={tone}
            heading="Título curto do estado"
            description="Explique o que aconteceu e o que a pessoa pode fazer agora."
          >
            <RetryButton variant={variant} />
          </UaiEmptyState>
        </div>
      )),
    )}
  </div>
);

export const InsidePaper = () => (
  <UaiPaper>
    <UaiEmptyState
      heading="Escolha uma conversa"
      description="Selecione uma conversa na lista para acompanhar o atendimento."
    />
  </UaiPaper>
);

export const InlineError = () => (
  <div style={narrow}>
    <UaiEmptyState variant="inline" tone="error" heading="Não foi possível carregar as conversas">
      <RetryButton variant="inline" />
    </UaiEmptyState>
  </div>
);

export const RichDescription = () => (
  <div style={narrow}>
    <UaiEmptyState variant="inline" icon="search" heading="Nenhum contato no período">
      <span>
        Ninguém falou com a operação no período. <a href="#rich-description">Ver outro período</a>
      </span>
      <UaiButton slot="actions" variant="text" color="content" size="short">
        Limpar filtros
      </UaiButton>
    </UaiEmptyState>
  </div>
);

export const TwoActions = () => (
  <UaiEmptyState icon="search" heading="Nenhum resultado" description="Tente outro termo ou limpe os filtros.">
    <UaiButton slot="actions" variant="outline" color="content" size="short">
      Limpar filtros
    </UaiButton>
    <UaiButton slot="actions" variant="solid" size="short">
      Nova busca
    </UaiButton>
  </UaiEmptyState>
);
