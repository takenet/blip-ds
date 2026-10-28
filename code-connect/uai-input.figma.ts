// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2226-7
// source=src/components/uai-input/uai-input.tsx
// component=UaiInput
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const showLabel = instance.getBoolean('Show Label');
const text = instance.getString('Text');
const size = instance.getEnum('Size', { Medium: 'medium', Short: 'short' });
const feedback = instance.getEnum('Feedback', { Default: 'default', Error: 'danger', Success: 'success' });
// Hover and Focus are CSS states. Filled, Focus, Disabled and Readonly show Text as the value; Default and Hover as the placeholder.
const state = instance.getEnum('State', {
  Default: 'placeholder',
  Hover: 'placeholder',
  Filled: 'value',
  Focus: 'value',
  Disabled: 'disabled',
  Readonly: 'readonly',
});

const iconName = () => {
  if (!instance.getBoolean('Show Icon')) return undefined;
  const icon = instance.getInstanceSwap('Icon');
  if (!icon || icon.type !== 'INSTANCE' || !icon.hasCodeConnect()) {
    throw new Error('Connect the glyph selected in "Icon" before using this input.');
  }
  const props = icon.executeTemplate().metadata.props;
  if (!props || !props.name) throw new Error('The glyph in "Icon" must expose its UAI name.');
  return props.name;
};
const icon = iconName();

const message = instance.getBoolean('Show Message')
  ? instance.getString(
      feedback === 'danger' ? 'Error Message' : feedback === 'success' ? 'Success Message' : 'Helper Message',
    )
  : '';
// Counter Value is a preview such as "0/100"; the code computes the length and keeps the limit.
const counter = instance.getBoolean('Counter Length');
const maxlength = counter ? (instance.getString('Counter Value').split('/')[1] || '').trim() : '';
if (!showLabel && !label.trim()) {
  throw new Error('An input without a visible label needs a Label for its accessible name.');
}

const str = (value) => JSON.stringify(value);
const messageProp = { danger: 'errorMessage', success: 'successMessage', default: 'helperMessage' }[feedback];
const attrs = [
  showLabel ? ` label={${str(label)}}` : ` aria-label={${str(label)}}`,
  size === 'short' ? ' size="short"' : '',
  text && state === 'placeholder' ? ` placeholder={${str(text)}}` : '',
  text && state !== 'placeholder' ? ` value={${str(text)}}` : '',
  icon ? ` icon="${icon}"` : '',
  feedback !== 'default' ? ` ${feedback}` : '',
  message ? ` ${messageProp}={${str(message)}}` : '',
  counter ? ' counterLength' : '',
  counter && /^\d+$/.test(maxlength) ? ` maxlength={${maxlength}}` : '',
  state === 'disabled' || state === 'readonly' ? ` ${state}` : '',
].join('');

const slots = [
  ['Show Leading Adornment', 'input-left'],
  ['Show Inline Adornment', 'inside-input-left'],
  ['Show Trailing Adornment', 'input-right'],
]
  .filter(([show]) => instance.getBoolean(show))
  .map(([, slot]) => `\n  <span slot="${slot}">{/* adorno */}</span>`)
  .join('');

export default {
  example: slots ? figma.code`<UaiInput${attrs}>${slots}\n</UaiInput>` : figma.code`<UaiInput${attrs} />`,
  imports: ['import { UaiInput } from "blip-ds-react/dist/components"'],
  id: 'uai-input',
  metadata: { nestable: true },
};
