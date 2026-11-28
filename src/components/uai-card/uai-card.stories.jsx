import React from 'react';
import DocumentationTemplate from './uai-card.mdx';
import {
  UaiCard,
  UaiCardHeader,
  UaiCardTitle,
  UaiCardSubtitle,
  UaiCardBody,
  UaiCardFooter,
  UaiTypo,
  UaiButton,
  UaiIconButton,
} from '../../../blip-ds-react/dist/components';

const CARD_DEMO_WIDTH = 'calc(var(--uai-sizing-4xl) * 6)';

export default {
  title: 'UAI Components/Card',
  component: UaiCard,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Playground = (args) => (
  <div style={{ maxWidth: CARD_DEMO_WIDTH }}>
    <UaiCard {...args}>
      <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Mais opções" />
      <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
        R$ 184.420
      </UaiTypo>
      <div slot="footer" style={{ display: 'flex', gap: 'var(--uai-spacing-2xs)', alignItems: 'center' }}>
        <span style={{ color: 'var(--uai-feedback-success)', fontWeight: 'var(--uai-font-weight-medium)' }}>+13%</span>
        <span>de investimentos</span>
      </div>
    </UaiCard>
  </div>
);

Playground.args = {
  size: 'sm',
  heading: 'Investimentos',
  description: '',
};

Playground.argTypes = {
  size: {
    options: ['sm', 'md'],
    control: 'select',
    table: { defaultValue: { summary: 'sm' } },
  },
  heading: { control: 'text' },
  description: { control: 'text' },
};

export const Usage = () => (
  <div style={{ maxWidth: CARD_DEMO_WIDTH }}>
    <UaiCard size="md" heading="Evolução temporal" description="Volume semanal de mensagens">
      <UaiTypo variant="body-base" margin={false}>
        Conteúdo principal do card, como gráficos, indicadores ou texto.
      </UaiTypo>
    </UaiCard>
  </div>
);

export const States = () => (
  <div style={{ display: 'grid', gap: 'var(--uai-spacing-md)', maxWidth: CARD_DEMO_WIDTH }}>
    <UaiCard size="sm" heading="Composição por props">
      <UaiTypo variant="body-base" margin={false}>
        Superfície passiva; ações ficam em controles internos como slot="actions".
      </UaiTypo>
    </UaiCard>
    <UaiCard size="sm">
      <UaiCardHeader>
        <div>
          <UaiCardTitle text="Composição legada compatível" />
          <UaiCardSubtitle text="Usando subcomponentes UaiCard*" />
        </div>
      </UaiCardHeader>
      <UaiCardBody>
        <UaiTypo variant="body-base" margin={false}>
          Migração direta de bds-card-* sem reescrever árvore JSX.
        </UaiTypo>
      </UaiCardBody>
      <UaiCardFooter align="flex-end">
        <UaiButton variant="outline" size="short">
          Detalhes
        </UaiButton>
      </UaiCardFooter>
    </UaiCard>
  </div>
);
