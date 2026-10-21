import React from 'react';
import { UaiIcon, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-icon.mdx';

export default {
  title: 'UAI/Icon',
  component: UaiIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
};

const SIZES = ['x-small', 'small', 'medium'];
const COLORS = [
  'content-primary',
  'content-secondary',
  'content-disabled',
  'content-inverse',
  'content-link',
  'feedback-info',
  'feedback-success',
  'feedback-warning',
  'feedback-error',
];

// Icon names come from the UAI icon font CSS that Storybook loads (blip-tokens/uai-icons/css).
const outlineIconNames = () => {
  const names = [];
  for (const sheet of Array.from(document.styleSheets)) {
    let rules = [];
    try {
      rules = Array.from(sheet.cssRules);
    } catch {
      continue;
    }
    for (const rule of rules) {
      const match = /\.uai-icon-outline-([a-z0-9-]+)::?before/.exec(rule.selectorText || '');
      if (match) names.push(match[1]);
    }
  }
  return names;
};

const row = { display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' };
const cell = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' };
const caption = { fontFamily: 'monospace', fontSize: '12px', color: 'var(--uai-content-secondary)' };

/**
 * Teste todas as propriedades. O nome é o do ícone no Figma, sem o prefixo do tema.
 */
export const Playground = (args) => <UaiIcon {...args} />;

Playground.args = {
  name: 'info',
  theme: 'outline',
  size: 'medium',
};

Playground.argTypes = {
  name: {
    description: 'Nome do ícone, como no Figma sem o prefixo do tema. Exemplos: `info`, `arrow-right`, `add`.',
    control: 'text',
  },
  theme: {
    table: { defaultValue: { summary: 'outline' } },
    description: 'Estilo do ícone.',
    options: ['outline', 'solid'],
    control: { type: 'select' },
  },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Tamanho: x-small 16px, small 20px, medium 24px.',
    options: SIZES,
    control: { type: 'select' },
  },
  color: {
    description: 'Cor, como token UAI. Sem cor, o ícone usa a cor do texto em volta.',
    options: [undefined, ...COLORS],
    control: { type: 'select' },
  },
  ariaLabel: {
    description: 'Nome acessível. Use quando o ícone comunica algo sozinho. Sem ele, o ícone é decorativo.',
    control: 'text',
  },
  dataTest: {
    description: 'Valor do data-test do glifo.',
    control: 'text',
  },
};

/**
 * Use medium por padrão. Small e x-small acompanham textos e controles menores, como o UaiButton short e compact.
 */
export const Sizes = () => (
  <div style={row}>
    {SIZES.map((size) => (
      <div key={size} style={cell}>
        <UaiIcon name="info" size={size} />
        <span style={caption}>{size}</span>
      </div>
    ))}
  </div>
);

/**
 * Sem cor, o ícone acompanha o texto ao lado. Use content-* para ícones de interface e feedback-* para status. content-inverse é para superfícies escuras.
 */
export const Colors = () => (
  <div style={row}>
    {COLORS.map((color) => (
      <div key={color} style={cell}>
        <span
          style={{
            display: 'inline-flex',
            padding: '12px',
            borderRadius: '12px',
            background: color === 'content-inverse' ? 'var(--uai-surface-inverse)' : 'transparent',
          }}
        >
          <UaiIcon name="info" color={color} />
        </span>
        <span style={caption}>{color}</span>
      </div>
    ))}
  </div>
);

/**
 * Use outline por padrão. Use solid para indicar um estado ativo ou selecionado, como o item atual de uma navegação.
 */
export const Themes = () => (
  <div style={row}>
    {['outline', 'solid'].map((theme) => (
      <div key={theme} style={cell}>
        <UaiIcon name="info" theme={theme} />
        <span style={caption}>{theme}</span>
      </div>
    ))}
  </div>
);

/**
 * Um ícone que comunica algo sozinho, como um status sem texto, precisa de aria-label. Ao lado de um texto que já diz o mesmo, deixe o ícone decorativo.
 */
export const Accessibility = () => (
  <div style={row}>
    <UaiIcon name="warning" color="feedback-warning" aria-label="Atenção" />
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--uai-content-primary)' }}>
      <UaiIcon name="check" size="small" color="feedback-success" />
      Salvo
    </span>
  </div>
);

/**
 * Todos os ícones outline da fonte UAI. O mesmo nome funciona com theme solid.
 */
export const Catalog = () => {
  const [query, setQuery] = React.useState('');
  const all = React.useMemo(outlineIconNames, []);
  const names = all.filter((name) => name.includes(query.trim().toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <input
        type="search"
        placeholder="Buscar ícone"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        style={{ maxWidth: '320px', padding: '8px 12px', font: 'inherit' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
        {names.map((name) => (
          <div key={name} style={{ ...cell, color: 'var(--uai-content-primary)' }}>
            <UaiIcon name={name} />
            <span style={caption}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
