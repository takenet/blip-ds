import React from 'react';
import readme from './readme.md';

export default {
  title: 'Alert',
  parameters: {
    notes: { markdown: readme },
  },
};

const Template = (args) => {
  return (
    <bds-alert open={true}>
      <bds-alert-header variant={args.variant} icon={args.icon}>
        Atenção!
      </bds-alert-header>
      <bds-alert-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
        error!
      </bds-alert-body>
      <bds-alert-actions>
        <bds-button variant="secondary" bold={true}>
          Cancelar
        </bds-button>
        <bds-button variant="secondary" bold={true}>
          Confirmar
        </bds-button>
      </bds-alert-actions>
    </bds-alert>
  );
};

export const SystenAlert = Template.bind({});
SystenAlert.args = { variant: 'system', icon: 'info' };

export const ErrorAlert = Template.bind({});
ErrorAlert.args = { variant: 'error', icon: 'error' };

export const WarningAlert = Template.bind({});
WarningAlert.args = { variant: 'warning', icon: 'warning' };

export const DeleteAlert = Template.bind({});
DeleteAlert.args = { variant: 'delete', icon: 'trash' };
