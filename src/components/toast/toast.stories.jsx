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

export const toastSystem = () => {
  const variantOptions = {
    System: "system",
    Error: "error",
    Success: "success",
    Warning: "warning",
  };
  const actionTypeOptions = { Button: "button", Icon: "icon" };
  const buttonActionOptions = { Close: "close", Custom: "custom" };

  const showToast = async () => {
    const newtoast = document.createElement("bds-toast");
    const toastContainer = document.querySelector("bds-toast-container")
      .shadowRoot;
    toastContainer.appendChild(newtoast);

    const icon = text("icon", undefined);
    const variant = select("variant", variantOptions);
    const actionType = select("action-type", actionTypeOptions);
    const toastTitle = text("toast-title", "Toast Title");
    const toastText = text("toast-text", "Lorem ipsum");
    const buttonText = text("button-text", "Cancelar");
    const duration = text("duration", 0);
    const buttonAction = select("button-action", buttonActionOptions);

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
    });
  };

  return (
    <>
      <bds-toast-container></bds-toast-container>
      <bds-button onClick={() => showToast()}>Show toast</bds-button>
    </>
  );
};
