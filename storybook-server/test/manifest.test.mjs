import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { enrichManifest, uaiTokensEntry } from '../prepare-manifest.mjs';
import { uaiTokens } from '../../src/pages/uai-foundation/uai-tokens.mjs';
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

test('lists the UAI tokens with light and dark values, elevation and text styles', () => {
  const color = (components, description) => ({ $type: 'color', $description: description, $value: { colorSpace: 'srgb', components, alpha: 1 } });
  const light = {
    color: { surface: { paper: color([1, 1, 1], 'Cards and modals.') } },
    dimension: { spacing: { md: { $type: 'dimension', $description: 'Spacing. 16px.', $value: { value: 16, unit: 'px' } } } },
  };
  const dark = { color: { surface: { paper: color([0, 0, 0], 'Cards and modals.') } } };
  const shadows = { 'uai-elevation-1': { value: '0px 2px 8px black', description: 'Cards.' } };
  const textStyles = { a: { name: 'body/base/regular-space', description: 'Body with spacing.' } };
  const entry = uaiTokensEntry({ light, dark, shadows, textStyles });
  assert.equal(entry.id, 'uai-tokens');
  assert.deepEqual(entry.stories, []);
  assert.match(entry.description, /- --uai-surface-paper: #ffffff \(dark: #000000\)\. Cards and modals\./);
  assert.match(entry.description, /- --uai-spacing-md: 16px\. Spacing\. 16px\./);
  assert.match(entry.description, /- --uai-elevation-1: 0px 2px 8px black\. Cards\./);
  assert.match(entry.description, /body\/base\/regular-space: <UaiTypo variant="body-base" bold="regular" letterSpacing="expanded">/);
});

test('uses the translated usage text and sorts sizes from the smallest to the largest', () => {
  const dimension = (value, description) => ({ $type: 'dimension', $description: description, $value: { value, unit: 'px' } });
  const light = { dimension: { spacing: { md: dimension(16, 'Spacing. 16px.'), '2xs': dimension(4, 'Spacing. 4px.'), xl: dimension(32, 'Spacing. 32px.') } } };
  const tokens = uaiTokens(light, {}, { 'uai-spacing-md': 'Espaçamento. 16px.' });
  assert.deepEqual(tokens.map(token => token.name), ['uai-spacing-2xs', 'uai-spacing-md', 'uai-spacing-xl']);
  assert.equal(tokens[1].description, 'Espaçamento. 16px.');
  assert.equal(tokens[0].description, 'Spacing. 4px.');
});

test('formats motion and layout tokens and keeps breakpoints out of CSS', () => {
  const light = {
    motion: {
      duration: { fast: { $type: 'duration', $description: 'State changes.', $value: { value: 150, unit: 'ms' } } },
      easing: { standard: { $type: 'cubicBezier', $description: 'Default curve.', $value: [0.25, 0.1, 0.25, 1] } },
    },
    layout: {
      breakpoint: { lg: { $type: 'dimension', $description: 'Collapses the breadcrumb.', $value: { value: 1075, unit: 'px' } } },
      layer: { header: { $type: 'number', $description: 'Header.', $value: 500 } },
      width: { dialog: { $type: 'dimension', $description: 'Dialog.', $value: { value: 424, unit: 'px' } } },
    },
  };
  const tokens = uaiTokens(light, light);
  const byName = name => tokens.find(token => token.name === name);
  assert.equal(byName('uai-duration-fast').light, '150ms');
  assert.equal(byName('uai-easing-standard').light, 'cubic-bezier(0.25, 0.1, 0.25, 1)');
  assert.equal(byName('uai-breakpoint-lg').cssVar, undefined);
  assert.equal(byName('uai-breakpoint-lg').scssVar, '$uai-breakpoint-lg');

  const entry = uaiTokensEntry({ light, dark: light, shadows: {}, textStyles: {} });
  assert.match(entry.description, /## Movimento\n\n- --uai-duration-fast: 150ms\. State changes\./);
  assert.match(entry.description, /- --uai-easing-standard: cubic-bezier\(0\.25, 0\.1, 0\.25, 1\)\./);
  assert.match(entry.description, /## Layout\n\n- \$uai-breakpoint-lg \(só SCSS\/JS, em media query\): 1075px\./);
  assert.match(entry.description, /- --uai-layer-header: 500\. Header\./);
  assert.doesNotMatch(entry.description, /--uai-breakpoint-/);
  assert.doesNotMatch(entry.description, /\[object Object\]/);
  assert.match(entry.description, /## Como aplicar/);
  assert.match(entry.description, /control-height-\*/);
});

test('has a pt-BR usage text for every published UAI token, shadow and text style', () => {
  const read = file => JSON.parse(readFileSync(new URL(file, import.meta.url), 'utf8'));
  const tokensDir = '../../node_modules/blip-tokens/build/json/';
  const usage = read('../../src/pages/uai-foundation/uai-token-usage.pt-BR.json');
  const tokens = uaiTokens(read(`${tokensDir}uai-light.tokens.json`), read(`${tokensDir}uai-dark.tokens.json`));
  assert.deepEqual(tokens.map(token => token.name).filter(name => !usage.tokens[name]), []);
  assert.deepEqual(Object.keys(read(`${tokensDir}uai-shadows.json`)).filter(name => !usage.shadows[name]), []);
  assert.deepEqual(Object.values(read(`${tokensDir}uai-text-styles.json`)).map(style => style.name).filter(name => !usage.textStyles[name]), []);
});
