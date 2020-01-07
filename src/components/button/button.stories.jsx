import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
    title: 'Button',
    decorators: [withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};

export const defaultButton = () => (
    <>
        <bds-button variant={text('variant', 'primary')} size={text('size', 'standard')} disabled={boolean('disabled', false)}>
            {text('text', 'Text button')}
        </bds-button>
    </>
);

export const disabedButton = () => (<bds-button disabled>Text button</bds-button>);

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
    <>
        <bds-button disabled>Text button</bds-button>
        <br />
        <bds-button size="tall">Text button</bds-button>
        <br />
        <bds-button size="standard">Text button</bds-button>
        <br />
        <bds-button size="short">Text button</bds-button>
    </>
);

export const variantSecondButton = () => (
    <>
        <bds-button variant="second" disabled>Text button</bds-button>
        <br />
        <bds-button variant="second" size="tall">Text button</bds-button>
        <br />
        <bds-button variant="second" size="standard">Text button</bds-button>
        <br />
        <bds-button variant="second" size="short">Text button</bds-button>
    </>
);

export const variantGhostButton = () => (
    <>
        <bds-button variant="ghost" disabled>Text button</bds-button>
        <br />
        <bds-button variant="ghost" size="tall">Text button</bds-button>
        <br />
        <bds-button variant="ghost" size="standard">Text button</bds-button>
        <br />
        <bds-button variant="ghost" size="short">Text button</bds-button>
    </>
);

export const variantDashedButton = () => (
    <>
        <bds-button variant="dashed" disabled>Text button</bds-button>
        <br />
        <bds-button variant="dashed">Text button</bds-button>
        <br />
        <bds-button variant="dashed" size="tall">Text button</bds-button>
        <br />
        <bds-button variant="dashed" size="short">Text button</bds-button>
    </>
);