import React from 'react';
import { UaiLineChart, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-line-chart.mdx';

const SERIES = [
  { key: 'invested', label: 'Valor investido' },
  { key: 'conversations', label: 'Conversas iniciadas' },
  { key: 'revenue', label: 'Receita' },
];

const DATA = [
  { key: '20/07', invested: 90000, conversations: 140000, revenue: 210000 },
  { key: '01/08', invested: 120000, conversations: 185000, revenue: 260000 },
  { key: '10/08', invested: 150000, conversations: 240000, revenue: 310000 },
  { key: 'Hoje', invested: 170000, conversations: 280000, revenue: 350000 },
];

export default {
  title: 'UAI Components/Line Chart',
  component: UaiLineChart,
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
    tooltipTitle: { control: 'text' },
    format: { options: ['number', 'currency', 'percent'], control: 'select' },
    currency: { control: 'text' },
    language: { options: ['pt_BR', 'en_US', 'es_ES'], control: 'select' },
    showLegend: { control: 'boolean' },
  },
};

export const Playground = (args) => (
  <div style={{ maxWidth: 'var(--uai-width-content)' }}>
    <UaiLineChart {...args} />
  </div>
);
Playground.args = {
  series: SERIES,
  data: DATA,
  tooltipTitle: 'Evolução',
  format: 'number',
  currency: 'BRL',
  language: 'pt_BR',
  showLegend: true,
};

export const CurrencyEvolution = () => (
  <div style={{ maxWidth: 'var(--uai-width-content)' }}>
    <UaiLineChart
      series={[
        { key: 'revenue', label: 'Receita atribuída', color: 'ai-start' },
        { key: 'cost', label: 'Custo operacional', color: 'ai-middle' },
      ]}
      data={[
        { label: 'Sem 1', revenue: 45000, cost: 12000 },
        { label: 'Sem 2', revenue: 62000, cost: 15000 },
        { label: 'Sem 3', revenue: 78000, cost: 16500 },
        { label: 'Sem 4', revenue: 96000, cost: 18000 },
      ]}
      tooltipTitle="Resultado semanal"
      format="currency"
      currency="BRL"
    />
  </div>
);

export const EmptyState = () => (
  <div style={{ maxWidth: 'var(--uai-width-content)' }}>
    <UaiLineChart series={SERIES} data={[]} />
  </div>
);
