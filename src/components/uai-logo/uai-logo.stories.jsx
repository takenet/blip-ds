import React from 'react';
import { UaiLogo, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import assetConfig from '../../utils/asset-config.json';
import DocumentationTemplate from './uai-logo.mdx';

export default {
  title: 'UAI/Logo',
  component: UaiLogo,
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

const LOGO_PREFIX = 'asset-logo-';
const LOCAL_LOGO_PREVIEWS = ['google-ads', 'google-rcs', 'meta'];
const logoNames = () =>
  [
    ...new Set([
      ...Object.keys(assetConfig.assets || {})
        .filter((key) => key.startsWith(LOGO_PREFIX))
        .map((key) => key.slice(LOGO_PREFIX.length)),
      ...LOCAL_LOGO_PREVIEWS,
    ]),
  ].sort();

const row = { display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-lg)', flexWrap: 'wrap' };
const cell = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--uai-spacing-xs)' };
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

/** Testa as propriedades disponíveis. A largura é definida pelo estilo do host, não por uma prop `size`. */
export const Playground = (args) => <UaiLogo {...args} />;

Playground.args = {
  name: 'whatsapp',
};

Playground.argTypes = {
  name: {
    description: 'Nome do logo no manifesto de `blip-tokens`, sem o prefixo `asset-logo-`.',
    control: 'text',
  },
  ariaLabel: {
    description: 'Nome acessível do logo. Sem ele, o logo é decorativo e oculto de tecnologias assistivas.',
    control: 'text',
  },
  dataTest: {
    description: 'Valor de `data-test` encaminhado para o SVG.',
    control: 'text',
  },
};

/** A largura aplicada ao host redimensiona o SVG sem alterar a proporção do seu viewBox. */
export const Dimensions = () => (
  <div style={row}>
    {[
      ['5xl', 'var(--uai-sizing-5xl)'],
      ['2 × 5xl', 'calc(var(--uai-sizing-5xl) + var(--uai-sizing-5xl))'],
    ].map(([label, width]) => (
      <div key={label} style={cell}>
        <uai-logo name="whatsapp" style={{ width }} />
        <span style={caption}>{label}</span>
      </div>
    ))}
  </div>
);

/** Use ariaLabel quando o logo comunicar uma marca relevante; logos repetidos junto ao nome da marca podem ser decorativos. */
export const Accessibility = () => (
  <div style={row}>
    <UaiLogo name="whatsapp" ariaLabel="WhatsApp" />
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--uai-spacing-xs)' }}>
      <UaiLogo name="whatsapp" style={{ width: 'var(--uai-sizing-lg)' }} />
      WhatsApp
    </span>
  </div>
);

/** Catálogo completo derivado das chaves asset-logo-* do manifesto instalado. */
export const Catalog = () => {
  const [query, setQuery] = React.useState('');
  const all = React.useMemo(logoNames, []);
  const normalizedQuery = query.trim().toLowerCase();
  const names = all.filter((name) => name.includes(normalizedQuery));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)', width: '100%' }}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-xs)' }}>
        <span>Buscar logo</span>
        <input
          type="search"
          aria-label="Buscar logo"
          placeholder="Ex.: whatsapp"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{
            maxWidth: 'var(--uai-width-panel)',
            padding: 'var(--uai-spacing-xs) var(--uai-spacing-sm)',
            font: 'inherit',
          }}
        />
      </label>
      <span style={caption}>{names.length} logos</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-md)' }}>
        {names.map((name) => (
          <div key={name} style={{ ...cell, color: 'var(--uai-content-primary)' }}>
            {LOCAL_LOGO_PREVIEWS.includes(name) ? (
              <img
                src={`assets/logos/${name}.svg`}
                alt=""
                style={{ width: 'var(--uai-sizing-5xl)', height: 'var(--uai-sizing-5xl)' }}
              />
            ) : (
              <uai-logo name={name} style={{ width: 'var(--uai-sizing-5xl)' }} />
            )}
            <span style={caption}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Catalog.parameters = { layout: 'padded' };
