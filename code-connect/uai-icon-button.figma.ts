// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4649-23455
// source=src/components/uai-icon-button/uai-icon-button.tsx
// component=UaiIconButton
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
  Solid: 'solid',
  Outline: 'outline',
  Ghost: 'ghost',
});
const size = instance.getEnum('Size', {
  Compact: 'compact',
  Short: 'short',
  Medium: 'medium',
  Large: 'large',
});
const state = instance.getEnum('State', {
  Default: '',
  Hover: '',
  Pressed: '',
  Active: 'active',
});
const color = instance.getEnum('Color', {
  Primary: 'primary',
  Content: 'content',
  Positive: 'positive',
  Negative: 'negative',
});

const nestedIcon = instance.findInstance('left-icon');
const glyph =
  nestedIcon &&
  nestedIcon.type === 'INSTANCE' &&
  typeof nestedIcon.hasCodeConnect === 'function' &&
  nestedIcon.hasCodeConnect()
    ? nestedIcon.executeTemplate().metadata.props
    : { name: 'message-sparkle-ai', theme: 'solid' };

const iconName = glyph && glyph.name ? glyph.name : 'message-sparkle-ai';
const iconTheme = glyph && glyph.theme === 'solid' ? 'solid' : 'outline';

const attrs = [
  ` icon="${iconName}"`,
  iconTheme === 'solid' ? ' iconTheme="solid"' : '',
  variant !== 'solid' ? ` variant="${variant}"` : '',
  color !== 'primary' ? ` color="${color}"` : '',
  size !== 'medium' ? ` size="${size}"` : '',
  state === 'active' ? ' ref={element => { if (element) void element.isActive(true); }}' : '',
  ' aria-label="Ação"',
].join('');

export default {
  example: figma.code`<UaiIconButton${attrs} />`,
  imports: ['import { UaiIconButton } from "blip-ds-react/dist/components"'],
  id: 'uai-icon-button',
  metadata: { nestable: true },
};
