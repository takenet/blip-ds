import React from 'react';
import readme from './readme.md';

export default {
  title: 'Alert Live Code',
  parameters: {
    notes: { markdown: readme },
  },
};

export const alertDocs = (args) => {

  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '720px';
    el[0].style.height = '400px';
    el[0].style.position = 'relative';
    el[0].style.background = 'none';
  }

  return (
    <bds-grid>
       <bds-alert open={args.open} position="contain" id="alert">
      <bds-alert-header variant={args.variant} icon={args.icon}>
        Atenção!
      </bds-alert-header>
      <bds-alert-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
        error!
      </bds-alert-body>
      <bds-alert-actions>
        <bds-button variant="tertiary">Cancelar</bds-button>
        <bds-button variant="primary">Confirmar</bds-button>
      </bds-alert-actions>
    </bds-alert>
    </bds-grid>
   
  );
};

alertDocs.argTypes = {
  ...alertDocs.args,
  variant: {
    table: {
      defaultValue: { summary: 'system' },
    },
    description: 'Escolha o estado do componente.',
    options: ['system', 'error', 'warning', 'delete'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Escolha o ícone do cabeçalho.',
    control: 'text',
  },
};

alertDocs.args = {
  variant: 'system',
  icon: 'info',
  open: true,
};