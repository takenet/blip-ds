import React from 'react';
import { UaiEmoji, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import assetConfig from '../../utils/asset-config.json';
import DocumentationTemplate from './uai-emoji.mdx';

export default {
  title: 'UAI/Emoji',
  component: UaiEmoji,
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

const EMOJI_PREFIX = 'asset-emoji-';
const emojiNames = () =>
  Object.keys(assetConfig.assets || {})
    .filter((key) => key.startsWith(EMOJI_PREFIX))
    .map((key) => key.slice(EMOJI_PREFIX.length))
    .sort();

const row = { display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-lg)', flexWrap: 'wrap' };
const cell = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--uai-spacing-xs)' };
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

/** Testa as propriedades disponíveis. A largura é definida pelo estilo do host, não por uma prop `size`. */
export const Playground = (args) => <UaiEmoji {...args} />;

Playground.args = {
  name: 'smiling-face',
};

Playground.argTypes = {
  name: {
    description: 'Nome do emoji no manifesto de `blip-tokens`, sem o prefixo `asset-emoji-`.',
    control: 'text',
  },
  ariaLabel: {
    description: 'Descrição acessível do emoji. Sem ela, o emoji é decorativo e oculto de tecnologias assistivas.',
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
        <uai-emoji name="smiling-face" style={{ width }} />
        <span style={caption}>{label}</span>
      </div>
    ))}
  </div>
);

/** Use ariaLabel quando a expressão transmitir informação; emojis decorativos podem ficar sem rótulo. */
export const Accessibility = () => (
  <div style={row}>
    <UaiEmoji name="face-with-mask" ariaLabel="Pessoa usando máscara" />
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--uai-spacing-xs)' }}>
      <UaiEmoji name="smiling-face" style={{ width: 'var(--uai-sizing-lg)' }} />
      Tudo certo
    </span>
  </div>
);

/** Catálogo completo derivado das chaves asset-emoji-* do manifesto instalado. */
export const Catalog = () => {
  const [query, setQuery] = React.useState('');
  const all = React.useMemo(emojiNames, []);
  const normalizedQuery = query.trim().toLowerCase();
  const names = all.filter((name) => name.includes(normalizedQuery));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)', width: '100%' }}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-xs)' }}>
        <span>Buscar emoji</span>
        <input
          type="search"
          aria-label="Buscar emoji"
          placeholder="Ex.: smiling-face"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{
            maxWidth: 'var(--uai-width-panel)',
            padding: 'var(--uai-spacing-xs) var(--uai-spacing-sm)',
            font: 'inherit',
          }}
        />
      </label>
      <span style={caption}>{names.length} emojis</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-md)' }}>
        {names.map((name) => (
          <div key={name} style={{ ...cell, color: 'var(--uai-content-primary)' }}>
            <uai-emoji name={name} style={{ width: 'var(--uai-sizing-5xl)' }} />
            <span style={caption}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Catalog.parameters = { layout: 'padded' };
