import React from 'react';

import readme from './readme.md';

export default {
  title: 'Chip Selected',
  parameters: {
    notes: { markdown: readme },
  },
};

const chipStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
};

export const defaultChipSelected = () => (
  <div style={chipStyle}>
    <bds-chip-selected color="default">chip default</bds-chip-selected>
    <bds-chip-selected color="info">chip info</bds-chip-selected>
    <bds-chip-selected color="success">chip success</bds-chip-selected>
    <bds-chip-selected color="warning">chip warning</bds-chip-selected>
    <bds-chip-selected color="danger">chip danger</bds-chip-selected>
    <bds-chip-selected color="outline">chip outline</bds-chip-selected>
  </div>
);

export const iconChipSelected = () => (
  <div style={chipStyle}>
    <bds-chip-selected icon="add" color="default">
      chip default
    </bds-chip-selected>
    <bds-chip-selected icon="info" color="info">
      chip info
    </bds-chip-selected>
    <bds-chip-selected icon="link" color="success">
      chip success
    </bds-chip-selected>
    <bds-chip-selected icon="attention" color="warning">
      chip warning
    </bds-chip-selected>
    <bds-chip-selected icon="error" color="danger">
      chip danger
    </bds-chip-selected>
    <bds-chip-selected icon="faq" color="outline">
      chip outline
    </bds-chip-selected>
  </div>
);

export const sizeChipSelected = () => (
  <div style={chipStyle}>
    <bds-chip-selected icon="add" color="default">
      size standard
    </bds-chip-selected>
    <bds-chip-selected icon="add" color="default" size="tall">
      size tall
    </bds-chip-selected>
  </div>
);

export const ChipSelected = () => (
  <div style={chipStyle}>
    <bds-chip-selected icon="add" color="default">
      chip default
    </bds-chip-selected>
    <bds-chip-selected icon="add" color="default" selected="true">
      chip selected
    </bds-chip-selected>
  </div>
);
