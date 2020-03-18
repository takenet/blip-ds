import React from "react";

import readme from "./readme.md";

export default {
  title: "Select Option",
  parameters: {
    notes: { markdown: readme }
  }
};

const container = {
  width: "200px"
};

export const defaultSelectOption = () => (
  <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
);

export const selectedSelectOption = () => (
  <bds-select-option
    value="1"
    label="Millie Bobby"
    selected
  ></bds-select-option>
);

export const bulkSelectOption = () => (
  <div style={container}>
    <bds-select-option
      value="2"
      label="Millie Bobby"
      bulk-option="10"
    ></bds-select-option>
  </div>
);
