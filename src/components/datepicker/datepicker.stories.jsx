import React, { useEffect } from 'react';
import DocumentationTemplate from './datepicker.mdx';
import { BdsDatepicker } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Datepicker',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '600px';
    el[0].style.position = 'relative';
    el[0].style.background = 'none';
  }

  return (
    <bds-datepicker
      type-of-date={args.typeOfDate}
      start-date-limit={args.startDateLimit}
      end-date-limit={args.endDateLimit}
      message={args.message}
      language={args.language}
      disabled={args.disabled}
      value-date-selected={args.valueDateSelected}
      value-end-date-selected={args.valueEndDateSelected}
    />
  );
};

Properties.args = {
  typeOfDate: 'single',
  startDateLimit: '31/12/2022',
  endDateLimit: '01/01/2027',
  message: '',
  language: 'pt_BR',
  disabled: false,
  valueDateSelected: '',
  valueEndDateSelected: '',
};

Properties.argTypes = {
  typeOfDate: {
    table: {
      defaultValue: { summary: 'single' },
    },
    options: ['single', 'period'],
    control: 'select',
  },
  startDateLimit: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  endDateLimit: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  message: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  language: {
    table: {
      defaultValue: { summary: 'pt_BR' },
    },
    options: ['pt_BR', 'es_ES', 'en_US'],
    control: 'select',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
  valueDateSelected: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  valueEndDateSelected: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
};

export const Events = () => {
  useEffect(() => {
    const datepicker = document.getElementById('datepicker');
    datepicker.addEventListener('bdsEndDate', () => {
      console.log('Evento End Date funcionando');
    });
    datepicker.addEventListener('bdsStartDate', () => {
      console.log('Evento Start Date funcionando');
    });
    datepicker.addEventListener('concludeDatepicker', () => {
      console.log('Evento Conclude funcionando');
    });
  });

  return (
    <bds-datepicker id="datepicker" type-of-date="period" start-date-limit="31/12/2022" end-date-limit="01/01/2027" />
  );
};

export const FrameworkReact = () => {
  return <BdsDatepicker type-of-date="single" start-date-limit="31/12/2022" end-date-limit="01/01/2027" />;
};
