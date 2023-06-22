import { useEffect } from 'react';
import readme from './readme.md';

export default {
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    notes: { markdown: readme },
  },
  argTypes: {
    variant: {
      table: {
        defaultValue: { summary: 'primary'}
      },
      description: 'Escolha o estilo do botão',
      options: ['primary', 'secondary', 'tertiary', 'delete'],
      control: { type: 'select' },
    },
    text: { control: 'text' },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['standard', 'short'],
      control: { type: 'select' },
    },
    arrow: {
      control: { type: 'boolean' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    typeIcon: {
      options: ['icon', 'logo', 'emoji'],
      control: { type: 'select' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    loadingColor: {
      options: ['light', 'main'],
      control: { type: 'select' },
    },
  },
};




export const button = (args) => {
  useEffect(() => {
  const botao = document.getElementById('btn');
  botao.addEventListener('bdsClick', (event) => {
    console.log(event);
  })
})

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
  text: 'button text',
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
