import figma from 'figma';
const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
  Unchecked: 'unchecked',
  Checked: 'checked',
});
const state = instance.getEnum('State', {
  Default: '',
  Focus: '',
  Disabled: 'disabled',
});

const attrs = [variant === 'checked' ? ' checked' : '', state ? ` ${state}` : ''].join('');

export default {
  example: figma.code`<UaiRadio aria-label="Opção" value="option"${attrs} />`,
  imports: ['import { UaiRadio } from "blip-ds-react/dist/components"'],
  id: 'uai-radio',
  metadata: { nestable: true },
};
