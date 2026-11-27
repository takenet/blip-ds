// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4657-2909
// source=src/components/uai-bar-chart/uai-bar-chart.tsx
// component=UaiBarChart
import figma from 'figma';

export default {
  example: figma.code`<UaiBarChart
  seriesLabel="ROI"
  format="currency"
  currency="BRL"
  data={[
    { label: 'Black Friday Wpp', value: 94000 },
    { label: 'Reativação de carrinho', value: 78000 },
    { label: 'Lançamento 2026', value: 62000 },
    { label: 'Recompra pós-venda', value: 44000 },
    { label: 'Cupom fidelização', value: 27000 },
  ]}
/>`,
  imports: ['import { UaiBarChart } from "blip-ds-react/dist/components"'],
  id: 'uai-bar-chart',
  metadata: { nestable: true },
};
