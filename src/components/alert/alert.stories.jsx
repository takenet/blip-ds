import React from 'react';
import readme from './readme.md';
import {
  BdsAlert,
  BdsAlertActions,
  BdsAlertHeader,
  BdsAlertBody,
  BdsButton,
  BdsGrid
} from '../../../blip-ds-react/dist/components';

export default {
  title: 'Alert',
  parameters: {
    notes: { markdown: readme },
  },
};

const Template = (args) => {
  const el = document.getElementsByClassName('sb-story');
if (el.length !== 0) {
  el[0].style.width = '720px';
  el[0].style.height = '400px';
  el[0].style.position = 'relative';
  el[0].style.background = 'none';
}
  return (
    <bds-alert position="contain" open={true}>
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

export const SystemAlert = Template.bind({});
SystemAlert.args = { variant: 'system', icon: 'info' };

export const ErrorAlert = Template.bind({});
ErrorAlert.args = { variant: 'error', icon: 'error' };

export const WarningAlert = Template.bind({});
WarningAlert.args = { variant: 'warning', icon: 'warning' };

export const DeleteAlert = Template.bind({});
DeleteAlert.args = { variant: 'delete', icon: 'trash' };

export const alertProps = (args) => {
  const el = document.getElementsByClassName('sb-story');
if (el.length !== 0) {
  el[0].style.width = '720px';
  el[0].style.height = '400px';
  el[0].style.position = 'relative';
  el[0].style.background = 'none';
}
  return (
    <bds-alert position="contain" open={args.open}>
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

alertProps.argTypes = {
  ...alertProps.args,
  variant: {
    table: {
      defaultValue: { summary: 'system' },
    },
    description: 'Escolha o estado do componente.',
    options: ['system' , 'error' , 'warning' , 'delete'],
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

alertProps.args = {
  variant:'system',
  icon: 'info',
  open: true
}

export const alertReact = () => {
  const el = document.getElementsByClassName('sb-story');
if (el.length !== 0) {
  el[0].style.width = '720px';
  el[0].style.height = '400px';
  el[0].style.position = 'relative';
  el[0].style.background = 'none';
}
  return (
    <BdsAlert position="contain" open={true} not-doc={false} id="alert">
      <BdsAlertHeader variant="system" icon="info">
        Atenção!
      </BdsAlertHeader>
      <BdsAlertBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
        error!
      </BdsAlertBody>
      <BdsAlertActions>
        <BdsButton variant="tertiary">Cancelar</BdsButton>
        <bds-button variant="primary">Confirmar</bds-button>
      </BdsAlertActions>
    </BdsAlert>
  );
};

export const alertMethod = () => {

  const el = document.getElementsByClassName('sb-story');
if (el.length !== 0) {
  el[0].style.width = '720px';
  el[0].style.height = '400px';
  el[0].style.position = 'relative';
  el[0].style.background = 'none';
}

  const btToggle = async id => {
    const alert = document.getElementById(id);
    alert.toggle();
  }
  return (
    <BdsGrid>
      <BdsButton onClick={() => btToggle('alert')}>
        Abrir Alert
      </BdsButton>
      <BdsAlert position="contain" id="alert">
      <BdsAlertHeader variant="system" icon="info">
        Atenção!
      </BdsAlertHeader>
      <BdsAlertBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
        error!
      </BdsAlertBody>
      <BdsAlertActions>
        <BdsButton variant="tertiary" onClick={() => btToggle('alert')}>Cancelar</BdsButton>
        <bds-button variant="primary" onClick={() => btToggle('alert')}>Confirmar</bds-button>
      </BdsAlertActions>
    </BdsAlert>
    </BdsGrid>
  );
};
