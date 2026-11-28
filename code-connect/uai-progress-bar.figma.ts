// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4390-28914
// source=src/components/uai-progress-bar/uai-progress-bar.tsx
// component=UaiProgressBar
import figma from 'figma';

export default {
  example: figma.code`<UaiProgressBar percent={50} aria-label="Progresso" />`,
  imports: ['import { UaiProgressBar } from "blip-ds-react/dist/components"'],
  id: 'uai-progress-bar',
  metadata: { nestable: true },
};
