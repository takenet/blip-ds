import React, {useEffect} from 'react';
import {
  BdsAlert,
  BdsAlertActions,
  BdsAlertHeader,
  BdsAlertBody,
  BdsButton,
  BdsGrid
} from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './alert.mdx';

export default {
  title: 'Components/Alert',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};

export const Properties = (args) => {
 const el = document.getElementsByClassName('sb-story');
if (el.length !== 0) {
  el[0].style.width = '720px';
  el[0].style.height = '400px';
  el[0].style.position = 'relative';
  el[0].style.background = 'none';
}
  return (
    <bds-alert open={args.open} position="contain">
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

Properties.argTypes = {
  ...Properties.args,
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

Properties.args = {
  variant:'system',
  icon: 'info',
  open: true
}

export const Events = () => {

  useEffect(() => {
    const avatar = document.getElementById('alert');
    avatar.addEventListener('bdsAlertChanged', () => {
      console.log('Evento Click funcionando');
    });
  });

  const btToggle = async id => {
    const alert = document.getElementById(id);
    alert.toggle();
  }
  return (
    <BdsGrid>
      <BdsButton onClick={() => btToggle('alert')}>
        Abrir Alert
      </BdsButton>
      <BdsAlert id="alert">
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

export const Methods = () => {

  const btToggle = async id => {
    const alert = document.getElementById(id);
    alert.toggle();
  }
  return (
    <BdsGrid>
      <BdsButton onClick={() => btToggle('alert')}>
        Abrir Alert
      </BdsButton>
      <BdsAlert id="alert">
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

export const FrameworkReact = () => {
  return (
    <BdsAlert open={true} id="alert">
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