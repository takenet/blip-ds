import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { textStyleProps, uaiTokens } from '../src/pages/uai-foundation/uai-tokens.mjs';

export const REACT_IMPORT = 'blip-ds-react/dist/components';

const pascal = value => value.replace(/(^|-)([a-z0-9])/g, (_, __, char) => char.toUpperCase());

// Stories are named after the component (uai-button.stories.jsx) or after the bds tag without its prefix (button.stories.jsx).
const findApi = (stencilDocs, basename) =>
  stencilDocs.components.find(item => item.tag === basename) || stencilDocs.components.find(item => item.tag === `bds-${basename}`);

export function enrichManifest(manifest, stencilDocs, storyIndex) {
  let enriched = 0;
  for (const component of Object.values(manifest.components)) {
    const basename = path.basename(component.path).replace(/\.stories\.[^.]+$/, '');
    const api = findApi(stencilDocs, basename);
    const stories = Object.values(storyIndex.entries).filter(entry => entry.type === 'story' && entry.importPath === component.path);
    for (const story of component.stories || []) {
      const entry = stories.find(entry => entry.name === story.name || entry.exportName === story.name);
      if (entry) story.id = entry.id;
    }
    if (!api) continue;
    const reactName = pascal(api.tag);
    component.summary = `<${reactName}> from ${REACT_IMPORT}`;
    component.import = `import { ${reactName} } from '${REACT_IMPORT}';`;
    component.description = [
      api.docs || '',
      `Use the React component <${reactName}>: ${component.import} Props are camelCase (the Properties below) and events are on<Event> callbacks. The custom element <${api.tag}> is the same component for non-React apps.`,
      '## Properties',
      ...api.props.map(prop => `- ${prop.name}: ${prop.type}; default: ${prop.default ?? 'none'}. ${prop.docs || ''}`),
      '## Events',
      ...api.events.map(event => `- on${pascal(event.event)}: ${event.detail}. ${event.docs || ''}`),
      '## Methods',
      ...api.methods.map(method => `- ${method.signature}. ${method.docs || ''}`),
      ...(api.slots?.length ? ['## Slots', ...api.slots.map(slot => `- ${slot.name || 'default (children)'}: ${slot.docs || ''}`)] : []),
    ].join('\n\n');
    delete component.error;
    enriched += 1;
  }
  if (enriched === 0) throw new Error('No Stencil components matched the Storybook manifest.');
  return manifest;
}

const tokenLine = token =>
  `- ${token.cssVar}: ${token.light}${token.dark && token.dark !== token.light ? ` (dark: ${token.dark})` : ''}. ${token.description}`;

/**
 * Manifest entry with every UAI design token, so agents pick tokens by role instead of hardcoding values.
 */
export function uaiTokensEntry({ light, dark, shadows, textStyles, usage = { tokens: {}, shadows: {}, textStyles: {} } }) {
  const tokens = uaiTokens(light, dark, usage.tokens);
  const section = (title, list) => [`## ${title}`, ...list.map(tokenLine)];
  const styles = Object.values(textStyles).map(style => {
    const props = textStyleProps(style.name);
    const spacing = props.letterSpacing === 'expanded' ? ' letterSpacing="expanded"' : '';
    return `- ${style.name}: <UaiTypo variant="${props.variant}" bold="${props.bold}"${spacing}>. ${usage.textStyles[style.name] || style.description}`;
  });
  return {
    id: 'uai-tokens',
    name: 'UAI Tokens',
    path: './src/pages/uai-foundation/tokens.mdx',
    import: '',
    jsDocTags: {},
    summary: 'Tokens de design UAI: cores, espaçamento, tamanhos, raios, bordas, tipografia e elevação, nos temas claro e escuro.',
    description: [
      'Tokens de design da linguagem visual UAI, do blip-tokens. Use em CSS como var(--uai-<nome>) dentro de um UaiThemeProvider (ou de um elemento com data-uai-theme="light" ou "dark"). Escolha o token pelo papel e pelo uso, nunca pelo valor. As cores mudam entre os temas claro e escuro; os outros tokens são iguais nos dois. Se existe um componente UAI para o caso, use o componente.',
      ...section('Cores', tokens.filter(token => token.category === 'color')),
      ...section('Dimensões', tokens.filter(token => token.category === 'dimension')),
      ...section('Tipografia', tokens.filter(token => token.category === 'typography')),
      '## Elevação',
      ...Object.entries(shadows).map(([name, shadow]) => `- --${name}: ${shadow.value}. ${usage.shadows[name] || shadow.description}`),
      '## Estilos de texto (nome no Figma: props do UaiTypo)',
      ...styles,
    ].join('\n\n'),
    stories: [],
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const directory = process.argv[2] || 'storybook-static';
  const filename = path.join(directory, 'manifests/components.json');
  const manifest = enrichManifest(
    JSON.parse(await readFile(filename, 'utf8')),
    JSON.parse(await readFile(new URL('./stencil-docs.json', import.meta.url), 'utf8')),
    JSON.parse(await readFile(path.join(directory, 'index.json'), 'utf8')),
  );
  const tokensDirectory = new URL('../node_modules/blip-tokens/build/json/', import.meta.url);
  const readTokens = async file => JSON.parse(await readFile(new URL(file, tokensDirectory), 'utf8'));
  manifest.components['uai-tokens'] = uaiTokensEntry({
    light: await readTokens('uai-light.tokens.json'),
    dark: await readTokens('uai-dark.tokens.json'),
    shadows: await readTokens('uai-shadows.json'),
    textStyles: await readTokens('uai-text-styles.json'),
    usage: JSON.parse(await readFile(new URL('../src/pages/uai-foundation/uai-token-usage.pt-BR.json', import.meta.url), 'utf8')),
  });
  await writeFile(filename, JSON.stringify(manifest));
}