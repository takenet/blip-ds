import React, { useState } from 'react';
import { UaiDatepicker, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-datepicker.mdx';

export default {
  title: 'UAI/Datepicker',
  component: UaiDatepicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ minHeight: 'calc(12 * var(--uai-control-height-medium))' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(var(--uai-width-panel), 1fr))',
  gap: 'var(--uai-spacing-lg)',
  alignItems: 'start',
};
const column = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--uai-spacing-md)',
  maxWidth: 'var(--uai-width-dialog)',
};
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => (
  <div style={{ maxWidth: 'var(--uai-width-dialog)' }}>
    <UaiDatepicker {...args} />
  </div>
);

Playground.args = {
  typeOfDate: 'period',
  label: 'Período',
  placeholder: '',
  valueDateSelected: '',
  valueEndDateSelected: '',
  startDateLimit: '',
  endDateLimit: '',
  message: '',
  variantBanner: 'warning',
  language: 'pt_BR',
  positionOptions: 'auto',
  size: 'medium',
  helperMessage: 'Escolha o início e o fim e clique em Aplicar.',
  danger: false,
  errorMessage: 'Escolha um período válido.',
  disabled: false,
};

Playground.argTypes = {
  typeOfDate: {
    table: { defaultValue: { summary: 'single' } },
    description: 'Uma data (`single`) ou um período (`period`).',
    options: ['single', 'period'],
    control: { type: 'select' },
  },
  label: { description: 'Rótulo acima do campo. Sem valor, usa o texto padrão do idioma ("Data").', control: 'text' },
  placeholder: { description: 'Texto do campo sem escolha. Sem valor, mostra o formato regional.', control: 'text' },
  valueDateSelected: { description: 'Data escolhida ou início do período, em ISO `YYYY-MM-DD`.', control: 'text' },
  valueEndDateSelected: { description: 'Fim do período, em ISO `YYYY-MM-DD`.', control: 'text' },
  startDateLimit: { description: 'Primeira data que pode ser escolhida, em ISO.', control: 'text' },
  endDateLimit: { description: 'Última data que pode ser escolhida, em ISO.', control: 'text' },
  message: { description: 'Mensagem dentro do painel, acima dos botões.', control: 'text' },
  variantBanner: {
    table: { defaultValue: { summary: 'warning' } },
    description: 'Tom da mensagem do painel.',
    options: ['system', 'info', 'success', 'warning', 'error'],
    control: { type: 'select' },
  },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma dos textos e do calendário.',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  positionOptions: {
    table: { defaultValue: { summary: 'auto' } },
    description: 'Lado e alinhamento do painel.',
    options: ['auto', 'bottom-left', 'bottom-right', 'top-left', 'top-right', 'bottom-center', 'top-center'],
    control: { type: 'select' },
  },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Altura do campo.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  danger: { description: 'Estado de erro.', control: 'boolean' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  disabled: { description: 'Desabilita o campo.', control: 'boolean' },
};

/**
 * Uma data: um mês e o campo "Data".
 */
export const Single = () => {
  const [date, setDate] = useState('2026-01-15');
  return (
    <div style={column}>
      <UaiDatepicker
        label="Data do envio"
        valueDateSelected={date}
        onUaiConcludeDatepicker={(event) => setDate(event.detail.startDate)}
        onUaiEmptyConcludeDatepicker={() => setDate(null)}
      />
      <span style={caption}>startDate: {date || '—'}</span>
    </div>
  );
};

/**
 * Um período: dois meses lado a lado, "Começa" e "Termina", o período preenchido e a prévia sob o ponteiro.
 */
export const Period = () => {
  const [period, setPeriod] = useState({ startDate: '2026-01-15', endDate: '2026-02-15' });
  return (
    <div style={column}>
      <UaiDatepicker
        label="Período do relatório"
        typeOfDate="period"
        valueDateSelected={period.startDate}
        valueEndDateSelected={period.endDate}
        onUaiConcludeDatepicker={(event) => setPeriod(event.detail)}
        onUaiEmptyConcludeDatepicker={() => setPeriod({ startDate: null, endDate: null })}
      />
      <span style={caption}>
        startDate: {period.startDate || '—'} · endDate: {period.endDate || '—'}
      </span>
    </div>
  );
};

/**
 * Limites e mensagem: dias fora de `startDateLimit` e `endDateLimit` ficam desabilitados.
 */
export const Limits = () => (
  <div style={column}>
    <UaiDatepicker
      label="Campanha"
      typeOfDate="period"
      startDateLimit="2026-01-05"
      endDateLimit="2026-03-20"
      message="Escolha um período de 5/jan a 20/mar."
      variantBanner="info"
    />
  </div>
);

/**
 * Estados do campo.
 */
export const States = () => (
  <div style={grid}>
    <UaiDatepicker label="Padrão" helperMessage="Mensagem de ajuda" />
    <UaiDatepicker label="Preenchido" typeOfDate="period" valueDateSelected="2026-01-15" valueEndDateSelected="2026-02-15" />
    <UaiDatepicker label="Erro" danger errorMessage="Escolha uma data." />
    <UaiDatepicker label="Desabilitado" disabled valueDateSelected="2026-01-15" />
  </div>
);

const usageSource = `import React, { useState } from 'react';
import { UaiDatepicker } from 'blip-ds-react/dist/components';

export function ReportPeriod() {
  const [period, setPeriod] = useState({ startDate: null, endDate: null });

  return (
    <UaiDatepicker
      label="Período do relatório"
      typeOfDate="period"
      endDateLimit="2026-12-31"
      valueDateSelected={period.startDate}
      valueEndDateSelected={period.endDate}
      onUaiConcludeDatepicker={(event) => setPeriod(event.detail)}
      onUaiEmptyConcludeDatepicker={() => setPeriod({ startDate: null, endDate: null })}
    />
  );
}`;

/**
 * Um período controlado por estado: o valor só muda quando a pessoa clica em Aplicar.
 */
export const Usage = () => {
  const [period, setPeriod] = useState({ startDate: null, endDate: null });
  return (
    <div style={column}>
      <UaiDatepicker
        label="Período do relatório"
        typeOfDate="period"
        endDateLimit="2026-12-31"
        valueDateSelected={period.startDate}
        valueEndDateSelected={period.endDate}
        onUaiConcludeDatepicker={(event) => setPeriod(event.detail)}
        onUaiEmptyConcludeDatepicker={() => setPeriod({ startDate: null, endDate: null })}
      />
      <span style={caption}>
        startDate: {period.startDate || '—'} · endDate: {period.endDate || '—'}
      </span>
    </div>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
