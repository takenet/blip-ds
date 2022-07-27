import React from 'react';
import readme from './readme.md';

export default {
  title: 'Toast',
  parameters: {
    notes: { markdown: readme },
  },
};

const Template = (args) => {
  return (
    <bds-toast
      button-action={args.buttonAction}
      icon={args.icon}
      action-type={args.actionType}
      toast-title={args.toastTitle}
      toast-text={args.toastText}
      variant={args.variant}
      show={args.show}
    ></bds-toast>
  );
};

const ExampleToast = (args) => {
  const showToast = async () => {
    const newtoast = document.createElement('bds-toast');
    document.body.appendChild(newtoast);

    const icon = args.icon;
    const variant = args.variant;
    const actionType = args.actionType;
    const toastTitle = args.toastTitle;
    const toastText = args.toastText;
    const buttonText = args.buttonText;
    const duration = args.duration;
    const buttonAction = args.buttonAction;
    const position = args.position;

    await newtoast.create({
      variant,
      actionType,
      toastTitle,
      buttonText,
      buttonAction,
      toastText,
      variant,
      duration,
      icon,
      position,
    });
  };

  return (
    <>
      <bds-button onClick={() => showToast()}>Show toast</bds-button>
    </>
  );
};

export const ToastSystem = Template.bind({});
ToastSystem.args = {
  buttonAction: 'close',
  icon: 'bell',
  actionType: 'icon',
  toastTitle: 'toast system',
  toastText: 'Este é um toast de sistema',
  variant: 'system',
  show: 'true',
};

export const ToastError = Template.bind({});
ToastError.args = {
  buttonAction: 'close',
  icon: 'error',
  actionType: 'icon',
  toastTitle: 'toast error',
  toastText: 'Este é um toast de erro',
  variant: 'error',
  show: 'true',
};

export const ToastSuccess = Template.bind({});
ToastSuccess.args = {
  buttonAction: 'close',
  icon: 'like',
  actionType: 'icon',
  toastTitle: 'toast success',
  toastText: 'Este é um toast de successo',
  variant: 'success',
  show: 'true',
};

export const ToastWarning = Template.bind({});
ToastWarning.args = {
  buttonAction: 'close',
  icon: 'info',
  actionType: 'icon',
  toastTitle: 'toast warning',
  toastText: 'Este é um toast de aviso',
  variant: 'warning',
  show: 'true',
};

export const ToastNotification = Template.bind({});
ToastNotification.args = {
  buttonAction: 'close',
  icon: 'bell',
  actionType: 'icon',
  toastTitle: 'toast notification',
  toastText: 'Este é um toast de notificação',
  variant: 'notification',
  show: 'true',
};

export const CallToast = ExampleToast.bind({});
CallToast.args = {
  icon: 'info',
  variant: 'warning',
  actionType: 'button',
  toastTitle: 'Toast Title',
  toastText: 'Lorem ipsum',
  buttonText: 'Cancelar',
  duration: 0,
  buttonAction: 'close',
  position: 'bottom-left',
};
