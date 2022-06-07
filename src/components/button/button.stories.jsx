import React from 'react';

import readme from './readme.md';

export default {
  title: 'Button',
  parameters: {
    notes: { markdown: readme },
  },
};

const defaultButtonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const spaceBetween = {
  padding: '8px',
};

export const defaultButton = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} variant="primary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} variant="secondary">
      Button secondary
    </bds-button>
    <bds-button style={spaceBetween} variant="tertiary">
      Button tertiary
    </bds-button>
    <bds-button style={spaceBetween} variant="ghost">
      Button ghost
    </bds-button>
    <bds-button style={spaceBetween} variant="delete">
      Button delete
    </bds-button>
  </div>
);

export const disabedButton = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} variant="primary" disabled>
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} variant="secondary" disabled>
      Button secondary
    </bds-button>
    <bds-button style={spaceBetween} variant="tertiary" disabled>
      Button tertiary
    </bds-button>
    <bds-button style={spaceBetween} variant="ghost" disabled>
      Button ghost
    </bds-button>
    <bds-button style={spaceBetween} variant="delete" disabled>
      Button delete
    </bds-button>
  </div>
);

export const sizeButtons = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} size="standard">
      Standard Button
    </bds-button>
    <bds-button style={spaceBetween} size="short">
      {' '}
      Short Button
    </bds-button>
  </div>
);

export const buttonWithIcon = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} icon="file-new" size="standard">
      Text button
    </bds-button>
    <bds-button style={spaceBetween} arrow size="standard">
      Text button
    </bds-button>
  </div>
);

export const buttonWithLogo = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} icon="gbm" type-icon="logo">
      Text button
    </bds-button>
    <bds-button style={spaceBetween} icon="google" type-icon="logo">
      Text button
    </bds-button>
  </div>
);

export const buttonLoading = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} bds-loading bds-loading-variant="primary" variant="primary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-variant="secondary" variant="secondary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-variant="tertiary" variant="tertiary">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-variant="ghost" variant="ghost">
      Button primary
    </bds-button>
    <bds-button style={spaceBetween} bds-loading bds-loading-variant="delete" variant="delete">
      Button primary
    </bds-button>
  </div>
);

export const buttonWithoutText = () => (
  <>
    <div style={defaultButtonStyle}>
      <bds-button-icon style={spaceBetween} variant="primary" icon="file-new" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="secondary" icon="notes" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="tertiary" icon="warning" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="ghost" icon="info" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="delete" icon="attention" size="standard"></bds-button-icon>
    </div>
    <div style={defaultButtonStyle}>
      <bds-button-icon
        style={spaceBetween}
        disabled
        variant="primary"
        icon="file-new"
        size="standard"
      ></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="secondary" icon="notes" size="standard"></bds-button-icon>
      <bds-button-icon
        style={spaceBetween}
        disabled
        variant="tertiary"
        icon="warning"
        size="standard"
      ></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="ghost" icon="info" size="standard"></bds-button-icon>
      <bds-button-icon
        style={spaceBetween}
        disabled
        variant="delete"
        icon="attention"
        size="standard"
      ></bds-button-icon>
    </div>
  </>
);
