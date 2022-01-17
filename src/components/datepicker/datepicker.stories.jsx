import React from 'react';
import { withKnobs, boolean, number } from "@storybook/addon-knobs";

import readme from './datepicker-period/readme.md';

export default {
  title: 'Datepicker',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  backgroundColor: "#fff",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const datepickerSingle = () => {
  return (
    <div style={content}>
      <bds-datepicker-single
        select-before-current={boolean('Select Before Current', false)}
      />
    </div>
  )
}
export const datepickerPeriod = () => {
  return (
    <div style={content}>
      <bds-datepicker-period
        select-before-current={boolean('Select Before Current', false)}
        date-limit={number('Date Limit', null)}
      />
    </div>
  )
}