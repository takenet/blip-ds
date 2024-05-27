import React, { useEffect } from 'react';
import DocumentationTemplate from './toast.mdx';
import { BdsToast } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Toast',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-toast
      button-action={args.buttonAction}
      button-text={args.buttonText}
      action-type={args.actionType}
      toast-title={args.toastTitle}
      toast-text={args.toastText}
      variant={args.variant}
      show={args.show}
    ></bds-toast>
  );
};

Properties.args = {
  buttonAction: 'close',
  buttonText: '',
  actionType: 'icon',
  toastTitle: 'Toast de teste',
  toastText: 'Esse é um toast para testes, podendo ser modificado na tabela.',
  variant: 'system',
  show: true,
};

Properties.argTypes = {
  buttonAction: {
    table: {
      defaultValue: { summary: 'close' },
    },
    options: ['close', 'custom'],
    control: 'select',
  },
  actionType: {
    table: {
      defaultValue: { summary: 'close' },
    },
    options: ['button', 'icon'],
    control: 'select',
  },
  variant: {
    table: {
      defaultValue: { summary: 'close' },
    },
    options: ['error', 'notification', 'redo', 'success', 'system', 'undo', 'warning'],
    control: 'select',
  },
  buttonText: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  toastTitle: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  toastText: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  show: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const toast = document.getElementById('toast');
    toast.addEventListener('toastButtonClick', () => {
      console.log('Evento toastButtonClick funcionando');
    });
  });
  return (
    <bds-toast
      id="toast"
      button-action="close"
      action-type="icon"
      toast-title="toast system"
      toast-text="Este é um toast de sistema"
      variant="system"
      show="true"
    ></bds-toast>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsToast
      id="toast"
      buttonAction="close"
      actionType="icon"
      toastTitle="toast system"
      toastText="Este é um toast de sistema"
      variant="system"
      show="true"
    ></BdsToast>
  );
};

export const Methods = () => {
  const showToast = async () => {
    const newtoast = document.createElement('bds-toast');
    document.body.appendChild(newtoast);

    const icon = 'bell';
    const variant = 'system';
    const actionType = 'icon';
    const toastTitle = 'Toast de teste';
    const toastText = 'Esse é um toast para testes, podendo ser modificado na tabela.';
    const buttonAction = 'close';

    await newtoast.create({
      variant,
      actionType,
      toastTitle,
      buttonAction,
      toastText,
      icon,
    });
  };

  return (
    <>
      <bds-button onClick={() => showToast()}>Show toast</bds-button>
    </>
  );
};
