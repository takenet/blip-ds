// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4036-5728
// source=src/components/uai-radio/uai-radio.tsx
// component=UaiRadio
import figma from 'figma';

const instance = figma.selectedInstance;
const selection = instance.getEnum('Selection', {
  Unselected: false,
  Selected: true,
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
  showLabel && label ? ` label={${str(label)}}` : ' aria-label="Opção"',
  ' value="option"',
  selection ? ' checked' : '',
  size !== 'standard' ? ` size="${size}"` : '',
  disabled ? ' disabled' : '',
].join('');

export default {
  example: figma.code`<UaiRadio${attrs} />`,
  imports: ['import { UaiRadio } from "blip-ds-react/dist/components"'],
  id: 'uai-radio',
  metadata: { nestable: true },
};
