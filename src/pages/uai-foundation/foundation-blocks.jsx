import React from 'react';
import light from 'blip-tokens/build/json/uai-light.tokens.json';
import dark from 'blip-tokens/build/json/uai-dark.tokens.json';
import shadows from 'blip-tokens/build/json/uai-shadows.json';
import textStyles from 'blip-tokens/build/json/uai-text-styles.json';
import { UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import { textStyleProps, uaiTokens } from './uai-tokens.mjs';

const TOKENS = uaiTokens(light, dark);

const mono = { fontFamily: 'monospace', fontSize: '12px' };
const cell = { padding: '8px 12px', verticalAlign: 'middle', textAlign: 'left' };
const swatch = (color) => ({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  background: color,
  boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.12)',
});

const Table = ({ head, children }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        {head.map((title) => (
          <th key={title} style={cell}>
            {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

const tokensOf = (category, group) =>
  TOKENS.filter((token) => token.category === category && (!group || token.group === group));

export const ColorTokens = ({ group }) => (
  <Table head={['Claro', 'Escuro', 'Token', 'Uso']}>
    {tokensOf('color', group).map((token) => (
      <tr key={token.name}>
        <td style={cell}>
          <div style={swatch(token.light)} />
          <code style={mono}>{token.light}</code>
        </td>
        <td style={cell}>
          <div style={swatch(token.dark)} />
          <code style={mono}>{token.dark}</code>
        </td>
        <td style={{ ...cell, whiteSpace: 'nowrap' }}>
          <code>{token.cssVar}</code>
        </td>
        <td style={cell}>{token.description}</td>
      </tr>
    ))}
  </Table>
);

const dimensionPreview = (group, value) => {
  const base = { background: 'var(--uai-action-primary-default, #242729)' };
  if (group === 'spacing') return <div style={{ ...base, width: value, height: '16px', borderRadius: '2px' }} />;
  if (group === 'sizing') return <div style={{ ...base, width: value, height: value, borderRadius: '4px' }} />;
  if (group === 'radius')
    return (
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: value,
          border: '2px solid var(--uai-border-default, #ccc)',
        }}
      />
    );
  return (
    <div style={{ width: '48px', height: '24px', border: `${value} solid var(--uai-content-primary, #242729)` }} />
  );
};

export const DimensionTokens = ({ group }) => (
  <Table head={['Exemplo', 'Token', 'Valor', 'Uso']}>
    {tokensOf('dimension', group).map((token) => (
      <tr key={token.name}>
        <td style={cell}>{dimensionPreview(group, token.light)}</td>
        <td style={{ ...cell, whiteSpace: 'nowrap' }}>
          <code>{token.cssVar}</code>
        </td>
        <td style={cell}>
          <code style={mono}>{token.light}</code>
        </td>
        <td style={cell}>{token.description}</td>
      </tr>
    ))}
  </Table>
);

export const FontTokens = () => (
  <Table head={['Token', 'Valor', 'Uso']}>
    {TOKENS.filter((token) => ['font-family', 'font-weight', 'letter-spacing'].includes(token.group)).map((token) => (
      <tr key={token.name}>
        <td style={{ ...cell, whiteSpace: 'nowrap' }}>
          <code>{token.cssVar}</code>
        </td>
        <td style={cell}>
          <code style={mono}>{token.light}</code>
        </td>
        <td style={cell}>{token.description}</td>
      </tr>
    ))}
  </Table>
);

const ORDER = ['display', 'heading-xl', 'heading-lg', 'heading-md', 'title', 'body-base', 'caption', 'overline'];
const WEIGHTS = ['regular', 'medium', 'semibold', 'bold'];
const rank = (props) =>
  ORDER.indexOf(props.variant) * 100 + WEIGHTS.indexOf(props.bold) * 10 + (props.letterSpacing === 'expanded' ? 1 : 0);

export const TextStyles = () => {
  const styles = Object.values(textStyles)
    .map((style) => ({ ...style, props: textStyleProps(style.name) }))
    .sort((a, b) => rank(a.props) - rank(b.props));
  return (
    <UaiThemeProvider theme="light">
      <Table head={['Estilo no Figma', 'Exemplo', 'UaiTypo', 'Uso']}>
        {styles.map((style) => (
          <tr key={style.name}>
            <td style={cell}>
              <code>{style.name}</code>
            </td>
            <td style={cell}>
              <UaiTypo {...style.props} margin={false} noWrap>
                Aa Bb Cc
              </UaiTypo>
            </td>
            <td style={cell}>
              <code style={mono}>
                variant="{style.props.variant}" bold="{style.props.bold}"
                {style.props.letterSpacing === 'expanded' ? ' letterSpacing="expanded"' : ''}
              </code>
            </td>
            <td style={cell}>{style.description}</td>
          </tr>
        ))}
      </Table>
    </UaiThemeProvider>
  );
};

const ELEVATION_ORDER = ['1', '2', '3', 'dialog', 'floating-control', 'tab-active', 'sidebar-left', 'sidebar-right'];
const elevationRank = ([name]) => {
  const index = ELEVATION_ORDER.indexOf(name.replace('uai-elevation-', ''));
  return index === -1 ? ELEVATION_ORDER.length : index;
};

export const ElevationTokens = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', padding: '16px 0' }}>
    {Object.entries(shadows)
      .sort((a, b) => elevationRank(a) - elevationRank(b))
      .map(([name, shadow]) => (
        <div key={name} style={{ width: '220px' }}>
          <div
            style={{
              height: '96px',
              borderRadius: '16px',
              background: '#ffffff',
              boxShadow: `var(--${name}, ${shadow.value})`,
              marginBottom: '12px',
            }}
          />
          <code>--{name}</code>
          <p style={{ margin: '4px 0 0' }}>{shadow.description}</p>
        </div>
      ))}
  </div>
);
