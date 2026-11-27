// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4657-2968
// source=src/components/uai-sparkline/uai-sparkline.tsx
// component=UaiSparkline
import figma from 'figma';

const instance = figma.selectedInstance;
const variant = instance.getEnum('Variant', {
  Neutral: 'neutral',
  Green: 'positive',
  Red: 'negative',
});

const variantAttr = variant !== 'neutral' ? ` variant="${variant}"` : '';

export default {
  example: figma.code`<UaiSparkline data={[12, 18, 15, 26, 22, 34]} label="Tendência do período"${variantAttr} />`,
  imports: ['import { UaiSparkline } from "blip-ds-react/dist/components"'],
  id: 'uai-sparkline',
  metadata: { nestable: true },
};
