import assert from 'node:assert/strict';
import test from 'node:test';
import { enrichManifest } from '../prepare-manifest.mjs';
import { createReleaseValues } from '../release-values.mjs';

test('uses the release version for the image tag and Kubernetes version labels', () => {
  const revision = 'a'.repeat(40);
  const digest = `sha256:${'b'.repeat(64)}`;
  const values = createReleaseValues({ version: '2.0.0-rc.1', revision, digest });
  assert.deepEqual(Object.keys(values).sort(), ['env', 'image']);
  assert.equal(values.image.tag, '2.0.0-rc.1');
  assert.ok(values.image.tag.length <= 63);
  assert.match(values.image.tag, /^[A-Za-z0-9][-A-Za-z0-9_.]*[A-Za-z0-9]$/);
  assert.equal(values.env.RELEASE_VERSION, '2.0.0-rc.1');
  assert.equal(values.env.RELEASE_REVISION, revision);
  assert.throws(() => createReleaseValues({ version: 'latest', revision, digest }));
  assert.throws(() => createReleaseValues({ version: `2.0.0-${'a'.repeat(58)}`, revision, digest }));
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
  assert.match(result.description, /onSelected/);
  assert.equal(result.import, "import { BdsButton } from 'blip-ds-react/dist/components';");
  assert.equal(result.error, undefined);
  assert.equal(result.stories[0].id, 'button--primary');
  assert.equal(result.stories[0].snippet, '<bds-button />');
});
test('finds the API of uai components by their full tag and documents React usage', () => {
  const manifest = { components: { 'uai-button': {
    path: './src/components/uai-button/uai-button.stories.jsx', name: 'Button', import: 'import { UaiButton } from "blip-ds";',
    stories: [{ name: 'Properties', snippet: '<UaiButton />' }],
  } } };
  const docs = { components: [
    { tag: 'bds-uai-button', docs: 'wrong', props: [], events: [], methods: [], slots: [] },
    { tag: 'uai-button', docs: 'UAI button', props: [{ name: 'iconLeft', attr: 'icon-left', type: 'string', default: 'null' }],
      events: [{ event: 'uaiClick', detail: 'MouseEvent' }], methods: [], slots: [{ name: '', docs: 'Label' }] },
  ] };
  const result = enrichManifest(manifest, docs, { entries: {} }).components['uai-button'];
  assert.equal(result.summary, '<UaiButton> from blip-ds-react/dist/components');
  assert.equal(result.import, "import { UaiButton } from 'blip-ds-react/dist/components';");
  assert.match(result.description, /^UAI button/);
  assert.match(result.description, /- iconLeft: string/);
  assert.match(result.description, /- onUaiClick: MouseEvent/);
  assert.match(result.description, /default \(children\): Label/);
});
