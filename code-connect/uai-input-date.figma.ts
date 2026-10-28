// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2294-86
// source=src/components/uai-input-date/uai-input-date.tsx
// component=UaiInputDate
import figma from 'figma';

const instance = figma.selectedInstance;
const label = instance.getString('Label');
const text = instance.getString('Text');
const helperMessage = instance.getString('Helper Message');
const errorMessage = instance.getString('Error Message');
const successMessage = instance.getString('Success Message');
const feedback = instance.getEnum('Feedback', { Default: 'default', Error: 'danger', Success: 'success' });
// Hover and Focus are CSS states. In Default and Hover, Text is the placeholder. In Filled, Focus, Disabled and
// Readonly, Text is the displayed date (for example "Value" or "25-12-2026"), not an ISO YYYY-MM-DD value, so it is
// not mapped to `value`: the example keeps the component's default placeholder and the developer sets `value`.
const state = instance.getEnum('State', {
  Default: 'placeholder',
  Hover: 'placeholder',
  Filled: 'filled',
  Focus: 'filled',
  Disabled: 'disabled',
  Readonly: 'readonly',
});

// The calendar button (Trailing Adornment) is part of the component and follows `readonly` and `disabled`.
const str = (value) => JSON.stringify(value);
const messageProp = { default: 'helperMessage', danger: 'errorMessage', success: 'successMessage' }[feedback];
const message = { default: helperMessage, danger: errorMessage, success: successMessage }[feedback];
// Without a label the component shows the default text of the language ("Data" in pt_BR).
const attrs = [
  label.trim() ? ` label={${str(label)}}` : '',
  text.trim() && state === 'placeholder' ? ` placeholder={${str(text)}}` : '',
  feedback !== 'default' ? ` ${feedback}` : '',
  message ? ` ${messageProp}={${str(message)}}` : '',
  state === 'disabled' || state === 'readonly' ? ` ${state}` : '',
].join('');

export default {
  example: figma.code`<UaiInputDate${attrs} />`,
  imports: ['import { UaiInputDate } from "blip-ds-react/dist/components"'],
  id: 'uai-input-date',
  metadata: { nestable: true },
};
