import React from 'react';
import DocumentationTemplate from './grid.mdx';
import { BdsGrid } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Grid',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const gridStyle = {
  width: '100%',
  padding: '24px',
  backgroundColor: '#1e6bf1'
};

const paperSize = {
  width: '100%',
  padding: '24px',
};


export const Properties = (args) => (
  <bds-grid style={gridStyle} container={args.container} align-items={args.alignItems} container-fluid={args.containerFluid} direction={args.direction} flex-wrap={args.flexWrap} gap={args.gap} height={args.height} justify-content={args.justifyContent} margin={args.margin} padding={args.padding} xxs={args.xxs} xs={args.xs} sm={args.sm} md={args.md} lg={args.lg} xg={args.xg} xxs-off-set={args.xxsOffset} xs-off-set={args.xsOffset} sm-off-set={args.smOffset} md-off-set={args.mdOffset} lg-off-set={args.lgOffset}>
    <bds-typo bold="semi-bold" style={{color: '#fff'}}>Texto do Container</bds-typo>
  </bds-grid>
);

Properties.args = {
  alignItems: '',
  container: '',
  containerFluid: '',
  direction: '',
  flexWrap: '',
  gap: '',
  height: '',
  justifyContent: '',
  margin: '',
  padding: '',
  xxs: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xg: '',
  xxsOffset: '',
  xsOffset: '',
  smOffset: '',
  mdOffset: '',
  lgOffset: '',
  xgOffset: '',
};

Properties.argTypes = {
  alignItems: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ["baseline", "center", "flex-end", "flex-start", "stretch"],
    control: 'select',
  },
  container: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'boolean',
  },
  containerFluid: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'boolean',
  },
  direction: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ["column", "column-reverse", "row", "row-reverse"],
    control: 'select',
  },
  flexWrap: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ["wrap", "wrap-reverse"],
    control: 'select',
  },
  gap: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ["1", "12", "2", "3", "4", "8", "half", "none"],
    control: 'select',
  },
  height: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  justifyContent: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ["center", "flex-end", "flex-start", "space-around", "space-between", "space-evenly", "stretch"],
    control: 'select',
  },
  margin: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ["none", "1", "2", "3", "4", "5", "6", "half", "l-none", "l-half", "l-1", "l-2", "l-3", "l-4", "l-5", "l-6", "b-none", "b-half", "b-1", "b-2", "b-3", "b-4", "b-5", "b-6", "r-none", "r-half", "r-1", "r-2", "r-3", "r-4", "r-5", "r-6", "t-none", "t-half", "t-1", "t-2", "t-3", "t-4", "t-5", "t-6", "y-none", "y-half", "y-1", "y-2", "y-3", "y-4", "y-5", "y-6", "x-none", "x-half", "x-1", "x-2", "x-3", "x-4", "x-5", "x-6"],
    control: 'select',
  },
  padding: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  xxs: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  xs: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  sm: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  md: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  lg: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  xg: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  xxsOffset: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  xsOffset: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  smOffset: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  mdOffset: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['vazio', 'hover'],
    control: 'select',
  },
  lgOffset: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    options: ['vazio', 'hover'],
    control: 'select',
  },
  xgOffset: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    options: ['vazio', 'hover'],
    control: 'select',
  },
};

export const FrameworkReact = () => (
  <BdsGrid container>
    <bds-paper style={paperSize}>
      <BdsGrid justify-content="center" xxs="12" padding="3">
        <bds-typo>Container</bds-typo>
      </BdsGrid>
    </bds-paper>
  </BdsGrid>
);

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
