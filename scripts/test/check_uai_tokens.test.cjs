const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { checkScss, checkScript, checkMdx, listFiles, tokenCategory } = require('../check_uai_tokens.cjs');

const tokens = new Map(
  [
    'uai-spacing-md',
    'uai-sizing-lg',
    'uai-control-height-medium',
    'uai-radius-lg',
    'uai-border-width-default',
    'uai-opacity-disabled',
    'uai-duration-fast',
    'uai-easing-standard',
    'uai-layer-header',
    'uai-width-dialog',
    'uai-breakpoint-lg',
    'uai-body-base-font-size',
  ].map(name => [name, tokenCategory(name, 'Dimensions')]),
);
tokens.set('uai-content-primary', 'color');

const scss = body => checkScss(`.demo {\n${body}\n}\n`, 'demo.scss', tokens);

test('maps token names to categories', () => {
  assert.equal(tokenCategory('uai-control-height-short', 'Dimensions'), 'control-height');
  assert.equal(tokenCategory('uai-title-md-line-height', 'Typography'), 'line-height');
  assert.equal(tokenCategory('uai-surface-paper', 'Colors'), 'color');
  assert.equal(tokenCategory('uai-layer-header', 'Layout'), 'layer');
});

test('accepts runtime tokens with their own SCSS fallback and the closed list of literals', () => {
  assert.deepEqual(
    scss(`
  gap: var(--uai-spacing-md, #{$uai-spacing-md});
  min-height: var(--uai-control-height-medium);
  border: var(--uai-border-width-default, #{$uai-border-width-default}) solid var(--uai-content-primary);
  inset: calc(-1 * var(--uai-border-width-default));
  transition: color var(--uai-duration-fast) var(--uai-easing-standard);
  width: 100%;
  margin: 0;
  flex: 1 1 auto;
  opacity: 1;
  z-index: 1;
  transform: rotate(180deg) scale(0.96);
  font-size: var(--uai-#{$variant}-font-size, #{token('#{$variant}-font-size')});
  --uai-icon-size: var(--button-icon-size);`),
    [],
  );
});

test('reports literal lengths, times, colors and unitless typography values', () => {
  const errors = scss(`
  padding: 12px;
  transition: color 150ms ease;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  line-height: 1;
  font-weight: 600;`).join('\n');
  for (const value of ['12px', '150ms', '#fff', 'rgba', 'opacity uses a literal', 'line-height uses a literal', 'font-weight uses a literal']) {
    assert.match(errors, new RegExp(value));
  }
});

test('reports fallbacks that are literals or another token', () => {
  const errors = scss(`
  opacity: var(--uai-opacity-disabled, 0.5);
  min-height: var(--uai-control-height-medium, var(--uai-sizing-lg));
  gap: var(--uai-spacing-md, #{$uai-sizing-lg});`);
  assert.equal(errors.length, 3);
  assert.ok(errors.every(error => /fallback must be its own SCSS variable/.test(error)));
});

test('reports compiled SCSS tokens outside media queries', () => {
  const errors = scss('  gap: $uai-spacing-md;');
  assert.match(errors.join('\n'), /\$uai-spacing-md is compiled/);
});

test('allows breakpoints only as SCSS in media queries and rejects literal media widths', () => {
  const content = `@media (max-width: $uai-breakpoint-lg) { .demo { display: none; } }
@media (max-width: 800px) { .demo { display: none; } }
@media (prefers-reduced-motion: reduce) { .demo { transition: none; } }`;
  const errors = checkScss(content, 'demo.scss', tokens);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /demo\.scss:2 media query uses 800px/);
});

test('reports a token from the wrong category', () => {
  const errors = scss(`
  height: var(--uai-spacing-md);
  gap: var(--uai-sizing-lg);
  border-radius: var(--uai-spacing-md);
  z-index: var(--uai-spacing-md);`);
  assert.equal(errors.length, 4);
  assert.match(errors[0], /height uses spacing token --uai-spacing-md; expected sizing or control-height or width/);
});

test('ignores comments and reports the source line', () => {
  const errors = scss('  // padding: 12px;\n  /* margin: 4px; */\n  gap: 4px;');
  assert.equal(errors.length, 1);
  assert.match(errors[0], /demo\.scss:4 gap uses literal 4px/);
});

test('reports literals in scripts, px in docs and literal timers', () => {
  const errors = checkScript(
    `/** Size: medium (40px). */
const row = { gap: '16px', color: '#ffffff' };
const ok = { gap: 'var(--uai-spacing-md)', width: '100%' };
setTimeout(() => close(), 150);`,
    'demo.stories.jsx',
  ).join('\n');
  assert.match(errors, /demo\.stories\.jsx:1 doc mentions 40px/);
  assert.match(errors, /:2 literal 16px/);
  assert.match(errors, /:2 literal #ffffff/);
  assert.match(errors, /:4 timer uses 150 ms/);
  assert.doesNotMatch(errors, /:3 /);
});

test('checks MDX examples but not prose', () => {
  const errors = checkMdx(
    'A altura padrão é 40px.\n\n```html\n<div style="gap: 8px"></div>\n```\n\n<div style={{ gap: \'var(--uai-spacing-md)\' }} />',
    'demo.mdx',
  );
  assert.equal(errors.length, 1);
  assert.match(errors[0], /demo\.mdx:3 example uses 8px/);
});

test('checks uai-* components and the internal UAI primitives, not legacy files or tests', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'uai-lint-'));
  const write = file => {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), '');
  };
  [
    'src/components/uai-demo/uai-demo.scss',
    'src/components/uai-demo/uai-demo.tsx',
    'src/components/button/button.scss',
    'src/globals/_uai-mixins.scss',
    'src/globals/_mixins.scss',
    'src/utils/uai-overlay.ts',
    'src/utils/position-element.ts',
    'src/utils/test/uai-overlay.spec.ts',
  ].forEach(write);
  const files = listFiles(root).map(file => path.relative(root, file)).sort();
  assert.deepEqual(files, [
    'src/components/uai-demo/uai-demo.scss',
    'src/components/uai-demo/uai-demo.tsx',
    'src/globals/_uai-mixins.scss',
    'src/utils/uai-overlay.ts',
  ]);
  fs.rmSync(root, { recursive: true, force: true });
});
