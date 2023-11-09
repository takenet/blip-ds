import React, { useEffect } from 'react';
import DocumentationTemplate from './slider.mdx';
import { BdsGrid, BdsSlider } from '../../../blip-ds-react/dist/components';

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
    el[0].style.width = '700px';
  }
  return (
    <bds-grid padding="t-6" xxs={12}>
      <bds-slider
        value={args.value}
        min={args.min}
        max={args.max}
        step={args.step}
        markers={args.markers}
        label={args.label}
        type={args.type}
        data-markers={args.dataMarkers}
      ></bds-slider>
    </bds-grid>
  );
};

Properties.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 10,
  markers: false,
  label: false,
  type: 'fill',
  dataMarkers: '',
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
      defaultValue: { summary: 'vazio' },
    },
    control: 'boolean',
  },
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'boolean',
  },
  type: {
    table: {
      defaultValue: { summary: 'fill' },
    },
    options: ['fill', 'no-linear'],
    control: 'select',
  },
  dataMarkers: {
    table: {
      defaultValue: {
        summary:
          '[{"value": 0, "name": "standard"}, {"value": 1, "name": "plus"}, {"value": 2, "name": "gold"}, {"value": 3, "name": "platinum"}]',
      },
    },
    control: 'text',
  },
};

export const Events = () => {
  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.addEventListener('bdsChange', (obj) => {
      console.log('Evento Change funcionando: ', obj);
    });
  });
  return (
    <bds-grid padding="t-6" xxs={12}>
      <bds-slider id="slider" value={50} min={0} max={100} step={10} markers label type="fill"></bds-slider>;
    </bds-grid>
  );
};

export const FrameworkReact = () => (
  <BdsGrid padding="t-6">
    <BdsSlider value={50} min={0} max={100} step={10} markers label type="fill"></BdsSlider>
  </BdsGrid>
);
