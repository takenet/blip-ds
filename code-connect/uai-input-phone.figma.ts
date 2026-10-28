// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2294-375
// source=src/components/uai-input-phone/uai-input-phone.tsx
// component=UaiInputPhone
import figma from 'figma';

const instance = figma.selectedInstance;
const label = instance.getString('Label');
const text = instance.getString('Text');
const helperMessage = instance.getString('Helper Message');
const errorMessage = instance.getString('Error Message');
const successMessage = instance.getString('Success Message');
const feedback = instance.getEnum('Feedback', { Default: 'default', Error: 'danger', Success: 'success' });
// Hover and Focus are CSS states. Filled, Focus, Disabled and Readonly show Text as the number; Default and Hover as the placeholder.
const state = instance.getEnum('State', {
  Default: 'placeholder',
  Hover: 'placeholder',
  Filled: 'text',
  Focus: 'text',
  Disabled: 'disabled',
  Readonly: 'readonly',
});

// The dialing code lives in the nested prefix (_UaiInputPrefixSelect). Flag, Show Flag and Show Arrow follow the
// code and the state in the component, so only "Value" is read.
const prefix = instance.findInstance('Leading Adornment');
const code = prefix && prefix.type === 'INSTANCE' ? (prefix.getString('Value') || '').trim() : '';
if (code && !/^\+\d+(-\d+)?$/.test(code)) {
  throw new Error('"Value" in "Leading Adornment" must be a dialing code such as "+55".');
}

const str = (value) => JSON.stringify(value);
const messageProp = { default: 'helperMessage', danger: 'errorMessage', success: 'successMessage' }[feedback];
const message = { default: helperMessage, danger: errorMessage, success: successMessage }[feedback];
// Without a label the component shows the default text of the language ("Telefone" in pt_BR).
const attrs = [
  label.trim() ? ` label={${str(label)}}` : '',
  code ? ` value={${str(code)}}` : '',
  text && state === 'placeholder' ? ` placeholder={${str(text)}}` : '',
  text && state !== 'placeholder' ? ` text={${str(text)}}` : '',
  feedback !== 'default' ? ` ${feedback}` : '',
  message ? ` ${messageProp}={${str(message)}}` : '',
  state === 'disabled' || state === 'readonly' ? ` ${state}` : '',
].join('');

export default {
  example: figma.code`<UaiInputPhone${attrs} />`,
  imports: ['import { UaiInputPhone } from "blip-ds-react/dist/components"'],
  id: 'uai-input-phone',
  metadata: { nestable: true },
};
