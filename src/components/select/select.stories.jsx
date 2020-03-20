import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import readme from "./readme.md";

export default {
  title: "Select",
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme }
  }
};

export const defaultSelect = () => (
  <bds-select>
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-select>
);

export const withValue = () => (
  <bds-select value="2">
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-select>
);


export const iconSelect = () => (
  <bds-select icon="email">
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-select>
);


export const disabledSelect = () => (
  <bds-select icon="email" disabled>
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-select>
);
