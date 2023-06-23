import { useEffect, useState } from 'react';
import readme from './readme.md';
import { BdsButton } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    notes: { markdown: readme },
  },
  argTypes: {
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
  },
};

export const button = (args) => {
  useEffect(() => {
    const botao = document.getElementById('btn');
    botao.addEventListener('bdsClick', (event) => {
      console.log(event);
    });
  });

  return (
    <bds-button
      id="btn"
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      icon={args.icon}
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

button.args = {
  variant: 'primary',
  text: 'Button',
  disabled: 'false',
  size: 'standard',
  typeIcon: 'icon',
  icon: '',
  arrow: 'false',
  type: 'button',
  loading: 'false',
  loadingColor: 'light',
  dataTest: '',
};

export const EventButton = () => {
  const [btnText, setBtnText] = useState('Clique aqui');
  const [valor, setValor] = useState(0);

  const handleCount = () => {
    setBtnText('Você me clicou');
    setValor(valor + 1);
    console.log(`Você clicou no botão ${valor}`);
  };

  return (
    <bds-grid align-items="center" gap="2">
      <BdsButton onBdsClick={() => handleCount()}>{btnText}</BdsButton>
      <bds-typo>Você clicou no botão {valor} vezes</bds-typo>
    </bds-grid>
  );
};

const defaultButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

const spaceBetween = {
  padding: '8px',
};

export const defaultButton = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} variant="primary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} variant="secondary">
      Button secondary
    </bds-button>
    <bds-button style={spaceBetween} variant="tertiary">
      Button tertiary
    </bds-button>
    <bds-button style={spaceBetween} variant="ghost">
      Button ghost
    </bds-button>
    <bds-button style={spaceBetween} variant="delete">
      Button delete
    </bds-button>
  </div>
);

export const disabedButton = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} variant="primary" disabled>
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} variant="secondary" disabled>
      Button secondary
    </bds-button>
    <bds-button style={spaceBetween} variant="tertiary" disabled>
      Button tertiary
    </bds-button>
    <bds-button style={spaceBetween} variant="ghost" disabled>
      Button ghost
    </bds-button>
    <bds-button style={spaceBetween} variant="delete" disabled>
      Button delete
    </bds-button>
  </div>
);

export const sizeButtons = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} size="standard">
      Standard Button
    </bds-button>
    <bds-button style={spaceBetween} size="short">
      {' '}
      Short Button
    </bds-button>
  </div>
);

export const buttonWithIcon = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} icon="file-new" size="standard">
      Text button
    </bds-button>
    <bds-button style={spaceBetween} arrow size="standard">
      Text button
    </bds-button>
  </div>
);

export const buttonWithLogo = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} icon="gbm" type-icon="logo">
      Text button
    </bds-button>
    <bds-button style={spaceBetween} icon="google" type-icon="logo">
      Text button
    </bds-button>
  </div>
);

export const buttonLoading = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} bds-loading bds-loading-color="light" variant="primary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-color="main" variant="secondary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-color="main" variant="tertiary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-color="main" variant="ghost">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-color="light" variant="delete">
      Button primary
    </bds-button>
  </div>
);

export const buttonWithoutText = () => (
  <>
    <div style={defaultButtonStyle}>
      <bds-button-icon style={spaceBetween} variant="primary" icon="file-new" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="secondary" icon="notes" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="tertiary" icon="warning" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="ghost" icon="info" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="delete" icon="attention" size="standard"></bds-button-icon>
    </div>
    <div style={defaultButtonStyle}>
      <bds-button-icon
        style={spaceBetween}
        disabled
        variant="primary"
        icon="file-new"
        size="standard"
      ></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="secondary" icon="notes" size="standard"></bds-button-icon>
      <bds-button-icon
        style={spaceBetween}
        disabled
        variant="tertiary"
        icon="warning"
        size="standard"
      ></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="ghost" icon="info" size="standard"></bds-button-icon>
      <bds-button-icon
        style={spaceBetween}
        disabled
        variant="delete"
        icon="attention"
        size="standard"
      ></bds-button-icon>
    </div>
  </>
);
