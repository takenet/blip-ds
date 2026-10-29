// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5?node-id=4168-14647
// source=src/components/uai-checkbox/uai-checkbox.tsx component=UaiCheckbox
import figma from 'figma';
const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
  Unchecked: 'unchecked',
  Checked: 'checked',
  Indeterminate: 'indeterminate',
});
const state = instance.getEnum('State', {
  Default: '',
  Focus: '',
  Disabled: 'disabled',
});

const attrs = [
  variant === 'checked' ? ' checked' : '',
  variant === 'indeterminate' ? ' indeterminate' : '',
  state ? ` ${state}` : '',
].join('');

export default {
  example: figma.code`<UaiCheckbox aria-label="Opção"${attrs} />`,
  imports: ['import { UaiCheckbox } from "blip-ds-react/dist/components"'],
  id: 'uai-checkbox',
  metadata: { nestable: true },
};
