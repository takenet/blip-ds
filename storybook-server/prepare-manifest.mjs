import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function enrichManifest(manifest, stencilDocs, storyIndex) {
  let enriched = 0;
  for (const component of Object.values(manifest.components)) {
    const basename = path.basename(component.path).replace(/\.stories\.[^.]+$/, '');
    const api = stencilDocs.components.find(item => item.tag === `bds-${basename}`);
    const stories = Object.values(storyIndex.entries).filter(entry => entry.type === 'story' && entry.importPath === component.path);
    for (const story of component.stories || []) {
      const entry = stories.find(entry => entry.name === story.name || entry.exportName === story.name);
      if (entry) story.id = entry.id;
    }
    if (!api) continue;
    component.summary = `<${api.tag}>`;
    component.description = [
      api.docs || '',
      `Custom element: <${api.tag}>. React wrapper: import from blip-ds-react.`,
      '## Properties',
      ...api.props.map(prop => `- ${prop.name} (attribute: ${prop.attr || 'property only'}): ${prop.type}; default: ${prop.default ?? 'none'}. ${prop.docs || ''}`),
      '## Events',
      ...api.events.map(event => `- ${event.event}: ${event.detail}. ${event.docs || ''}`),
      '## Methods',
      ...api.methods.map(method => `- ${method.signature}. ${method.docs || ''}`),
      ...(api.slots?.length ? ['## Slots', ...api.slots.map(slot => `- ${slot.name || 'default'}: ${slot.docs || ''}`)] : []),
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