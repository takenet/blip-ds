import React from 'react';
import { UaiTypo, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-typo.mdx';

export default {
  title: 'UAI/Typo',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <uai-theme-provider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </uai-theme-provider>
    ),
  ],
};

// Text styles from the UAI Core Figma file; weights follow the published styles.
const STYLES = [
  { variant: 'display', size: '40/48', weights: ['regular', 'semibold', 'bold'] },
  { variant: 'heading-xl', size: '32/40', weights: ['regular', 'semibold', 'bold'] },
  { variant: 'heading-lg', size: '24/32', weights: ['regular', 'semibold', 'bold'] },
  { variant: 'heading-md', size: '20/28', weights: ['regular', 'semibold', 'bold'] },
  { variant: 'title', size: '16/24', weights: ['regular', 'medium', 'semibold', 'bold'] },
  { variant: 'body-lg', size: '16/24', weights: ['regular', 'medium', 'semibold', 'bold'] },
  { variant: 'body-base', size: '14/22', weights: ['regular', 'medium', 'semibold', 'bold'] },
  { variant: 'body-sm', size: '12/20', weights: ['regular', 'medium', 'semibold', 'bold'] },
  { variant: 'caption', size: '12/20', weights: ['regular', 'medium', 'semibold', 'bold'] },
  { variant: 'overline', size: '10/16', weights: ['regular', 'medium', 'semibold'] },
];

const VARIANTS = STYLES.map((style) => style.variant);
const BOLDS = ['regular', 'medium', 'semibold', 'bold'];

const column = { display: 'flex', flexDirection: 'column', gap: '16px' };
const caption = { fontFamily: 'monospace', fontSize: '12px', color: 'var(--uai-content-secondary)' };

export const Properties = (args) => (
  <uai-typo
    variant={args.variant}
    bold={args.bold}
    letter-spacing={args.letterSpacing}
    tag={args.tag}
    italic={args.italic}
    no-wrap={args.noWrap}
    paragraph={args.paragraph}
    margin={args.margin}
    data-test={args.dataTest}
  >
    {args.text}
  </uai-typo>
);

Properties.args = {
  text: 'A tipografia organiza a leitura da interface.',
  variant: 'body-base',
  bold: 'regular',
  letterSpacing: 'normal',
  tag: 'p',
  italic: false,
  noWrap: false,
  paragraph: false,
  margin: true,
  dataTest: '',
};

Properties.argTypes = {
  text: {
    description: 'Texto (conteúdo do slot, não é uma propriedade).',
    control: 'text',
  },
  variant: {
    table: { defaultValue: { summary: 'body-base' } },
    description: 'Papel do texto na escala tipográfica UAI. Define tamanho e altura de linha.',
    options: VARIANTS,
    control: { type: 'select' },
  },
  bold: {
    table: { defaultValue: { summary: 'regular' } },
    description: 'Peso da fonte.',
    options: BOLDS,
    control: { type: 'select' },
  },
  letterSpacing: {
    table: { defaultValue: { summary: 'normal' } },
    description: 'Espaçamento entre letras. expanded corresponde ao estilo body/base/regular-space.',
    options: ['normal', 'expanded'],
    control: { type: 'select' },
  },
  tag: {
    table: { defaultValue: { summary: 'p' } },
    description: 'Elemento HTML renderizado. Use para dar a semântica correta ao texto.',
    options: ['p', 'h1', 'h2', 'h3', 'h4', 'span'],
    control: { type: 'select' },
  },
  italic: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Aplica itálico.',
    control: 'boolean',
  },
  noWrap: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Mantém o texto em uma linha e corta com reticências.',
    control: 'boolean',
  },
  paragraph: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Adiciona margem inferior de parágrafo (16px).',
    control: 'boolean',
  },
  margin: {
    table: { defaultValue: { summary: 'true' } },
    description: 'Adiciona margem inferior (24px) em display e headings.',
    control: 'boolean',
  },
  dataTest: {
    description: 'Valor do atributo data-test do elemento de texto.',
    control: 'text',
  },
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'max-content repeat(4, max-content)',
  alignItems: 'baseline',
  columnGap: '32px',
  rowGap: '16px',
};

export const TextStyles = () => (
  <div style={grid}>
    <span></span>
    {BOLDS.map((bold) => (
      <span key={bold} style={caption}>
        {bold}
      </span>
    ))}
    {STYLES.map(({ variant, size, weights }) => (
      <React.Fragment key={variant}>
        <span style={caption}>
          {variant} · {size}
        </span>
        {BOLDS.map((bold) =>
          weights.includes(bold) ? (
            <uai-typo key={bold} variant={variant} bold={bold} margin={false}>
              Aa
            </uai-typo>
          ) : (
            <span key={bold}></span>
          ),
        )}
      </React.Fragment>
    ))}
  </div>
);

export const LetterSpacing = () => (
  <div style={column}>
    <uai-typo variant="body-base">body-base · normal</uai-typo>
    <uai-typo variant="body-base" letter-spacing="expanded">
      body-base · expanded
    </uai-typo>
  </div>
);

export const Semantics = () => (
  <div style={{ maxWidth: '480px' }}>
    <uai-typo variant="heading-lg" bold="semibold" tag="h2">
      Título da seção
    </uai-typo>
    <uai-typo variant="body-base" paragraph>
      O variant define a aparência e o tag define a semântica. Um título visual deve usar uma tag de heading.
    </uai-typo>
    <uai-typo variant="caption" tag="span" style={{ color: 'var(--uai-content-secondary)' }}>
      Texto de apoio
    </uai-typo>
  </div>
);

export const FrameworkReact = () => (
  <UaiThemeProvider theme="light">
    <div style={column}>
      <UaiTypo variant="heading-md" bold="semibold" tag="h3" margin={false}>
        Título
      </UaiTypo>
      <UaiTypo variant="body-base">Texto padrão da aplicação.</UaiTypo>
      <UaiTypo variant="caption" bold="medium">
        Legenda
      </UaiTypo>
    </div>
  </UaiThemeProvider>
);
