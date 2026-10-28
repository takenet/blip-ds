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
const inputSource = readFileSync(new URL('./uai-input.figma.ts', import.meta.url), 'utf8');
const passwordSource = readFileSync(new URL('./uai-input-password.figma.ts', import.meta.url), 'utf8');
const textareaSource = readFileSync(new URL('./uai-textarea.figma.ts', import.meta.url), 'utf8');
const phoneSource = readFileSync(new URL('./uai-input-phone.figma.ts', import.meta.url), 'utf8');
const dateSource = readFileSync(new URL('./uai-input-date.figma.ts', import.meta.url), 'utf8');
const chipsSource = readFileSync(new URL('./uai-input-chips.figma.ts', import.meta.url), 'utf8');
const editableSource = readFileSync(new URL('./uai-input-editable.figma.ts', import.meta.url), 'utf8');
const imports = ['import { UaiIcon } from "blip-ds-react/dist/components"'];

const evaluate = (source, properties = {}, swaps = {}, instances = {}) => {
  const figma = {
    selectedInstance: {
      getString: (key) => properties[key],
      getBoolean: (key) => properties[key],
      getEnum: (key, values) => {
        assert.ok(Object.hasOwn(values, properties[key]), `Unmapped ${key}: ${properties[key]}`);
        return values[properties[key]];
      },
      getInstanceSwap: (key) => swaps[key],
      findInstance: (name) => instances[name] ?? { type: 'ERROR' },
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

const inputDefaults = {
  Label: 'E-mail',
  'Show Label': true,
  Text: 'ana@blip.ai',
  'Helper Message': 'Use o e-mail de trabalho.',
  'Error Message': 'Informe um e-mail válido.',
  'Success Message': 'E-mail confirmado.',
  'Show Message': true,
  'Show Icon': false,
  'Counter Length': false,
  'Counter Value': '0/100',
  'Show Leading Adornment': false,
  'Show Inline Adornment': false,
  'Show Trailing Adornment': false,
  Size: 'Medium',
  Feedback: 'Default',
  State: 'Default',
};

test('input covers every size, feedback and state with valid React', () => {
  for (const Size of ['Medium', 'Short'])
    for (const Feedback of ['Default', 'Error', 'Success'])
      for (const State of ['Default', 'Hover', 'Filled', 'Focus', 'Disabled', 'Readonly']) {
        const { example } = evaluate(inputSource, { ...inputDefaults, Size, Feedback, State });
        assert.equal(example.includes(' size="short"'), Size === 'Short');
        assertJsx(example);
        assert.ok(example.includes('label={"E-mail"}'));
        assert.equal(example.includes('placeholder={"ana@blip.ai"}'), ['Default', 'Hover'].includes(State));
        assert.equal(example.includes('value={"ana@blip.ai"}'), !['Default', 'Hover'].includes(State));
        assert.equal(example.includes(' danger'), Feedback === 'Error');
        assert.equal(example.includes(' success '), Feedback === 'Success');
        assert.equal(example.includes(' disabled'), State === 'Disabled');
        assert.equal(example.includes(' readonly'), State === 'Readonly');
        const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
        assert.ok(example.includes(`${message}={`));
      }
});

test('input maps the icon, counter, adornments and an accessible name without visible label', () => {
  const { example } = evaluate(
    inputSource,
    {
      ...inputDefaults,
      'Show Label': false,
      'Show Message': false,
      'Show Icon': true,
      'Counter Length': true,
      'Show Inline Adornment': true,
      'Show Trailing Adornment': true,
    },
    { Icon: swap('search') },
  );
  assertJsx(example);
  assert.ok(example.includes('aria-label={"E-mail"}'));
  assert.ok(example.includes('icon="search"'));
  assert.ok(example.includes('counterLength maxlength={100}'));
  assert.ok(example.includes('slot="inside-input-left"') && example.includes('slot="input-right"'));
  assert.ok(!example.includes('Message='));
});

test('input rejects an unmapped icon and an input without any name', () => {
  assert.throws(() => evaluate(inputSource, { ...inputDefaults, 'Show Icon': true }, {}), /Connect the glyph/);
  assert.throws(() => evaluate(inputSource, { ...inputDefaults, 'Show Label': false, Label: ' ' }), /accessible name/);
});

const passwordDefaults = {
  Label: 'Senha',
  Text: 'Placeholder',
  'Helper Message': 'Use a senha da conta.',
  'Error Message': 'Revise a senha informada.',
  'Success Message': 'Senha confirmada.',
  'Show Strength': false,
  Visibility: 'Hidden',
  Feedback: 'Default',
  State: 'Default',
  Level: 'None',
};

test('password covers every feedback, state and visibility with valid React', () => {
  for (const Feedback of ['Default', 'Error', 'Success'])
    for (const State of ['Default', 'Filled', 'Hover', 'Focus', 'Disabled', 'Readonly'])
      for (const Visibility of ['Hidden', 'Revealed']) {
        const { example } = evaluate(passwordSource, { ...passwordDefaults, Feedback, State, Visibility });
        assertJsx(example);
        assert.ok(example.includes('label={"Senha"}'));
        assert.equal(example.includes('placeholder={"Placeholder"}'), ['Default', 'Hover'].includes(State));
        assert.equal(example.includes('value={"Placeholder"}'), !['Default', 'Hover'].includes(State));
        assert.equal(example.includes(' openEyes'), Visibility === 'Revealed');
        assert.equal(example.includes(' danger'), Feedback === 'Error');
        assert.equal(example.includes(' success'), Feedback === 'Success');
        assert.equal(example.includes(' disabled'), State === 'Disabled');
        assert.equal(example.includes(' readonly'), State === 'Readonly');
        const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
        assert.ok(example.includes(`${message}={`));
      }
});

test('password maps the optional consumer-provided strength level', () => {
  for (const [Level, expected] of [['None', 'none'], ['Low', 'low'], ['Medium', 'medium'], ['High', 'high']]) {
    const { example } = evaluate(passwordSource, { ...passwordDefaults, 'Show Strength': true, Level });
    assertJsx(example);
    assert.ok(example.includes(`showStrength strengthLevel="${expected}"`));
  }
  const { example } = evaluate(passwordSource, { ...passwordDefaults, 'Show Strength': false, Level: 'High' });
  assert.ok(!example.includes('showStrength'));
});

const textareaDefaults = {
  Label: 'Descrição',
  'Show Label': true,
  Text: 'Detalhes do pedido',
  'Helper Message': 'Inclua os detalhes importantes.',
  'Error Message': 'Revise o conteúdo informado.',
  'Success Message': 'Conteúdo confirmado.',
  'Show Message': true,
  'Show Icon': false,
  'Counter Length': false,
  'Counter Value': '0/500',
  'Show Leading Adornment': false,
  'Show Inline Adornment': false,
  'Show Trailing Adornment': false,
  Feedback: 'Default',
  State: 'Default',
};

test('textarea covers every feedback and state with valid React', () => {
  for (const Feedback of ['Default', 'Error', 'Success'])
    for (const State of ['Default', 'Hover', 'Filled', 'Focus', 'Disabled', 'Readonly']) {
      const { example } = evaluate(textareaSource, { ...textareaDefaults, Feedback, State });
      assertJsx(example);
      assert.ok(example.includes('label={"Descrição"}'));
      assert.equal(example.includes('placeholder={"Detalhes do pedido"}'), ['Default', 'Hover'].includes(State));
      assert.equal(example.includes('value={"Detalhes do pedido"}'), !['Default', 'Hover'].includes(State));
      assert.equal(example.includes(' danger'), Feedback === 'Error');
      assert.equal(example.includes(' success '), Feedback === 'Success');
      assert.equal(example.includes(' disabled'), State === 'Disabled');
      assert.equal(example.includes(' readonly'), State === 'Readonly');
      const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
      assert.ok(example.includes(`${message}={`));
    }
});

test('textarea maps the icon, counter, adornments and an accessible name without visible label', () => {
  const { example } = evaluate(
    textareaSource,
    {
      ...textareaDefaults,
      'Show Label': false,
      'Show Message': false,
      'Show Icon': true,
      'Counter Length': true,
      'Show Leading Adornment': true,
      'Show Inline Adornment': true,
      'Show Trailing Adornment': true,
    },
    { Icon: swap('edit') },
  );
  assertJsx(example);
  assert.ok(example.includes('aria-label={"Descrição"}'));
  assert.ok(example.includes('icon="edit"'));
  assert.ok(example.includes('counterLength maxlength={500}'));
  assert.ok(example.includes('slot="input-left"'));
  assert.ok(example.includes('slot="inside-input-left"'));
  assert.ok(example.includes('slot="input-right"'));
  assert.ok(!example.includes('Message='));
});

test('textarea rejects an unmapped icon and a missing accessible name', () => {
  assert.throws(() => evaluate(textareaSource, { ...textareaDefaults, 'Show Icon': true }, {}), /Connect the glyph/);
  assert.throws(
    () => evaluate(textareaSource, { ...textareaDefaults, 'Show Label': false, Label: ' ' }),
    /accessible name/,
  );
});

const phoneDefaults = {
  Label: 'Telefone',
  Text: '11 99999-0000',
  'Helper Message': 'Informe um número com DDD.',
  'Error Message': 'Informe um número válido.',
  'Success Message': 'Número confirmado.',
  Feedback: 'Default',
  State: 'Default',
};
const prefixSelect = (Value = '+55') => ({
  type: 'INSTANCE',
  getString: (key) => ({ Value })[key],
  getBoolean: () => true,
});

test('phone covers every feedback and state with valid React', () => {
  for (const Feedback of ['Default', 'Error', 'Success'])
    for (const State of ['Default', 'Filled', 'Hover', 'Focus', 'Disabled', 'Readonly']) {
      const { example } = evaluate(
        phoneSource,
        { ...phoneDefaults, Feedback, State },
        {},
        { 'Leading Adornment': prefixSelect() },
      );
      assertJsx(example);
      assert.ok(example.startsWith('<UaiInputPhone'));
      assert.ok(example.includes('label={"Telefone"}'));
      assert.ok(example.includes('value={"+55"}'));
      assert.equal(example.includes('placeholder={"11 99999-0000"}'), ['Default', 'Hover'].includes(State));
      assert.equal(example.includes('text={"11 99999-0000"}'), !['Default', 'Hover'].includes(State));
      assert.equal(example.includes(' danger'), Feedback === 'Error');
      assert.equal(example.includes(' success '), Feedback === 'Success');
      assert.equal(example.includes(' disabled'), State === 'Disabled');
      assert.equal(example.includes(' readonly'), State === 'Readonly');
      const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
      assert.ok(example.includes(`${message}={`));
    }
});

test('phone maps the dialing code of the nested prefix and keeps the default label and code', () => {
  const custom = evaluate(
    phoneSource,
    { ...phoneDefaults, State: 'Filled' },
    {},
    { 'Leading Adornment': prefixSelect('+1-264') },
  );
  assertJsx(custom.example);
  assert.ok(custom.example.includes('value={"+1-264"}'));

  const fallback = evaluate(phoneSource, { ...phoneDefaults, Label: ' ', 'Helper Message': '' });
  assertJsx(fallback.example);
  assert.ok(!fallback.example.includes('label='));
  assert.ok(!fallback.example.includes('value='));
  assert.ok(!fallback.example.includes('Message='));
});

test('phone rejects a prefix value that is not a dialing code', () => {
  assert.throws(
    () => evaluate(phoneSource, phoneDefaults, {}, { 'Leading Adornment': prefixSelect('Brasil') }),
    /dialing code/,
  );
});

const dateDefaults = {
  Label: 'Data de entrega',
  Text: 'dd/mm/aaaa',
  'Helper Message': 'Escolha um dia útil.',
  'Error Message': 'Informe uma data válida.',
  'Success Message': 'Data confirmada.',
  Feedback: 'Default',
  State: 'Default',
};

test('date covers every feedback and state with valid React', () => {
  for (const Feedback of ['Default', 'Error', 'Success'])
    for (const State of ['Default', 'Filled', 'Hover', 'Focus', 'Disabled', 'Readonly']) {
      const { example } = evaluate(dateSource, { ...dateDefaults, Feedback, State });
      assertJsx(example);
      assert.ok(example.startsWith('<UaiInputDate'));
      assert.ok(example.includes('label={"Data de entrega"}'));
      assert.equal(example.includes('placeholder={"dd/mm/aaaa"}'), ['Default', 'Hover'].includes(State));
      assert.ok(!example.includes('value='));
      assert.equal(example.includes(' danger'), Feedback === 'Error');
      assert.equal(example.includes(' success '), Feedback === 'Success');
      assert.equal(example.includes(' disabled'), State === 'Disabled');
      assert.equal(example.includes(' readonly'), State === 'Readonly');
      const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
      assert.ok(example.includes(`${message}={`));
    }
});

test('date never maps the displayed Text to the ISO value and keeps the default label', () => {
  const filled = evaluate(dateSource, { ...dateDefaults, Text: '25/12/2026', State: 'Filled' });
  assertJsx(filled.example);
  assert.ok(!filled.example.includes('25/12/2026'));

  const fallback = evaluate(dateSource, { ...dateDefaults, Label: ' ', Text: ' ', 'Helper Message': '' });
  assertJsx(fallback.example);
  assert.equal(fallback.example, '<UaiInputDate />');
  assert.deepEqual(Array.from(fallback.imports), ['import { UaiInputDate } from "blip-ds-react/dist/components"']);
  assert.equal(fallback.id, 'uai-input-date');
});

test('date preserves special characters in label and messages', () => {
  const Label = 'Data "A&B" <início> {teste}';
  const { example } = evaluate(dateSource, { ...dateDefaults, Label, Feedback: 'Error' });
  assertJsx(example);
  assert.ok(example.includes(`label={${JSON.stringify(Label)}}`));
  assert.ok(example.includes('errorMessage={"Informe uma data válida."}'));
});

const chipsDefaults = {
  Label: 'Convidados',
  Placeholder: 'nome@empresa.com',
  Message: 'Separe os e-mails por vírgula.',
  Feedback: 'Default',
  State: 'Empty',
};
const chip = (Label, Removable = true) => ({
  type: 'INSTANCE',
  getString: (key) => ({ Label })[key],
  getBoolean: (key) => ({ Removable })[key],
});
const chipInstances = { 'Chip 1': chip('ana@blip.ai'), 'Chip 2': chip('bia@blip.ai') };

test('input chips covers every feedback and state with valid React', () => {
  for (const Feedback of ['Default', 'Error', 'Success'])
    for (const State of ['Empty', 'Filled', 'Focus', 'Disabled']) {
      const { example } = evaluate(chipsSource, { ...chipsDefaults, Feedback, State }, {}, chipInstances);
      assertJsx(example);
      assert.ok(example.startsWith('<UaiInputChips'));
      assert.ok(example.includes('label={"Convidados"}'));
      assert.ok(example.includes('placeholder={"nome@empresa.com"}'));
      assert.equal(example.includes('chips={["ana@blip.ai","bia@blip.ai"]}'), ['Filled', 'Disabled'].includes(State));
      assert.equal(example.includes('chips='), ['Filled', 'Disabled'].includes(State));
      assert.equal(example.includes(' danger'), Feedback === 'Error');
      assert.equal(example.includes(' success '), Feedback === 'Success');
      assert.equal(example.includes(' disabled'), State === 'Disabled');
      assert.ok(!example.includes('readonly'));
      const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
      assert.ok(example.includes(`${message}={"Separe os e-mails por vírgula."}`));
    }
});

test('input chips reads only the labels of the nested chips and skips empty or missing ones', () => {
  const removable = evaluate(
    chipsSource,
    { ...chipsDefaults, State: 'Filled' },
    {},
    { 'Chip 1': chip('design', false), 'Chip 2': chip('  ') },
  );
  assertJsx(removable.example);
  assert.ok(removable.example.includes('chips={["design"]}'));
  assert.ok(!removable.example.includes('Removable') && !removable.example.includes('readonly'));

  const missing = evaluate(chipsSource, { ...chipsDefaults, State: 'Filled', Message: '' });
  assertJsx(missing.example);
  assert.equal(missing.example, '<UaiInputChips label={"Convidados"} placeholder={"nome@empresa.com"} />');
  assert.deepEqual(Array.from(missing.imports), ['import { UaiInputChips } from "blip-ds-react/dist/components"']);
  assert.equal(missing.id, 'uai-input-chips');
  assert.equal(missing.metadata.nestable, true);
});

test('input chips names the field by aria-label without a label and rejects a field without any name', () => {
  const { example } = evaluate(chipsSource, { ...chipsDefaults, Label: ' ' }, {}, chipInstances);
  assertJsx(example);
  assert.ok(example.includes('aria-label={"nome@empresa.com"}'));
  assert.ok(!example.includes(' label='));
  assert.throws(
    () => evaluate(chipsSource, { ...chipsDefaults, Label: ' ', Placeholder: '' }, {}, chipInstances),
    /accessible name/,
  );
});

test('input chips preserves special characters in label, chips and message', () => {
  const Label = 'Tags "A&B" <novas> {teste}';
  const { example } = evaluate(
    chipsSource,
    { ...chipsDefaults, Label, State: 'Filled', Feedback: 'Error', Message: 'Revise "A&B".' },
    {},
    { 'Chip 1': chip('<a&b>'), 'Chip 2': chip('{x}') },
  );
  assertJsx(example);
  assert.ok(example.includes(`label={${JSON.stringify(Label)}}`));
  assert.ok(example.includes(`chips={${JSON.stringify(['<a&b>', '{x}'])}}`));
  assert.ok(example.includes(`errorMessage={${JSON.stringify('Revise "A&B".')}}`));
});

const editableDefaults = {
  Value: 'Projeto Alfa',
  Label: 'Nome do projeto',
  'Helper message': 'Use até 40 caracteres.',
  'Error message': 'Informe um nome.',
  'Success message': 'Nome salvo.',
  Mode: 'View',
  Size: 'Standard',
  Feedback: 'Default',
};

test('input editable covers every mode, size and feedback with valid React', () => {
  for (const Mode of ['View', 'Edit'])
    for (const Size of ['Short', 'Standard', 'Tall'])
      for (const Feedback of ['Default', 'Error', 'Success']) {
        const { example } = evaluate(editableSource, { ...editableDefaults, Mode, Size, Feedback });
        assertJsx(example);
        assert.ok(example.startsWith('<UaiInputEditable'));
        assert.ok(example.includes('label={"Nome do projeto"}'));
        assert.ok(example.includes('value={"Projeto Alfa"}'));
        assert.equal(example.includes(' size="short"'), Size === 'Short');
        assert.equal(example.includes(' size="tall"'), Size === 'Tall');
        assert.ok(!example.includes('size="standard"') && !example.includes('size="medium"'));
        assert.equal(example.includes(' danger'), Feedback === 'Error');
        assert.equal(example.includes(' success '), Feedback === 'Success');
        const message = { Default: 'helperMessage', Error: 'errorMessage', Success: 'successMessage' }[Feedback];
        const text = { Default: 'Use até 40 caracteres.', Error: 'Informe um nome.', Success: 'Nome salvo.' }[Feedback];
        assert.ok(example.includes(`${message}={${JSON.stringify(text)}}`));
        assert.equal((example.match(/Message=/g) || []).length, 1);
        assert.ok(!/mode|edit/i.test(example.replace('UaiInputEditable', '')));
      }
});

test('input editable omits an empty value and message and keeps imports and metadata', () => {
  const empty = evaluate(editableSource, { ...editableDefaults, Value: ' ', 'Helper message': '' });
  assertJsx(empty.example);
  assert.equal(empty.example, '<UaiInputEditable label={"Nome do projeto"} />');
  assert.deepEqual(Array.from(empty.imports), ['import { UaiInputEditable } from "blip-ds-react/dist/components"']);
  assert.equal(empty.id, 'uai-input-editable');
  assert.equal(empty.metadata.nestable, true);

  const error = evaluate(editableSource, { ...editableDefaults, Feedback: 'Error', 'Error message': '  ' });
  assertJsx(error.example);
  assert.equal(error.example, '<UaiInputEditable label={"Nome do projeto"} value={"Projeto Alfa"} danger />');
});

test('input editable rejects a field without label and an unmapped mode', () => {
  assert.throws(() => evaluate(editableSource, { ...editableDefaults, Label: ' ' }), /accessible name/);
  assert.throws(() => evaluate(editableSource, { ...editableDefaults, Mode: 'Hover' }), /Unmapped Mode/);
});

test('input editable preserves special characters in value, label and message', () => {
  const Label = 'Título "A&B" <novo> {teste}';
  const Value = '<Projeto> & "Beta" {1}';
  const { example } = evaluate(editableSource, {
    ...editableDefaults,
    Label,
    Value,
    Feedback: 'Success',
    'Success message': 'Salvo "A&B".',
  });
  assertJsx(example);
  assert.ok(example.includes(`label={${JSON.stringify(Label)}}`));
  assert.ok(example.includes(`value={${JSON.stringify(Value)}}`));
  assert.ok(example.includes(`successMessage={${JSON.stringify('Salvo "A&B".')}}`));
});
