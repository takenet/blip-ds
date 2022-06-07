import React from 'react';
import readme from './readme.md';

export default {
  title: 'Datepicker',
  parameters: {
    notes: { markdown: readme },
  },
};

const Template = (args) => {
  return <bds-datepicker type-of-date={args.type} start-date-limit={args.start} end-date-limit={args.end} />;
};

export const DatepickerSingle = Template.bind({});
DatepickerSingle.args = { type: 'single', start: '01/01/2022', end: '31/12/2022' };

export const DatepickerPeriod = Template.bind({});
DatepickerPeriod.args = { type: 'period', start: '01/01/2022', end: '31/12/2022' };
