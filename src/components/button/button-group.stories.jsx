import { useEffect } from 'react';
import { BdsButton, BdsButtonGroup } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './button-group.mdx';

export default {
  title: 'Components/Button Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-button-group size={args.size} color={args.color} direction={args.direction} multiple={args.multiple}>
      <bds-button icon-left="builder-publish-bot"></bds-button>
      <bds-button icon-left="search"></bds-button>
      <bds-button icon-left="email"></bds-button>
      <bds-button icon-left="bell"></bds-button>
      <bds-button icon-left="settings-general"></bds-button>
    </bds-button-group>
  );
};

Properties.argTypes = {
  size: {
    table: {
      defaultValue: { summary: 'medium' },
    },
    description: 'Define a altura dos botões no grupo.',
    options: ['medium', 'large'],
    control: { type: 'select' },
  },
  color: {
    table: {
      defaultValue: { summary: 'primary' },
    },
    description: 'Define a cor dos botões no grupo.',
    options: ['primary', 'content', 'positive', 'negative'],
    control: { type: 'select' },
  },
  direction: {
    table: {
      defaultValue: { summary: 'column' },
    },
    description: 'Define a direção em que os botões são dispostos.',
    options: ['row', 'column'],
    control: { type: 'select' },
  },
  multiple: {
    table: {
      defaultValue: { summary: false },
    },
    description: 'Permite a seleção de múltiplos botões ao mesmo tempo.',
    control: { type: 'boolean' },
  },
};

Properties.args = {
  size: 'medium',
  color: 'primary',
  direction: 'column',
  multiple: false,
};

export const Methods = () => {
  useEffect(() => {
    const buttonGroup = document.getElementById('button-group');
    const activateButton = document.getElementById('activate-button');

    activateButton.addEventListener('click', () => {
      buttonGroup.activateButton(1);
    });

    return () => {
      activateButton.removeEventListener('click', () => {
        buttonGroup.activateButton(1);
      });
    };
  }, []);

  return (
    <bds-grid direction="column" align="center" gap="2">
      <bds-button id="activate-button" variant="primary">Ativar o segundo botão</bds-button>
      <bds-button-group id="button-group">
        <bds-button icon-left="builder-publish-bot" id="bot-builder-publish"></bds-button>
        <bds-button icon-left="search" id="bot-search"></bds-button>
        <bds-button icon-left="email" id="bot-email"></bds-button>
        <bds-button icon-left="bell" id="bot-bell"></bds-button>
        <bds-button icon-left="settings-general" id="bot-settings"></bds-button>
      </bds-button-group>
    </bds-grid>
  );
};

export const Events = () => {
  useEffect(() => {
    const buttonGroup = document.getElementById('button-group');

    buttonGroup.addEventListener('buttonSelected', (obj) => {
      console.log('Botão clicado:', obj.detail);
    });

    return () => {
      buttonGroup.removeEventListener('buttonSelected', (obj) => {
        console.log('Botão clicado:', obj.detail);
      });
    };
  }, []);

  return (
    <bds-button-group id="button-group">
      <bds-button icon-left="builder-publish-bot" id="bot-builder-publish"></bds-button>
      <bds-button icon-left="search" id="bot-search"></bds-button>
      <bds-button icon-left="email" id="bot-email"></bds-button>
      <bds-button icon-left="bell" id="bot-bell"></bds-button>
      <bds-button icon-left="settings-general" id="bot-settings"></bds-button>
    </bds-button-group>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsButtonGroup id="button-group">
      <BdsButton iconLeft="builder-publish-bot" id="bot-builder-publish"></BdsButton>
      <BdsButton iconLeft="search" id="bot-search"></BdsButton>
      <BdsButton iconLeft="email" id="bot-email"></BdsButton>
      <BdsButton iconLeft="bell" id="bot-bell"></BdsButton>
      <BdsButton iconLeft="settings-general" id="bot-settings"></BdsButton>
    </BdsButtonGroup>
  );
};