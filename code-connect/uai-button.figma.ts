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
// Hover and Pressed are interaction states; they have no prop in code.
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
  if (icon && icon.type === 'INSTANCE') return icon.executeTemplate().metadata.props;
  return undefined;
};
const left = iconProps('Show Left Icon', 'Left Icon Name');
const right = iconProps('Show Right Icon', 'Right Icon Name');
const solid = (left && left.theme === 'solid') || (right && right.theme === 'solid');

const attrs = [
  variant !== 'solid' ? ` variant="${variant}"` : '',
  color !== 'primary' ? ` color="${color}"` : '',
  size !== 'medium' ? ` size="${size}"` : '',
  left && left.name ? ` iconLeft="${left.name}"` : '',
  right && right.name ? (right.name === 'arrow-right' ? ' arrow' : ` iconRight="${right.name}"`) : '',
  solid ? ' iconTheme="solid"' : '',
  state ? ` ${state}` : '',
  showLabel ? '' : ` aria-label="${label}"`,
].join('');

export default {
  example: showLabel ? figma.code`<UaiButton${attrs}>${label}</UaiButton>` : figma.code`<UaiButton${attrs} />`,
  imports: ['import { UaiButton } from "blip-ds-react/dist/components"'],
  id: 'uai-button',
  metadata: { nestable: true },
};
