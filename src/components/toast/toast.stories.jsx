import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import readme from "./readme.md";

export default {
  title: "Toast",
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const callToast = () => {
  const variantOptions = {
    System: "system",
    Error: "error",
    Success: "success",
    Warning: "warning",
    Undo: "undo",
    Redo: "redo"
  };
  const actionTypeOptions = { Button: "button", Icon: "icon" };
  const buttonActionOptions = { Close: "close", Custom: "custom" };
  const positionTypeOptions = { BottomLeft: 'bottom-left', BottomRight: 'bottom-right', TopLeft: 'top-left', TopRight: 'top-right' };

  const showToast = async () => {
    const newtoast = document.createElement("bds-toast");
    document.body.appendChild(newtoast);

    const icon = text("icon", undefined);
    const variant = select("variant", variantOptions);
    const actionType = select("action-type", actionTypeOptions);
    const toastTitle = text("toast-title", "Toast Title");
    const toastText = text("toast-text", "Lorem ipsum");
    const buttonText = text("button-text", "Cancelar");
    const duration = text("duration", 0);
    const buttonAction = select("button-action", buttonActionOptions);
    const position = select("position", positionTypeOptions, positionTypeOptions.BottomLeft);

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
      position
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
    <bds-toast button-action="close" icon="bell" action-type="icon" toast-title="toast system" toast-text="Este é um toast de sistema" variant="system" show="true"></bds-toast>
    </>
  );
};

export const toastError = () => {
  return (
    <>
    <bds-toast button-action="close" icon="error" action-type="icon" toast-title="toast error" toast-text="Este é um toast de erro" variant="error" show="true"></bds-toast>
    </>
  );
};

export const toastSuccess = () => {
  return (
    <>
    <bds-toast button-action="close" icon="like" action-type="icon" toast-title="toast success" toast-text="Este é um toast de sucesso" variant="success" show="true"></bds-toast>
    </>
  );
};

export const toastWarning = () => {
  return (
    <>
    <bds-toast button-action="close" icon="info" action-type="icon" toast-title="toast warning" toast-text="Este é um toast de aviso" variant="warning" show="true"></bds-toast>
    </>
  );
};
