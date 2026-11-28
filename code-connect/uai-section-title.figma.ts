// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4622-11246
// source=src/components/uai-section-title/uai-section-title.tsx
// component=UaiSectionTitle
import figma from 'figma';

const instance = figma.selectedInstance;
const heading = instance.getString('Edit title');
const description = instance.getString('Edit description');
const showDescription = instance.getBoolean('Show description?');

const str = (value: string) => JSON.stringify(value);
const attrs = [
  heading ? ` heading={${str(heading)}}` : '',
  showDescription && description ? ` description={${str(description)}}` : '',
].join('');

export default {
  example: figma.code`<UaiSectionTitle${attrs} />`,
  imports: ['import { UaiSectionTitle } from "blip-ds-react/dist/components"'],
  id: 'uai-section-title',
  metadata: { nestable: true },
};
