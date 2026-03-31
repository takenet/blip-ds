import { useState } from 'react';
import { BdsButton } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './button.mdx';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-button
      id="btn"
      variant={args.variant}
      color={args.color}
      size={args.size}
      disabled={args.disabled}
      block={args.block}
      full-width={args.fullWidth}
      justify-content={args.justifyContent}
      group-icon={args.groupIcon}
      icon={args.icon}
      icon-left={args.iconLeft}
      icon-right={args.iconRight}
      icon-theme={args.iconTheme}
      type={args.type}
      type-icon={args.typeIcon}
      arrow={args.arrow}
      bds-loading={args.loading}
      bds-loading-variant={args.loadingVariant}
      bds-loading-color={args.loadingColor}
      data-test={args.dataTest}
    >
      {args.text}
    </bds-button>
  );
};

Properties.argTypes = {
  variant: {
    table: {
      defaultValue: { summary: 'solid' },
    },
    description:
      'Escolha o estilo visual do botão. Variantes modernas: solid, outline, text. Variante especial: delete (solid + cor negativa). Variantes legadas: primary, secondary, tertiary, ghost, dashed, secondary--white, facebook.',
    options: [
      'solid',
      'outline',
      'text',
      'ghost',
      'dashed',
      'delete',
      'primary',
      'secondary',
      'tertiary',
      'secondary--white',
      'facebook',
    ],
    control: { type: 'select' },
  },
  color: {
    table: {
      defaultValue: { summary: 'primary' },
    },
    description: 'Escolha a cor do botão.',
    options: ['primary', 'content', 'positive', 'negative'],
    control: { type: 'select' },
  },
  text: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o texto do botão. (Não é uma propriedade do componente)',
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o botão será desabilitado.',
    control: 'boolean',
  },
  block: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Se verdadeiro, o botão ocupa 100% da largura do contêiner pai.',
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'medium' },
    },
    description: 'Defina a altura do botão.',
    options: ['short', 'medium', 'large'],
    control: { type: 'select' },
  },
  type: {
    table: {
      defaultValue: { summary: 'button' },
    },
    description: 'Defina o tipo HTML do botão. (Sem alteração visual)',
    options: ['button', 'submit', 'reset'],
    control: { type: 'select' },
  },
  typeIcon: {
    table: {
      defaultValue: { summary: 'icon' },
    },
    description: 'Defina o tipo do ícone utilizado no botão.',
    options: ['icon', 'logo', 'emoji'],
    control: { type: 'select' },
  },
  iconTheme: {
    table: {
      defaultValue: { summary: 'outline' },
    },
    description: 'Defina o tema do ícone.',
    options: ['outline', 'solid'],
    control: { type: 'select' },
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Ícone exibido à esquerda do texto (equivalente a iconLeft).',
    control: 'text',
  },
  iconLeft: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Ícone exibido à esquerda do texto.',
    control: 'text',
  },
  iconRight: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Ícone exibido à direita do texto.',
    control: 'text',
  },
  arrow: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Exibe um ícone de seta à direita do texto.',
    control: 'boolean',
  },
  loading: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Ativa o estado de carregamento do botão. Outros elementos visuais ficam ocultos.',
    control: { type: 'boolean' },
  },
  loadingVariant: {
    table: {
      defaultValue: { summary: 'primary' },
    },
    description: 'Define a variante do spinner de carregamento.',
    options: ['primary', 'secondary', 'tertiary', 'ghost', 'delete'],
    control: { type: 'select' },
  },
  loadingColor: {
    table: {
      defaultValue: { summary: 'main' },
    },
    description: 'Define a cor do spinner de carregamento.',
    options: ['main', 'light', 'content', 'positive', 'negative'],
    control: { type: 'select' },
  },
  fullWidth: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Se verdadeiro, o botão ocupa 100% da largura com conteúdo centralizado.',
    control: 'boolean',
  },
  justifyContent: {
    table: {
      defaultValue: { summary: 'center' },
    },
    description: 'Controla o alinhamento horizontal do conteúdo do botão.',
    options: ['center', 'space-between'],
    control: { type: 'select' },
  },
  groupIcon: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Se verdadeiro, agrupa o ícone esquerdo com o label quando justifyContent é "space-between".',
    control: 'boolean',
  },
  dataTest: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o atributo data-test para testes externos. (Sem alteração visual)',
    control: 'text',
  },
};

Properties.args = {
  variant: 'solid',
  text: 'Button',
  color: 'primary',
  disabled: false,
  block: false,
  size: 'medium',
  typeIcon: 'icon',
  icon: '',
  iconLeft: '',
  iconRight: '',
  iconTheme: 'outline',
  type: 'button',
  arrow: false,
  loading: false,
  loadingVariant: 'primary',
  loadingColor: 'main',
  dataTest: '',
  fullWidth: false,
  justifyContent: 'center',
  groupIcon: false,
};

export const Variants = () => (
  <bds-grid direction="column" gap="4" padding="3">
    <bds-grid direction="column" gap="2">
      <bds-typo variant="fs-20" bold="bold">
        Variantes Modernas
      </bds-typo>
      <bds-typo variant="fs-14">As variantes recomendadas para uso no design system.</bds-typo>
      <bds-grid direction="row" gap="2" align-items="center">
        <bds-button variant="solid" color="primary">
          solid
        </bds-button>
        <bds-button variant="outline" color="primary">
          outline
        </bds-button>
        <bds-button variant="text" color="primary">
          text
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="2">
      <bds-typo variant="fs-20" bold="bold">
        Variante Especial: delete
      </bds-typo>
      <bds-typo variant="fs-14">
        Atalho semântico: equivale a variant=&quot;solid&quot; color=&quot;negative&quot;. Use para ações destrutivas.
      </bds-typo>
      <bds-grid direction="row" gap="2" align-items="center">
        <bds-button variant="delete">delete</bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="2">
      <bds-typo variant="fs-20" bold="bold">
        Variantes Legadas
      </bds-typo>
      <bds-typo variant="fs-14">
        Mantidas para retrocompatibilidade. Prefira as variantes modernas quando possível.
      </bds-typo>
      <bds-grid direction="row" gap="2" align-items="center" flex-wrap="wrap">
        <bds-button variant="ghost">ghost</bds-button>
        <bds-button variant="dashed">dashed</bds-button>
        <bds-button variant="primary">primary</bds-button>
        <bds-button variant="secondary">secondary</bds-button>
        <bds-button variant="tertiary">tertiary</bds-button>
        <bds-button variant="secondary--white">secondary--white</bds-button>
        <bds-button variant="facebook">facebook</bds-button>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const Colors = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Cores × Variantes
    </bds-typo>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Solid
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button variant="solid" color="primary">
          Primary
        </bds-button>
        <bds-button variant="solid" color="content">
          Content
        </bds-button>
        <bds-button variant="solid" color="positive">
          Positive
        </bds-button>
        <bds-button variant="solid" color="negative">
          Negative
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Outline
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button variant="outline" color="primary">
          Primary
        </bds-button>
        <bds-button variant="outline" color="content">
          Content
        </bds-button>
        <bds-button variant="outline" color="positive">
          Positive
        </bds-button>
        <bds-button variant="outline" color="negative">
          Negative
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Text
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button variant="text" color="primary">
          Primary
        </bds-button>
        <bds-button variant="text" color="content">
          Content
        </bds-button>
        <bds-button variant="text" color="positive">
          Positive
        </bds-button>
        <bds-button variant="text" color="negative">
          Negative
        </bds-button>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const Sizes = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Tamanhos
    </bds-typo>
    <bds-grid direction="row" gap="2" align-items="center">
      <bds-button size="short">Short (32px)</bds-button>
      <bds-button size="medium">Medium (40px)</bds-button>
      <bds-button size="large">Large (56px)</bds-button>
    </bds-grid>
  </bds-grid>
);

export const WithIcons = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Com Ícones
    </bds-typo>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Ícone à esquerda
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button icon-left="info">Icon Left</bds-button>
        <bds-button variant="outline" icon-left="info">
          Icon Left
        </bds-button>
        <bds-button variant="text" icon-left="info">
          Icon Left
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Ícone à direita
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button icon-right="arrow-right">Icon Right</bds-button>
        <bds-button variant="outline" icon-right="arrow-right">
          Icon Right
        </bds-button>
        <bds-button variant="text" icon-right="arrow-right">
          Icon Right
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Ambos os ícones
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button icon-left="info" icon-right="arrow-right">
          Both Icons
        </bds-button>
        <bds-button variant="outline" icon-left="info" icon-right="arrow-right">
          Both Icons
        </bds-button>
        <bds-button variant="text" icon-left="info" icon-right="arrow-right">
          Both Icons
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Seta (arrow)
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button arrow>Com Seta</bds-button>
        <bds-button variant="outline" arrow>
          Com Seta
        </bds-button>
        <bds-button variant="text" arrow>
          Com Seta
        </bds-button>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const IconOnly = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Apenas Ícone
    </bds-typo>
    <bds-grid direction="row" gap="2" align-items="center">
      <bds-button size="short" icon-left="info"></bds-button>
      <bds-button size="medium" icon-left="info"></bds-button>
      <bds-button size="large" icon-left="info"></bds-button>
    </bds-grid>
    <bds-grid direction="row" gap="2" align-items="center">
      <bds-button variant="outline" size="short" icon-left="info"></bds-button>
      <bds-button variant="outline" size="medium" icon-left="info"></bds-button>
      <bds-button variant="outline" size="large" icon-left="info"></bds-button>
    </bds-grid>
    <bds-grid direction="row" gap="2" align-items="center">
      <bds-button variant="text" size="short" icon-left="info"></bds-button>
      <bds-button variant="text" size="medium" icon-left="info"></bds-button>
      <bds-button variant="text" size="large" icon-left="info"></bds-button>
    </bds-grid>
  </bds-grid>
);

export const DisabledState = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Estado Desabilitado
    </bds-typo>
    <bds-grid direction="row" gap="2">
      <bds-button disabled variant="solid" color="primary">
        Solid Disabled
      </bds-button>
      <bds-button disabled variant="outline" color="primary">
        Outline Disabled
      </bds-button>
      <bds-button disabled variant="text" color="primary">
        Text Disabled
      </bds-button>
    </bds-grid>
  </bds-grid>
);

export const LoadingState = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Estado de Carregamento
    </bds-typo>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Solid
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button bds-loading variant="solid" color="primary">
          Primary
        </bds-button>
        <bds-button bds-loading variant="solid" color="content">
          Content
        </bds-button>
        <bds-button bds-loading variant="solid" color="positive">
          Positive
        </bds-button>
        <bds-button bds-loading variant="solid" color="negative">
          Negative
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Outline
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button bds-loading variant="outline" color="primary">
          Primary
        </bds-button>
        <bds-button bds-loading variant="outline" color="content">
          Content
        </bds-button>
        <bds-button bds-loading variant="outline" color="positive">
          Positive
        </bds-button>
        <bds-button bds-loading variant="outline" color="negative">
          Negative
        </bds-button>
      </bds-grid>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Text
      </bds-typo>
      <bds-grid direction="row" gap="2">
        <bds-button bds-loading variant="text" color="primary">
          Primary
        </bds-button>
        <bds-button bds-loading variant="text" color="content">
          Content
        </bds-button>
        <bds-button bds-loading variant="text" color="positive">
          Positive
        </bds-button>
        <bds-button bds-loading variant="text" color="negative">
          Negative
        </bds-button>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const FlexibleLayouts = () => (
  <bds-grid direction="column" gap="3" padding="3">
    <bds-typo variant="fs-20" bold="bold">
      Layouts Flexíveis
    </bds-typo>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Padrão (width dinâmico, conteúdo centralizado)
      </bds-typo>
      <bds-button variant="solid" color="primary" icon-left="info" icon-right="arrow-right">
        Verbo + complemento
      </bds-button>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Full Width (100% largura, conteúdo centralizado)
      </bds-typo>
      <bds-button variant="solid" color="primary" icon-left="info" icon-right="arrow-right" full-width>
        Verbo + complemento
      </bds-button>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Space Between (ícone esquerdo + label à esquerda, ícone direito à direita)
      </bds-typo>
      <bds-button
        variant="solid"
        color="primary"
        icon-left="info"
        icon-right="arrow-right"
        full-width
        justify-content="space-between"
      >
        Verbo + complemento
      </bds-button>
    </bds-grid>

    <bds-grid direction="column" gap="1">
      <bds-typo variant="fs-14" bold="bold">
        Space Between + Group Icon (ícone esquerdo agrupado com label)
      </bds-typo>
      <bds-button
        variant="solid"
        color="primary"
        icon-left="info"
        icon-right="arrow-right"
        full-width
        justify-content="space-between"
        group-icon
      >
        Verbo + complemento
      </bds-button>
    </bds-grid>
  </bds-grid>
);

export const Events = () => {
  const [btnText, setBtnText] = useState('Clique aqui');
  const [valor, setValor] = useState(0);

  const handleCount = () => {
    setBtnText('Você me clicou');
    setValor(valor + 1);
    console.log(`Você clicou no botão ${valor}`);
  };

  return (
    <bds-grid align-items="center" gap="2">
      <bds-button onClick={() => handleCount()}>{btnText}</bds-button>
      <bds-typo>Você clicou no botão {valor} vezes</bds-typo>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsButton variant="solid" color="primary" iconLeft="file-new" size="medium">
      Button
    </BdsButton>
  );
};
