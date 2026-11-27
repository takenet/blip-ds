import React from 'react';
import { UaiBarChart, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-bar-chart.mdx';

const ROI_DATA = [
  { label: 'Black Friday Wpp', value: 94000 },
  { label: 'Reativação de carrinho', value: 78000 },
  { label: 'Lançamento 2026', value: 62000 },
  { label: 'Recompra pós-venda', value: 44000 },
  { label: 'Cupom fidelização', value: 27000 },
];

export default {
  title: 'UAI Components/Bar Chart',
  component: UaiBarChart,
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
    seriesLabel: { control: 'text' },
    showLegend: { control: 'boolean' },
    format: { options: ['number', 'currency', 'percent'], control: 'select' },
    currency: { control: 'text' },
    language: { options: ['pt_BR', 'en_US', 'es_ES'], control: 'select' },
  },
};

export const Playground = (args) => (
  <div style={{ maxWidth: 'var(--uai-width-content)' }}>
    <UaiBarChart {...args} />
  </div>
);
Playground.args = {
  data: ROI_DATA,
  seriesLabel: 'ROI',
  showLegend: true,
  format: 'currency',
  currency: 'BRL',
  language: 'pt_BR',
};

export const PercentRanking = () => (
  <div style={{ maxWidth: 'var(--uai-width-content)' }}>
    <UaiBarChart
      data={[
        { label: 'Fluxo de boas-vindas', value: 86 },
        { label: 'Recuperação de boleto', value: 64 },
        { label: 'Pesquisa NPS', value: 49 },
      ]}
      seriesLabel="Taxa de conversão"
      format="percent"
      maxValue={100}
    />
  </div>
);

export const EmptyState = () => (
  <div style={{ maxWidth: 'var(--uai-width-content)' }}>
    <UaiBarChart data={[]} seriesLabel="ROI" />
  </div>
);
