import React from 'react';
import { UaiButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-button.mdx';

export default {
  title: 'UAI/Button',
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

const VARIANTS = ['solid', 'outline', 'text'];
const COLORS = ['primary', 'content', 'positive', 'negative'];
const SIZES = ['compact', 'short', 'medium', 'large'];

const row = { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' };
const column = { display: 'flex', flexDirection: 'column', gap: '16px' };
const caption = { fontFamily: 'monospace', fontSize: '12px', color: 'var(--uai-content-secondary)' };

export const Properties = (args) => (
  <uai-button
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    loading={args.loading}
    full-width={args.fullWidth}
    justify-content={args.justifyContent}
    icon-left={args.iconLeft}
    icon-right={args.iconRight}
    arrow={args.arrow}
    icon-theme={args.iconTheme}
    type-icon={args.typeIcon}
    type={args.type}
    data-test={args.dataTest}
  >
    {args.text}
  </uai-button>
);

Properties.args = {
  text: 'Verbo + complemento',
  variant: 'solid',
  color: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  fullWidth: false,
  justifyContent: 'center',
  iconLeft: 'info',
  iconRight: '',
  arrow: false,
  iconTheme: 'outline',
  typeIcon: 'icon',
  type: 'button',
  dataTest: '',
};

Properties.argTypes = {
  text: {
    description: 'Texto do botão (conteúdo do slot, não é uma propriedade).',
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
    description: 'Altura do botão: compact 24px, short 32px, medium 40px, large 56px.',
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
    description: 'Mostra o spinner no lugar do ícone da esquerda e bloqueia o uaiClick.',
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
    description: 'Ícone antes do texto (nome do ícone UAI, ex.: `info`).',
    control: 'text',
  },
  iconRight: {
    description: 'Ícone depois do texto (nome do ícone UAI, ex.: `arrow-right`).',
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
    description: 'Valor do atributo data-test do botão nativo.',
    control: 'text',
  },
};

const grid = {
  display: 'grid',
  gridTemplateColumns: `auto repeat(${COLORS.length}, max-content)`,
  alignItems: 'center',
  gap: '16px',
};

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
          <uai-button key={color} variant={variant} color={color}>
            Verbo + complemento
          </uai-button>
        ))}
      </React.Fragment>
    ))}
  </div>
);

export const Sizes = () => (
  <div style={row}>
    {SIZES.map((size) => (
      <uai-button key={size} size={size} icon-left="info">
        {size}
      </uai-button>
    ))}
  </div>
);

export const States = () => (
  <div style={column}>
    {['solid', 'outline'].map((variant) => (
      <div key={variant} style={row}>
        <span style={caption}>variant="{variant}"</span>
        <uai-button variant={variant} icon-left="info">
          Default
        </uai-button>
        <uai-button variant={variant} icon-left="info" loading>
          Loading
        </uai-button>
        <uai-button variant={variant} icon-left="info" disabled>
          Disabled
        </uai-button>
      </div>
    ))}
  </div>
);

export const Icons = () => (
  <div style={column}>
    <div style={row}>
      <uai-button>Somente texto</uai-button>
      <uai-button icon-left="info">Ícone à esquerda</uai-button>
      <uai-button icon-right="external-file">Ícone à direita</uai-button>
      <uai-button arrow>Seta</uai-button>
      <uai-button icon-left="info" icon-right="arrow-down">
        Os dois
      </uai-button>
    </div>
    <div style={row}>
      {SIZES.map((size) => (
        <uai-button key={size} size={size} icon="add" aria-label={`Adicionar (${size})`}></uai-button>
      ))}
    </div>
    <div style={{ width: '320px' }}>
      <uai-button full-width justify-content="space-between" icon-left="info" arrow>
        Conteúdo nas pontas
      </uai-button>
    </div>
  </div>
);

export const Events = () => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const button = ref.current;
    const onClick = () => setCount((value) => value + 1);
    button?.addEventListener('uaiClick', onClick);
    return () => button?.removeEventListener('uaiClick', onClick);
  }, []);

  return (
    <div style={row}>
      <uai-button ref={ref}>Clique aqui</uai-button>
      <span>uaiClick: {count}</span>
    </div>
  );
};

export const FrameworkReact = () => (
  <UaiThemeProvider theme="light">
    <div style={row}>
      <UaiButton variant="solid" color="primary" onUaiClick={(event) => console.log(event.detail)}>
        Solid
      </UaiButton>
      <UaiButton variant="outline" color="content" iconLeft="info">
        Outline
      </UaiButton>
      <UaiButton variant="text" color="negative">
        Text
      </UaiButton>
    </div>
  </UaiThemeProvider>
);
