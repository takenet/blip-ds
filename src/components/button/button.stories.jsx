import { useState, useEffect } from 'react';
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
      full-width={args.fullWidth}
      justify-content={args.justifyContent}
      group-icon={args.groupIcon}
      icon-left={args.iconLeft}
      icon-right={args.iconRight}
      icon-theme={args.iconTheme}
      type={args.type}
      type-icon={args.typeIcon}
      bds-loading={args.loading}
      dataTest={args.dataTest}
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
    description: 'Escolha o estilo do botão.',
    options: ['solid', 'outline', 'text'],
    control: { type: 'select' },
  },
  color: {
    table: {
      defaultValue: { summary: 'primary' },
    },
    description: 'Escolha o estilo do botão.',
    options: ['primary', 'content', 'positive', 'negative'],
    control: { type: 'select' },
  },
  text: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o texto do botão. (Não é uma propriedade)',
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o botão será desabilitado.',
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'medium' },
    },
    description: 'Defina a altura do botão.',
    options: ['medium', 'large'],
    control: { type: 'select' },
  },
  type: {
    table: {
      defaultValue: { summary: 'button' },
    },
    description: 'Defina o tipo do botão. (Sem alteração visual)',
    options: ['button', 'submit', 'reset'],
    control: { type: 'select' },
  },
  typeIcon: {
    table: {
      defaultValue: { summary: 'icon' },
    },
    description: 'Defina o tipo do elemento visual ao lado direito do texto.',
    options: ['icon', 'logo', 'emoji'],
    control: { type: 'select' },
  },
  iconTheme: {
    table: {
      defaultValue: { summary: 'outline' },
    },
    description: 'Defina o tema do icone.',
    options: ['outline', 'solid'],
    control: { type: 'select' },
  },
  loading: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Ativa o loading do botão. (Outros elementos visuais não apareceram enquanto essa prop estiver ativa)',
    control: { type: 'boolean' },
  },
  iconLeft: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o ícone que será utilizado no botão (Apenas outline).',
    control: 'text',
  },
  iconRight: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o ícone que será utilizado no botão (Apenas outline).',
    control: 'text',
  },
  dataTest: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o id para testes externos. (Sem alteração visual).',
    control: 'text',
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
};

Properties.args = {
  variant: 'solid',
  text: 'Button',
  color: 'primary',
  disabled: 'false',
  size: 'medium',
  typeIcon: 'icon',
  iconLeft: '',
  iconRight: '',
  iconTheme: 'outline',
  type: 'button',
  loading: 'false',
  dataTest: '',
  fullWidth: false,
  justifyContent: 'center',
  groupIcon: false,
};

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
    <BdsButton variant="primary" icon="file-new" size="standard">
      Button
    </BdsButton>
  );
};

export const FlexibleLayouts = () => {
  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-16" bold="bold">Padrão (width dinâmico, conteúdo centralizado)</bds-typo>
        <bds-button variant="solid" color="primary" icon-left="info" icon-right="arrow-right">
          Verbo + complemento
        </bds-button>
      </bds-grid>

      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-16" bold="bold">Full Width (100% largura, conteúdo centralizado)</bds-typo>
        <bds-button variant="solid" color="primary" icon-left="info" icon-right="arrow-right" full-width>
          Verbo + complemento
        </bds-button>
      </bds-grid>

      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-16" bold="bold">Space Between (ícone esquerdo + label à esquerda, ícone direito à direita)</bds-typo>
        <bds-button variant="solid" color="primary" icon-left="info" icon-right="arrow-right" full-width justify-content="space-between">
          Verbo + complemento
        </bds-button>
      </bds-grid>

      <bds-grid direction="column" gap="1">
        <bds-typo variant="fs-16" bold="bold">Space Between + Group Icon (ícone esquerdo agrupado com label)</bds-typo>
        <bds-button variant="solid" color="primary" icon-left="info" icon-right="arrow-right" full-width justify-content="space-between" group-icon>
          Verbo + complemento
        </bds-button>
      </bds-grid>
    </bds-grid>
  );
};
