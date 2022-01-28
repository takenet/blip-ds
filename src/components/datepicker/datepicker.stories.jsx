import React from 'react';
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
import { dateToDayList } from '../../utils/calendar';

import readme from './readme.md';

export default {
  title: 'Datepicker',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  backgroundColor: "#f5f8f9",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
}

const datepickerStyle = {
  width: "fit-content"
}

export const datepicker = () => {
  const types = [
    'single',
    'period'
  ]
  return (
    <div style={content}>
      <bds-datepicker
        style={datepickerStyle}
        type-of-date={select('Type of Data', types)}
        start-date-limit={text('Start Date Limit', '01/01/2022')}
        end-date-limit={text('End Date Limit', '31/12/2022')}
      />
    </div>
  )
}

export const datepickerSingle = () => {
  return (
    <div style={content}>
      <bds-datepicker-single
        start-date={dateToDayList(text('Start Date', '01/01/2022'))}
        end-date={dateToDayList(text('End Date', '31/12/2022'))}
      ></bds-datepicker-single>
    </div>
  )
}

export const datepickerPeriod = () => {
  return (
    <div style={content}>
      <bds-datepicker-period
        start-date={text('Start Date Limit', '01/01/2022')}
        end-date={text('End Date Limit', '31/12/2022')}
      ></bds-datepicker-period>
    </div>
  )
}