import React from 'react';
import { UaiButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-button.mdx';

export default {
  title: 'UAI/Button',
  component: UaiButton,
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

const VARIANTS = ['solid', 'outline', 'text'];
const COLORS = ['primary', 'content', 'positive', 'negative'];
const SIZES = ['compact', 'short', 'medium', 'large'];

const row = { display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)', flexWrap: 'wrap' };
const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' };
const caption = { fontFamily: 'monospace', fontSize: 'var(--uai-caption-font-size)', color: 'var(--uai-content-secondary)' };

/**
 * Teste todas as propriedades. O texto do botão é o children do UaiButton.
 */
export const Playground = (args) => <UaiButton {...args} />;

Playground.args = {
  children: 'Verbo + complemento',
  variant: 'solid',
  color: 'primary',
  size: 'medium',
  iconLeft: 'info',
};

Playground.argTypes = {
  children: {
    description: 'Texto do botão.',
    control: 'text',
  },
  variant: {
    table: { defaultValue: { summary: 'solid' } },
    description: 'Estilo visual do botão.',
    options: VARIANTS,
    control: { type: 'select' },
  },
  color: {
    table: { defaultValue: { summary: 'primary' } },
    description: 'Cor do botão. Em outline e text, define a cor de destaque; content fica neutro.',
    options: COLORS,
    control: { type: 'select' },
  },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Altura do botão: compact `control-height/compact`, short `control-height/short`, medium `control-height/medium`, large `control-height/large`.',
    options: SIZES,
    control: { type: 'select' },
  },
  disabled: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Desabilita o botão.',
    control: 'boolean',
  },
  loading: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Mostra o spinner no lugar do ícone da esquerda e bloqueia o onUaiClick.',
    control: 'boolean',
  },
  fullWidth: {
    table: { defaultValue: { summary: 'false' } },
    description: 'O botão ocupa toda a largura disponível.',
    control: 'boolean',
  },
  justifyContent: {
    table: { defaultValue: { summary: 'center' } },
    description: 'Alinhamento do conteúdo.',
    options: ['center', 'space-between'],
    control: { type: 'select' },
  },
  iconLeft: {
    description: 'Ícone antes do texto: nome de um ícone UAI, como `info`.',
    control: 'text',
  },
  iconRight: {
    description: 'Ícone depois do texto: nome de um ícone UAI, como `arrow-right`.',
    control: 'text',
  },
  arrow: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Mostra uma seta para a direita depois do texto.',
    control: 'boolean',
  },
  iconTheme: {
    table: { defaultValue: { summary: 'outline' } },
    description: 'Tema dos ícones.',
    options: ['outline', 'solid'],
    control: { type: 'select' },
  },
  typeIcon: {
    table: { defaultValue: { summary: 'icon' } },
    description: 'Tipo dos ícones.',
    options: ['icon', 'logo', 'emoji'],
    control: { type: 'select' },
  },
  type: {
    table: { defaultValue: { summary: 'button' } },
    description: 'Tipo do botão. submit e reset agem sobre o form que envolve o botão.',
    options: ['button', 'submit', 'reset'],
    control: { type: 'select' },
  },
  dataTest: {
    description: 'Valor do data-test do botão nativo.',
    control: 'text',
  },
};

const grid = {
  display: 'grid',
  gridTemplateColumns: `auto repeat(${COLORS.length}, max-content)`,
  alignItems: 'center',
  gap: 'var(--uai-spacing-md)',
};

/**
 * Escolha a variante pelo peso da ação: solid para a ação principal da tela, outline para ações secundárias e text para ações de pouco destaque. A cor diz o que a ação faz: content é neutra, positive confirma e negative destrói.
 */
export const VariantsAndColors = () => (
  <div style={grid}>
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
          <UaiButton key={color} variant={variant} color={color}>
            Verbo + complemento
          </UaiButton>
        ))}
      </React.Fragment>
    ))}
  </div>
);

/**
 * Use medium por padrão. Large serve para ações de destaque; short e compact cabem em áreas densas, como tabelas, barras de ferramentas e cards.
 */
export const Sizes = () => (
  <div style={row}>
    {SIZES.map((size) => (
      <UaiButton key={size} size={size} iconLeft="info">
        {size}
      </UaiButton>
    ))}
  </div>
);

/**
 * Use loading enquanto a ação roda, para a pessoa não acionar duas vezes. Use disabled só quando a ação ainda não está disponível, e explique o motivo perto do botão.
 */
export const States = () => (
  <div style={column}>
    {['solid', 'outline'].map((variant) => (
      <div key={variant} style={row}>
        <span style={caption}>variant="{variant}"</span>
        <UaiButton variant={variant} iconLeft="info">
          Default
        </UaiButton>
        <UaiButton variant={variant} iconLeft="info" loading>
          Loading
        </UaiButton>
        <UaiButton variant={variant} iconLeft="info" disabled>
          Disabled
        </UaiButton>
      </div>
    ))}
  </div>
);

/**
 * Use ícone quando ele ajuda a reconhecer a ação. Use arrow para ações que avançam. Botões só com ícone economizam espaço em barras de ferramentas e precisam de aria-label.
 */
export const Icons = () => (
  <div style={column}>
    <div style={row}>
      <UaiButton>Somente texto</UaiButton>
      <UaiButton iconLeft="info">Ícone à esquerda</UaiButton>
      <UaiButton iconRight="external-file">Ícone à direita</UaiButton>
      <UaiButton arrow>Seta</UaiButton>
      <UaiButton iconLeft="info" iconRight="arrow-down">
        Os dois
      </UaiButton>
    </div>
    <div style={row}>
      {SIZES.map((size) => (
        <UaiButton key={size} size={size} icon="add" aria-label={`Adicionar (${size})`} />
      ))}
    </div>
    <div style={{ width: 'var(--uai-width-panel)' }}>
      <UaiButton fullWidth justifyContent="space-between" iconLeft="info" arrow>
        Conteúdo nas pontas
      </UaiButton>
    </div>
  </div>
);

/**
 * Trate a ação com onUaiClick. Ele roda no clique, no Enter e no Space, e não roda com o botão disabled ou loading.
 */
export const Events = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={row}>
      <UaiButton onUaiClick={() => setCount((value) => value + 1)}>Clique aqui</UaiButton>
      <span>onUaiClick: {count}</span>
    </div>
  );
};
