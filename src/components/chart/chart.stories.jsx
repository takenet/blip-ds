import React, { useState } from 'react';
import DocumentationTemplate from './chart.mdx';

const sampleData = [
  { label: 'Dom', value: 78 },
  { label: 'Seg', value: 107 },
  { label: 'Ter', value: 92 },
  { label: 'Qua', value: 128 },
  { label: 'Qui', value: 116 },
  { label: 'Sex', value: 143 },
  { label: 'Sáb', value: 99 },
];

const meta = {
  title: 'Components/Chart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export default meta;

export const Properties = {
  render: (args) => {
    return (
      <bds-chart-container>
        {args.chartType === 'line' ? (
          <bds-chart-line
            data={JSON.stringify(sampleData)}
          >
            {args.showGrid && (
              <bds-chart-grid
                vertical={args.verticalGrid}
                horizontal={args.horizontalGrid}
                strokeStyle={args.gridStyle}
              />
            )}
            {args.showAxis && (
              <>
                <bds-x-axis
                  dataKey="label"
                  show={args.showAxis}
                  tickLine={args.tickLine}
                  tickMargin={args.tickMargin}
                  axisLine={args.axisLine}
                />
                <bds-y-axis
                  dataKey="value"
                  show={args.showAxis}
                  tickLine={args.tickLine}
                  tickMargin={args.tickMargin}
                  axisLine={args.axisLine}
                />
              </>
            )}
            <bds-line
              dataKey="value"
              color={args.color}
              strokeWidth={args.strokeWidth}
              curve={args.curve}
              radius={args.circleRadius}
            />
            <bds-chart-tooltip
              labelKey="label"
              nameKey="value"
              indicator="dot"
            />
          </bds-chart-line>
        ) : (
          <bds-chart-bar
            data={JSON.stringify(sampleData)}
          >
            {args.showGrid && (
              <bds-chart-grid
                vertical={args.verticalGrid}
                horizontal={args.horizontalGrid}
                strokeStyle={args.gridStyle}
              />
            )}
            {args.showAxis && (
              <>
                <bds-x-axis
                  dataKey="label"
                  show={args.showAxis}
                  tickLine={args.tickLine}
                  tickMargin={args.tickMargin}
                  axisLine={args.axisLine}
                />
                <bds-y-axis
                  dataKey="value"
                  show={args.showAxis}
                  tickLine={args.tickLine}
                  tickMargin={args.tickMargin}
                  axisLine={args.axisLine}
                />
              </>
            )}
            <bds-bar
              dataKey="value"
              color={args.color}
              radius={args.barRadius}
            />
            <bds-chart-tooltip
              labelKey="label"
              nameKey="value"
              indicator="dot"
            />
          </bds-chart-bar>
        )}
      </bds-chart-container>
    );
  },
  argTypes: {
    showGrid: {
      table: {
        defaultValue: { summary: 'true' },
      },
      description: 'Mostra o componente de grid',
      control: 'boolean',
    },
    verticalGrid: {
      table: {
        defaultValue: { summary: 'false' },
      },
      description: 'Mostra as linhas de grid verticais (eixo X)',
      control: 'boolean',
    },
    horizontalGrid: {
      table: {
        defaultValue: { summary: 'true' },
      },
      description: 'Mostra as linhas de grid horizontais (eixo Y)',
      control: 'boolean',
    },
    gridStyle: {
      table: {
        defaultValue: { summary: 'solid' },
      },
      description: 'Estilo das linhas do grid',
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'select' },
    },
    showAxis: {
      table: {
        defaultValue: { summary: 'true' },
      },
      description: 'Mostra os componentes de eixo (X-Axis e Y-Axis)',
      control: 'boolean',
    },
    tickLine: {
      table: {
        defaultValue: { summary: 'true' },
      },
      description: 'Mostra as linhas dos ticks nos eixos',
      control: 'boolean',
    },
    tickMargin: {
      table: {
        defaultValue: { summary: '10' },
      },
      description: 'Margem dos ticks em relação ao eixo',
      control: 'number',
    },
    axisLine: {
      table: {
        defaultValue: { summary: 'true' },
      },
      description: 'Mostra as linhas dos eixos',
      control: 'boolean',
    },
    chartType: {
      table: {
        defaultValue: { summary: 'line' },
      },
      description: 'Tipo de gráfico a renderizar',
      options: ['line', 'bar'],
      control: { type: 'select' },
    },
    color: {
      table: {
        defaultValue: { summary: '#0d6efd' },
      },
      description: 'Cor da linha ou barras',
      control: 'color',
    },
    strokeWidth: {
      table: {
        defaultValue: { summary: '2' },
      },
      description: 'Espessura da linha (apenas para gráficos de linha)',
      control: 'number',
    },
    curve: {
      table: {
        defaultValue: { summary: 'monotone' },
      },
      description: 'Tipo de interpolação da linha (apenas para gráficos de linha)',
      options: ['linear', 'monotone'],
      control: { type: 'select' },
    },
    circleRadius: {
      table: {
        defaultValue: { summary: '4' },
      },
      description: 'Raio dos pontos no gráfico de linha',
      control: 'number',
    },
    barRadius: {
      table: {
        defaultValue: { summary: '4' },
      },
      description: 'Raio das bordas das barras',
      control: 'number',
    },
  },
  args: {
    showGrid: true,
    verticalGrid: false,
    horizontalGrid: true,
    gridStyle: 'solid',
    showAxis: true,
    tickLine: true,
    tickMargin: 10,
    axisLine: true,
    chartType: 'line',
    color: '#0d6efd',
    strokeWidth: 2,
    curve: 'linear',
    circleRadius: 4,
    barRadius: 4,
  },
};

export const Responsive = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Responsivo (100%)</h3>
        <div style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
          <bds-chart-container>
            <bds-chart-line
              data={JSON.stringify(sampleData)}
            >
              <bds-chart-grid vertical={false} horizontal={true} strokeStyle="solid" />
              <bds-x-axis dataKey="label" show={true} />
              <bds-y-axis dataKey="value" show={true} />
              <bds-line dataKey="value" color={args.color} />
              <bds-chart-tooltip labelKey="label" nameKey="value" indicator="dot" />
            </bds-chart-line>
          </bds-chart-container>
        </div>
      </div>

      <div>
        <h3>Tamanho Fixo (720px x 320px)</h3>
        <div style={{ width: '720px', height: '320px' }}>
          <bds-chart-container>
            <bds-chart-line
              data={JSON.stringify(sampleData)}
            >
              <bds-chart-grid vertical={false} horizontal={true} strokeStyle="solid" />
              <bds-x-axis dataKey="label" show={true} />
              <bds-y-axis dataKey="value" show={true} />
              <bds-line dataKey="value" color={args.color} />
              <bds-chart-tooltip labelKey="label" nameKey="value" indicator="dot" />
            </bds-chart-line>
          </bds-chart-container>
        </div>
      </div>

      <div>
        <h3>Máximo Permitido (1920px x 1080px - respeitando o limit)</h3>
        <div style={{ width: '100%', height: '600px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <bds-chart-container style={{ width: '100%', height: '100%' }}>
            <bds-chart-line
              data={JSON.stringify(sampleData)}
            >
              <bds-chart-grid vertical={false} horizontal={true} strokeStyle="solid" />
              <bds-x-axis dataKey="label" show={true} />
              <bds-y-axis dataKey="value" show={true} />
              <bds-line dataKey="value" color={args.color} />
              <bds-chart-tooltip labelKey="label" nameKey="value" indicator="dot" />
            </bds-chart-line>
          </bds-chart-container>
        </div>
      </div>
    </div>
  ),

  args: {
    color: '#0d6efd',
  },
};

export const Events = {
  render: () => {
    const [hoverData, setHoverData] = useState(null);

    const handleHover = (event) => {
      const detail = event.detail;
      setHoverData({
        label: detail.datum.label,
        value: detail.datum.value,
        tooltip: detail.tooltip,
        x: detail.clientX,
        y: detail.clientY,
      });
    };

    const handleLeave = () => {
      setHoverData(null);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <bds-chart-container
          onBdsChartHover={handleHover}
          onBdsChartLeave={handleLeave}
        >
          <bds-chart-line
            data={JSON.stringify(sampleData)}
          >
            <bds-chart-grid vertical={false} horizontal={true} strokeStyle="solid" />
            <bds-x-axis dataKey="label" show={true} />
            <bds-y-axis dataKey="value" show={true} />
            <bds-line dataKey="value" color="#0d6efd" />
            <bds-chart-tooltip labelKey="label" nameKey="value" indicator="dot" />
          </bds-chart-line>
        </bds-chart-container>

        {hoverData && (
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}
          >
            <div>
              <strong>bdsChartHover Event Payload:</strong>
            </div>
            <div>Label: {hoverData.label}</div>
            <div>Value: {hoverData.value}</div>
            <div>Tooltip: {hoverData.tooltip}</div>
            <div>Mouse X: {Math.round(hoverData.x)}</div>
            <div>Mouse Y: {Math.round(hoverData.y)}</div>
          </div>
        )}
      </div>
    );
  },
};
