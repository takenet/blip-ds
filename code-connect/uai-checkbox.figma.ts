// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4036-5697
// source=src/components/uai-checkbox/uai-checkbox.tsx
// component=UaiCheckbox
import figma from 'figma';

const instance = figma.selectedInstance;
const selection = instance.getEnum('Selection', {
  Unchecked: 'unchecked',
  Checked: 'checked',
  Indeterminate: 'indeterminate',
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
  selection === 'checked' ? ' checked' : '',
  selection === 'indeterminate' ? ' indeterminate' : '',
  size !== 'standard' ? ` size="${size}"` : '',
  disabled ? ' disabled' : '',
].join('');

export default {
  example: figma.code`<UaiCheckbox${attrs} />`,
  imports: ['import { UaiCheckbox } from "blip-ds-react/dist/components"'],
  id: 'uai-checkbox',
  metadata: { nestable: true },
};
