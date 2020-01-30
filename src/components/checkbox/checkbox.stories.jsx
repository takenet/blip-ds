import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
    title: 'Checkbox',
    decorators: [withKnobs],
    parameters: {
        notes: { markdown: readme },
    },
};

export const defaultCheckBox = () => (
    <>
        <bds-checkbox
            label={text('label', 'Select')}
            name={text('name', 'cb1')}
            disabled={boolean('disabled', false)}
            checked={boolean('checked', false)}
        >
        </bds-checkbox>
    </>
);

export const disabledCheckBox = () => (
    <>
        <bds-checkbox id="check1" label="Selected" checked disabled></bds-checkbox>
        <bds-checkbox id="check2" label="Deselected" disabled></bds-checkbox>
    </>
)

export const withoutLabelCheckBox = () => (
    <>
        <bds-checkbox id="check1" checked></bds-checkbox>
        <bds-checkbox id="check2"></bds-checkbox>
        <bds-checkbox id="check1" checked disabled></bds-checkbox>
        <bds-checkbox id="check2" disabled></bds-checkbox>
    </>
)