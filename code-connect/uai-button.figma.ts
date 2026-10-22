// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2056-1663
// source=src/components/uai-button/uai-button.tsx
// component=UaiButton
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const showLabel = instance.getBoolean('Show Label');
const variant = instance.getEnum('Variant', { Solid: 'solid', Outline: 'outline', Text: 'text' });
const size = instance.getEnum('Size', { Compact: 'compact', Short: 'short', Medium: 'medium', Large: 'large' });
const color = instance.getEnum('Color', {
  Primary: 'primary',
  Content: 'content',
  Positive: 'positive',
  Negative: 'negative',
});
// Hover and Pressed are CSS states. Active uses the public isActive method, not a prop.
const state = instance.getEnum('State', {
  Default: '',
  Hover: '',
  Pressed: '',
  Loading: 'loading',
  Active: 'active',
  Disabled: 'disabled',
});

// Icon names and themes come from the UaiIcon glyph templates (metadata.props).
const iconProps = (show, propName) => {
  if (!instance.getBoolean(show)) return undefined;
  const icon = instance.getInstanceSwap(propName);
  if (!icon || icon.type !== 'INSTANCE' || !icon.hasCodeConnect()) {
    throw new Error(`Connect the glyph selected in "${propName}" before using this button.`);
  }
  const props = icon.executeTemplate().metadata.props;
  if (!props || !props.name || !['outline', 'solid'].includes(props.theme)) {
    throw new Error(`The glyph in "${propName}" must expose its UAI name and theme.`);
  }
  return props;
};
const left = iconProps('Show Left Icon', 'Left Icon Name');
const right = iconProps('Show Right Icon', 'Right Icon Name');
if (left && right && left.theme !== right.theme) {
  throw new Error('UaiButton has one iconTheme. Select the same theme for both icons in Figma.');
}
const solid = (left && left.theme === 'solid') || (right && right.theme === 'solid');
if (!showLabel && !label.trim()) {
  throw new Error('An icon-only UaiButton needs a Label for its accessible name.');
}

const attrs = [
  variant !== 'solid' ? ` variant="${variant}"` : '',
  color !== 'primary' ? ` color="${color}"` : '',
  size !== 'medium' ? ` size="${size}"` : '',
  left && left.name ? ` iconLeft="${left.name}"` : '',
  right && right.name ? (right.name === 'arrow-right' ? ' arrow' : ` iconRight="${right.name}"`) : '',
  solid ? ' iconTheme="solid"' : '',
  state === 'active' ? ' ref={element => { if (element) void element.isActive(true); }}' : state ? ` ${state}` : '',
  showLabel ? '' : ` aria-label={${JSON.stringify(label)}}`,
].join('');

export default {
  example: showLabel
    ? figma.code`<UaiButton${attrs}>{${JSON.stringify(label)}}</UaiButton>`
    : figma.code`<UaiButton${attrs} />`,
  imports: ['import { UaiButton } from "blip-ds-react/dist/components"'],
  id: 'uai-button',
  metadata: { nestable: true },
};
