import assert from 'node:assert/strict';
import test from 'node:test';
import { enrichManifest } from '../prepare-manifest.mjs';

test('adds Stencil API documentation and real story IDs without losing examples', () => {
  const manifest = { components: { button: {
    path: './src/button.stories.jsx', name: 'Button', error: { name: 'No component found' },
    stories: [{ name: 'Primary', snippet: '<bds-button />' }],
  } } };
  const docs = { components: [{ tag: 'bds-button', docs: 'Button documentation',
    props: [{ name: 'size', attr: 'size', type: 'string', default: 'medium', docs: 'Button size' }],
    events: [{ event: 'selected', detail: 'string' }], methods: [], slots: [],
  }] };
  const index = { entries: { primary: { type: 'story', importPath: './src/button.stories.jsx', name: 'Primary', id: 'button--primary' } } };
  const result = enrichManifest(manifest, docs, index).components.button;
  assert.match(result.description, /size.*medium/);
  assert.match(result.description, /selected/);
  assert.equal(result.error, undefined);
  assert.equal(result.stories[0].id, 'button--primary');
  assert.equal(result.stories[0].snippet, '<bds-button />');
});