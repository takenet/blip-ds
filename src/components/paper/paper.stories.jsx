import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Paper',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const paper = {
  width: "100px",
  height: "150px"
}

const barPaper = {
  width: "500px",
  height: "60px"
}

const container = {
  margin: "16px"
}

const barContainer = {
  margin: "3px"
}

const contentDefault = {
  display: "flex",
  width: "100%",
}


export const defaultPapers = () => (
  <div style={contentDefault}>
    <div style={container}>
      <bds-typo>Static</bds-typo>
      <bds-paper style={paper}></bds-paper>
    </div>
    <br />
    <div style={container}>
      <bds-typo>Primary</bds-typo>
      <bds-paper style={paper} elevation="primary"></bds-paper>
    </div>
    <br />
    <div style={container}>
      <bds-typo>Secondary</bds-typo>
      <bds-paper style={paper} elevation="secondary"></bds-paper>
    </div>
  </div>
);

export const barPapers = () => (
  <div>
    <div style={barContainer}>
      <bds-typo>Static</bds-typo>
      <bds-paper style={barPaper}></bds-paper>
    </div>
    <br />
    <div style={barContainer}>
      <bds-typo>Primary</bds-typo>
      <bds-paper style={barPaper} elevation="primary"></bds-paper>
    </div>
    <br />
    <div style={barContainer}>
      <bds-typo>Secondary</bds-typo>
      <bds-paper style={barPaper} elevation="secondary"></bds-paper>
    </div>
  </div>
);
