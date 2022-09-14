import React from 'react';

import readme from './readme.md';

export default {
  title: 'Grid',
  parameters: {
    notes: { markdown: readme },
  },
};

const paperSize = {
  width: '100%',
  padding: '24px'
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
  <bds-grid xxs="12">
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
  <bds-grid xxs="12">
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
  height: '150px'
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
  height: '50px'
};

export const directionGrid = () => (
  <bds-grid justify-content="center">
    <bds-typo>Direction = row</bds-typo>
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
  <bds-typo>Direction = row-reverse</bds-typo>
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
  <bds-typo>Direction = column</bds-typo>
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
  <bds-typo>Direction = column-reverse</bds-typo>
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
  <bds-grid justify-content="center">

    <bds-typo>justify-content = center</bds-typo>
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

  <bds-typo>justify-content = flex-start</bds-typo>
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

  <bds-typo>justify-content = flex-end</bds-typo>
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

  <bds-typo>justify-content = space-between</bds-typo>
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

  <bds-typo>justify-content = space-around</bds-typo>
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

  <bds-typo>justify-content = space-evenly</bds-typo>
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
  <bds-grid justify-content="center">

    <bds-typo>align-items = center</bds-typo>
    <bds-grid style={{height: '300px'}} container direction="row" flex-wrap="wrap" align-items="center">
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

  <bds-typo>align-items = flex-start</bds-typo>
    <bds-grid style={{height: '300px'}} container direction="row" flex-wrap="wrap" align-items="flex-start">
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

  <bds-typo>align-items = flex-end</bds-typo>
    <bds-grid style={{height: '300px'}} container direction="row" flex-wrap="wrap" align-items="flex-end">
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

  <bds-typo>align-items = stretch</bds-typo>
    <bds-grid style={{height: '300px'}} container direction="row" flex-wrap="wrap" align-items="stretch">
    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={{width: '50px', padding: '24px'}}>
        <bds-typo>1</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={{width: '50px', padding: '24px'}}>
        <bds-typo>2</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={{width: '50px', padding: '24px'}}>
        <bds-typo>3</bds-typo>
      </bds-paper>
    </bds-grid>
  </bds-grid>

  <bds-typo>align-items = baseline</bds-typo>
    <bds-grid style={{height: '300px'}} container direction="row" flex-wrap="wrap" align-items="baseline">
    <bds-grid xxs="2" margin="y-2">
      <bds-paper style={{width: '30px', padding: '20px'}}>
        <bds-typo>1</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="2" margin="y-2">
      <bds-paper  style={{width: '30px', padding: '30px'}}>
        <bds-typo>2</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="2" margin="y-2">
      <bds-paper  style={{width: '30px', padding: '40px'}}>
        <bds-typo>3</bds-typo>
      </bds-paper>
    </bds-grid>
  </bds-grid>


  </bds-grid>
  
);
