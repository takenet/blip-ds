import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { URL } from 'node:url';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { glyphTemplate } from './glyph-template.mjs';

const glyphs = JSON.parse(readFileSync(new URL('./uai-icon-glyphs.json', import.meta.url), 'utf8'));
const buttonSource = readFileSync(new URL('./uai-button.figma.ts', import.meta.url), 'utf8');
const iconSource = readFileSync(new URL('./uai-icon.figma.ts', import.meta.url), 'utf8');
const imports = ['import { UaiIcon } from "blip-ds-react/dist/components"'];

const evaluate = (source, properties = {}, swaps = {}) => {
  const figma = {
    selectedInstance: {
      getString: (key) => properties[key],
      getBoolean: (key) => properties[key],
      getEnum: (key, values) => {
        assert.ok(Object.hasOwn(values, properties[key]), `Unmapped ${key}: ${properties[key]}`);
        return values[properties[key]];
      },
      getInstanceSwap: (key) => swaps[key],
    },
    code: (strings, ...values) => strings.reduce((result, part, index) => result + part + (values[index] ?? ''), ''),
  };
  const module = { exports: {} };
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  });
  runInNewContext(outputText, {
    module,
    exports: module.exports,
    require: (name) => {
      assert.equal(name, 'figma');
      return figma;
    },
  });
  return module.exports.default;
};

const swap = (name = 'info', theme = 'outline') => ({
  type: 'INSTANCE',
  hasCodeConnect: () => true,
  executeTemplate: () => ({ metadata: { props: { name, theme } } }),
});
const buttonDefaults = {
  Label: 'Continuar',
  'Show Label': true,
  'Show Left Icon': false,
  'Show Right Icon': false,
  Variant: 'Solid',
  Size: 'Medium',
  Color: 'Primary',
  State: 'Default',
};
const iconDefaults = { Size: 'Medium', Color: 'Content-Primary' };
const assertJsx = (example) => {
  const source = ts.createSourceFile('example.tsx', example, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(
    source.parseDiagnostics.map((diagnostic) => diagnostic.messageText),
    [],
  );
};

test('every glyph exposes matching metadata and a valid React example', () => {
  assert.equal(Object.keys(glyphs.icons).length, 646);
  const names = new Set();
  for (const [nodeId, props] of Object.entries(glyphs.icons)) {
    const result = evaluate(glyphTemplate(glyphs.fileKey, nodeId, props));
    assert.equal(result.metadata.props.name, props.name);
    assert.equal(result.metadata.props.theme, props.theme);
    assert.equal(result.metadata.nestable, true);
    assert.deepEqual(Array.from(result.imports), imports);
    assert.ok(result.example.includes(`name="${props.name}"`));
    assert.equal(result.example.includes('theme="solid"'), props.theme === 'solid');
    assert.ok(!names.has(result.id), `Duplicate glyph id ${result.id}`);
    names.add(result.id);
    assertJsx(result.example);
  }
});

test('button covers every variant, size, color and state with valid React', () => {
  for (const Variant of ['Solid', 'Outline', 'Text'])
    for (const Size of ['Compact', 'Short', 'Medium', 'Large'])
      for (const Color of ['Primary', 'Content', 'Positive', 'Negative'])
        for (const State of ['Default', 'Loading', 'Hover', 'Pressed', 'Active', 'Disabled']) {
          const { example } = evaluate(buttonSource, { ...buttonDefaults, Variant, Size, Color, State });
          assertJsx(example);
          assert.ok(example.includes('{"Continuar"}'));
          assert.equal(example.includes('isActive(true)'), State === 'Active');
          assert.equal(example.includes(' loading'), State === 'Loading');
          assert.equal(example.includes(' disabled'), State === 'Disabled');
          assert.ok(!example.includes(' active'));
        }
});

test('button resolves both swaps, the arrow shortcut and solid icons', () => {
  const { example } = evaluate(
    buttonSource,
    { ...buttonDefaults, 'Show Left Icon': true, 'Show Right Icon': true },
    { 'Left Icon Name': swap('info', 'solid'), 'Right Icon Name': swap('arrow-right', 'solid') },
  );
  assert.ok(example.includes('iconLeft="info"'));
  assert.ok(example.includes(' arrow'));
  assert.ok(example.includes('iconTheme="solid"'));
  assertJsx(example);
});

test('button preserves special characters in visible and accessible labels', () => {
  const Label = 'Salvar "A&B" <rascunho> {teste}\nContinuar';
  for (const showLabel of [true, false]) {
    const { example } = evaluate(buttonSource, { ...buttonDefaults, Label, 'Show Label': showLabel });
    assertJsx(example);
    assert.ok(example.includes(JSON.stringify(Label)));
    assert.equal(example.includes('aria-label='), !showLabel);
  }
});

test('button rejects unmapped glyphs, mixed themes and unnamed icon-only actions', () => {
  assert.throws(() => evaluate(buttonSource, { ...buttonDefaults, 'Show Left Icon': true }), /Connect the glyph/);
  assert.throws(
    () =>
      evaluate(
        buttonSource,
        { ...buttonDefaults, 'Show Left Icon': true, 'Show Right Icon': true },
        { 'Left Icon Name': swap('info'), 'Right Icon Name': swap('arrow-right', 'solid') },
      ),
    /one iconTheme/,
  );
  assert.throws(
    () => evaluate(buttonSource, { ...buttonDefaults, Label: ' ', 'Show Label': false }),
    /accessible name/,
  );
});

test('icon covers every size, color and theme and preserves glyph metadata', () => {
  const colors = [
    'Content-Primary',
    'Content-Secondary',
    'Content-Disabled',
    'Content-Inverse',
    'Content-Link',
    'Feedback-Info',
    'Feedback-Success',
    'Feedback-Warning',
    'Feedback-Error',
  ];
  for (const Size of ['X-Small', 'Small', 'Medium'])
    for (const Color of colors)
      for (const theme of ['outline', 'solid']) {
        const result = evaluate(iconSource, { Size, Color }, { Icon: swap('info', theme) });
        assertJsx(result.example);
        assert.ok(result.example.includes('name="info"'));
        assert.ok(result.example.includes(`color="${Color.toLowerCase()}"`));
        assert.equal(result.example.includes('theme="solid"'), theme === 'solid');
        assert.equal(result.metadata.props.name, 'info');
        assert.equal(result.metadata.props.theme, theme);
      }
});

test('icon rejects absent or invalid glyph mappings instead of emitting an empty icon', () => {
  assert.throws(() => evaluate(iconSource, iconDefaults), /Connect the selected glyph/);
  assert.throws(() => evaluate(iconSource, iconDefaults, { Icon: swap('', 'outline') }), /UAI name and theme/);
  assert.throws(() => evaluate(iconSource, iconDefaults, { Icon: swap('info', 'invalid') }), /UAI name and theme/);
});
