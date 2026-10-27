import assert from 'node:assert/strict';
import test from 'node:test';
import { enrichManifest } from '../prepare-manifest.mjs';
import { componentTokens, selfContainedStories } from '../story-source.mjs';

const storyFile = `import React from 'react';
import { iconNames } from 'blip-tokens/icons';
import { UaiButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-button.mdx';

export default { title: 'UAI/Button', component: UaiButton };

const SIZES = ['compact', 'medium'];
const gap = 'var(--uai-spacing-md)';
const row = { display: 'flex', gap };
const unused = { color: 'red' };
function names() { return iconNames.slice(0, 2); }

export const Playground = (args) => <UaiButton {...args} />;
`;

test('prepends the helpers a snippet uses, with their dependencies, in source order', () => {
  const stories = [
    { name: 'Sizes', snippet: 'const Sizes = () => <div style={row}>{SIZES.map(size => <UaiButton size={size} />)}</div>;' },
    { name: 'Icons', snippet: 'const Icons = () => <UaiThemeProvider>{names().map(name => <UaiButton icon={name} />)}</UaiThemeProvider>;' },
    { name: 'Playground', snippet: 'const Playground = () => <UaiButton />;' },
  ];
  const result = selfContainedStories(stories, storyFile, 'uai-button.stories.jsx');
  assert.equal(
    stories[0].snippet,
    "const SIZES = ['compact', 'medium'];\nconst gap = 'var(--uai-spacing-md)';\nconst row = { display: 'flex', gap };\n\nconst Sizes = () => <div style={row}>{SIZES.map(size => <UaiButton size={size} />)}</div>;",
  );
  assert.match(stories[1].snippet, /^function names\(\) \{/);
  assert.equal(stories[2].snippet, 'const Playground = () => <UaiButton />;');
  assert.doesNotMatch(stories.map(story => story.snippet).join('\n'), /unused|DocumentationTemplate|export default/);
  assert.deepEqual(result.imports, ["import { iconNames } from 'blip-tokens/icons';"]);
  assert.deepEqual(result.components.sort(), ['UaiButton', 'UaiThemeProvider']);

  const once = stories.map(story => story.snippet);
  selfContainedStories(stories, storyFile, 'uai-button.stories.jsx');
  assert.deepEqual(stories.map(story => story.snippet), once, 'running twice does not duplicate helpers');
});

test('groups the UAI tokens of a component by category and ignores component hooks', () => {
  const css = `.button{gap:var(--uai-spacing-xs, 0.5rem);min-height:var(--uai-control-height-medium);
    color:var(--uai-content-primary);transition:color var(--uai-duration-fast) var(--uai-easing-standard);
    --uai-icon-size:var(--button-icon-size);width:var(--uai-icon-size)}`;
  const categories = {
    'uai-spacing-xs': 'spacing', 'uai-control-height-medium': 'control-height', 'uai-content-primary': 'color',
    'uai-duration-fast': 'duration', 'uai-easing-standard': 'easing',
  };
  assert.deepEqual(componentTokens(css, name => categories[name] || null), [
    '- Cores: --uai-content-primary',
    '- Espaçamento: --uai-spacing-xs',
    '- Altura de controle: --uai-control-height-medium',
    '- Movimento: --uai-duration-fast, --uai-easing-standard',
  ]);
});

test('points v1 components to their UAI replacement and documents tokens of uai components', () => {
  const api = (tag, extra = {}) => ({ tag, docs: `${tag} docs`, props: [], events: [], methods: [], slots: [], ...extra });
  const docs = { components: [
    api('bds-button'),
    api('bds-avatar', { docsTags: [{ name: 'deprecated', text: 'Use `uai-avatar` for new UAI experiences.' }] }),
    api('bds-chip'),
    api('uai-button', { filePath: 'src/components/uai-button/uai-button.tsx', styles: [{ name: '--uai-icon-size', annotation: 'prop', docs: 'Icon size.' }] }),
    api('uai-avatar'),
  ] };
  const entry = file => ({ path: `./src/components/${file}.stories.jsx`, stories: [] });
  const manifest = { components: {
    button: entry('button/button'), avatar: entry('avatar/avatar'), chip: entry('chip/chip'), 'uai-button': entry('uai-button/uai-button'),
  } };
  const result = enrichManifest(manifest, docs, { entries: {} }, {
    componentCss: item => (item.tag === 'uai-button' ? '.b{gap:var(--uai-spacing-xs)}' : ''),
    categoryOf: name => (name === 'uai-spacing-xs' ? 'spacing' : null),
  }).components;

  assert.equal(result.button.summary, "Legado (v1). Em telas novas, use <UaiButton> (docs: uai-button). <BdsButton> from blip-ds-react/dist/components");
  assert.match(result.button.description, /^\*\*Legado \(v1\)\.\*\* Em telas novas, use <UaiButton>/);
  assert.match(result.avatar.description, /use <UaiAvatar>.*Use `uai-avatar` for new UAI experiences\./);
  assert.match(result.chip.summary, /^Componente v1\. Ainda não há equivalente UAI\./);
  assert.doesNotMatch(result['uai-button'].summary, /Legado|v1/);
  assert.match(result['uai-button'].description, /## CSS custom properties\n\n- --uai-icon-size: Icon size\./);
  assert.match(result['uai-button'].description, /## Tokens usados[\s\S]*- Espaçamento: --uai-spacing-xs/);
  assert.doesNotMatch(result.button.description, /## Tokens usados/);
});
