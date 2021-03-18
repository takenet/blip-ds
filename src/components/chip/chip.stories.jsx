import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Chip',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};


export const chipDefault = () => {
  const sizeOptions = select('size', ['standard', 'tall']);
  const variantOptions = select('variant', ['default', 'primary']);
  const slot = text('text', 'rafael@take.net');
  const danger = boolean('danger', false);
  const clickable = boolean('clickable', false);
  const deletable = boolean('deletable', false);
  const disabled = boolean('disabled', false);
  const icon = text('icon', '');

  return (
    <bds-chip
      size={sizeOptions}
      variant={variantOptions}
      danger={danger}
      clickable={clickable}
      deletable={deletable}
      disabled={disabled}
      icon={icon}
    >
      {slot}
    </bds-chip>
  );
};

export const chips = () => {

  const defaultButtonStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
  
  const spaceBetween = {
    margin: '8px'
  }

  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} variant="default" >chips default</bds-chip>
      <bds-chip style={spaceBetween} variant="primary" >chips primary</bds-chip>
      <bds-chip style={spaceBetween} danger="true" >chips delete</bds-chip>
      <bds-chip style={spaceBetween} filter="true" >chips filter</bds-chip>
    </div>
  )
};
