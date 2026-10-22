import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

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

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const directory = process.argv[2] || 'storybook-static';
  const filename = path.join(directory, 'manifests/components.json');
  const manifest = enrichManifest(
    JSON.parse(await readFile(filename, 'utf8')),
    JSON.parse(await readFile(new URL('./stencil-docs.json', import.meta.url), 'utf8')),
    JSON.parse(await readFile(path.join(directory, 'index.json'), 'utf8')),
  );
  await writeFile(filename, JSON.stringify(manifest));
}