import React from 'react';
import { withKnobs, boolean, number } from "@storybook/addon-knobs";

import readme from './calendar-period/readme.md';

export default {
  title: 'Calendar',
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

export const calendarSingle = () => {
  return (
    <div style={content}>
      <bds-calendar-single
        select-before-current={boolean('Select Before Current', false)}
      />
    </div>
  )
}
export const calendarPeriod = () => {
  return (
    <div style={content}>
      <bds-calendar-period
        select-before-current={boolean('Select Before Current', false)}
        date-limit={number('Date Limit', null)}
      />
    </div>
  )
}