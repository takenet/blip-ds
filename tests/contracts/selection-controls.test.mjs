import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { URL } from 'node:url';
import ts from 'typescript';

const contracts = [
  ['checkbox/checkbox.tsx', 'uai-checkbox/uai-checkbox.tsx'],
  ['radio/radio.tsx', 'uai-radio/uai-radio.tsx'],
  ['radio-button/radio-group.tsx', 'uai-radio-group/uai-radio-group.tsx'],
  ['switch/switch.tsx', 'uai-switch/uai-switch.tsx'],
  ['tooltip/tooltip.tsx', 'uai-tooltip/uai-tooltip.tsx'],
];

// Defaults replaced on purpose by a UAI token (the literal would fail the token lint).
const tokenDefaults = new Set(['tooltip/tooltip.tsx:Prop:maxWidth']);

function publicMembers(path) {
  const url = new URL(`../../src/components/${path}`, import.meta.url);
  const source = ts.createSourceFile(path, readFileSync(url, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const component = source.statements.find(ts.isClassDeclaration);
  assert.ok(component, `Component class missing in ${path}`);
  const members = new Map();
  for (const member of component.members) {
    for (const decorator of ts.getDecorators(member) ?? []) {
      const call = decorator.expression;
      if (!ts.isCallExpression(call)) continue;
      const kind = call.expression.getText(source);
      if (!['Prop', 'Method', 'Event'].includes(kind)) continue;
      const name = member.name.getText(source);
      members.set(`${kind}:${name}`, {
        defaultValue: member.initializer?.getText(source),
        parameters: member.parameters?.length,
      });
    }
  }
  return members;
}

for (const [legacyPath, uaiPath] of contracts) {
  test(`${uaiPath} retains legacy public members, defaults and method arity`, () => {
    const legacy = publicMembers(legacyPath);
    const uai = publicMembers(uaiPath);
    for (const [key, member] of legacy) {
      const mapped = key.startsWith('Event:') ? key.replace('Event:bds', 'Event:uai') : key;
      assert.ok(uai.has(mapped), `${uaiPath} missing ${mapped}`);
      if (key.startsWith('Prop:') && member.defaultValue !== undefined && !tokenDefaults.has(`${legacyPath}:${key}`)) {
        assert.equal(uai.get(mapped).defaultValue, member.defaultValue, `${mapped} default changed`);
      }
      if (key.startsWith('Method:')) {
        assert.equal(uai.get(mapped).parameters, member.parameters, `${mapped} parameters changed`);
      }
    }
    assert.ok(
      readFileSync(new URL(`../../src/components/${legacyPath}`, import.meta.url), 'utf8').includes('@deprecated'),
    );
  });
}
