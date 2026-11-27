import React, { useState } from 'react';
import DocumentationTemplate from './uai-filter-bar.mdx';
import { UaiFilterBar } from '../../../blip-ds-react/dist/components';

const SAMPLE_CATEGORIES = [
  {
    id: 'campanha',
    label: 'Campanha',
    search: true,
    searchPlaceholder: 'Buscar campanha',
    options: ['Black Friday Wpp', 'Reativação de carrinho', 'Lançamento 2026', 'Cupom fidelização'],
  },
  {
    id: 'canal',
    label: 'Canal',
    options: ['WhatsApp', 'Instagram', 'Webchat'],
  },
];

export default {
  title: 'UAI Components/Filter Bar',
  component: UaiFilterBar,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Playground = (args) => <UaiFilterBar {...args} categories={SAMPLE_CATEGORIES} />;

Playground.args = {
  selectedPeriod: '7d',
  searchValue: '',
  searchPlaceholder: 'Buscar indicadores ou campanhas',
  showPeriods: true,
  showSearch: true,
  showFilterButton: true,
  language: 'pt_BR',
};

Playground.argTypes = {
  selectedPeriod: {
    options: ['custom', 'yesterday', 'today', '7d', '15d', '30d'],
    control: 'select',
  },
  searchValue: { control: 'text' },
  searchPlaceholder: { control: 'text' },
  showPeriods: { control: 'boolean' },
  showSearch: { control: 'boolean' },
  showFilterButton: { control: 'boolean' },
  language: {
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: 'select',
  },
};

export const Usage = () => {
  const [period, setPeriod] = useState('7d');
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ canal: ['WhatsApp'] });

  return (
    <UaiFilterBar
      selectedPeriod={period}
      searchValue={search}
      searchPlaceholder="Buscar por campanha"
      categories={SAMPLE_CATEGORIES}
      appliedFilters={filters}
      onUaiPeriodChange={(ev) => setPeriod(ev.detail.id)}
      onUaiSearchChange={(ev) => setSearch(ev.detail.value)}
      onUaiFilterChange={(ev) => setFilters(ev.detail.filters)}
    />
  );
};

Usage.parameters = {
  docs: {
    source: {
      code: `const [period, setPeriod] = useState('7d');
const [search, setSearch] = useState('');
const [filters, setFilters] = useState({ canal: ['WhatsApp'] });

<UaiFilterBar
  selectedPeriod={period}
  searchValue={search}
  searchPlaceholder="Buscar por campanha"
  categories={categories}
  appliedFilters={filters}
  onUaiPeriodChange={(ev) => setPeriod(ev.detail.id)}
  onUaiSearchChange={(ev) => setSearch(ev.detail.value)}
  onUaiFilterChange={(ev) => setFilters(ev.detail.filters)}
/>`,
    },
  },
};

export const States = () => (
  <div style={{ display: 'grid', gap: 'var(--uai-spacing-md)', width: '100%' }}>
    <UaiFilterBar selectedPeriod="today" searchPlaceholder="Sem filtros ativos" categories={SAMPLE_CATEGORIES} />
    <UaiFilterBar
      selectedPeriod="30d"
      searchValue="Black Friday"
      categories={SAMPLE_CATEGORIES}
      appliedFilters={{ campanha: ['Black Friday Wpp', 'Lançamento 2026'], canal: ['WhatsApp'] }}
    />
  </div>
);
