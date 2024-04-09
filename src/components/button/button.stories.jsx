import { useEffect, useState } from 'react';
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
      size={args.size}
      disabled={args.disabled}
      icon={args.icon}
      icon-theme={args.iconTheme}
      arrow={args.arrow}
      type={args.type}
      type-icon={args.typeIcon}
      bds-loading={args.loading}
      bds-loading-color={args.loadingColor}
      dataTest={args.dataTest}
    >
      {args.text}
    </bds-button>
  );
};

Properties.argTypes = {
  variant: {
    table: {
      defaultValue: { summary: 'primary' },
    },
    description: 'Escolha o estilo do botão.',
    options: ['primary', 'secondary', 'tertiary', 'delete'],
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
      defaultValue: { summary: 'standard' },
    },
    description: 'Defina a altura do botão.',
    options: ['standard', 'short'],
    control: { type: 'select' },
  },
  arrow: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se uma seta aparecerá do lado direito do texto.',
    control: { type: 'boolean' },
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
  loadingColor: {
    table: {
      defaultValue: { summary: 'light' },
    },
    description: 'Defina a cor do loading.',
    options: ['light', 'main'],
    control: { type: 'select' },
  },
  icon: {
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
};

Properties.args = {
  variant: 'primary',
  text: 'Button',
  disabled: 'false',
  size: 'standard',
  typeIcon: 'icon',
  icon: '',
  iconTheme: 'outline',
  arrow: 'false',
  type: 'button',
  loading: 'false',
  loadingColor: 'light',
  dataTest: '',
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

export const buttonWithoutText = () => (
  <bds-button-icon variant="primary" icon="file-new" size="standard"></bds-button-icon>
);

export const FrameworkReact = () => {

  return (
      <BdsButton variant="primary" icon="file-new" size="standard">Button</BdsButton>
  );
};