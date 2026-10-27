import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { textStyleProps, uaiTokens } from '../src/pages/uai-foundation/uai-tokens.mjs';
import { REACT_IMPORT, componentTokens, selfContainedStories } from './story-source.mjs';

export { REACT_IMPORT };

const pascal = value => value.replace(/(^|-)([a-z0-9])/g, (_, __, char) => char.toUpperCase());

// Stories are named after the component (uai-button.stories.jsx) or after the bds tag without its prefix (button.stories.jsx).
const findApi = (stencilDocs, basename) =>
  stencilDocs.components.find(item => item.tag === basename) || stencilDocs.components.find(item => item.tag === `bds-${basename}`);

const deprecationOf = api => api.deprecation || (api.docsTags || []).find(tag => tag.name === 'deprecated')?.text;

// v1 (bds-*) entries tell agents which UAI component replaces them, so new screens do not pick legacy components.
// Deprecated v1 components stay listed, flagged as deprecated, so agents can still maintain existing screens.
function legacyNotice(api, stencilDocs) {
  if (!api.tag.startsWith('bds-')) return null;
  const replacement = stencilDocs.components.find(item => item.tag === `uai-${api.tag.slice(4)}`);
  const deprecation = deprecationOf(api);
  if (deprecation) {
    const name = replacement && pascal(replacement.tag);
    return {
      summary: replacement
        ? `Depreciado (v1). Use <${name}> (docs: ${replacement.tag}), o componente UAI mais novo e recomendado.`
        : 'Depreciado (v1).',
      description: [
        replacement
          ? `**Depreciado (v1).** Use <${name}> de ${REACT_IMPORT} (docs: ${replacement.tag}): é o componente UAI mais novo e recomendado para telas novas. Use este só para manter telas existentes.`
          : '**Depreciado (v1).** Use este só para manter telas existentes.',
        deprecation,
      ].join(' '),
    };
  }
  if (replacement) {
    const name = pascal(replacement.tag);
    return {
      summary: `Legado (v1). Em telas novas, use <${name}> (docs: ${replacement.tag}).`,
      description: `**Legado (v1).** Em telas novas, use <${name}> de ${REACT_IMPORT} (docs: ${replacement.tag}). Este componente continua disponível para telas existentes.`,
    };
  }
  return {
    summary: 'Componente v1. Ainda não há equivalente UAI.',
    description: '**Componente v1.** Ainda não há equivalente UAI; use este componente até existir um uai-*. Prefira componentes uai-* sempre que existirem.',
  };
}

/**
 * Adds the Stencil API, real story IDs, self-contained snippets, the UAI replacement of v1 components and,
 * for uai-* components, the tokens and CSS custom properties they use.
 * `readSource(path)` returns a story file (null when unavailable); `componentCss(api)` returns compiled CSS;
 * `categoryOf(name)` returns the category of a UAI token or null.
 */
export function enrichManifest(manifest, stencilDocs, storyIndex, { readSource, componentCss, categoryOf } = {}) {
  let enriched = 0;
  for (const component of Object.values(manifest.components)) {
    const basename = path.basename(component.path).replace(/\.stories\.[^.]+$/, '');
    const api = findApi(stencilDocs, basename);
    const stories = Object.values(storyIndex.entries).filter(entry => entry.type === 'story' && entry.importPath === component.path);
    for (const story of component.stories || []) {
      const entry = stories.find(entry => entry.name === story.name || entry.exportName === story.name);
      if (entry) story.id = entry.id;
    }
    if (!api) continue;
    const reactName = pascal(api.tag);
    const source = readSource?.(component.path);
    const used = source ? selfContainedStories(component.stories || [], source, component.path) : { imports: [], components: [] };
    const components = [reactName, ...used.components.filter(name => name !== reactName)];
    const legacy = legacyNotice(api, stencilDocs);
    const tokens = api.tag.startsWith('uai-') && categoryOf ? componentTokens(componentCss?.(api) || '', categoryOf) : [];
    const hooks = (api.styles || []).filter(style => style.annotation === 'prop');
    component.summary = [legacy?.summary, `<${reactName}> from ${REACT_IMPORT}`].filter(Boolean).join(' ');
    component.import = [...used.imports, `import { ${components.join(', ')} } from '${REACT_IMPORT}';`].join('\n');
    component.description = [
      ...(legacy ? [legacy.description] : []),
      api.docs || '',
      `Use the React component <${reactName}>: import { ${reactName} } from '${REACT_IMPORT}'; Props are camelCase (the Properties below) and events are on<Event> callbacks. The custom element <${api.tag}> is the same component for non-React apps.`,
      '## Properties',
      ...api.props.map(prop => `- ${prop.name}: ${prop.type}; default: ${prop.default ?? 'none'}. ${prop.docs || ''}`),
      '## Events',
      ...api.events.map(event => `- on${pascal(event.event)}: ${event.detail}. ${event.docs || ''}`),
      '## Methods',
      ...api.methods.map(method => `- ${method.signature}. ${method.docs || ''}`),
      ...(api.slots?.length ? ['## Slots', ...api.slots.map(slot => `- ${slot.name || 'default (children)'}: ${slot.docs || ''}`)] : []),
      ...(hooks.length ? ['## CSS custom properties', ...hooks.map(style => `- ${style.name}: ${style.docs || ''}`)] : []),
      ...(tokens.length
        ? ['## Tokens usados', 'Tokens UAI que o componente aplica. Para compor ao redor dele, use os mesmos tokens (veja docs: uai-tokens).', ...tokens]
        : []),
    ].join('\n\n');
    delete component.error;
    enriched += 1;
  }
  if (enriched === 0) throw new Error('No Stencil components matched the Storybook manifest.');
  return manifest;
}

const tokenLine = token =>
  `- ${token.cssVar ?? `${token.scssVar} (só SCSS/JS, em media query)`}: ${token.light}${token.dark && token.dark !== token.light ? ` (dark: ${token.dark})` : ''}. ${token.description}`;

// Same rules the blip-ds token lint enforces (scripts/check_uai_tokens.cjs), so generated code passes it.
const USAGE_RULES = [
  '## Como aplicar',
  '- Leia o token em tempo de execução com var(--uai-<nome>). Em componentes do blip-ds, o fallback opcional é só a variável SCSS do próprio token: var(--uai-spacing-md, #{$uai-spacing-md}). Nunca use outro token nem um valor literal como fallback.',
  '- Use a categoria da propriedade: gap, padding e margin usam spacing-*; altura de botão, input e select usa control-height-*; largura e altura de ícone, avatar, indicador ou célula usam sizing-*; largura de menu, painel, tooltip, dialog, sidebar ou conteúdo usa width-*; border-radius usa radius-*; espessura de borda usa border-width-*; opacity usa opacity-*; z-index entre header, navegação e conteúdo usa layer-*; transition e animation usam duration-* e easing-*; font-size, line-height, font-weight, letter-spacing e font-family usam os tokens tipográficos.',
  '- Breakpoints não existem como variável CSS, porque media query não lê var(). Use $uai-breakpoint-* em SCSS: @media (max-width: $uai-breakpoint-lg).',
  '- Literais permitidos: 0, porcentagens e frações de layout (100%, 1fr, 100vh), rotação de ícone, fator de escala de animação, contagens sem unidade e z-index local dentro do componente. Qualquer outro valor precisa de token.',
  '- Se nenhum token serve, use layout fluido (conteúdo, mínimos e máximos, combinação de tokens). Se ainda faltar, o token precisa ser criado no Figma; não use um valor fixo provisório.',
  '- Respeite prefers-reduced-motion: com reduce, as transições de estado acontecem sem animação.',
];

/**
 * Manifest entry with every UAI design token, so agents pick tokens by role instead of hardcoding values.
 */
export function uaiTokensEntry({ light, dark, shadows, textStyles, usage = { tokens: {}, shadows: {}, textStyles: {} } }) {
  const tokens = uaiTokens(light, dark, usage.tokens);
  const section = (title, list) => [`## ${title}`, ...list.map(tokenLine)];
  const styles = Object.values(textStyles).map(style => {
    const props = textStyleProps(style.name);
    const spacing = props.letterSpacing === 'expanded' ? ' letterSpacing="expanded"' : '';
    return `- ${style.name}: <UaiTypo variant="${props.variant}" bold="${props.bold}"${spacing}>. ${usage.textStyles[style.name] || style.description}`;
  });
  return {
    id: 'uai-tokens',
    name: 'UAI Tokens',
    path: './src/pages/uai-foundation/tokens.mdx',
    import: '',
    jsDocTags: {},
    summary: 'Tokens de design UAI: cores, espaçamento, tamanhos, alturas de controle, raios, bordas, opacidade, layout, movimento, tipografia e elevação, nos temas claro e escuro.',
    description: [
      'Tokens de design da linguagem visual UAI, do blip-tokens. Use em CSS como var(--uai-<nome>) dentro de um UaiThemeProvider (ou de um elemento com data-uai-theme="light" ou "dark"). Escolha o token pelo papel e pelo uso, nunca pelo valor. As cores mudam entre os temas claro e escuro; os outros tokens são iguais nos dois. Se existe um componente UAI para o caso, use o componente.',
      ...USAGE_RULES,
      ...section('Cores', tokens.filter(token => token.category === 'color')),
      ...section('Dimensões', tokens.filter(token => token.category === 'dimension')),
      ...section('Layout', tokens.filter(token => token.category === 'layout')),
      ...section('Movimento', tokens.filter(token => token.category === 'motion')),
      ...section('Tipografia', tokens.filter(token => token.category === 'typography')),
      '## Elevação',
      ...Object.entries(shadows).map(([name, shadow]) => `- --${name}: ${shadow.value}. ${usage.shadows[name] || shadow.description}`),
      '## Estilos de texto (nome no Figma: props do UaiTypo)',
      ...styles,
    ].join('\n\n'),
    stories: [],
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const directory = process.argv[2] || 'storybook-static';
  const filename = path.join(directory, 'manifests/components.json');
  const tokensDirectory = new URL('../node_modules/blip-tokens/build/json/', import.meta.url);
  const readTokens = async file => JSON.parse(await readFile(new URL(file, tokensDirectory), 'utf8'));
  // Token categories come from the same rules as the blip-ds token lint.
  const lint = createRequire(import.meta.url)('../scripts/check_uai_tokens.cjs');
  const tokenCategories = lint.loadTokens(root);
  const readIfExists = file => (existsSync(file) ? readFileSync(file, 'utf8') : null);
  const manifest = enrichManifest(
    JSON.parse(await readFile(filename, 'utf8')),
    JSON.parse(await readFile(new URL('./stencil-docs.json', import.meta.url), 'utf8')),
    JSON.parse(await readFile(path.join(directory, 'index.json'), 'utf8')),
    {
      readSource: storyPath => readIfExists(path.join(root, storyPath)),
      componentCss: api => readIfExists(path.join(root, api.filePath.replace(/^\.?\/?src\//, 'dist/collection/').replace(/\.tsx$/, '.css'))),
      categoryOf: name => tokenCategories.get(name) || null,
    },
  );
  manifest.components['uai-tokens'] = uaiTokensEntry({
    light: await readTokens('uai-light.tokens.json'),
    dark: await readTokens('uai-dark.tokens.json'),
    shadows: await readTokens('uai-shadows.json'),
    textStyles: await readTokens('uai-text-styles.json'),
    usage: JSON.parse(await readFile(new URL('../src/pages/uai-foundation/uai-token-usage.pt-BR.json', import.meta.url), 'utf8')),
  });
  await writeFile(filename, JSON.stringify(manifest));
}