// url=https://www.figma.com/design/4H8ECPPE83nfyLcIvhz9I5/UAI-Core---Components?node-id=4652-27579
// source=src/components/uai-card/uai-card.tsx
// component=UaiCard
import figma from 'figma';

const instance = figma.selectedInstance;
const size = instance.getEnum('Size', { sm: 'sm', md: 'md' });
const showFooter = instance.getBoolean('Show Footer?');
const showImage = instance.getBoolean('Show Imagem?');

const header = instance.findInstance('_PaperHeader');
const showTitle = header && header.type !== 'ERROR' ? header.getBoolean('Show Title?') : true;
const title = header && header.type !== 'ERROR' ? header.getString('Edit title') : 'Título';
const showDescription = header && header.type !== 'ERROR' ? header.getBoolean('Show Description?') : size === 'md';
const description = header && header.type !== 'ERROR' ? header.getString('Edit description') : '';
const showIconBox = header && header.type !== 'ERROR' ? header.getBoolean('Show UaiIconBox?') : false;

const str = (value: string) => JSON.stringify(value);
const attrs = [
  size !== 'sm' ? ` size="${size}"` : '',
  showTitle && title ? ` heading={${str(title)}}` : '',
  showDescription && description ? ` description={${str(description)}}` : '',
  showImage ? ' imageSrc="https://placehold.co/720x320" imageAlt=""' : '',
].join('');

const imports = ['import { UaiCard } from "blip-ds-react/dist/components"'];
if (showIconBox) {
  imports.push('import { UaiIconBox } from "blip-ds-react/dist/components"');
}

const iconLine = showIconBox ? '\n  <UaiIconBox slot="icon" icon="robot" />' : '';
const footerLine = showFooter ? '\n  <div slot="footer">{/* Conteúdo do rodapé */}</div>' : '';

export default {
  example: figma.code`<UaiCard${attrs}>${iconLine}
  {/* Conteúdo principal do card */}${footerLine}
</UaiCard>`,
  imports,
  id: 'uai-card',
  metadata: { nestable: true },
};
