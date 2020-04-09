import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Alert',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const systemAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant="system" icon="info">
        Sair do chatbot
      </bds-alert-header>
      <bds-alert-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!
      </bds-alert-body> 
      <bds-alert-actions>
        <bds-button variant="secondary">Cancelar</bds-button>
        <bds-button >Confirmar</bds-button>
      </bds-alert-actions>
    </bds-alert>
  </>
);

export const errorAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant="error" icon="error">
        Ops... algo deu errado
      </bds-alert-header>
      <bds-alert-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!
      </bds-alert-body> 
      <bds-alert-actions>
        <bds-button variant="secondary">Cancelar</bds-button>
        <bds-button >Confirmar</bds-button>
      </bds-alert-actions>
    </bds-alert>
  </>
);

export const warningAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant="warning" icon="info">
        Você possui alterações não salvas
      </bds-alert-header>
      <bds-alert-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit...
      </bds-alert-body> 
      <bds-alert-actions>
        <bds-button variant="secondary">Cancelar</bds-button>
        <bds-button >Confirmar</bds-button>
      </bds-alert-actions>
    </bds-alert>
  </>
);

export const deleteAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant="delete" icon="trash">
        Quer mesmo excluir sua conta?
      </bds-alert-header>
      <bds-alert-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!
      </bds-alert-body> 
      <bds-alert-actions>
        <bds-button variant="secondary">Cancelar</bds-button>
        <bds-button >Confirmar</bds-button>
      </bds-alert-actions>
    </bds-alert>
  </>
);