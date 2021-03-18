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

const defaultButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const spaceBetween = {
  margin: '8px'
}

export const chips = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} variant="default" >chips default</bds-chip>
      <bds-chip style={spaceBetween} variant="primary" >chips primary</bds-chip>
      <bds-chip style={spaceBetween} danger="true" >chips delete</bds-chip>
      <bds-chip style={spaceBetween} filter="true" >chips filter</bds-chip>
    </div>
  )
};

export const chipsSize = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} variant="primary" size="standard" >chips default</bds-chip>
      <bds-chip style={spaceBetween} variant="primary" size="tall" >chips primary</bds-chip>
    </div>
  )
};
