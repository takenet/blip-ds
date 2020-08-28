import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const containerStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const contentStyle = {
  margin: "0 8px",
}

export const defaultButton = () => (
  <bds-button
    variant={text('variant', 'primary')}
    size={text('size', 'standard')}
    disabled={boolean('disabled', false)}
    arrow={boolean('arrow', false)}
    icon={text('icon', '')}
    type={text('type', 'button')}
    bds-loading={select('bds-loading', { None: null, Light: 'light', Dark: 'dark', })}
  >
    {text('text', 'Text button')}
  </bds-button>
);

export const disabedButton = () => <bds-button disabled>Text button</bds-button>;

export const sizeButtons = () => (
  <>
    <bds-button size="tall">Text button</bds-button>
    <br />
    <bds-button size="standard">Text button</bds-button>
    <br />
    <bds-button size="short">Text button</bds-button>
  </>
);

export const variantPrimaryButton = () => (
  <div style={containerStyle}>
    <div style={contentStyle}>
      <bds-typo variant="fs-20">Text Only</bds-typo>
      <bds-button disabled>Text button</bds-button>
      <br /> 
      <bds-button size="tall">Text button</bds-button>
      <br /> 
      <bds-button size="standard">Text button</bds-button>
      <br />
      <bds-button size="short">Text button</bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-20">Icon Left</bds-typo>
      <bds-button icon="file-new" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button icon="file-new" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button icon="file-new" size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button icon="file-new" size="short">
        Text button
      </bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-20">Arrow</bds-typo>
      <bds-button arrow disabled>
        Text button
      </bds-button>
      <br />
      <bds-button arrow size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button arrow size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button arrow size="short">
        Text button
      </bds-button>
    </div>
  </div>
);

export const variantSecondaryButton = () => (
  <div style={containerStyle}>
    <div style={contentStyle}>
      <bds-typo variant="fs-20">Text Only</bds-typo>
      <bds-button variant="secondary" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" size="short">
        Text button
      </bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-20">Icon Left</bds-typo>
      <bds-button variant="secondary" icon="file-new" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" icon="file-new" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" icon="file-new" size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" icon="file-new" size="short">
        Text button
      </bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-20">Arrow</bds-typo>
      <bds-button variant="secondary" arrow disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" arrow size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" arrow size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button variant="secondary" arrow size="short">
        Text button
      </bds-button>
    </div>
  </div>
);

export const variantGhostButton = () => (
  <div style={containerStyle}>
    <div style={contentStyle}>
      <bds-typo variant="fs-20">Text Only</bds-typo>
      <bds-button variant="ghost" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" size="short">
        Text button
      </bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-20">Icon Left</bds-typo>
      <bds-button variant="ghost" icon="file-new" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" icon="file-new" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" icon="file-new" size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" icon="file-new" size="short">
        Text button
      </bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-20">Arrow</bds-typo>
      <bds-button variant="ghost" arrow disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" arrow size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" arrow size="standard">
        Text button
      </bds-button>
      <br />
      <bds-button variant="ghost" arrow size="short">
        Text button
      </bds-button>
    </div>
  </div>
);

export const variantDashedButton = () => (
  <div style={containerStyle}>
    <div style={contentStyle}>
      <bds-typo variant="fs-24">Text Only</bds-typo>
      <bds-button variant="dashed" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed">Text button</bds-button>
      <br />
      <bds-button variant="dashed" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" size="short">
        Text button
      </bds-button>
    </div>
    <div style={contentStyle}>
      <bds-typo variant="fs-24">Icon Left</bds-typo>
      <bds-button variant="dashed" icon="file-new" disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" icon="file-new">
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" icon="file-new" size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" icon="file-new" size="short">
        Text button
      </bds-button>
    </div>

    <div style={contentStyle}>
      <bds-typo variant="fs-24">Arrow</bds-typo>
      <bds-button variant="dashed" arrow disabled>
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" arrow>
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" arrow size="tall">
        Text button
      </bds-button>
      <br />
      <bds-button variant="dashed" arrow size="short">
        Text button
      </bds-button>
    </div>
  </div>
);
