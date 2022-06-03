import React from 'react';
import readme from './readme.md';

export default {
  title: 'Toast',
  parameters: {
    notes: { markdown: readme },
  },
};

export const callToast = () => {
  const showToast = async () => {
    const newtoast = document.createElement('bds-toast');
    document.body.appendChild(newtoast);

    const icon = undefined;
    const variant = 'warning';
    const actionType = { Button: 'button' };
    const toastTitle = 'Toast Title';
    const toastText = 'Lorem ipsum';
    const buttonText = 'Cancelar';
    const duration = 0;
    const buttonAction = { Close: 'close' };
    const position = { BottomLeft: 'bottom-left' };

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

export const toastSystem = () => {
  return (
    <>
      <bds-toast
        button-action="close"
        icon="bell"
        action-type="icon"
        toast-title="toast system"
        toast-text="Este é um toast de sistema"
        variant="system"
        show="true"
      ></bds-toast>
    </>
  );
};

export const toastError = () => {
  return (
    <>
      <bds-toast
        button-action="close"
        icon="error"
        action-type="icon"
        toast-title="toast error"
        toast-text="Este é um toast de erro"
        variant="error"
        show="true"
      ></bds-toast>
    </>
  );
};

export const toastSuccess = () => {
  return (
    <>
      <bds-toast
        button-action="close"
        icon="like"
        action-type="icon"
        toast-title="toast success"
        toast-text="Este é um toast de sucesso"
        variant="success"
        show="true"
      ></bds-toast>
    </>
  );
};

export const toastWarning = () => {
  return (
    <>
      <bds-toast
        button-action="close"
        icon="info"
        action-type="icon"
        toast-title="toast warning"
        toast-text="Este é um toast de aviso"
        variant="warning"
        show="true"
      ></bds-toast>
    </>
  );
};
