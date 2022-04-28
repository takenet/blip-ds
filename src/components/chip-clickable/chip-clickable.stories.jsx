import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Chip Clickable',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const chipClickableGroup = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px'
}

export const chipDefault = () => {
    return(
       <div>
        <bds-chip-clickable>Chip Default</bds-chip-clickable>
      </div>
    )
  };

  export const chipWithIcon = () => {
    return(
       <div>
        <bds-chip-clickable icon="add">Chip Icon</bds-chip-clickable>
      </div>
    )
  };

  export const chipWithAvatar = () => {
    return(
       <div>
        <bds-chip-clickable avatar="https://user-images.githubusercontent.com/62200066/113674873-54847000-96d8-11eb-81e0-cf7dddec8376.png">Chip Icon</bds-chip-clickable>
      </div>
    )
  };

  export const chipWithClose = () => {
    return(
       <div>
        <bds-chip-clickable icon="add" close>Chip Close</bds-chip-clickable>
      </div>
    )
  };

  export const chipSize = () => {
    return(
       <div>
        <bds-chip-clickable icon="add" close size="tall">Chip Close</bds-chip-clickable>
      </div>
    )
  };

  export const chipClickable = () => {
    return(
       <div>
        <bds-chip-clickable color="info" icon="add" close clickable>Chip Clickable</bds-chip-clickable>
      </div>
    )
  };

  export const chipColors = () => {
    return(
       <div style={chipClickableGroup}>
        <bds-chip-clickable color="default">default</bds-chip-clickable>
        <bds-chip-clickable color="info">info</bds-chip-clickable>
        <bds-chip-clickable color="success">success</bds-chip-clickable>
        <bds-chip-clickable color="warning">warning</bds-chip-clickable>
        <bds-chip-clickable color="danger">danger</bds-chip-clickable>
        <bds-chip-clickable color="outline">outline</bds-chip-clickable>
      </div>
    )
  };