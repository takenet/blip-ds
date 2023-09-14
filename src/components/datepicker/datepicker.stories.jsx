import React from 'react';
import DocumentationTemplate from './datepicker.mdx';

export default {
  title: 'Components/Datepicker',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-datepicker
    type-of-date={args.typeOfDate}
    start-date-limit={args.startDateLimit}
    end-date-limit={args.endDateLimit}
  />
);

Properties.args = {
  typeOfDate: 'single',
  startDateLimit: '31/12/2022',
  endDateLimit: '01/01/2027',
};

Properties.argTypes = {
  typeOfDate: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Coloque o titulo do cabeçalho.',
    options: ['single', 'period'],
    control: 'select',
  },
  startDateLimit: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o titulo do cabeçalho.',
    control: 'text',
  },
  endDateLimit: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o titulo do cabeçalho.',
    control: 'text',
  },
};