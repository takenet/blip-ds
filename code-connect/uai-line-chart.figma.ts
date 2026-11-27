// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4661-3035
// source=src/components/uai-line-chart/uai-line-chart.tsx
// component=UaiLineChart
import figma from 'figma';

const instance = figma.selectedInstance;
instance.getEnum('state', {
  default: 'default',
  hover: 'hover',
});

export default {
  example: figma.code`<UaiLineChart
  tooltipTitle="Evolução"
  series={[
    { key: 'invested', label: 'Valor investido' },
    { key: 'conversations', label: 'Conversas iniciadas' },
    { key: 'revenue', label: 'Receita' },
  ]}
  data={[
    { key: '20/07', invested: 90000, conversations: 140000, revenue: 210000 },
    { key: '01/08', invested: 120000, conversations: 185000, revenue: 260000 },
    { key: '10/08', invested: 150000, conversations: 240000, revenue: 310000 },
    { key: 'Hoje', invested: 170000, conversations: 280000, revenue: 350000 },
  ]}
/>`,
  imports: ['import { UaiLineChart } from "blip-ds-react/dist/components"'],
  id: 'uai-line-chart',
  metadata: { nestable: true },
};
