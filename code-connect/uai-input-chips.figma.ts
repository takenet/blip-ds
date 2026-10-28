// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2410-4540
// source=src/components/uai-input-chips/uai-input-chips.tsx
// component=UaiInputChips
import figma from 'figma';

const instance = figma.selectedInstance;
const label = instance.getString('Label');
const placeholder = instance.getString('Placeholder');
const message = instance.getString('Message');
const feedback = instance.getEnum('Feedback', { Default: 'default', Error: 'danger', Success: 'success' });
// Focus is a CSS state. Filled and Disabled show the two nested chips; Empty and Focus have no chips.
const state = instance.getEnum('State', {
  Empty: 'empty',
  Filled: 'filled',
  Focus: 'empty',
  Disabled: 'disabled',
});

// The chips are the nested "Chip 1" and "Chip 2" (__UaiInputChip). "Removable" follows `disabled` and `readonly` in
// the component, so only "Label" is read.
const chipLabel = (name) => {
  const chip = instance.findInstance(name);
  return chip && chip.type === 'INSTANCE' ? (chip.getString('Label') || '').trim() : '';
};
const chips = state === 'empty' ? [] : ['Chip 1', 'Chip 2'].map(chipLabel).filter(Boolean);

// There is no default label: without one, the placeholder names the field through aria-label.
if (!label.trim() && !placeholder.trim()) {
  throw new Error('UaiInputChips needs an accessible name: fill "Label" or "Placeholder".');
}

const str = (value) => JSON.stringify(value);
const messageProp = { default: 'helperMessage', danger: 'errorMessage', success: 'successMessage' }[feedback];
const attrs = [
  label.trim() ? ` label={${str(label)}}` : ` aria-label={${str(placeholder)}}`,
  placeholder.trim() ? ` placeholder={${str(placeholder)}}` : '',
  chips.length ? ` chips={${str(chips)}}` : '',
  feedback !== 'default' ? ` ${feedback}` : '',
  message.trim() ? ` ${messageProp}={${str(message)}}` : '',
  state === 'disabled' ? ' disabled' : '',
].join('');

export default {
  example: figma.code`<UaiInputChips${attrs} />`,
  imports: ['import { UaiInputChips } from "blip-ds-react/dist/components"'],
  id: 'uai-input-chips',
  metadata: { nestable: true },
};
