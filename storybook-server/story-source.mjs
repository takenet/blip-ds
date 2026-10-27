import ts from 'typescript';

export const REACT_IMPORT = 'blip-ds-react/dist/components';

const identifiers = text => new Set(text.match(/[A-Za-z_$][\w$]*/g) || []);
const isExported = node => (ts.getModifiers?.(node) || node.modifiers || []).some(item => item.kind === ts.SyntaxKind.ExportKeyword);

/**
 * Top-level declarations and imports of a story file, so a story snippet can be made self-contained.
 * Exported stories and the default export are not helpers.
 */
export function parseStorySource(source, filename = 'story.jsx') {
  const file = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JSX);
  const helpers = [];
  const imports = [];
  file.statements.forEach((statement, index) => {
    if (ts.isImportDeclaration(statement)) {
      const from = statement.moduleSpecifier.text;
      const clause = statement.importClause;
      const names = [];
      if (clause?.name) names.push({ local: clause.name.text, default: true });
      if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) {
        for (const element of clause.namedBindings.elements) {
          names.push({ local: element.name.text, imported: (element.propertyName || element.name).text });
        }
      }
      imports.push({ from, names });
      return;
    }
    if (isExported(statement)) return;
    const names = [];
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name)) names.push(declaration.name.text);
      }
    } else if ((ts.isFunctionDeclaration(statement) || ts.isClassDeclaration(statement)) && statement.name) {
      names.push(statement.name.text);
    }
    if (names.length) helpers.push({ index, names, text: statement.getText(file) });
  });
  return { helpers, imports };
}

// Helpers used by the snippet, with their own dependencies, in source order.
function usedHelpers(parsed, snippet) {
  const used = new Map();
  const queue = [snippet];
  while (queue.length) {
    const words = identifiers(queue.pop());
    for (const helper of parsed.helpers) {
      if (!used.has(helper.index) && helper.names.some(name => words.has(name))) {
        used.set(helper.index, helper);
        queue.push(helper.text);
      }
    }
  }
  return [...used.values()].sort((a, b) => a.index - b.index);
}

/**
 * Makes each story snippet runnable on its own by prepending the file-level helpers it uses, and returns
 * one import block covering every snippet. Local blip-ds-react paths become the package import; other
 * relative imports (MDX pages, fixtures) are dropped because consumers cannot import them.
 */
export function selfContainedStories(stories, source, filename) {
  const parsed = parseStorySource(source, filename);
  const code = [];
  for (const story of stories) {
    if (!story.snippet) continue;
    const helpers = usedHelpers(parsed, story.snippet).filter(helper => !story.snippet.includes(helper.text));
    if (helpers.length) story.snippet = `${helpers.map(helper => helper.text).join('\n')}\n\n${story.snippet}`;
    code.push(story.snippet);
  }
  const words = identifiers(code.join('\n'));
  const components = new Set();
  const lines = [];
  for (const declaration of parsed.imports) {
    const from = /blip-ds-react/.test(declaration.from) ? REACT_IMPORT : declaration.from;
    if (from.startsWith('.')) continue;
    const names = declaration.names.filter(name => words.has(name.local));
    if (from === REACT_IMPORT) {
      names.forEach(name => components.add(name.imported || name.local));
      continue;
    }
    if (!names.length) continue;
    const defaults = names.filter(name => name.default).map(name => name.local);
    const named = names.filter(name => !name.default).map(name => (name.imported === name.local ? name.local : `${name.imported} as ${name.local}`));
    const parts = [...defaults, ...(named.length ? [`{ ${named.join(', ')} }`] : [])];
    lines.push(`import ${parts.join(', ')} from '${from}';`);
  }
  return { imports: lines, components: [...components] };
}

const CATEGORY_LABELS = [
  ['color', 'Cores'],
  ['spacing', 'Espaçamento'],
  ['sizing', 'Tamanho'],
  ['control-height', 'Altura de controle'],
  ['width', 'Largura'],
  ['radius', 'Raio'],
  ['border-width', 'Borda'],
  ['opacity', 'Opacidade'],
  ['layer', 'Camada'],
  ['duration', 'Movimento'],
  ['easing', 'Movimento'],
  ['font-family', 'Tipografia'],
  ['font-size', 'Tipografia'],
  ['line-height', 'Tipografia'],
  ['font-weight', 'Tipografia'],
  ['letter-spacing', 'Tipografia'],
  ['shadow', 'Elevação'],
];

/**
 * UAI tokens a component reads, grouped by category, from its compiled CSS (Sass interpolations already
 * resolved). `categoryOf` maps a token name to its category; unknown --uai-* names are component hooks.
 */
export function componentTokens(css, categoryOf) {
  const names = [...new Set([...css.matchAll(/var\(\s*--(uai-[\w-]+)/g)].map(match => match[1]))].filter(categoryOf);
  const groups = new Map();
  for (const [category, label] of CATEGORY_LABELS) {
    const list = names.filter(name => categoryOf(name) === category).sort();
    if (list.length) groups.set(label, [...(groups.get(label) || []), ...list]);
  }
  return [...groups].map(([label, list]) => `- ${label}: ${list.map(name => `--${name}`).join(', ')}`);
}
