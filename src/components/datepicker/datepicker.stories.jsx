import React from 'react';
import { withKnobs} from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Datepicker',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
}


export const datepickerSingle = () => {
  return (
    <div style={content}>
      <bds-datepicker
        type-of-date="single"
        start-date-limit="01/01/2022"
        end-date-limit="31/12/2022"
      />
    </div>
  )
}

export const datepickerPeriod = () => {
  return (
    <div style={content}>
      <bds-datepicker
        type-of-date="period"
        start-date-limit="01/01/2022"
        end-date-limit="31/12/2022"
      />
    </div>
  )
}