// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4670-30584
// source=src/components/uai-grid/uai-grid.tsx
// component=UaiGrid
import figma from 'figma';

const instance = figma.selectedInstance;
const rowType = instance.getEnum('Type', {
  Default: 'default',
  Draggable: 'draggable',
});

const attrs = rowType === 'draggable' ? ' type="draggable" gap="2"' : ' type="default" gap="2"';

export default {
  example: figma.code`<UaiGrid${attrs}>
  {/* Itens da linha com gap preservado */}
</UaiGrid>`,
  imports: ['import { UaiGrid } from "blip-ds-react/dist/components"'],
  id: 'uai-grid',
  metadata: { nestable: true },
};
