import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Chip Tag',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const chipTagGroup = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px'
}

export const chipTagDefault = () => {
    return(
       <div>
        <bds-chip-tag>Chip-tag Default</bds-chip-tag>
      </div>
    )
  };

  export const chipTagWithIcon = () => {
    return(
       <div>
        <bds-chip-tag icon="add" >Chip-tag Icon</bds-chip-tag>
      </div>
    )
  };

  export const chipTagColors = () => {
    return(
       <div style={chipTagGroup}>
        <bds-chip-tag color="default">default</bds-chip-tag>
        <bds-chip-tag color="info">info</bds-chip-tag>
        <bds-chip-tag color="success">success</bds-chip-tag>
        <bds-chip-tag color="warning">warning</bds-chip-tag>
        <bds-chip-tag color="danger">danger</bds-chip-tag>
        <bds-chip-tag color="outline">outline</bds-chip-tag>
        <bds-chip-tag color="disabled">disabled</bds-chip-tag>
      </div>
    )
  };