import React, {useEffect} from 'react';
import DocumentationTemplate from './switch.mdx';
import { BdsSwitch } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Switch',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-switch name={args.name} disabled={args.disabled} checked={args.checked} refer={args.refer} size={args.size}></bds-switch>
);
} 

Properties.args = {
  checked: false,
  disabled: false,
  name: 'cb1',
  refer: '',
  size: 'standard',
};

Properties.argTypes = {
  checked: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  name: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  refer: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    options: ["short", "standard", "tall"],
    control: 'select',
  },
}

export const Events = () => {
  useEffect(() => {
    const switchEl = document.getElementById('switch');
    switchEl.addEventListener('bdsChange', () => {
      console.log('Evento Blur funcionando');
    });
  });
  return (
    <bds-switch id="switch" name="cb1" disabled={false} checked={true}></bds-switch>
);
} 

export const FrameworkReact = () => {
  return (
    <BdsSwitch id="switch" name="cb1" disabled={false} checked={true}></BdsSwitch>
);
} 
