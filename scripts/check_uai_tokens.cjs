const fs = require('node:fs');
const path = require('node:path');

// Values allowed as literals (ADR-002, closed list): 0, percentages and layout fractions (%, fr, vw, vh),
// icon rotation (deg, turn, rad), animation scale factors, counts and local stacking order (unitless integers).
const LENGTH_OR_TIME = /(?<![\w$#.-])(-?(?:\d+\.?\d*|\.\d+))(px|rem|em|ms|s)\b/g;
const HEX = /(?<![\w&])#[0-9a-fA-F]{3,8}\b/g;
const COLOR_FUNCTION = /\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(/g;

const PROPERTY_CATEGORIES = [
  [/^(gap|row-gap|column-gap|padding(-.+)?|margin(-.+)?|outline-offset|scroll-padding(-.+)?)$/, ['spacing']],
  [/^(inset(-.+)?|top|right|bottom|left)$/, ['spacing', 'border-width']],
  [/^((min-|max-)?(width|height|inline-size|block-size)|flex-basis)$/, ['sizing', 'control-height', 'width']],
  [/^border(-[a-z]+)*-radius$/, ['radius']],
  [/^opacity$/, ['opacity']],
  [/^z-index$/, ['layer']],
  [/^(transition|animation)(-.+)?$/, ['duration', 'easing']],
  [/^font-size$/, ['font-size']],
  [/^line-height$/, ['line-height']],
  [/^font-weight$/, ['font-weight']],
  [/^letter-spacing$/, ['letter-spacing']],
  [/^font-family$/, ['font-family']],
  [/^(border|outline)(-(top|right|bottom|left|block|inline)(-(start|end))?)?-width$/, ['border-width']],
  [/^(border|outline)(-(top|right|bottom|left|block|inline)(-(start|end))?)?$/, ['border-width', 'color']],
  [/^box-shadow$/, ['shadow', 'color', 'border-width']],
  [/^(color|background(-color)?|border(-[a-z]+)?-color|outline-color|fill|stroke|caret-color|text-decoration-color)$/, ['color']],
];

function tokenCategory(name, collection) {
  if (collection === 'Colors') return 'color';
  if (name.startsWith('uai-elevation-')) return 'shadow';
  const prefixes = ['spacing', 'sizing', 'control-height', 'width', 'radius', 'border-width', 'opacity', 'layer',
    'duration', 'easing', 'breakpoint', 'font-weight', 'letter-spacing', 'font-family'];
  const prefix = prefixes.find(item => name.startsWith(`uai-${item}-`));
  if (prefix) return prefix;
  if (name.endsWith('-font-size')) return 'font-size';
  if (name.endsWith('-line-height')) return 'line-height';
  return 'other';
}

function loadTokens(root) {
  const json = file => JSON.parse(fs.readFileSync(require.resolve(`blip-tokens/build/json/${file}`, { paths: [root] }), 'utf8'));
  const tokens = new Map(Object.entries(json('uai-metadata.json')).map(([name, item]) => [name, tokenCategory(name, item.collection)]));
  for (const name of Object.keys(json('uai-shadows.json'))) tokens.set(name, 'shadow');
  return tokens;
}

const lineOf = (text, index) => text.slice(0, index).split('\n').length;

// Comments are blanked (newlines kept) so reported lines match the source.
function stripComments(text) {
  return text.replace(/\/\*[\s\S]*?\*\/|(?<![:'"])\/\/[^\n]*/g, match => match.replace(/[^\n]/g, ' '));
}

function literals(value) {
  const found = [];
  for (const [, number, unit] of value.matchAll(LENGTH_OR_TIME)) if (Number(number) !== 0) found.push(`${number}${unit}`);
  for (const [hex] of value.matchAll(HEX)) found.push(hex);
  for (const [fn] of value.matchAll(COLOR_FUNCTION)) found.push(`${fn}…)`);
  return found;
}

// Finds every var(--uai-*) call, with nested parentheses resolved, so fallbacks can be checked as a whole.
function tokenCalls(value) {
  const calls = [];
  for (const match of value.matchAll(/var\(\s*--(uai-[\w#{}$-]+)\s*/g)) {
    let depth = 1;
    let index = match.index + 4;
    while (depth && index < value.length) {
      index++;
      if (value[index] === '(') depth++;
      if (value[index] === ')') depth--;
    }
    const inner = value.slice(match.index + 4, index);
    const comma = inner.indexOf(',');
    calls.push({
      start: match.index,
      end: index + 1,
      name: match[1],
      fallback: comma === -1 ? null : inner.slice(comma + 1).trim(),
    });
  }
  return calls.filter(call => !calls.some(other => other !== call && other.start < call.start && other.end >= call.end));
}

function checkScss(content, filename, tokens) {
  const errors = [];
  const text = stripComments(content);
  const report = (index, message) => errors.push(`${filename}:${lineOf(text, index)} ${message}`);

  for (const match of text.matchAll(/@media\s+([^{]+)\{/g)) {
    for (const literal of literals(match[1])) report(match.index, `media query uses ${literal}; use $uai-breakpoint-*`);
  }

  const declaration = /(^|[;{}])(\s*)(--[\w-]+|[a-z][\w-]*)\s*:(?!:)\s*((?:[^;{}]|#\{[^}]*\})*?)\s*(?=;|\}(?!\s*[,)]))/g;
  for (const match of text.matchAll(declaration)) {
    const [, , space, property, value] = match;
    if (!value.trim() || /[&]/.test(property)) continue;
    const index = match.index + match[1].length + space.length;
    let rest = value;
    const used = [];

    for (const call of tokenCalls(value)) {
      rest = rest.replace(value.slice(call.start, call.end), ' ');
      const dynamic = call.name.includes('#{');
      if (!dynamic && !tokens.has(call.name)) continue;
      if (!dynamic) used.push(call.name);
      if (call.fallback === null) continue;
      const own = !dynamic && call.fallback.replace(/\s+/g, '') === `#{$${call.name}}`;
      const lookup = /^#\{(?![^}]*\$uai-)[^}]*\}$/.test(call.fallback);
      if (!own && !lookup) report(index, `var(--${call.name}) fallback must be its own SCSS variable, not "${call.fallback}"`);
    }

    for (const variable of rest.matchAll(/\$(uai-[\w-]+)/g)) {
      report(index, `$${variable[1]} is compiled; read var(--${variable[1]}) at runtime`);
    }
    for (const literal of literals(rest.replace(/#\{[^}]*\}/g, ' '))) report(index, `${property} uses literal ${literal}`);

    const unitless = /(?<![\w.#$-])(\d*\.?\d+)(?![\w.%-])/g;
    const numbers = [...rest.replace(/#\{[^}]*\}|var\([^)]*\)/g, ' ').matchAll(unitless)].map(item => Number(item[1]));
    if (property === 'opacity' && numbers.some(number => number !== 0 && number !== 1)) report(index, 'opacity uses a literal; use opacity/*');
    if (['line-height', 'font-weight'].includes(property) && numbers.some(Boolean)) report(index, `${property} uses a literal; use a typography token`);

    const rule = PROPERTY_CATEGORIES.find(([pattern]) => pattern.test(property));
    if (rule) {
      for (const name of used) {
        const category = tokens.get(name);
        if (!rule[1].includes(category)) report(index, `${property} uses ${category} token --${name}; expected ${rule[1].join(' or ')}`);
      }
    }
  }
  return errors;
}

// TSX, stories and examples: string literals and comments are checked; tests are out of scope.
function checkScript(content, filename) {
  const errors = [];
  for (const match of content.matchAll(/(['"`])((?:\\.|(?!\1)[^\\\n])*)\1/g)) {
    for (const literal of literals(match[2])) {
      errors.push(`${filename}:${lineOf(content, match.index)} literal ${literal}; use a --uai-* token`);
    }
  }
  for (const match of content.matchAll(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g)) {
    for (const [px] of match[0].matchAll(/\b\d+(\.\d+)?px\b/g)) {
      errors.push(`${filename}:${lineOf(content, match.index + match[0].indexOf(px))} doc mentions ${px}; name the token instead`);
    }
  }
  for (const match of content.matchAll(/\bset(?:Timeout|Interval)\([^;]*?,\s*([1-9]\d*)\s*\)/g)) {
    errors.push(`${filename}:${lineOf(content, match.index)} timer uses ${match[1]} ms; read the resolved duration token`);
  }
  return errors;
}

// MDX prose may describe values; code fences and inline styles are examples and must use tokens.
function checkMdx(content, filename) {
  const errors = [];
  const blocks = [...content.matchAll(/```[\s\S]*?```|style=\{\{[\s\S]*?\}\}|style="[^"]*"/g)];
  for (const block of blocks) {
    for (const literal of literals(block[0])) {
      errors.push(`${filename}:${lineOf(content, block.index)} example uses ${literal}; use a --uai-* token`);
    }
  }
  return errors;
}

// uai-* components plus the internal UAI primitives (src/globals/_uai-*.scss and src/utils/uai-*.ts).
function listFiles(root) {
  const dir = path.join(root, 'src', 'components');
  const components = fs.readdirSync(dir)
    .filter(name => name.startsWith('uai-'))
    .flatMap(name => fs.readdirSync(path.join(dir, name)).map(file => path.join(dir, name, file)))
    .filter(file => /\.(scss|tsx|jsx|mdx)$/.test(file) && fs.statSync(file).isFile());
  const primitives = [
    ['globals', /^_uai-.+\.scss$/],
    ['utils', /^uai-.+\.ts$/],
  ].flatMap(([folder, pattern]) => {
    const base = path.join(root, 'src', folder);
    return fs.existsSync(base) ? fs.readdirSync(base).filter(file => pattern.test(file)).map(file => path.join(base, file)) : [];
  });
  return [...components, ...primitives];
}

function checkFile(file, content, tokens, root) {
  const filename = path.relative(root, file);
  if (file.endsWith('.scss')) return checkScss(content, filename, tokens);
  if (file.endsWith('.mdx')) return checkMdx(content, filename);
  return checkScript(content, filename);
}

function run(root = process.cwd()) {
  const tokens = loadTokens(root);
  return listFiles(root).flatMap(file => checkFile(file, fs.readFileSync(file, 'utf8'), tokens, root));
}

if (require.main === module) {
  const errors = run();
  if (errors.length) {
    console.error(`UAI token check failed (${errors.length}):\n${errors.map(item => `- ${item}`).join('\n')}`);
    process.exit(1);
  }
  console.log('UAI token check passed.');
}

module.exports = { checkScss, checkScript, checkMdx, listFiles, loadTokens, run, tokenCategory };
