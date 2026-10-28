// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=2083-55
// source=src/components/uai-avatar/uai-avatar.tsx
// component=UaiAvatar
import figma from 'figma';

const instance = figma.selectedInstance;
const initials = instance.getString('Initials');
const size = instance.getEnum('Size', {
  micro: 'micro',
  'extra-small': 'extra-small',
  small: 'small',
  standard: 'standard',
  large: 'large',
  'extra-large': 'extra-large',
});
const type = instance.getEnum('Type', { Image: 'image', Fallback: 'fallback' });

// The component builds the initials from `name` (first letter of the first and of the last word), and Figma only
// has the initials text. Instead of inventing a person's name, the letters become the words of `name`: "CJ" gives
// name="C J", which renders "CJ". Replace it with the person's full name, which is also the accessible name.
const letters = Array.from((initials || '').replace(/\s+/g, '')).slice(0, 2);
const name = letters.join(' ');
const exampleThumbnail = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces';

const str = (text) => JSON.stringify(text);
const attrs = [
  name ? ` name={${str(name)}}` : '',
  type === 'image' ? ` thumbnail={${str(exampleThumbnail)}}` : '',
  size !== 'standard' ? ` size="${size}"` : '',
  // The UAI Core fallback is neutral; the code default (`colorLetter`) colors it by the first letter.
  type === 'fallback' ? ' color="surface"' : '',
].join('');

export default {
  example: figma.code`<UaiAvatar${attrs} />`,
  imports: ['import { UaiAvatar } from "blip-ds-react/dist/components"'],
  id: 'uai-avatar',
  metadata: { nestable: true },
};
