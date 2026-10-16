import assert from 'node:assert/strict';
import test from 'node:test';
import { enrichManifest } from '../prepare-manifest.mjs';
import { createReleaseValues } from '../release-values.mjs';

test('pins a validated release to its source revision and image digest', () => {
  const revision = 'a'.repeat(40);
  const digest = `sha256:${'b'.repeat(64)}`;
  const values = createReleaseValues({ version: '2.0.0-rc.1', revision, digest })['blip-default-chart'];
  assert.equal(values.image.tag, `sha-${revision}@${digest}`);
  assert.equal(values.env.RELEASE_VERSION, '2.0.0-rc.1');
  assert.equal(values.env.RELEASE_REVISION, revision);
  assert.throws(() => createReleaseValues({ version: 'latest', revision, digest }));
  assert.throws(() => createReleaseValues({ version: '2.0.0', revision: 'v2', digest }));
  assert.throws(() => createReleaseValues({ version: '2.0.0', revision, digest: 'latest' }));
});

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