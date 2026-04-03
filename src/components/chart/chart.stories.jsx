import DocumentationTemplate from './chart.mdx';

const weeklyData = [
  { label: 'Dom', value: 78 },
  { label: 'Seg', value: 107 },
  { label: 'Ter', value: 92 },
  { label: 'Qua', value: 128 },
  { label: 'Qui', value: 116 },
  { label: 'Sex', value: 143 },
  { label: 'Sáb', value: 99 },
];

const multiSeriesData = [
  { mes: 'Jan', vendas: 100, meta: 90,  retorno: 60 },
  { mes: 'Fev', vendas: 120, meta: 110, retorno: 75 },
  { mes: 'Mar', vendas: 95,  meta: 100, retorno: 55 },
  { mes: 'Abr', vendas: 140, meta: 120, retorno: 90 },
  { mes: 'Mai', vendas: 130, meta: 115, retorno: 85 },
  { mes: 'Jun', vendas: 160, meta: 140, retorno: 110 },
];

const funnelData = [
  { label: 'Visitantes',  value: 1000 },
  { label: 'Leads',       value: 750 },
  { label: 'Qualificados',value: 500 },
  { label: 'Propostas',   value: 300 },
  { label: 'Fechados',    value: 150 },
];

const heatmapData = [
  { dia: 'Seg', hora: '9h',  total: 12 },  { dia: 'Seg', hora: '10h', total: 45 },
  { dia: 'Seg', hora: '11h', total: 78 },  { dia: 'Seg', hora: '14h', total: 55 },
  { dia: 'Seg', hora: '15h', total: 30 },  { dia: 'Seg', hora: '16h', total: 62 },
  { dia: 'Ter', hora: '9h',  total: 34 },  { dia: 'Ter', hora: '10h', total: 90 },
  { dia: 'Ter', hora: '11h', total: 23 },  { dia: 'Ter', hora: '14h', total: 67 },
  { dia: 'Ter', hora: '15h', total: 44 },  { dia: 'Ter', hora: '16h', total: 88 },
  { dia: 'Qua', hora: '9h',  total: 67 },  { dia: 'Qua', hora: '10h', total: 55 },
  { dia: 'Qua', hora: '11h', total: 88 },  { dia: 'Qua', hora: '14h', total: 40 },
  { dia: 'Qua', hora: '15h', total: 72 },  { dia: 'Qua', hora: '16h', total: 95 },
  { dia: 'Qui', hora: '9h',  total: 20 },  { dia: 'Qui', hora: '10h', total: 40 },
  { dia: 'Qui', hora: '11h', total: 100 }, { dia: 'Qui', hora: '14h', total: 80 },
  { dia: 'Qui', hora: '15h', total: 60 },  { dia: 'Qui', hora: '16h', total: 35 },
  { dia: 'Sex', hora: '9h',  total: 55 },  { dia: 'Sex', hora: '10h', total: 33 },
  { dia: 'Sex', hora: '11h', total: 71 },  { dia: 'Sex', hora: '14h', total: 85 },
  { dia: 'Sex', hora: '15h', total: 50 },  { dia: 'Sex', hora: '16h', total: 28 },
];

export default {
  title: 'Components/Chart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

// ─── PLAYGROUND ──────────────────────────────────────────────────────────────

export const Properties = {
  render: (args) => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(weeklyData)} vertical={args.vertical} align={args.align} bar-radius={args.barRadius}>
        {args.showGrid && <bds-chart-grid horizontal={args.horizontalGrid} vertical={args.verticalGrid} stroke-style={args.gridStyle} />}
        <bds-x-axis show={args.showXAxis} tick-line={args.tickLine} tick-margin={args.tickMargin} axis-line={args.axisLine} tick-count={args.tickCount} />
        <bds-y-axis show={args.showYAxis} tick-line={args.tickLine} tick-margin={args.tickMargin} axis-line={args.axisLine} tick-count={args.tickCount} />
        <bds-bar data-key="value" color={args.color} radius={args.barRadius} />
        <bds-chart-tooltip label-key="label" name-key="value" indicator={args.tooltipIndicator} hide-label={args.hideLabel} hide-indicator={args.hideIndicator} />
      </bds-chart-bar>
    </bds-chart-container>
  ),
  argTypes: {
    color: {
      description: 'Cor das barras',
      control: 'color',
      table: { defaultValue: { summary: '#0d6efd' } },
    },
    barRadius: {
      description: 'Raio de arredondamento das pontas',
      control: 'number',
      table: { defaultValue: { summary: '6' } },
    },
    vertical: {
      description: 'Orientação horizontal das barras (funil)',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    align: {
      description: 'Alinhamento das barras quando vertical=true',
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'left' } },
    },
    showGrid: {
      description: 'Exibe bds-chart-grid',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    horizontalGrid: {
      description: 'Linhas horizontais do grid',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    verticalGrid: {
      description: 'Linhas verticais do grid',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    gridStyle: {
      description: 'Estilo das linhas do grid',
      options: ['solid', 'dashed'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'solid' } },
    },
    showXAxis: {
      description: 'Exibe labels do eixo X',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    showYAxis: {
      description: 'Exibe labels do eixo Y',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    tickLine: {
      description: 'Exibe linhas de tick nos eixos',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    tickMargin: {
      description: 'Margem entre tick e label (px)',
      control: 'number',
      table: { defaultValue: { summary: '10' } },
    },
    axisLine: {
      description: 'Exibe a linha do eixo',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    tickCount: {
      description: 'Número de ticks no eixo Y',
      control: 'number',
      table: { defaultValue: { summary: '5' } },
    },
    tooltipIndicator: {
      description: 'Estilo do indicador no tooltip',
      options: ['dot', 'line', 'dashed'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'dot' } },
    },
    hideLabel: {
      description: 'Oculta label do tooltip',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    hideIndicator: {
      description: 'Oculta indicador colorido do tooltip',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    color: '#0d6efd',
    barRadius: 6,
    vertical: false,
    align: 'left',
    showGrid: true,
    horizontalGrid: true,
    verticalGrid: false,
    gridStyle: 'solid',
    showXAxis: true,
    showYAxis: true,
    tickLine: true,
    tickMargin: 10,
    axisLine: true,
    tickCount: 5,
    tooltipIndicator: 'dot',
    hideLabel: false,
    hideIndicator: false,
  },
};

// ─── BAR CHART STORIES ───────────────────────────────────────────────────────

export const BarChartSimple = {
  name: 'Bar — Simples',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(weeklyData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis show="true" />
        <bds-y-axis show="true" />
        <bds-bar data-key="value" color="#0d6efd" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartGrouped = {
  name: 'Bar — Agrupado (multi-série)',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(multiSeriesData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis data-key="mes" show="true" />
        <bds-y-axis show="true" />
        <bds-bar data-key="vendas" color="#0d6efd" />
        <bds-bar data-key="meta"   color="#05b96c" />
        <bds-bar data-key="retorno" color="#f7a400" />
        <bds-chart-legend align="center" />
        <bds-chart-tooltip label-key="mes" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartStacked = {
  name: 'Bar — Empilhado (stackId)',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(multiSeriesData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis data-key="mes" show="true" />
        <bds-y-axis show="true" />
        <bds-bar data-key="vendas"  color="#0d6efd" stack-id="stack1" />
        <bds-bar data-key="retorno" color="#05b96c" stack-id="stack1" />
        <bds-chart-legend align="center" />
        <bds-chart-tooltip label-key="mes" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartVertical = {
  name: 'Bar — Horizontal (vertical=true)',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(weeklyData)} vertical="true">
        <bds-chart-grid horizontal="true" />
        <bds-y-axis show="true" />
        <bds-x-axis show="true" tick-count="4" />
        <bds-bar data-key="value" color="#0d6efd" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartFunnel = {
  name: 'Bar — Funil (vertical + align=center)',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(funnelData)} vertical="true" align="center">
        <bds-y-axis show="true" />
        <bds-x-axis show="false" />
        <bds-bar data-key="value" color="#0d6efd" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartWithLegend = {
  name: 'Bar — Com Legenda',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(multiSeriesData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis data-key="mes" show="true" />
        <bds-y-axis show="true" />
        <bds-bar data-key="vendas" color="#0d6efd" />
        <bds-bar data-key="meta"   color="#05b96c" />
        <bds-chart-legend align="center" />
        <bds-chart-tooltip label-key="mes" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartGridDashed = {
  name: 'Bar — Grid Tracejado',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(weeklyData)}>
        <bds-chart-grid horizontal="true" vertical="true" stroke-style="dashed" />
        <bds-x-axis show="true" />
        <bds-y-axis show="true" />
        <bds-bar data-key="value" color="#9b59b6" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

export const BarChartNoAxis = {
  name: 'Bar — Sem Eixos',
  render: () => (
    <bds-chart-container>
      <bds-chart-bar data={JSON.stringify(weeklyData)}>
        <bds-x-axis show="false" />
        <bds-y-axis show="false" />
        <bds-bar data-key="value" color="#e74c3c" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-bar>
    </bds-chart-container>
  ),
};

// ─── LINE CHART STORIES ──────────────────────────────────────────────────────

export const LineChartSimple = {
  name: 'Line — Simples',
  render: () => (
    <bds-chart-container>
      <bds-chart-line data={JSON.stringify(weeklyData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis show="true" />
        <bds-y-axis show="true" />
        <bds-line data-key="value" color="#0d6efd" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-line>
    </bds-chart-container>
  ),
};

export const LineChartMultiSeries = {
  name: 'Line — Multi-série',
  render: () => (
    <bds-chart-container>
      <bds-chart-line data={JSON.stringify(multiSeriesData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis data-key="mes" show="true" />
        <bds-y-axis show="true" />
        <bds-line data-key="vendas"  color="#0d6efd" />
        <bds-line data-key="meta"    color="#05b96c" />
        <bds-line data-key="retorno" color="#f7a400" />
        <bds-chart-legend align="center" />
        <bds-chart-tooltip label-key="mes" />
      </bds-chart-line>
    </bds-chart-container>
  ),
};

export const LineChartNoDots = {
  name: 'Line — Sem Pontos (dot=false)',
  render: () => (
    <bds-chart-container>
      <bds-chart-line data={JSON.stringify(weeklyData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis show="true" />
        <bds-y-axis show="true" />
        <bds-line data-key="value" color="#e74c3c" dot="false" stroke-width="2" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-line>
    </bds-chart-container>
  ),
};

export const LineChartLinear = {
  name: 'Line — Curva Linear',
  render: () => (
    <bds-chart-container>
      <bds-chart-line data={JSON.stringify(weeklyData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis show="true" />
        <bds-y-axis show="true" />
        <bds-line data-key="value" color="#27ae60" curve="linear" stroke-width="2" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-line>
    </bds-chart-container>
  ),
};

export const LineChartWithLegend = {
  name: 'Line — Com Legenda',
  render: () => (
    <bds-chart-container>
      <bds-chart-line data={JSON.stringify(multiSeriesData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis data-key="mes" show="true" />
        <bds-y-axis show="true" />
        <bds-line data-key="vendas" color="#0d6efd" stroke-width="2" />
        <bds-line data-key="meta"   color="#05b96c" stroke-width="2" dot="false" />
        <bds-chart-legend align="center" />
        <bds-chart-tooltip label-key="mes" />
      </bds-chart-line>
    </bds-chart-container>
  ),
};

export const LineChartTickFormatter = {
  name: 'Line — Formatador de Ticks',
  render: () => (
    <bds-chart-container>
      <bds-chart-line data={JSON.stringify(weeklyData)}>
        <bds-chart-grid horizontal="true" />
        <bds-x-axis show="true" />
        <bds-y-axis show="true" tick-formatter="(v) => v + ' pts'" tick-count="4" />
        <bds-line data-key="value" color="#8e44ad" />
        <bds-chart-tooltip label-key="label" name-key="value" />
      </bds-chart-line>
    </bds-chart-container>
  ),
};

// ─── HEATMAP STORIES ─────────────────────────────────────────────────────────

export const HeatmapWeekly = {
  name: 'Heatmap — Frequência Semanal',
  render: () => (
    <bds-chart-container>
      <bds-chart-heatmap
        data={JSON.stringify(heatmapData)}
        x-key="dia"
        y-key="hora"
        value-key="total"
      >
        <bds-heatmap-cell color="#0d6efd" radius="6" />
        <bds-x-axis show="true" tick-line="true" tick-margin="10" />
        <bds-y-axis show="true" tick-line="true" tick-margin="10" />
        <bds-chart-tooltip label-key="dia" name-key="total" />
      </bds-chart-heatmap>
    </bds-chart-container>
  ),
};

export const HeatmapCustomColor = {
  name: 'Heatmap — Cor Customizada',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Verde (#05b96c)</p>
        <bds-chart-container>
          <bds-chart-heatmap data={JSON.stringify(heatmapData)} x-key="dia" y-key="hora" value-key="total">
            <bds-heatmap-cell color="#05b96c" radius="4" />
            <bds-x-axis show="true" tick-margin="10" />
            <bds-y-axis show="true" tick-margin="10" />
            <bds-chart-tooltip label-key="dia" name-key="total" />
          </bds-chart-heatmap>
        </bds-chart-container>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Laranja (#f7a400)</p>
        <bds-chart-container>
          <bds-chart-heatmap data={JSON.stringify(heatmapData)} x-key="dia" y-key="hora" value-key="total">
            <bds-heatmap-cell color="#f7a400" radius="4" />
            <bds-x-axis show="true" tick-margin="10" />
            <bds-y-axis show="true" tick-margin="10" />
            <bds-chart-tooltip label-key="dia" name-key="total" />
          </bds-chart-heatmap>
        </bds-chart-container>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Vermelho (#e74c3c)</p>
        <bds-chart-container>
          <bds-chart-heatmap data={JSON.stringify(heatmapData)} x-key="dia" y-key="hora" value-key="total">
            <bds-heatmap-cell color="#e74c3c" radius="2" />
            <bds-x-axis show="true" tick-margin="10" />
            <bds-y-axis show="true" tick-margin="10" />
            <bds-chart-tooltip label-key="dia" name-key="total" />
          </bds-chart-heatmap>
        </bds-chart-container>
      </div>
    </div>
  ),
};
