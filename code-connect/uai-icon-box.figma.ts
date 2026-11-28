// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4622-9560
// source=src/components/uai-icon-box/uai-icon-box.tsx
// component=UaiIconBox
import figma from 'figma';

const instance = figma.selectedInstance;
const size = instance.getEnum('Size', {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
});

const nestedIcon = instance.findInstance('outline/bot/robot-2');
const glyph =
  nestedIcon &&
  nestedIcon.type === 'INSTANCE' &&
  typeof nestedIcon.hasCodeConnect === 'function' &&
  nestedIcon.hasCodeConnect()
    ? nestedIcon.executeTemplate().metadata.props
    : { name: 'robot-2', theme: 'outline' };

const iconName = glyph && glyph.name ? glyph.name : 'robot-2';
const iconTheme = glyph && glyph.theme === 'solid' ? 'solid' : 'outline';

const attrs = [
  ` icon="${iconName}"`,
  iconTheme === 'solid' ? ' iconTheme="solid"' : '',
  size !== 'md' ? ` size="${size}"` : '',
].join('');

export default {
  example: figma.code`<UaiIconBox${attrs} />`,
  imports: ['import { UaiIconBox } from "blip-ds-react/dist/components"'],
  id: 'uai-icon-box',
  metadata: { nestable: true },
};
