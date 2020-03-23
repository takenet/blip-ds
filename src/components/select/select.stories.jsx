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

export const iconSelect = () => (
  <>
    <bds-select icon="favorite">
      <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
      <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
      <bds-select-option value="3" label="David Harbour"></bds-select-option>
      <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
      <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
      <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled icon="favorite">
      <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
      <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
      <bds-select-option value="3" label="David Harbour"></bds-select-option>
      <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
      <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
      <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
    </bds-select>
  </>
);

export const selectedSelect = () => (
  <>
    <bds-select value="2">
      <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
      <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
      <bds-select-option value="3" label="David Harbour"></bds-select-option>
      <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
      <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
      <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled value="2">
      <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
      <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
      <bds-select-option value="3" label="David Harbour"></bds-select-option>
      <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
      <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
      <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
    </bds-select>
  </>
);

export const disabledSelect = () => (
  <>
    <bds-select disabled>
      <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
      <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
      <bds-select-option value="3" label="David Harbour"></bds-select-option>
      <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
      <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
      <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
    </bds-select>
    <br />
    <bds-select icon="favorite" disabled>
      <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
      <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
      <bds-select-option value="3" label="David Harbour"></bds-select-option>
      <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
      <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
      <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
    </bds-select>
  </>
);
