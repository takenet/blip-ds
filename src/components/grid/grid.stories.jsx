import React from 'react';

import readme from './readme.md';

export default {
  title: 'Components/Grid',
  parameters: {
    notes: { markdown: readme },
  },
};

const paperSize = {
  width: '100%',
  padding: '24px',
};

export const containerGrid = () => (
  <bds-grid container>
    <bds-paper style={paperSize}>
      <bds-grid justify-content="center" xxs="12" padding="3">
        <bds-typo>Container</bds-typo>
      </bds-grid>
    </bds-paper>
  </bds-grid>
);

export const columnGrid = () => (
  <bds-grid direction="column" xxs="12">
    <bds-grid container flex-wrap="wrap">
      <bds-grid xxs="8" margin="y-2">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=8</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="4" margin="y-2">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=8</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid container flex-wrap="wrap">
      <bds-grid xxs="4">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=8</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="8">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=8</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const breakpointGrid = () => (
  <bds-grid direction="column" xxs="12">
    <bds-grid container flex-wrap="wrap">
      <bds-grid xxs="6" md="8" margin="y-2">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=6 md=8</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="6" md="4" margin="y-2">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=6 md=4</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid container flex-wrap="wrap">
      <bds-grid xxs="6" md="4">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=6 md=4</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="6" md="8">
        <bds-paper style={paperSize}>
          <bds-typo>xxs=6 md=8</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

const paperHeight = {
  width: '100%',
  padding: '24px',
  height: '150px',
};

export const gapGrid = () => (
  <bds-grid container flex-wrap="wrap" justify-content="center">
    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={paperHeight}>
        <bds-typo></bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={paperHeight}>
        <bds-typo></bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={paperHeight}>
        <bds-typo></bds-typo>
      </bds-paper>
    </bds-grid>
  </bds-grid>
);

const miniCards = {
  width: '50px',
  padding: '24px',
  height: '50px',
};

export const directionGrid = () => (
  <bds-grid xxs="12" direction="column" justify-content="center">
    <bds-grid xxs="12" margin="t-2" justify-content="center">
      <bds-typo>Direction = row</bds-typo>
    </bds-grid>
    <bds-grid container direction="row" flex-wrap="wrap" justify-content="center">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>Direction = row-reverse</bds-typo>
    </bds-grid>
    <bds-grid container direction="row-reverse" flex-wrap="wrap" justify-content="center">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>Direction = column</bds-typo>
    </bds-grid>
    <bds-grid container direction="column" align-items="center" flex-wrap="wrap" justify-content="center">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>Direction = column-reverse</bds-typo>
    </bds-grid>
    <bds-grid container direction="column-reverse" flex-wrap="wrap" align-items="center" justify-content="center">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const justifyContentGrid = () => (
  <bds-grid xxs="12" direction="column" justify-content="center">
    <bds-grid xxs="12" margin="t-2" justify-content="center">
      <bds-typo>justify-content = center</bds-typo>
    </bds-grid>

    <bds-grid container direction="row" flex-wrap="wrap" justify-content="center">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>justify-content = flex-start</bds-typo>
    </bds-grid>
    <bds-grid container direction="row" flex-wrap="wrap" justify-content="flex-start">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>justify-content = flex-end</bds-typo>
    </bds-grid>
    <bds-grid container direction="row" flex-wrap="wrap" justify-content="flex-end">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>justify-content = space-between</bds-typo>
    </bds-grid>
    <bds-grid container direction="row" flex-wrap="wrap" justify-content="space-between">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>justify-content = space-around</bds-typo>
    </bds-grid>
    <bds-grid container direction="row" flex-wrap="wrap" justify-content="space-around">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>justify-content = space-evenly</bds-typo>
    </bds-grid>
    <bds-grid container direction="row" flex-wrap="wrap" justify-content="space-evenly">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const alignItemsGrid = () => (
  <bds-grid xxs="12" direction="column" justify-content="center">
    <bds-grid xxs="12" margin="t-2" justify-content="center">
      <bds-typo>align-items = center</bds-typo>
    </bds-grid>
    <bds-grid style={{ height: '300px' }} container direction="row" flex-wrap="wrap" align-items="center">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>align-items = flex-start</bds-typo>
    </bds-grid>
    <bds-grid style={{ height: '300px' }} container direction="row" flex-wrap="wrap" align-items="flex-start">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>align-items = flex-end</bds-typo>
    </bds-grid>
    <bds-grid style={{ height: '300px' }} container direction="row" flex-wrap="wrap" align-items="flex-end">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={miniCards}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>align-items = stretch</bds-typo>
    </bds-grid>
    <bds-grid style={{ height: '300px' }} container direction="row" flex-wrap="wrap" align-items="stretch">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={{ width: '50px', padding: '24px' }}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={{ width: '50px', padding: '24px' }}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={{ width: '50px', padding: '24px' }}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>

    <bds-grid xxs="12" margin="t-4" justify-content="center">
      <bds-typo>align-items = baseline</bds-typo>
    </bds-grid>
    <bds-grid style={{ height: '300px' }} container direction="row" flex-wrap="wrap" align-items="baseline">
      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={{ width: '30px', padding: '20px' }}>
          <bds-typo>1</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={{ width: '30px', padding: '30px' }}>
          <bds-typo>2</bds-typo>
        </bds-paper>
      </bds-grid>

      <bds-grid xxs="2" margin="y-2">
        <bds-paper style={{ width: '30px', padding: '40px' }}>
          <bds-typo>3</bds-typo>
        </bds-paper>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

const page = {
  height: '80vh',
};

const header = {
  backgroundColor: '#4786F1',
};

const body = {
  height: '100%',
};

const sidebar = {
  backgroundColor: '#B3D4FF',
};

const content = {
  backgroundColor: '#CC99FF',
  height:'100%',
};

const text = {
  color: '#FFFFFF',
};

export const examplePageGrid = () => (
  <bds-grid xxs="11">

    <bds-grid xxs="12" direction="column" wrap="no-wrap" style={page}>

      <bds-grid xxs="12">
        <bds-grid xxs="12" padding="4" justify-content="center" style={header}>
          <bds-typo bold="bold" style={text} variant="fs-24" margin="false">
          Example of page using bds-grid
        </bds-typo>
        </bds-grid>
      </bds-grid>

      <bds-grid xxs="12" flex-wrap="wrap" style={body}>
        <bds-grid xxs="12" md="3" padding="2"  style={sidebar}>
        <bds-typo bold="bold" style={text} variant="fs-16" no-wrap="false" margin="false">
          Example of text on sidebar for test
        </bds-typo>
        </bds-grid>
        <bds-grid xxs="12" md="9" padding="2" style={content}>
        <bds-typo bold="bold" style={text} variant="fs-16" margin="false" no-wrap="false">
          Example of text on content for test
        </bds-typo>
        </bds-grid>
      </bds-grid>

    </bds-grid>

  </bds-grid>
);
