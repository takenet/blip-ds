import React from 'react';

import readme from './readme.md';

export default {
    title: 'Button',
    parameters: {
        notes: { markdown: readme },
    },
};

export const allButtons = () => (
    <>
        <bds-button></bds-button>
        <bds-button disabled></bds-button>
    </>
);

export const disabedButton = () => (<bds-button disabled></bds-button>);

export const sizeButtons = () => (
    <>
        <bds-button size="tall"></bds-button>
        <bds-button size="standard"></bds-button>
        <bds-button size="short"></bds-button>
    </>
);

export const variantPrimaryButton = () => (
    <>
        <bds-button></bds-button>
        <br />
        <bds-button disabled></bds-button>
        <br />
        <bds-button size="tall"></bds-button>
        <br />
        <bds-button size="standard"></bds-button>
        <br />
        <bds-button size="short"></bds-button>
    </>
);

export const variantSecondButton = () => (
    <>
        <bds-button variant="second"></bds-button>
        <br />
        <bds-button variant="second" disabled></bds-button>
        <br />
        <bds-button variant="second" size="tall"></bds-button>
        <br />
        <bds-button variant="second" size="standard"></bds-button>
        <br />
        <bds-button variant="second" size="short"></bds-button>
    </>
);