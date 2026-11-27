import React from 'react';
import { UaiIconButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-icon-button.mdx';

const VARIANTS = ['solid', 'outline', 'ghost'];
const COLORS = ['primary', 'content', 'positive', 'negative'];
const SIZES = ['compact', 'short', 'medium', 'large'];

export default {
  title: 'UAI Components/Icon Button',
  component: UaiIconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ padding: 'var(--uai-spacing-md)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
  argTypes: {
    icon: { control: 'text', description: 'Nome do glifo na fonte de ícones UAI.' },
    iconTheme: { options: ['outline', 'solid'], control: 'select', description: 'Estilo do glifo UAI.' },
    variant: { options: VARIANTS, control: 'select', description: 'Peso visual do botão.' },
    color: { options: COLORS, control: 'select', description: 'Cor semântica da ação.' },
    size: {
      options: SIZES,
      control: 'select',
      description: 'Escala quadrada definida por tokens `control-height/*`.',
    },
    disabled: { control: 'boolean', description: 'Desabilita a interação.' },
    loading: { control: 'boolean', description: 'Exibe indicador de carregamento e bloqueia cliques.' },
    type: { options: ['button', 'submit', 'reset'], control: 'select', description: 'Tipo do botão nativo.' },
  },
};

const row = { display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)', flexWrap: 'wrap' };
const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' };
const caption = {
  fontFamily: 'var(--uai-font-family-sans)',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

export const Playground = (args) => <UaiIconButton {...args} />;
Playground.args = {
  icon: 'message-sparkle-ai',
  iconTheme: 'outline',
  variant: 'solid',
  color: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  'aria-label': 'Abrir assistente',
};

export const VariantsAndColors = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `auto repeat(${COLORS.length}, max-content)`,
      alignItems: 'center',
      gap: 'var(--uai-spacing-md)',
    }}
  >
    <span></span>
    {COLORS.map((color) => (
      <span key={color} style={caption}>
        color="{color}"
      </span>
    ))}
    {VARIANTS.map((variant) => (
      <React.Fragment key={variant}>
        <span style={caption}>variant="{variant}"</span>
        {COLORS.map((color) => (
          <UaiIconButton
            key={`${variant}-${color}`}
            icon="message-sparkle-ai"
            variant={variant}
            color={color}
            aria-label={`Ação ${variant} ${color}`}
          />
        ))}
      </React.Fragment>
    ))}
  </div>
);

export const Sizes = () => (
  <div style={row}>
    {SIZES.map((size) => (
      <UaiIconButton key={size} icon="edit" size={size} variant="outline" aria-label={`Editar (${size})`} />
    ))}
  </div>
);

export const States = () => (
  <div style={column}>
    {VARIANTS.map((variant) => (
      <div key={variant} style={row}>
        <span style={caption}>variant="{variant}"</span>
        <UaiIconButton icon="info" variant={variant} aria-label={`Padrão ${variant}`} />
        <UaiIconButton icon="info" variant={variant} loading aria-label={`Carregando ${variant}`} />
        <UaiIconButton icon="info" variant={variant} disabled aria-label={`Desabilitado ${variant}`} />
      </div>
    ))}
  </div>
);
