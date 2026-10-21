// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2170-17
// source=src/components/uai-icon/uai-icon.tsx
// component=UaiIcon
import figma from 'figma';
const instance = figma.selectedInstance;

const size = instance.getEnum('Size', { 'X-Small': 'x-small', Small: 'small', Medium: 'medium' });
const color = instance.getEnum('Color', {
  'Content-Primary': 'content-primary',
  'Content-Secondary': 'content-secondary',
  'Content-Disabled': 'content-disabled',
  'Content-Inverse': 'content-inverse',
  'Content-Link': 'content-link',
  'Feedback-Info': 'feedback-info',
  'Feedback-Success': 'feedback-success',
  'Feedback-Warning': 'feedback-warning',
  'Feedback-Error': 'feedback-error',
});

// The glyph templates (code-connect/uai-icon-glyphs.json) expose the icon name and theme in metadata.props.
const icon = instance.getInstanceSwap('Icon');
if (!icon || icon.type !== 'INSTANCE' || !icon.hasCodeConnect()) {
  throw new Error('Connect the selected glyph before using this UaiIcon.');
}
const glyph = icon.executeTemplate().metadata.props;
if (!glyph || !glyph.name || !['outline', 'solid'].includes(glyph.theme)) {
  throw new Error('The selected glyph must expose its UAI name and theme.');
}
const nameAttr = ` name="${glyph.name}"`;
const theme = glyph.theme === 'solid' ? ' theme="solid"' : '';
const sizeAttr = size !== 'medium' ? ` size="${size}"` : '';

export default {
  example: figma.code`<UaiIcon${nameAttr}${theme}${sizeAttr} color="${color}" />`,
  imports: ['import { UaiIcon } from "blip-ds-react/dist/components"'],
  id: 'uai-icon',
  metadata: { nestable: true, props: glyph },
};
