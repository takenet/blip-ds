// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2294-664
// source=src/components/uai-input-password/uai-input-password.tsx
// component=UaiInputPassword
import figma from 'figma';

const instance = figma.selectedInstance;
// Label, Text and messages are text layers (not component properties) in this node.
const layer = (name) => {
  const node = instance.findText(name);
  return node && node.type !== 'ERROR' ? node.textContent || '' : '';
};
const label = layer('Label');
const text = layer('Text');
const helperMessage = layer('Helper Message');
const errorMessage = layer('Error Message');
const successMessage = layer('Success Message');
const visibility = instance.getEnum('Visibility', { Hidden: 'hidden', Revealed: 'revealed' });
const feedback = instance.getEnum('Feedback', { Default: 'default', Error: 'danger', Success: 'success' });
const state = instance.getEnum('State', {
  Default: 'placeholder',
  Hover: 'placeholder',
  Filled: 'value',
  Focus: 'value',
  Disabled: 'disabled',
  Readonly: 'readonly',
});
const showStrength = instance.getBoolean('Show Strength');
const strength = showStrength ? instance.findInstance('Password Strength') : null;
const strengthLevel =
  strength && strength.type === 'INSTANCE'
    ? strength.getEnum('Level', { None: 'none', Low: 'low', Medium: 'medium', High: 'high' })
    : 'none';

if (!label.trim()) throw new Error('A password field needs a visible label.');

const str = (value) => JSON.stringify(value);
const messageProp = { default: 'helperMessage', danger: 'errorMessage', success: 'successMessage' }[feedback];
const message = { default: helperMessage, danger: errorMessage, success: successMessage }[feedback];
const attrs = [
  ` label={${str(label)}}`,
  state === 'placeholder' ? ` placeholder={${str(text)}}` : ` value={${str(text)}}`,
  visibility === 'revealed' ? ' openEyes' : '',
  feedback === 'danger' ? ' danger' : '',
  feedback === 'success' ? ' success' : '',
  message ? ` ${messageProp}={${str(message)}}` : '',
  state === 'disabled' ? ' disabled' : '',
  state === 'readonly' ? ' readonly' : '',
  showStrength ? ` showStrength strengthLevel="${strengthLevel}"` : '',
].join('');

export default {
  example: figma.code`<UaiInputPassword${attrs} />`,
  imports: ['import { UaiInputPassword } from "blip-ds-react/dist/components"'],
  id: 'uai-input-password',
  metadata: { nestable: true },
};
