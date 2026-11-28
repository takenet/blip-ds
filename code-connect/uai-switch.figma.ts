// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4182-522
// source=src/components/uai-switch/uai-switch.tsx
// component=UaiSwitch
import figma from 'figma';

const instance = figma.selectedInstance;
const selection = instance.getEnum('Selection', {
  Unchecked: false,
  Checked: true,
});
const disabled = instance.getEnum('State', {
  Default: false,
  Hover: false,
  Focus: false,
  Disabled: true,
});
const size = instance.getEnum('Size', {
  short: 'short',
  standard: 'standard',
  tall: 'tall',
});
const showLabel = instance.getBoolean('Show label');
const label = instance.getString('Label');

const str = (value: string) => JSON.stringify(value);
const attrs = [
  showLabel && label ? ` label={${str(label)}}` : ' aria-label="Notificações"',
  selection ? ' checked' : '',
  size !== 'standard' ? ` size="${size}"` : '',
  disabled ? ' disabled' : '',
].join('');

export default {
  example: figma.code`<UaiSwitch${attrs} />`,
  imports: ['import { UaiSwitch } from "blip-ds-react/dist/components"'],
  id: 'uai-switch',
  metadata: { nestable: true },
};
