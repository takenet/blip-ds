// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4649-20852
// source=src/components/uai-filter-bar/uai-filter-bar.tsx
// component=UaiFilterBar
import figma from 'figma';

export default {
  example: figma.code`<UaiFilterBar
  selectedPeriod="7d"
  searchPlaceholder="Buscar campanhas"
/>`,
  imports: ['import { UaiFilterBar } from "blip-ds-react/dist/components"'],
  id: 'uai-filter-bar',
  metadata: { nestable: true },
};
