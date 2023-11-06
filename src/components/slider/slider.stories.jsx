import React, { useEffect } from 'react';
import DocumentationTemplate from './slider.mdx';

export default {
  title: 'Components/Slider',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '400px';
    el[0].style.position = 'relative';
  }
  return (
    <bds-slider
      value={args.value}
      min={args.min}
      max={args.max}
      step={args.step}
      markers={args.markers}
      progress={args.progress}
      dataMarkers={args.dataMarkers}
    ></bds-slider>
  );
};

Properties.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 10,
  markers: 'default',
  progress: 'default',
  dataMarkers:
    '[{ value: 0, name: "standard" },{ value: 1, name: "plus" },{ value: 2, name: "gold" },{ value: 3, name: "platinum" },]',
};

Properties.argTypes = {
  value: {
    table: {
      defaultValue: { summary: 50 },
    },
    control: 'number',
  },
  min: {
    table: {
      defaultValue: { summary: 0 },
    },
    control: 'number',
  },
  max: {
    table: {
      defaultValue: { summary: 100 },
    },
    control: 'number',
  },
  step: {
    table: {
      defaultValue: { summary: 10 },
    },
    control: 'number',
  },
  markers: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ['default', 'markers', 'without-subtitle'],
    control: 'select',
  },
  progress: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ['default', 'no-linear'],
    control: 'select',
  },
  dataMarkers: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'text',
  },
};

export const Events = () => {
  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.addEventListener('bdsChange', () => {
      console.log('Evento Toggle funcionando');
    });
  });
  return <bds-slider id="slider" value={50} min={0} max={100} step={10} markers="markers"></bds-slider>;
};
