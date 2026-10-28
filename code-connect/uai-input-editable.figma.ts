// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2415-4557
// source=src/components/uai-input-editable/uai-input-editable.tsx
// component=UaiInputEditable
import figma from 'figma';

const instance = figma.selectedInstance;
const value = instance.getString('Value');
const label = instance.getString('Label');
const helperMessage = instance.getString('Helper message');
const errorMessage = instance.getString('Error message');
const successMessage = instance.getString('Success message');
const size = instance.getEnum('Size', { Short: 'short', Standard: 'standard', Tall: 'tall' });
const feedback = instance.getEnum('Feedback', { Default: 'default', Error: 'danger', Success: 'success' });
// Mode has no prop: editing is internal state. The field always starts in View; it opens Edit when the person
// activates "Editar" or the value, or when the code calls `edit()` on the element.
instance.getEnum('Mode', { View: 'view', Edit: 'edit' });

// The edit button is named "Editar <label>", so the label is required.
if (!label.trim()) {
  throw new Error('UaiInputEditable needs an accessible name: fill "Label".');
}

const str = (text) => JSON.stringify(text);
const messageProp = { default: 'helperMessage', danger: 'errorMessage', success: 'successMessage' }[feedback];
const message = { default: helperMessage, danger: errorMessage, success: successMessage }[feedback];
const attrs = [
  ` label={${str(label)}}`,
  value.trim() ? ` value={${str(value)}}` : '',
  size !== 'standard' ? ` size="${size}"` : '',
  feedback !== 'default' ? ` ${feedback}` : '',
  message && message.trim() ? ` ${messageProp}={${str(message)}}` : '',
].join('');

export default {
  example: figma.code`<UaiInputEditable${attrs} />`,
  imports: ['import { UaiInputEditable } from "blip-ds-react/dist/components"'],
  id: 'uai-input-editable',
  metadata: { nestable: true },
};
