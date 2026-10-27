const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const PUBLIC_DECORATORS = new Set(['Prop', 'Event', 'Method']);

function decoratorName(decorator) {
  const expr = decorator.expression;
  if (ts.isCallExpression(expr) && ts.isIdentifier(expr.expression)) return expr.expression.text;
  return ts.isIdentifier(expr) ? expr.text : null;
}

function hasJsDoc(node) {
  return (node.jsDoc || []).some(doc => {
    const text = typeof doc.comment === 'string' ? doc.comment : (doc.comment || []).map(part => part.text || '').join('');
    return text.trim().length > 0 || (doc.tags || []).length > 0;
  });
}

function classTagNames(node, tag) {
  return (node.jsDoc || [])
    .flatMap(doc => doc.tags || [])
    .filter(item => item.tagName.text === tag)
    .map(item => (typeof item.comment === 'string' ? item.comment : (item.comment || []).map(part => part.text || '').join('')).trim());
}

function checkSource(content, filename) {
  const source = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const errors = [];

  const visit = node => {
    if (ts.isClassDeclaration(node)) {
      const decorators = ts.getDecorators(node) || [];
      if (decorators.some(item => decoratorName(item) === 'Component')) {
        for (const member of node.members) {
          const names = (ts.canHaveDecorators(member) ? ts.getDecorators(member) || [] : []).map(decoratorName);
          const kind = names.find(name => PUBLIC_DECORATORS.has(name));
          if (kind && !hasJsDoc(member)) {
            const line = source.getLineAndCharacterOfPosition(member.getStart()).line + 1;
            errors.push(`${filename}:${line} @${kind} "${member.name ? member.name.getText() : '?'}" has no JSDoc`);
          }
        }

        const slots = classTagNames(node, 'slot');
        const parts = classTagNames(node, 'part');
        const slotNames = new Set(slots.map(text => text.split(/\s+/)[0].replace(/^-$/, '')));
        const partNames = new Set(parts.map(text => text.split(/\s+/)[0]));

        for (const match of content.matchAll(/<slot\b([^>]*)>/g)) {
          const name = /\bname=["']([^"']+)["']/.exec(match[1]);
          const label = name ? name[1] : '';
          if (!slotNames.has(label)) errors.push(`${filename} ${label ? `slot "${label}"` : 'default slot'} has no @slot tag on the class JSDoc`);
        }
        for (const match of content.matchAll(/\bpart=["']([^"']+)["']/g)) {
          for (const part of match[1].split(/\s+/)) {
            if (!partNames.has(part)) errors.push(`${filename} part "${part}" has no @part tag on the class JSDoc`);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  return errors;
}

function listComponents(root) {
  const dir = path.join(root, 'src', 'components');
  return fs
    .readdirSync(dir)
    .filter(name => name.startsWith('uai-'))
    .map(name => path.join(dir, name, `${name}.tsx`))
    .filter(file => fs.existsSync(file));
}

function run(root = process.cwd()) {
  const errors = listComponents(root).flatMap(file => checkSource(fs.readFileSync(file, 'utf8'), path.relative(root, file)));
  return errors;
}

if (require.main === module) {
  const errors = run();
  if (errors.length) {
    console.error(`UAI JSDoc check failed (${errors.length}):\n${errors.map(item => `- ${item}`).join('\n')}`);
    process.exit(1);
  }
  console.log('UAI JSDoc check passed.');
}

module.exports = { checkSource, run };
