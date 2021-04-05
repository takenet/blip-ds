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

export const chipsClikable = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} clikable="true" variant="primary" >chips primary</bds-chip>
    </div>
  )
};

export const chipsDanger = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} danger="true" >chips primary</bds-chip>
    </div>
  )
};

export const chipsDeletable = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} deletable="true" variant="primary" >chips primary</bds-chip>
    </div>
  )
};

export const chipsDisabled = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} disabled="true" variant="primary" >chips primary</bds-chip>
    </div>
  )
};

export const chipsFilter = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} filter="true" >chips primary</bds-chip>
    </div>
  )
};

export const chipsIcon = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} icon="warning" variant="primary" >chips primary</bds-chip>
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

export const chipsVariant = () => {
  return(
     <div  style={defaultButtonStyle}>
      <bds-chip style={spaceBetween} variant="default" >chips default</bds-chip>
      <bds-chip style={spaceBetween} variant="primary" >chips primary</bds-chip>
    </div>
  )
};