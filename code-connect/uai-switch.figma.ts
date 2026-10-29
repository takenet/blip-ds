// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5?node-id=4168-14678
// source=src/components/uai-switch/uai-switch.tsx component=UaiSwitch
import figma from 'figma';

const instance = figma.selectedInstance;
const checked = instance.getEnum('Variant', { Unchecked: false, Checked: true });
instance.getEnum('State', { Default: '', Focus: '' });

export default {
  example: figma.code`<UaiSwitch aria-label="Notificações"${checked ? ' checked' : ''} />`,
  imports: ['import { UaiSwitch } from "blip-ds-react/dist/components"'],
  id: 'uai-switch',
  metadata: { nestable: true },
};
